import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContentLayout from "../../components/ContentLayout";
import TabLayout from "../../components/TabLayout";
import { Tabs } from "flowbite-react";
import { webProjects, apiProjects } from "../../response/projects";
import { HiLink, HiCode } from "react-icons/hi";
import CardComponent from "../../components/Card";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <section data-aos="fade-up" className="flex flex-col gap-2 py-4">
            <h2 className="font-bold text-3xl">Projects</h2>
          </section>
          <TabLayout>
            <Tabs.Item active title="Web">
              <div data-aos="fade-up" className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-y-8  gap-x-3 text-base font-medium">
                {webProjects.map((project, id) => (
                  <CardComponent
                    key={id}
                    photoCard={project.image}
                    titleCard={project.title}
                    descriptionCard={project.description}
                    linkRepository={
                      <a href={project.repo} target="_blank">
                        <HiCode className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg" />
                      </a>
                    }
                    linkDeployment={
                      project.link ? (
                        <a href={project.link} target="_blank">
                          <HiLink className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg cursor-pointer" />
                        </a>
                      ) : (
                        ""
                      )
                    }
                    stacks={project.stacks.map((stack, idx) => (
                      <img
                        key={idx}
                        src={stack}
                        className="w-8 bg-slate-200 p-1 rounded-lg"
                      />
                    ))}
                  />
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="API">
              <div data-aos="fade-up" className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-y-8  gap-x-3 text-base font-medium">
                {apiProjects.map((project) => (
                  <CardComponent
                    key={project.id}
                    // photoCard={project.image}
                    titleCard={project.title}
                    descriptionCard={project.description}
                    linkRepository={
                      <a href={project.repo} target="_blank">
                        <HiCode className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg" />
                      </a>
                    }
                    stacks={project.stacks.map((stack, idx) => (
                      <img
                        key={idx}
                        src={stack}
                        alt={stack}
                        className="w-8 bg-slate-100 p-1 rounded-lg"
                      />
                    ))}
                  />
                ))}
              </div>
            </Tabs.Item>
          </TabLayout>
        </div>
      </ContentLayout>
    </>
  );
};

export default Projects;
