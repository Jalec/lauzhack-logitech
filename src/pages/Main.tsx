import React from "react";
import Displayer from "../components/Displayer";

export const Main = ({ socket, gltfScene }) => {
  return (
    <>
      <h1 className="p-5 flex justify-center items-center text-xl">
        LauzHack 2024 - Logitech project
      </h1>

      <Displayer gltfScene={gltfScene} socket={socket} />
    </>
  );
};
