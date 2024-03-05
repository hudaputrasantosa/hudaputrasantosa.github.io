import { Timeline } from "flowbite-react";

const TimelineSection = ({
  iconTimeline,
  titleText,
  subTitleText,
  dateText,
  descriptionText,
}) => {
  return (
    <div className="">
      <Timeline.Item>
        <Timeline.Point icon={iconTimeline} />
        <Timeline.Content>
          <Timeline.Title>{titleText}</Timeline.Title>
          <Timeline.Body className="mb-0">{subTitleText}</Timeline.Body>
          <Timeline.Time>{dateText}</Timeline.Time>
          <Timeline.Body className="mt-2 text-sm">
            {descriptionText}
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </div>
  );
};

export default TimelineSection;
