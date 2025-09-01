import SectionTitle from "./SectionTitle";
import { profile } from "@/app/data";

export default function Education() {
  return (
    <section className="section container" id="education">
      <SectionTitle eyebrow="Education" title="Education" />
      <div className="grid gap-6">
        {profile.education.map((e) => (
          <div key={e.school} className="card">
            <h3 className="font-semibold">{e.school}</h3>
            <p className="text-gray-600">{e.degree}</p>
            <p className="text-sm text-gray-500">{e.period}</p>
            {e.extras?.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                {e.extras.map((ex, i) => <li key={i}>{ex}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
