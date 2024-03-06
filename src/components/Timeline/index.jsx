import { Timeline } from "flowbite-react";

const TimelineSection = ({
  iconTimeline,
  titleText,
  subTitleText,
  dateText,
  descriptionText,
}) => {
  return (
    <div>
      <Timeline.Item>
        <Timeline.Point icon={iconTimeline} />
        <Timeline.Content>
          <Timeline.Title className="lg:text-lg text-base">
            {titleText}
          </Timeline.Title>
          <Timeline.Body className="mb-0 lg:text-sm text-sm">
            {subTitleText}
          </Timeline.Body>
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
