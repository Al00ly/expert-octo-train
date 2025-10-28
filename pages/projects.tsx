import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'

const ProjectsPage = () => {
  return (
    <div dir="rtl" className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">مشاريعي</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-2xl font-bold mb-2 text-blue-300">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;