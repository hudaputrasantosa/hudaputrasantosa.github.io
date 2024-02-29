import ContentLayout from "../../components/ContentLayout";
import Navbar from "../../components/Navbar";
import TabLayout from "../../components/TabLayout";
import { Tabs } from "flowbite-react";

const Skills = () => {
  return (
    <>
      <Navbar />
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <section className="flex flex-col gap-4 py-4">
            <h2 className="font-bold text-3xl">Skills</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nulla beatae quisquam libero accusantium quibusdam, veniam nostrum
              aperiam ipsam perferendis sint laborum odit? Eos tenetur iste
              repudiandae repellat repellendus ea.
            </p>
            <TabLayout>
              <Tabs.Item active title="Language">
                <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img src="./src/assets/icons/html.svg" alt="html-logo" />
                    <h6>HTML</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/css.svg"
                      alt="css-logo"
                      loading="lazy"
                    />
                    <h6>CSS</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/Javascript.svg"
                      alt="javascript-logo"
                      loading="lazy"
                    />
                    <h6>Javascript</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/typescript.svg"
                      alt="typescript-logo"
                      loading="lazy"
                    />

                    <h6>Typescript</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/nodejs.svg"
                      alt="nodejs-logo"
                      loading="lazy"
                    />
                    <h6>NodeJS</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img src="./src/assets/icons/php.svg" alt="php-logo" />
                    <h6>PHP</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/golang.svg"
                      alt="golang-logo"
                    />
                    <h6>Golang</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img src="./src/assets/icons/java.svg" alt="java-logo" />
                    <h6>Java</h6>
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Framework & Library">
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

              <Tabs.Item title="Tools">
                <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/git.svg"
                      alt="git-logo"
                      loading="lazy"
                    />
                    <h6>Git</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/postman.svg"
                      alt="postman-logo"
                      loading="lazy"
                    />
                    <h6>Postman</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/swagger.svg"
                      alt="swagger-logo"
                      loading="lazy"
                    />
                    <h6>Swagger</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/jest.svg"
                      alt="jest-logo"
                      loading="lazy"
                    />
                    <h6>Jest</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/redis.svg"
                      alt="redis-logo"
                      loading="lazy"
                    />
                    <h6>Redis</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/kafka.svg"
                      alt="kafka-logo"
                      loading="lazy"
                    />
                    <h6>Kafka</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/docker.svg"
                      alt="docker-logo"
                      loading="lazy"
                    />
                    <h6>Docker</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/gcp.svg"
                      alt="gcp-logo"
                      loading="lazy"
                    />

                    <h6>GCP</h6>
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="DBMS, ORM & ODM">
                <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-3 text-base font-medium">
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/mysql.svg"
                      alt="mysql-logo"
                      loading="lazy"
                    />
                    <h6>MySQL</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/postgresql.svg"
                      alt="postgresql-logo"
                      loading="lazy"
                    />
                    <h6>PostgreSQL</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/mongodb.svg"
                      alt="mongodb-logo"
                      loading="lazy"
                    />
                    <h6>MongoDB</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/eloquent.svg"
                      alt="eloquent-logo"
                      loading="lazy"
                    />

                    <h6>Eloquent</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/sequelize.svg"
                      alt="sequelize-logo"
                      loading="lazy"
                    />

                    <h6>Sequelize</h6>
                  </div>
                  <div className="flex flex-col border border-gray-300 px-2 py-3 rounded-lg items-center justify-center text-center">
                    <img
                      src="./src/assets/icons/prisma.svg"
                      alt="prisma-logo"
                    />
                    <h6>Prisma</h6>
                  </div>
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
