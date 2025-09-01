import SectionTitle from "./SectionTitle";
import { projects } from "@/app/data";

function Badge({ children }) {
  return <span className="text-xs rounded-full bg-gray-100 border px-2 py-1">{children}</span>;
}

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionTitle eyebrow="Projects" title="Featured Work" subtitle="MERN & AI projects with production-style details" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="card flex flex-col">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-600">{p.tagline}</p>
              <p className="mt-3 text-gray-700">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
              <ul className="mt-3 space-y-1 list-disc pl-5 text-gray-700">
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
            <div className="mt-4 flex gap-3">
              <a href={p.links.demo} className="rounded-lg border px-3 py-1.5 text-sm">Live Demo</a>
              <a href={p.links.repo} className="rounded-lg bg-gray-900 text-white px-3 py-1.5 text-sm">Source</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
