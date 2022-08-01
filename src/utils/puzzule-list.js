// Motion
import { GlideToDropDown } from "../components/puzzules/Glide"
import { GoTo, GoToXtoY } from "../components/puzzules/Go_to"
import { PinDirection, PinXPosition, PinYPosition } from "../components/puzzules/Motion_pins"
import MoveXSteps from "../components/puzzules/Move_x_steps"
import { TurnAntiXDeg, TurnXDeg } from "../components/puzzules/Turn_Deg"

const puzzleList = {
    motion: {
        title: "Motion",
        blocks: [
            <MoveXSteps />,
            <TurnXDeg />,
            <TurnAntiXDeg />,
            <GoToXtoY />,
        ],
        pins: [
            <PinXPosition />,
            <PinYPosition />,
            <PinDirection />
        ]
    },
    /* looks: {
        title: "Looks",
        blocks: []
    },
    events: {
        title: "Events",
        blocks: []
    },
    control: {
        title: "Control",
        blocks: []
    }, */
}

export { puzzleList }