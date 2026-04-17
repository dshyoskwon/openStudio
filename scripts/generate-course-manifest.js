#!/usr/bin/env node
/**
 * Scans public/courses/ and generates a JSON manifest of all media files.
 * Run before `next build` so the app doesn't need fs at runtime.
 */
const fs = require("fs");
const path = require("path");

const PUBLIC = path.join(__dirname, "..", "public");
const COURSES_DIR = path.join(PUBLIC, "courses");
const OUT = path.join(__dirname, "..", "src", "data", "course-manifest.json");

const IMG_EXT = /\.(jpg|jpeg|png|gif|webp)$/i;
const VID_EXT = /\.(mp4|mov)$/i;

function safeReadDir(dir) {
  try { return fs.readdirSync(dir); } catch { return []; }
}

function isDir(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

const manifest = {};

// Scan each course
for (const courseId of safeReadDir(COURSES_DIR)) {
  const courseDir = path.join(COURSES_DIR, courseId);
  if (!isDir(courseDir)) continue;

  manifest[courseId] = {};

  // Scan each year
  for (const year of safeReadDir(courseDir)) {
    const yearDir = path.join(courseDir, year);
    if (!isDir(yearDir)) continue;

    const rootImages = safeReadDir(yearDir)
      .filter((f) => IMG_EXT.test(f))
      .sort()
      .map((f) => `/courses/${courseId}/${year}/${f}`);

    const rootVideos = safeReadDir(yearDir)
      .filter((f) => VID_EXT.test(f))
      .sort()
      .map((f) => `/courses/${courseId}/${year}/${f}`);

    // Scan project subfolders
    const projects = {};
    for (const folder of safeReadDir(yearDir)) {
      const folderPath = path.join(yearDir, folder);
      if (!isDir(folderPath) || folder === ".gitkeep") continue;

      const slides = safeReadDir(folderPath)
        .filter((f) => IMG_EXT.test(f))
        .sort()
        .map((f) => `/courses/${courseId}/${year}/${folder}/${f}`);

      const videos = safeReadDir(folderPath)
        .filter((f) => VID_EXT.test(f))
        .sort()
        .map((f) => `/courses/${courseId}/${year}/${folder}/${f}`);

      projects[folder] = { slides, videos };
    }

    manifest[courseId][year] = { images: rootImages, videos: rootVideos, projects };
  }
}

// Scan thumbnails
const thumbnails = {};
const THUMB_EXT = ["jpg", "jpeg", "png", "webp"];
for (const courseId of safeReadDir(COURSES_DIR)) {
  const courseDir = path.join(COURSES_DIR, courseId);
  if (!isDir(courseDir)) continue;
  for (const ext of THUMB_EXT) {
    const thumbPath = path.join(courseDir, `thumbnail.${ext}`);
    if (fs.existsSync(thumbPath)) {
      thumbnails[courseId] = `/courses/${courseId}/thumbnail.${ext}`;
      break;
    }
  }
}

const output = { courses: manifest, thumbnails };
fs.writeFileSync(OUT, JSON.stringify(output, null, 2));
console.log(`Course manifest written to ${OUT}`);
