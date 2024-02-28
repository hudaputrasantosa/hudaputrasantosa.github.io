import ContentLayout from "../../components/ContentLayout";
import Navbar from "../../components/Navbar";
import Tabs from "../../components/Tabs";

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
            <Tabs />
          </section>
        </div>
      </ContentLayout>{" "}
    </>
  );
};

export default Skills;
