import React, { useRef, useEffect, useState } from "react";
import { puzzleList } from "../utils/puzzule-list";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import MoveXSteps from "./puzzules/Move_x_steps";
import {
  faFolderPlus,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Others/Icon";

const MainEditor = () => {
  const onDragEnd = (res) => {
    const { source, destination } = res;

    if (!destination) return;

    if (destination.droppableId === "TRASH") {
      let slist = cards[source.droppableId];

      if (slist) slist.splice(source.index, 1);
    } else if (source.droppableId !== destination.droppableId) {
      // dragging between diff list
      if (source.droppableId === "MENU") {
        const [key, index] = res.draggableId.split("-");

        let dlist = cards[destination.droppableId];

        let item =
          puzzleList[key.toString().toLowerCase()].blocks[parseInt(index)];

        let i = dlist.length;
        for (; i >= 0; i--) {
          if (i === destination.index) {
            break;
          }
          dlist[i] = dlist[i - 1];
        }
        dlist[i] = item;
      } else {
        let slist = cards[source.droppableId];
        let dlist = cards[destination.droppableId];

        let item = slist.splice(source.index, 1);

        let i = dlist.length;
        for (; i >= 0; i--) {
          if (i === destination.index) {
            break;
          }
          dlist[i] = dlist[i - 1];
        }
        dlist[i] = item;
      }
    } else {
      // re-arenging
      let list = cards[destination.droppableId];

      let item = list.splice(source.index, 1);

      for (let i = list.length; i >= 0; i--) {
        if (i === destination.index) {
          list[i] = item[0];
          break;
        }
        list[i] = list[i - 1];
      }

      cards[destination.droppableId] = list;
    }
  };

  const [cards, setCards] = useState({ 0: [] });

  const addBlankCard = () => {
    let n = Object.keys(cards).length;
    setCards({ ...cards, [n]: [] });
  };

  const deleteCard = (key) => {
    let temp = { ...cards };
    delete temp[key];
    setCards(temp);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="MENU" isDropDisabled={true}>
        {(provided, snapshot) => (
          <div
            className="main-canvas flex bg-white ml-4 my-4 mr-1.5 border border-gray-300 rounded-xl"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="puzzles h-full w-max  p-4">
              {Object.keys(puzzleList).map((key, i) => {
                let item = puzzleList[key];
                return (
                  <div className="blocks-section mb-5" key={i} id={i}>
                    <div className="title font-medium">{item.title}</div>
                    <div className="blocks">
                      {item.blocks.map((component, index) => (
                        <Draggable
                          key={`${item.title}-${index}`}
                          draggableId={`${item.title}-${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <>
                              <div
                                className="mt-3"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {component}
                              </div>
                              {snapshot.isDragging && (
                                <div className="mt-3">{component}</div>
                              )}
                            </>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Droppable>
      <div className="canvas relative bg-white my-4 mx-1.5 border border-gray-300 rounded-xl">
        <div className="editor overflow-scroll p-5 flex flex-wrap">
          {Object.keys(cards).map((key) => (
            <Droppable droppableId={`${key}`} key={`${key}`}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="code-card bg-gray-100 mx-1 w-fit h-fit p-2 rounded-lg border-2 border-gray-300"
                >
                  {cards[key].length ? (
                    cards[key].map((component, index) => (
                      <Draggable
                        key={`${key}-${index}`}
                        draggableId={`${key}-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {component}
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <div className="text-gray-400 text-md flex items-center">
                      Drop Block Here{" "}
                      <div onClick={() => deleteCard(key)}>
                        <Icon
                          className="ml-2 mr-1 cursor-pointer hover:text-red-700"
                          icon={faXmark}
                        />
                      </div>
                    </div>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
          <div className="absolute bottom-3 right-16">
            <Droppable droppableId="TRASH">
              {(provided, snapshot) => (
                <>
                  <div
                    className={`${
                      snapshot.isDraggingOver ? "bg-red-400" : "bg-red-300"
                    } px-5 py-1.5 rounded-lg border-2 border-red-600`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Icon icon={faTrash} /> Trash
                  </div>
                </>
              )}
            </Droppable>
          </div>
        </div>
        <div
          onClick={addBlankCard}
          className="sprite-add-btn absolute right-3 bottom-3 w-fit py-2 px-3 bg-blue-600 hover:bg-blue-500 hover:cursor-pointer rounded-lg drop-shadow-xl"
        >
          <Icon icon={faFolderPlus} color="white" />
        </div>
      </div>
    </DragDropContext>
  );
};

export default MainEditor;
