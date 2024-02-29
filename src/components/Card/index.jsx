import { Card } from "flowbite-react";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
import { HiLink, HiCode } from "react-icons/hi";

function CardComponent({
  photoCard,
  titleCard,
  descriptionCard,
  stacks,
  linkRepository,
  linkDeployment,
}) {
  return (
    <Card className="max-w-md" imgAlt={`${titleCard}-photo`} imgSrc={photoCard}>
      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {titleCard}
      </h5>
      <p className="font-normal text-justify text-sm text-gray-700 dark:text-gray-400">
        {descriptionCard}
      </p>
      <div className="flex items-center">
        <div className=" flex gap-1 basis-1/2">{stacks}</div>
        <div className="flex items-center justify-end basis-1/2 gap-1">
          <a href={linkRepository} target="_blank">
            <HiCode className="w-7 h-7 p-1 bg-slate-100 rounded-lg" />
          </a>
          <a href={linkDeployment} target="_blank">
            <HiLink className="w-7 h-7 p-1 bg-slate-100 rounded-lg cursor-pointer" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default CardComponent;
