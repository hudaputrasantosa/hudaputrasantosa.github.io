import Footer from "../Footer";
import Navbar from "../Nav";

const ContentLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col  bg-white dark:bg-slate-900 dark:text-white">
      <Navbar />
      <section className="flex flex-col w-full h-fit justify-center">
        <div className="items-center lg:px-[25%] px-6 py-8">{children}</div>
      </section>
      <Footer />
    </div>
  );
};

export default ContentLayout;
