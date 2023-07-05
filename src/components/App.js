import React, { useState } from "react";
import "./../styles/App.css";
import Tabs from "./Tabs";

const App = () => {
  const tabs = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
  ];

  const newTabs = [
    { title: "Tab A", content: "Content for Tab A" },
    { title: "Tab B", content: "Content for Tab B" },
    { title: "Tab C", content: "Content for Tab C" },
  ];

  const [tab, setTab] = useState(tabs[0].content);
  const [newTab, setNewTab] = useState(newTabs[0].content);
  return (
    <div>
      <Tabs tabs={tabs} setTab={setTab} />
      <p>{tab}</p>
      <Tabs tabs={newTabs} setTab={setNewTab} />
      <p>{newTab}</p>
    </div>
  );
};

export default App;
