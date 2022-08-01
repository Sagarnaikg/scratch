import React, { useState } from "react";
import OutputArea from "../components/Output_area";

import MainEditor from "../components/Main_editor";
import SpritesArea from "../components/Sprites_area";
import { ActiveSrite } from "../utils/context-api/active_sprite_context";
import { SpriteList } from "../utils/context-api/sprites_list_context";
import {
  defaultActiveSprite,
  defaultSpriteListValue,
} from "../utils/default_value";

const Home = () => {
  const [spriteList, setSpriteList] = useState([defaultSpriteListValue]);
  const [activeSprite, setActiveSprite] = useState(defaultActiveSprite);

  return (
    <SpriteList.Provider
      value={{ list: spriteList, setSpriteList: setSpriteList }}
    >
      <ActiveSrite.Provider
        value={{ sprite: activeSprite, setActiveSprite: setActiveSprite }}
      >
        <div className="bg-blue-100 h-screen flex">
          <MainEditor />
          <div className="preview w-1/3 h-full">
            <OutputArea />
            <SpritesArea />
          </div>
        </div>
      </ActiveSrite.Provider>
    </SpriteList.Provider>
  );
};

export default Home;
