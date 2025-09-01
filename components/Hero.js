import { profile } from "@/app/data";
import { ArrowDownToLine } from "lucide-react";

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-600 bg-white">
            Open to opportunities
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            {profile.name}
          </h1>
          <p className="text-lg text-gray-600">{profile.title}</p>
          <p className="text-gray-600">{profile.summary}</p>
          <div className="flex gap-3">
            <a href="#projects" className="rounded-xl bg-gray-900 text-white px-4 py-2">View Projects</a>
            <a href={profile.links.resume} className="rounded-xl border px-4 py-2 inline-flex items-center gap-2">
              <ArrowDownToLine size={18}/> Resume
            </a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="size-48 md:size-64 rounded-full bg-gray-200 grid place-content-center text-gray-500">
            {/* Placeholder avatar */}
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
}
