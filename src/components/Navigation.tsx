"use server";
import Head from "next/head";

import { IoIosGlobe } from "react-icons/io";
import StickyNavAnimation from "@/animations/StickyNavAnimation";
import NavLinks from "./NavLinks";

const menus = [
  "Home",
  "Holidays",
  "Destinations",
  "Flights",
  "Offers",
  "Contacts",
];

export default async function Navigation() {
  return (
    <StickyNavAnimation>
      <Head>
        <title>GETAWAY</title>
      </Head>

      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className="text-xl" />
        Getaway
      </div>

      <NavLinks menus={menus} />
    </StickyNavAnimation>
  );
}
