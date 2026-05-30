import SectionHeader from "../components/SectionHeader.jsx";

export default function CVPage() {
  const cvUrl = "/cv_may26_latest.pdf";

  return (
    <section id="cv" className="content-section page-section">
      <SectionHeader
        title="CV"
        description={
          <>
            You can also{" "}
            <a
              href={cvUrl}
              download
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
                textUnderlineOffset: "3px",
              }}
            >
              download the PDF
            </a>
            .
          </>
        }
      />
      <div className="cv-viewer-wrap">
        <iframe
          src={cvUrl}
          title="Minhwa Lee — CV"
          className="cv-iframe"
          aria-label="CV PDF viewer"
        />
      </div>
    </section>
  );
}
