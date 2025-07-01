import { Tab, TabList, TabPanel, Tabs } from "components/atoms/tabs";

import { useState } from "react";

export default function A0002MobileContents() {
  const [value, setValue] = useState("tab1");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const data = [
    {
      label: "Tab 1",
      value: "tab1",
      contents: <div>컨텐츠1</div>,
    },
    {
      label: "Tab 2",
      value: "tab2",
      contents: <div>컨텐츠2</div>,
    },
    {
      label: "Tab 3",
      value: "tab3",
      contents: <div>컨텐츠3</div>,
    },
    {
      label: "Tab 4",
      value: "tab4",
      contents: <div>컨텐츠4</div>,
    },
    {
      label: "Tab 5",
      value: "tab5",
      contents: <div>컨텐츠5</div>,
    },
  ];
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <TabList>
          {data.map(({ label, value }) => (
            <Tab label={label} value={value} key={value} />
          ))}
        </TabList>
        {data.map(({ value, contents }) => (
          <TabPanel value={value} key={value}>
            {contents}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}
