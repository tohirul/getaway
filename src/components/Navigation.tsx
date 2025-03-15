"use server";
import Head from "next/head";
import Link from "next/link";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import StickyNavAnimation from "@/animations/StickyNavAnimation";

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

      <ul className="flex flex-wrap items-center gap-3 text-sm md:gap-10">
        {menus.map((menu, index) => (
          <li key={menu + index}>
            <Link
              href={`/?menu=${menu}`}
              className={`inline-block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              {menu}
            </Link>
          </li>
        ))}
        <div className="flex items-center gap-6">
          <IoMdSearch className="text-lg" />
          <IoMdPerson className="text-lg" />
        </div>
      </ul>
    </StickyNavAnimation>
  );
}
