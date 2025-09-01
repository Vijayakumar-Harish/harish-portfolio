import SectionTitle from "./SectionTitle";
import { profile } from "@/app/data";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="section container" id="contact">
      <SectionTitle eyebrow="Contact" title="Let's Talk" />
      <div className="card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-gray-700">
            <p>Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p>Phone: <a className="underline" href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-lg bg-gray-900 text-white px-3 py-2 inline-flex items-center gap-2"><Mail size={18}/> Email Me</a>
            <a href={`tel:${profile.phone}`} className="rounded-lg border px-3 py-2 inline-flex items-center gap-2"><Phone size={18}/> Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
