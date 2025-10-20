import CardComponent from "../../components/Card";
import ContentLayout from "../../components/ContentLayout";
import { Button } from "flowbite-react";
import useFetch from "./hook/useFetch";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaTags, FaTools } from "react-icons/fa";

const Blogs = () => {
  const { data, error, loading } = useFetch();

  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <section className="flex flex-col gap-2 py-4">
            <h2 className="font-bold text-3xl">Blogs</h2>
          </section>

          {error ? (
            <section className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaTools className="w-12 h-12 text-gray-400" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-gray-600">
                    Data Integrasi sedang bermasalah!
                  </h3>
                  <p className="text-gray-500">
                    Sedang terjadi insiden pada service integrator. Silakan coba lagi nanti.
                  </p>
                </div>
              </div>
            </section>
          ) : (
            <section className="flex flex-col w-full gap-3 text-base font-medium">
              {loading ? (
                <SkeletonTheme baseColor="#EBEBEB" highlightColor="#444">
                  <Skeleton count={8} />
                  <Skeleton count={8} />
                  <Skeleton count={8} />
                </SkeletonTheme>
              ) : (
                <>
                  {data &&
                    data.data?.map((blog, idx) => (
                      <CardComponent
                        key={idx}
                        className="w-full"
                        titleCard={blog.title}
                        descriptionCard={
                          <div className="flex flex-row items-center gap-1">
                            <FaTags className="w-8" />
                            <p className="lg:text-sm text-[12px]">
                              {blog.category.join(", ")}
                            </p>
                          </div>
                        }
                        additionaComponent={
                          <Button>
                            <a
                              href={blog.link}
                              target="_blank"
                              className="flex lg:text-sm text-xs font-semibold">
                              Baca selengkapnya di medium..
                              <svg
                                className="-mr-1 ml-2 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </Button>
                        }
                      />
                    ))}
                </>
              )}
            </section>
          )}
        </div>
      </ContentLayout>
    </>
  );
};

export default Blogs;
