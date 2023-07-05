import React from "react";

function Tabs(props) {
  const { tabs, setTab } = props;
  return (
    <div>
      <ul>
        {tabs.map((tab) => {
          return (
            <li
              onClick={() => {
                setTab(tab.content);
              }}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;
