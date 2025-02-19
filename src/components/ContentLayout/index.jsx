import Footer from "../Footer";
import Navbar from "../Nav";
import Scrollbar from "react-smooth-scrollbar";

const ContentLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col  bg-white dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Scrollbar
        damping={0.1}
        thumbMinSize={1}
        alwaysShowTracks={false}
        style={{ height: "100vh" }}
      >
        <section className="flex flex-col w-full h-fit justify-center">
          <div className="items-center lg:px-[25%] px-6 py-8">{children}</div>
        </section>
      </Scrollbar>
      <Footer />
    </div>
  );
};

export default ContentLayout;
