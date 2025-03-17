// ProjectsPreview.jsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from '@/contents/projects';
import { Github, ExternalLink} from 'lucide-react';
import Image from 'next/image';
export default function ProjectsPreview() {
  // Show only the first 3 projects
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-foreground bg-green-300 dark:bg-green-900 px-2 py-0.5 rounded">Featured Projects</h2>
          <Button variant="ghost" asChild className="text-sm text-muted-foreground hover:bg-transparent hover:text-primary hover:underline font-medium">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {previewProjects.map((project) => (
            <article
              key={project.title}
              className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-border"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium flex items-center gap-1.5"
                    >
                      <Image src={tech.icon} alt={tech.name} className="w-4 h-4" width={16} height={16} />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <div className="flex gap-2">
                    {project.sourceCode && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1.5" />
                          Source Code
                        </a>
                      </Button>
                    )}
                    {project.deployedUrl && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}