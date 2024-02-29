import CardComponent from "../../components/Card";
import ContentLayout from "../../components/ContentLayout";
import Navbar from "../../components/Navbar";
import TabLayout from "../../components/TabLayout";
import { Tabs } from "flowbite-react";
import dataProjects from "../../store/projects";

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
                {dataProjects.map((project) => (
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

            <Tabs.Item title="API">
              <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/express.svg"
                    alt="express-logo"
                    loading="lazy"
                  />
                  <h6>Express</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/nest.svg"
                    alt="nest-logo"
                    loading="lazy"
                  />
                  <h6>NestJS</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/laravel.svg"
                    alt="laravel-logo"
                    loading="lazy"
                  />
                  <h6>Laravel</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/codeigniter.svg"
                    alt="codeigniter-logo"
                    loading="lazy"
                  />

                  <h6>Codeigniter</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/gingonic.svg"
                    alt="gingonic-logo"
                    loading="lazy"
                  />

                  <h6>Gin Gonic</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img src="./src/assets/icons/react.svg" alt="react-logo" />
                  <h6>ReactJS</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/vue.svg"
                    alt="vue-logo"
                    loading="lazy"
                  />
                  <h6>VueJS</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/alpine.svg"
                    alt="alpine-logo"
                    loading="lazy"
                  />

                  <h6>AlpineJS</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/tailwind.svg"
                    alt="tailwind-logo"
                    loading="lazy"
                  />
                  <h6>TailwindCSS</h6>
                </div>
                <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                  <img
                    src="./src/assets/icons/flowbite.svg"
                    alt="flowbite-logo"
                    loading="lazy"
                  />
                  <h6>Flowbite</h6>
                </div>
              </div>
            </Tabs.Item>
          </TabLayout>
        </div>
      </ContentLayout>
    </>
  );
};

export default Projects;
