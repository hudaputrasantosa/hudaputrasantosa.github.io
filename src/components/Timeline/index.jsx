import { Timeline } from "flowbite-react";
import { HiExternalLink, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState } from "react";
import PropTypes from "prop-types";

TimelineSection.propTypes = {
  iconTimeline: PropTypes.elementType.isRequired,
  titleText: PropTypes.string.isRequired,
  subTitleText: PropTypes.string.isRequired,
  dateText: PropTypes.string.isRequired,
  descriptionText: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

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
                className="flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                {isDescriptionVisible ? (
                  <>
                    <span>Hide Description</span>
                    <HiChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Show Description</span>
                    <HiChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
              {isDescriptionVisible && (
                <Timeline.Body className="mt-2 text-sm">
                  <h4 className="text-gray-500 font-semibold mb-2">
                    Key Responsibilities :
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {descriptionText.map((item, idx) => (
                      <li key={idx} className="text-gray-500 text-justify">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Timeline.Body>
              )}
            </div>
          )}
        </Timeline.Content>
      </Timeline.Item>
    </div>
  );
};

export default TimelineSection;
