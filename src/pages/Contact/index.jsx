import ContentLayout from "../../components/ContentLayout";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const contacts = [
  {
    icon: <MdOutlineMail size="24" />,
    name: "hudaputrasantosa@gmail.com",
    link: "mailto:hudaputrasantosa@gmail.com",
  },
  {
    icon: <FaLinkedin size="24" />,
    name: "Huda Putra Santosa",
    link: "https://www.linkedin.com/in/huda-putra-santosa/",
  },
  {
    icon: <FaGithub size="24" />,
    name: "@hudaputrasantosa",
    link: "https://github.com/hudaputrasantosa",
  },
  {
    icon: <FaInstagram size="24" />,
    name: "@hudaputrasantosa.dev",
    link: "https://www.instagram.com/hudaputrasantosa.dev/",
  },
  {
    icon: <FaFacebook size="24" />,
    name: "Huda Putra Santosa",
    link: "https://www.facebook.com/hudaputrasantosa/",
  },
];

const Contact = () => {
  return (
    <>
      <ContentLayout>
        <section className="flex flex-col gap-2 py-4">
          <h2 className="font-bold text-3xl">Contact</h2>
          <div className="justify-center text-center mt-8">
            <h4 className="text-2xl font-bold text-blue-500">Let's Connect</h4>
            <p className="my-4">
              Connection Is the Key to Personal and Career Success. Sometimes,
              Reaching Out and Taking Someone's Hand Is the Beginning of A
              Journey
            </p>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {contacts.map((contact, idx) => (
                <a href={contact.link} key={idx} target="_blank">
                  <div className="flex items-center gap-2 dark:text-slate-800 bg-blue-200 py-2 px-3 rounded-lg">
                    {contact.icon}
                    <p className="lg:text-sm text-xs font-semibold">
                      {contact.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ContentLayout>
    </>
  );
};

export default Contact;
