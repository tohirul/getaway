"use server";

import React from "react";

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default async function Home() {
  return (
    <div className="w-screen h-[100vh] flex justify-center items-center z-1000">
      <h1>Getaway | Home</h1>
    </div>
  );
}
