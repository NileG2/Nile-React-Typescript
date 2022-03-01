import React from "react";
import "./Sidebar.scss";

interface IProps {
  sidebarItems: string[];
  selectedItemIndex: number;
  setSelectedItemIndex: React.Dispatch<React.SetStateAction<number>>;
}
const Sidebar: React.FC<IProps> = ({
  sidebarItems,
  selectedItemIndex,
  setSelectedItemIndex,
}) => {
  return (
    <div className="sidebarWrapper">
      {sidebarItems.map((item, index) => (
        <button
          key={index}
          className={`sidebarItemButton std-fontMedium std-bold std-whiteText ${
            index === selectedItemIndex && "active"
          }`}
          onClick={() => setSelectedItemIndex(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
