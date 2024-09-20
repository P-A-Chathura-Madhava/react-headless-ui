import Details from "../components/organisms/Details";
import Projects from "../components/molecules/Projects";
import Contact from "../layouts/Contact";

function Home() {
  return (
    <div className="px-40 pt-10 mx-auto contatiner">
      <div className="flex justify-between gap-10">
        <Details />
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
