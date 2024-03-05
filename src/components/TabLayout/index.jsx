import { Tabs } from "flowbite-react";

const TabLayout = ({ children }) => {
  return (
    <Tabs aria-label="Tabs with icons" className="ring-0" style="underline">
      {children}
    </Tabs>
  );
};

export default TabLayout;
