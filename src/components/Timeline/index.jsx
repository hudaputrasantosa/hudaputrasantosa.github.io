import { Timeline } from "flowbite-react";
import { HiExternalLink, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState } from "react";
import PropTypes from "prop-types";

const TimelineSection = ({
  iconTimeline,
  titleText,
  subTitleText,
  dateText,
  descriptionText,
  url,
}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div>
      <Timeline.Item>
        <Timeline.Point icon={iconTimeline} />
        <Timeline.Content>
          <Timeline.Title className="flex flex-wrap items-center gap-1 lg:text-lg text-base ">
            {titleText}
            {url !== "" && (
              <a href={url} target="_blank">
                <HiExternalLink className="text-cyan-600" />
              </a>
            )}
          </Timeline.Title>
          <Timeline.Body className="mb-0 lg:text-sm text-sm">
            {subTitleText}
          </Timeline.Body>
          <Timeline.Time>{dateText}</Timeline.Time>
          {descriptionText.length > 0 && (
            <div className="mt-1">
              <button
                onClick={toggleDescription}
                className="flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
              >
                {isDescriptionVisible ? (
                  <>
                    <span>Hide Description</span>
                    <HiChevronUp className="w-4 h-4 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    <span>Show Description</span>
                    <HiChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </>
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isDescriptionVisible
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Timeline.Body className="mt-2 text-gray-500 dark:text-gray-300 text-sm">
                  <h4 className="font-semibold mb-2">Key Responsibilities :</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {descriptionText.map((item, idx) => (
                      <li key={idx} className="text-justify">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Timeline.Body>
              </div>
            </div>
          )}
        </Timeline.Content>
      </Timeline.Item>
    </div>
  );
};

TimelineSection.propTypes = {
  iconTimeline: PropTypes.elementType.isRequired,
  titleText: PropTypes.string.isRequired,
  subTitleText: PropTypes.string.isRequired,
  dateText: PropTypes.string.isRequired,
  descriptionText: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

export default TimelineSection;
