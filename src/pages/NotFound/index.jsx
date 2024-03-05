import ContentLayout from "../../components/ContentLayout";

const NotFound = () => {
  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">Halaman tidak ditemukan</h2>
        </div>
      </ContentLayout>
    </>
  );
};

export default NotFound;
