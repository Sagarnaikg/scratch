import CatSprite from "../components/Others/Cat_sprite"
import { v4 as uuidv4 } from "uuid";


let defaultSpriteListValue = {
    id: uuidv4(),
    name: "Sprite",
    image: <CatSprite />,
    properties: {
        x: 0,
        y: 0,
        angle: 0,
        scale: 1,
        display: "block"
    },
    code: {

    }
}

let defaultActiveSprite = defaultSpriteListValue;


export { defaultSpriteListValue, defaultActiveSprite }