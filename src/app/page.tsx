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
  return <div> This is home </div>;
}
