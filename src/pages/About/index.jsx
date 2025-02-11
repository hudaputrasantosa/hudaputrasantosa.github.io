import ContentLayout from "../../components/ContentLayout";
import TimelineSection from "../../components/Timeline";
import { Timeline } from "flowbite-react";
import { HiBriefcase, HiAcademicCap, HiPuzzle } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import {
  educationExperience,
  trainingExperience,
  workExperience,
} from "../../response/about";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../../config/firebase";

const About = () => {
  const [visitor, setVisitor] = useState();
  useEffect(() => {
    const docRef = doc(db, "portofolio", "visitor");
    getDoc(docRef)
      .then((item) => {
        setVisitor(item.data().counter);
        updateDoc(docRef, {
          counter: item.data().counter + 1,
        });
      })
      .catch((err) => {
        alert("failed increment visitor counter : ", err);
      });
  }, []);

  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-1 text-[13px] items-center justify-center border border-gray-200 rounded-full bg-gray-50 p-2 w-[148px]">
            <FaEye className="w-4 h-4" />
            <p className="font-bold">{visitor}</p>
            <p className="font-normal">Times Seen</p>
          </div>
          <section className="flex flex-col gap-4 py-4">
            <div className="flex flex-col items-center text-center gap-2 mb-4">
              <img
                src="https://res.cloudinary.com/daxz4cuqx/image/upload/v1709810036/assets/images/profiles/huda-putra-santosa_bxzjrh.jpg"
                className="rounded-full w-40 border-4 border-gray-100 "
                loading="lazy"
              />
              <div className="flex items-center gap-2">
                <h4 className="lg:text-3xl text-2xl font-bold">
                  Huda Putra Santosa
                </h4>
                <img
                  src="https://res.cloudinary.com/daxz4cuqx/image/upload/v1711888855/assets/icons/checklist_gwfcub.png"
                  alt="verified"
                  className="w-6 h-6"
                />
              </div>
              <p className="lg:text-sm text-xs font-medium">
                Backend Engineer | Software Engineer | Cloud Engineer
              </p>
            </div>
            <h2 className="font-bold lg:text-3xl text-2xl">About</h2>
            <p className="text-justify lg:text-sm text-[13px] antialiased leading-relaxed tracking-wider">
              Graduated from Institut Teknologi Telkom Purwokerto with a major
              in S1 Software Engineering in 2020-2024. Has completed the college
              time in 3.5 years with a GPA of 3.93. Have an internship
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
