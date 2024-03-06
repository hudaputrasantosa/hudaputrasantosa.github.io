import ContentLayout from "../../components/ContentLayout";
import TabLayout from "../../components/TabLayout";
import { Tabs } from "flowbite-react";
import {
  dbmsSkill,
  frameworkSkill,
  languageSkill,
  toolsSkill,
} from "../../response/skills";

const Skills = () => {
  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <section className="flex flex-col gap-4 py-4">
            <h2 className="font-bold text-3xl">Skills</h2>
            {/* <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nulla beatae quisquam libero accusantium quibusdam, veniam nostrum
              aperiam ipsam perferendis sint laborum odit? Eos tenetur iste
              repudiandae repellat repellendus ea.
            </p> */}
            <TabLayout>
              <Tabs.Item active title="Language">
                <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                  {languageSkill.map((language, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col lg:gap-2 gap-1 border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                      <img
                        src={language.icon}
                        alt={`${language.title}-logo`}
                        loading="lazy"
                      />
                      <h6 className="text-sm font-medium">{language.title}</h6>
                    </div>
                  ))}
                </div>
              </Tabs.Item>
              <Tabs.Item title="Framework & Library">
                <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                  {frameworkSkill.map((framework, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col lg:gap-2 gap-1 border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                      <img
                        src={framework.icon}
                        alt={`${framework.title}-logo`}
                        loading="lazy"
                      />
                      <h6 className="text-sm font-medium">{framework.title}</h6>
                    </div>
                  ))}
                </div>
              </Tabs.Item>

              <Tabs.Item title="Tools">
                <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                  {toolsSkill.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col lg:gap-2 gap-1 border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                      <img
                        src={tool.icon}
                        alt={`${tool.title}-logo`}
                        loading="lazy"
                      />
                      <h6 className="text-sm font-medium">{tool.title}</h6>
                    </div>
                  ))}
                </div>
              </Tabs.Item>

              <Tabs.Item title="DBMS, ORM & ODM">
                <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                  {dbmsSkill.map((dbms, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col lg:gap-2 gap-1 border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                      <img
                        src={dbms.icon}
                        alt={`${dbms.title}-logo`}
                        loading="lazy"
                      />
                      <h6 className="text-sm font-medium">{dbms.title}</h6>
                    </div>
                  ))}
                </div>
              </Tabs.Item>
            </TabLayout>
          </section>
        </div>
      </ContentLayout>
    </>
  );
};

export default Skills;
