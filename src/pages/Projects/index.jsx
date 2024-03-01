import CardComponent from "../../components/Card";
import ContentLayout from "../../components/ContentLayout";
import Navbar from "../../components/Navbar";
import TabLayout from "../../components/TabLayout";
import { Tabs } from "flowbite-react";
import { webProjects, apiProjects } from "../../response/projects";
import { HiLink, HiCode } from "react-icons/hi";

const Projects = () => {
  return (
    <>
      <Navbar />
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <section className="flex flex-col gap-2 py-4">
            <h2 className="font-bold text-3xl">Projects</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nulla beatae quisquam libero accusantium quibusdam, veniam nostrum
              aperiam ipsam perferendis sint laborum odit? Eos tenetur iste
              repudiandae repellat repellendus ea.
            </p>
          </section>
          <TabLayout>
            <Tabs.Item active title="Web">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-y-8  gap-x-3 text-base font-medium">
                {webProjects.map((project, id) => (
                  <>
                    <CardComponent
                      key={id}
                      photoCard={project.image}
                      titleCard={project.title}
                      descriptionCard={project.description}
                      linkRepository={
                        <a href={project.repo} target="_blank">
                          <HiCode className="w-7 h-7 p-1 bg-slate-200 rounded-lg" />
                        </a>
                      }
                      linkDeployment={
                        <a href={project.link} target="_blank">
                          <HiLink className="w-7 h-7 p-1 bg-slate-200 rounded-lg cursor-pointer" />
                        </a>
                      }
                      stacks={project.stacks.map((stack, idx) => (
                        <img
                          key={idx}
                          src={stack}
                          className="w-8 bg-slate-200 p-1 rounded-lg"
                        />
                      ))}
                    />
                  </>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="API">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-y-8  gap-x-3 text-base font-medium">
                {apiProjects.map((project) => (
                  <>
                    <CardComponent
                      photoCard={project.image}
                      titleCard={project.title}
                      descriptionCard={project.description}
                      linkRepository={project.repo}
                      linkDeployment={project.link}
                      stacks={project.stacks.map((stack, idx) => (
                        <img
                          key={idx}
                          src={stack}
                          className="w-8 bg-slate-100 p-1 rounded-lg"
                        />
                      ))}
                    />
                  </>
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
