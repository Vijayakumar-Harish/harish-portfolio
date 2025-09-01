import SectionTitle from "./SectionTitle";
import { profile } from "@/app/data";

export default function About() {
  return (
    <section className="section container" id="about">
      <SectionTitle eyebrow="About" title="Hello! I'm Harish." />
      <p className="text-gray-700 leading-relaxed">
        {profile.summary}
      </p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-700">{profile.location}</p>
          <p className="text-gray-700">{profile.email}</p>
          <p className="text-gray-700">{profile.phone}</p>
        </div>
        <div className="card">
          <h4 className="font-semibold mb-2">Links</h4>
          <div className="flex gap-3 text-sm text-gray-700">
            <a className="underline" href={profile.links.linkedin} target="_blank">LinkedIn</a>
            <a className="underline" href={profile.links.github} target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
