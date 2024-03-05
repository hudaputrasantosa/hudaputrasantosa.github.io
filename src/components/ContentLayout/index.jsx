import Navbar from "../Nav";

const ContentLayout = ({ children }) => {
  return (
    <div className="min-h-screen  bg-gray-50 dark:bg-slate-900 dark:text-white">
      <Navbar />
      <section className="flex flex-col w-full h-fit justify-center">
        <div className="items-center lg:px-[25%] px-4 py-8">{children}</div>
      </section>
    </div>
  );
};

export default ContentLayout;
