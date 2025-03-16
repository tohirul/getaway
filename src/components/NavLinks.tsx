"use client";
import FadeInAnimation from "@/animations/FadeInAnimation";
import NavLinkHoverAnimation from "@/animations/NavLinkHoverAnimation";
import TextColorAnimation from "@/animations/TextColorAnimation";
import { cn } from "@/lib/utility";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";
import { IoMdSearch, IoMdPerson } from "react-icons/io";

const NavLinks = ({ menus }: { menus: Array<string> }) => {
  //   console.log("NavLinks", menus);
  const [cursorColor, setCursorColor] = useState("bg-transparent");
  const cursorRef = useRef({ left: 0, width: 0, opacity: 0 });
  const [cursorPosition, setCursorPosition] = useState(cursorRef.current);
  // console.log('Console.Render');
  const updateCursorPosition = useCallback(
    (newPosition: typeof cursorPosition) => {
      if (
        newPosition.left !== cursorRef.current.left ||
        newPosition.width !== cursorRef.current.width ||
        newPosition.opacity !== cursorRef.current.opacity
      ) {
        cursorRef.current = newPosition;
        setCursorPosition(newPosition);
      }
    },
    []
  );
  console.log(cursorColor);

  return (
    <div className="flex gap-4">
      <ul
        className="flex flex-wrap items-center gap-3 text-sm md:gap-10 w-max"
        onMouseLeave={() =>
          updateCursorPosition({ ...cursorRef.current, opacity: 0, width: 0 })
        }
      >
        {menus.map((menu, index) => (
          <MemoizedNavLink
            key={index}
            menu={menu}
            setCursorPosition={updateCursorPosition}
            setCursorColor={setCursorColor}
            className="text-black"
          />
        ))}
        <MemoizedCursor
          cursorPosition={cursorPosition}
          className={cn(
            "t-0 absolute z-0 my-1 h-8 rounded-full py-1",
            cursorColor
          )}
        />
      </ul>
      <div className="flex items-center gap-6">
        <IoMdSearch className="text-lg" />
        <IoMdPerson className="text-lg" />
      </div>
    </div>
  );
};

export default NavLinks;

const NavLink = ({
  menu,
  setCursorPosition,
  setCursorColor,
  className,
}: {
  menu: string;
  setCursorPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  setCursorColor: React.Dispatch<React.SetStateAction<string>>;
  className: string;
}) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    const element = ref.current;
    const rect = element.getBoundingClientRect();

    setCursorPosition({
      left: element.offsetLeft,
      width: rect.width,
      opacity: 1,
    });
    setCursorColor("bg-primary");
    setHovered(true);
  }, [setCursorPosition, setCursorColor]);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      const element = ref.current;
      setCursorPosition({ left: element.offsetLeft, opacity: 0, width: 0 });
      setCursorColor("bg-transparent");
    }
    setHovered(false);
  }, [setCursorPosition, setCursorColor]);

  return (
    <li
      key={menu}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative z-10 block cursor-pointer px-6 py-4 text-sm uppercase mix-blend-normal",
        hovered ? className : ""
      )}
    >
      <Link
        href={`/${menu}`}
        className="group relative flex flex-col items-center overflow-hidden"
      >
        <FadeInAnimation
          Wrapper="span"
          text={menu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
        >
          <TextColorAnimation
            name={menu}
            className="z-10 font-bold transition-colors duration-500"
          />
        </FadeInAnimation>
      </Link>
    </li>
  );
};

const MemoizedNavLink = React.memo(NavLink);

const Cursor = ({
  cursorPosition,
  className,
}: {
  cursorPosition: { left: number; width: number; opacity: number };
  className: string;
}) => {
  return (
    <NavLinkHoverAnimation
      cursorPosition={cursorPosition}
      className={className}
    />
  );
};
const MemoizedCursor = React.memo(Cursor);
