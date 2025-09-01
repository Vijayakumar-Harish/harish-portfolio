import SectionTitle from "./SectionTitle";
import { profile } from "@/app/data";

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <SectionTitle eyebrow="Experience" title="Work History" />
      <div className="grid gap-6">
        {profile.experience.map((exp) => (
          <div key={exp.company} className="card">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold">{exp.role} — {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.location}</p>
              </div>
              <div className="text-sm text-gray-500">{exp.period}</div>
            </div>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
