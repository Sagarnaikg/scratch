import React from "react";
import OutputArea from "../components/Output_area";

import MainEditor from "../components/Main_editor";
import SpritesArea from "../components/Sprites_area";

const Home = () => {
  return (
    <div className="bg-blue-100 h-screen flex">
      <MainEditor />
      <div className="preview w-1/3">
        <OutputArea />
        <SpritesArea />
      </div>
    </div>
  );
};

export default Home;
