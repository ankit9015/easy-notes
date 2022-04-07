import React from "react";
import GlobalHeader from "../../components/global-header/GlobalHeader";
import Navbar from "../../components/navbar/Navbar";

import "../page.css";

function Profile() {
  return (
    <div>
      <GlobalHeader />
      <div className="flex-row">
        <Navbar />
        <div className="flex-column page-main">
          <h1 className="H1">Profile</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
