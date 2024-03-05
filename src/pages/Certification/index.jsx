import ContentLayout from "../../components/ContentLayout";
import certificates from "../../response/certificates";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Certification = () => {
  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <section className="flex flex-col gap-4 py-4">
            <h2 className="font-bold text-3xl">Certification</h2>
          </section>

          <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4  gap-4 text-base font-medium">
            {certificates.map((certificate, id) => (
              <>
                <div key={id}>
                  <Zoom>
                    <img
                      src={certificate.image}
                      alt={`${certificate.title}-image`}
                      className="rounded-lg w-full h-60 object-cover border-slate-300 border-2"
                      loading="lazy"
                      onContextMenu={(e) => {
                        e.preventDefault;
                      }}
                    />
                  </Zoom>
                </div>
              </>
            ))}
          </section>
        </div>
      </ContentLayout>{" "}
    </>
  );
};

export default Certification;
