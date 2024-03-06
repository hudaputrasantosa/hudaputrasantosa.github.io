import ContentLayout from "../../components/ContentLayout";
import TimelineSection from "../../components/Timeline";
import { Timeline } from "flowbite-react";
import { HiBriefcase, HiAcademicCap, HiPuzzle } from "react-icons/hi";
import {
  educationExperience,
  trainingExperience,
  workExperience,
} from "../../response/about";

const About = () => {
  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3 ">
          <section className="flex flex-col gap-4 py-4">
            <div className="flex flex-col items-center text-center gap-2 mb-4">
              <img
                src="https://raw.githubusercontent.com/hudaputrasantosa/hudaputrasantosa.github.io/main/src/assets/huda-putra-santosa.png"
                className="rounded-full w-40 border-4 border-gray-100 "
              />
              <h4 className="lg:text-3xl text-2xl font-bold">
                Huda Putra Santosa
              </h4>
              <p className="lg:text-sm text-xs font-medium">
                Software Engineer | Fullstack Developer | Cloud Engineer
              </p>
            </div>
            <h2 className="font-bold lg:text-3xl text-2xl">About</h2>
            <p className="text-justify text-sm antialiased ">
              Graduated from Institut Teknologi Telkom Purwokerto with a major
              in S1 Software Engineering in 2020-2024. Has completed the college
              time in 3.5 years with a GPA of 3.92. Have an internship
              experience at PT Telkom Indonesia for 6 months with the Backend
              Developer position in charge of creating algorithms and providing
              REST API services and PT Sinergi Talenta Group for 3 months with
              the Frontend Developer position in charge of converting visual
              designs into html, css and javascript codes and making website
              displays interactive. <br /> I have a strong understanding of
              software development through the Software Development Lifecycle
              (SDLC) with the stages of planning, analysis, design, development,
              testing, and system maintenance, to achieve good software quality
              and meet user needs.
            </p>
          </section>

          <section className="flex flex-col gap-4 pt-4 ">
            <h2 className="font-bold lg:text-3xl text-2xl">Work Experience</h2>
            <div className="ml-3">
              <Timeline>
                {workExperience.map((work, idx) => (
                  <TimelineSection
                    key={idx}
                    iconTimeline={HiBriefcase}
                    titleText={work.institution}
                    subTitleText={work.position}
                    dateText={work.date}
                    descriptionText={work.description}
                  />
                ))}
              </Timeline>
            </div>
          </section>

          <section className="flex flex-col gap-4 pt-4 ">
            <h2 className="font-bold lg:text-3xl text-2xl">
              Training & Organization
            </h2>
            <div className="ml-3">
              <Timeline>
                {trainingExperience.map((training, idx) => (
                  <TimelineSection
                    key={idx}
                    iconTimeline={HiPuzzle}
                    titleText={training.institution}
                    subTitleText={training.position}
                    dateText={training.date}
                    descriptionText={training.description}
                  />
                ))}
              </Timeline>
            </div>
          </section>

          <section className="flex flex-col gap-4 pt-4">
            <h2 className="font-bold lg:text-3xl text-2xl">Education</h2>
            <div className="ml-3">
              <Timeline>
                {educationExperience.map((education, idx) => (
                  <TimelineSection
                    key={idx}
                    iconTimeline={HiAcademicCap}
                    titleText={education.institution}
                    subTitleText={education.position}
                    dateText={education.date}
                    descriptionText={education.description}
                  />
                ))}
              </Timeline>
            </div>
          </section>
        </div>
      </ContentLayout>
    </>
  );
};

export default About;
