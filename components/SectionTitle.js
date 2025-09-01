export default function SectionTitle({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="mb-8">
      <div className="text-xs uppercase tracking-wide text-gray-500">{eyebrow}</div>
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );
}
