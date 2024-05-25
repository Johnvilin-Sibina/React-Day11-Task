import React from "react";
import { LuCalendarCheck } from "react-icons/lu";

const Buttons = () => {
  return (
   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 className="h2" style={{color:"blueviolet"}}>Dashboard</h1>
  <div className="btn-toolbar mb-2 mb-md-0">
    <div className="btn-group me-2">
      <button type="button" className="btn btn-sm btn-outline-primary">
        Share
      </button>
      <button type="button" className="btn btn-sm btn-outline-primary">
        Export
      </button>
    </div>
    <button type="button" className="btn btn-sm btn-outline-primary dropdown-toggle d-flex align-items-center gap-1">
    <LuCalendarCheck />
      This week
    </button>
  </div>
</div>

  );
};

export default Buttons;
