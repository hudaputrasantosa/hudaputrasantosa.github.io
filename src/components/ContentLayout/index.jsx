const ContentLayout = ({ children }) => {
  return (
    <section className="w-full h-fit justify-center">
      <div className="items-center lg:px-[25%] px-4 py-8">{children}</div>
    </section>
  );
};

export default ContentLayout;
