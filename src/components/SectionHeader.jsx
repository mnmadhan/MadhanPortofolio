import "../styles/SectionUI.css";

/**
 * SectionHeader — label + title + divider used by every section.
 */
export default function SectionHeader({ label, title }) {
  return (
    <div className="section-center">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="divider" />
    </div>
  );
}
