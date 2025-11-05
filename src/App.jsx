import Header from "./components/Header";
import Hero3D from "./components/Hero3D";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero3D />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
