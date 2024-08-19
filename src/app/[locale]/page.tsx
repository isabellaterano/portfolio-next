import Contact from "./_components/contact";
import Hero from "./_components/hero";
import Project from "./_components/projects";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="mx-2 lg:mx-20">
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
