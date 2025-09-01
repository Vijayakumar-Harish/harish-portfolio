import SectionTitle from "./SectionTitle";
import { profile } from "@/app/data";

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionTitle eyebrow="Skills" title="What I Use" />
      <div className="card">
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <span key={s} className="text-sm rounded-full bg-gray-100 border px-3 py-1">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
