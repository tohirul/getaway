"use server";
import Head from "next/head";
import Link from "next/link";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";

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
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>GET AWAY</title>
      </Head>

      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className="text-xl" /> Travel
      </div>

      <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
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
    </div>
  );
}
