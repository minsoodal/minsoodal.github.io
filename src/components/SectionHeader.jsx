export default function SectionHeader({ title, eyebrow, description, right }) {
  return (
    <div className="section-header-block">
      <div className="section-header-row">
        <div>
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 className="section-header">{title}</h2>
        </div>
        {right}
      </div>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}
