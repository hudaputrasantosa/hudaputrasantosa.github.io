import ContentLayout from "../../components/ContentLayout";
import Navbar from "../../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">Halaman tidak ditemukan</h2>
        </div>
      </ContentLayout>
    </>
  );
};

export default NotFound;
