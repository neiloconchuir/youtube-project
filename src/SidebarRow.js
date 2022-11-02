import React from 'react';
import './sidebarRow.css';


function SidebarRow({ selected, Icon, title }) {
  return (
    <section className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow_icon" />
      <h4 className="sidebarRow_title">{title}</h4>
    </section>
  );
}

export default SidebarRow