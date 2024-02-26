import ContentLayout from "../../components/ContentLayout";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContentLayout>
        <div className="flex flex-col gap-3 border">
          <h2 className="font-bold text-xl">Contact</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            nulla beatae quisquam libero accusantium quibusdam, veniam nostrum
            aperiam ipsam perferendis sint laborum odit? Eos tenetur iste
            repudiandae repellat repellendus ea.
          </p>
        </div>
      </ContentLayout>{" "}
    </>
  );
};

export default Contact;
