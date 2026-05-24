import BioCard from "../components/BioCard.jsx";
import NewsSection from "../components/NewsSection.jsx";

export default function HomePage({ setActivePage }) {
  return (
    <>
      <BioCard setActivePage={setActivePage} />
      <NewsSection />
    </>
  );
}
