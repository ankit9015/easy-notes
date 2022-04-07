import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex-column flex-center">
      <div className="text-center H1">LandingPage</div>
      <Link to="/home" className="m-l button button-primary text-md">
        Home
      </Link>
    </div>
  );
}

export default LandingPage;
