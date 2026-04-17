/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
  },
  outputFileTracingExcludes: {
    "/courses/[id]": ["./public/courses/**/*"],
    "/courses": ["./public/courses/**/*"],
    "*": ["./public/courses/**/*"],
  },
};

module.exports = nextConfig;
