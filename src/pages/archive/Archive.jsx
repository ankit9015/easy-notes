import React from "react";
import GlobalHeader from "../../components/global-header/GlobalHeader";
import Navbar from "../../components/navbar/Navbar";
import Note from "../../components/notes/Note";
import SearchBox from "../../components/search-box/SearchBox";
import "../page.css";

function Archive() {
  return (
    <div>
      <GlobalHeader />
      <div className="flex-row">
        <Navbar />
        <div className="flex-column page-main">
          <SearchBox />
          <div className="flex-column m-l p-l">
            <Note />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archive;
