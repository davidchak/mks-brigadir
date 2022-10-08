import React from "react";
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div className="root">
      <Outlet />
    </div>
  );
}

export default Root;
