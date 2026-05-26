"use client";

type Component = {
  name: string;
  role: string;
};

type ScenarioStep = {
  step: string;
  label: string;
};

type Project = {
  id: string;
  title: string;
  student: string;
  tagline: string;
  intro: string;
  components?: Component[];
  scenario?: ScenarioStep[];
  designNote?: string;
  code?: string;
  videoEmbedUrl?: string;
  videoSrc?: string;
};

const projects: Project[] = [
  {
    id: "Best",
    title: "Automatic Gas Valve Control System",
    student: "",
    tagline:
      "An auto-locking gas valve system that removes the anxiety of \"did I turn it off?\"",
    intro:
      "Shortly after leaving home, many people start worrying about whether they properly shut off the gas valve — whether they are out for a short errand or away for days. Without a clear memory of closing it, the rest of the day can be overshadowed by worry. Gas-leak accidents (explosions and fires) from forgotten valves happen every year, which makes checking and confirming the valve's locked state essential for safety.",
    components: [
      {
        name: "DHT11 Temperature & Humidity Sensor",
        role:
          "Monitors the temperature around the stove to detect when cooking has started (at 35°C or higher). Once the stove cools back down to 25°C, the system treats cooking as finished. A 3–5 minute waiting window accounts for residual heat or short re-ignition before confirming completion.",
      },
      {
        name: "SG90 Servo Motor",
        role:
          "Once cooking is confirmed to be over, the servo motor rotates 90° to automatically lock the gas valve. Its precise angle control makes it ideal for opening and closing the valve reliably.",
      },
      {
        name: "Tact Switch",
        role:
          "When the user presses the button, the servo motor rotates back 90° to unlock the valve so the user can cook again.",
      },
      {
        name: "Red & Green LED",
        role:
          "Indicates device state at a glance. The red LED is on by default (valve locked). The green LED turns on while the valve is open, and blinks during the standby/waiting period so the user can tell the device is on the verge of relocking.",
      },
    ],
    scenario: [
      { step: "1", label: "Press the button to open the gas valve" },
      { step: "2", label: "Ignite the stove and start cooking" },
      { step: "3", label: "Cooking in progress" },
      { step: "4", label: "Sensor detects the threshold temperature" },
      { step: "5", label: "Stove cools down, device enters standby" },
      { step: "6", label: "Valve locks automatically if temperature stays low" },
    ],
    videoSrc: "/courses/interaction-design/2024/ProductDesign/Best/best.mp4",
  },
  {
    id: "HyunDonghee-BinocularLamp",
    title: "Binocular Lamp",
    student: "",
    tagline: "A tap-to-aim desk lamp that points the light exactly where you need it.",
    intro:
      "You have probably had a desk lamp whose light reflects off the page and straight into your eyes, forcing you to awkwardly tilt the lamp or the book just to read one line. Instead of illuminating the book, the lamp acts like a mirror. What if a gentle tap on the desk was enough to redirect the light to that exact spot?",
    components: [
      {
        name: "Capacitive Sensor",
        role:
          "Two touch-sensitive zones embedded in the desk detect the user's fingertip. Ultrasonic sensors can misread nearby objects and physical buttons break the flow — a capacitive sensor keeps the interaction natural and intentional.",
      },
      {
        name: "Servo Motor",
        role:
          "Maps each touch zone to a preset angle and rotates the lamp head smoothly toward the tapped area, so the beam lands where the user pointed.",
      },
    ],
    designNote:
      "The way the lamp \"looks\" wherever the user points felt reminiscent of a pair of binoculars, so the final form uses two open cylinders that meet at one end and flare slightly at the other — a binocular-inspired silhouette.",
    videoEmbedUrl: "https://www.youtube.com/embed/I4SWRN-4WwQ",
  },
  {
    id: "LeeYoungJi-ClappingLight",
    title: "Clap-Activated Light System Using Arduino",
    student: "",
    tagline: "Hands-free lighting you can toggle with a clap.",
    intro:
      "An interactive lighting system that uses a sound sensor, an LED, and an Arduino board so the user can clap to toggle the light on and off. The project explores Arduino programming for interactive systems, with a focus on hands-free control for convenience and accessibility.",
    components: [
      {
        name: "Arduino Uno",
        role:
          "Main microcontroller — reads the sound sensor and drives the LED.",
      },
      {
        name: "Sound Sensor",
        role:
          "Detects ambient sound. When the level crosses a threshold (42 in this project), the sensor signals a clap to the Arduino.",
      },
      {
        name: "LED",
        role:
          "Visual output — toggles between on and off in response to each clap.",
      },
      {
        name: "Resistor (330Ω)",
        role: "Current-limiting resistor protecting the LED.",
      },
    ],
    designNote:
      "Wiring: sensor VCC/GND → Arduino 5V/GND, sensor A0 → Arduino analog A0, LED → digital pin 6 in series with a 330Ω resistor. The threshold 42 was chosen experimentally to reliably catch claps without triggering on background noise, and a delay(100) debounce prevents a single clap from being read multiple times.",
    code: `#define SS A0      // Sound sensor connected to A0
#define LED 6      // LED connected to pin 6
int SV = 0;        // sound sensor value
int light = 0;     // LED brightness (0 or 255)

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  SV = analogRead(SS);
  Serial.println(SV);

  if (SV > 42) {              // clap detected
    light = (light == 0) ? 255 : 0;
    analogWrite(LED, light);
    delay(100);               // debounce
  }
}`,
    videoSrc:
      "/courses/interaction-design/2024/ProductDesign/LeeYoungJi-ClappingLight/clapping-light.mp4",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-gray-200 rounded-sm overflow-hidden bg-white">
      {/* Header */}
      <header className="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
        {project.student && (
          <p className="text-xs text-gray-500 mt-1">{project.student}</p>
        )}
        <p className="text-sm text-gray-700 mt-2 italic">{project.tagline}</p>
      </header>

      <div className="px-6 py-5 space-y-6">
        {/* Intro */}
        <section>
          <p className="text-sm text-gray-800 leading-relaxed">
            {project.intro}
          </p>
        </section>

        {/* Components */}
        {project.components && project.components.length > 0 && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Components
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.components.map((c) => (
                <div
                  key={c.name}
                  className="border border-gray-100 rounded-sm p-3 bg-gray-50/50"
                >
                  <div className="text-xs font-semibold">{c.name}</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {c.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Scenario */}
        {project.scenario && project.scenario.length > 0 && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              User Scenario
            </h4>
            <ol className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {project.scenario.map((s) => (
                <li
                  key={s.step}
                  className="flex items-start gap-2 text-xs text-gray-700 border border-gray-100 rounded-sm px-3 py-2"
                >
                  <span className="text-gray-400 font-mono shrink-0">
                    #{s.step}
                  </span>
                  <span>{s.label}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Design note */}
        {project.designNote && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Design Note
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              {project.designNote}
            </p>
          </section>
        )}

        {/* Code */}
        {project.code && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Arduino Code
            </h4>
            <pre className="text-[11px] bg-gray-900 text-gray-100 rounded-sm p-3 overflow-x-auto leading-relaxed">
              <code>{project.code}</code>
            </pre>
          </section>
        )}

        {/* Video embed (YouTube) */}
        {project.videoEmbedUrl && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Prototype Video
            </h4>
            <div className="aspect-video rounded-sm overflow-hidden bg-black">
              <iframe
                src={project.videoEmbedUrl}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </section>
        )}

        {/* Local video */}
        {project.videoSrc && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Prototype Video
            </h4>
            <div className="aspect-video rounded-sm overflow-hidden bg-black">
              <video
                src={project.videoSrc}
                controls
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full"
                preload="metadata"
              />
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export default function ProductDesign2024() {
  return (
    <div className="grid gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
