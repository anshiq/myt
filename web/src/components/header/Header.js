import React, { useContext, useEffect } from "react";
import { Jwt } from "../../contextApi/context";
import { SiPlayerdotme} from "react-icons/si";
import { TbMenu2 } from "react-icons/tb";
import { useState } from "react";
export default function Header() {
  const [showMenu,setShowMenu] = useState(false)
  let menuClass = showMenu?"visible":"hidden";
  const [user, setUser] = useState({ name: "", exist: false, runOnes: true });
  const jwt = useContext(Jwt);
  const name = async () => {
    const { name, exist } = await jwt.details();
    setUser({ name: name, exist: exist });
  };
  if (user.runOnes) {
    // i guess  useEffect is useless in some cases.
    name();
    setUser((prevData) => ({
      ...prevData,
      runOnes: false,
    }));
  }
  return (
    <>
      <nav   className="flex bg-green-300 sm:bg-red-50 text-2xl  2xl:bg-green-400  flex-row px-3 xs:px-8 2xl:space-x-40  xs:space-x-10 space-x-2 items-center justify-between py-1 xs:py-3" id="navbar">
        <div className="grow-0 text-4xl w-60 sm:w-10" id="title">
          <span  className="hidden xs:block">Tile</span>
          <SiPlayerdotme className="xs:hidden" />
        </div>
        <div className="flex flex-row grow-[1] " id="search">
          <input className="grow text-sm xs:text-2xl xs:px-6 px-2 h-10 xs:h-10 "  placeholder="search"/>
          <button className="grow-0 px-2 xs:px-6 bg-black text-white text-sm xs:text-2xl">Search</button>
        </div>
        <div className={`grow-[1] absolute xs:relative top-16   xs:top-0 ${menuClass}`}>
          <ul className="flex flex-col xs:justify-around  space-y-6 left-4 xs:flex-row  xs:space-y-0">
            <li classname="">
              <a href="#">Home</a>
            </li>
            <li classname="">
              <a href="#">About</a>
            </li>
            <li classname="">
              <a href="#">Contact</a>
            </li>
            <li classname="">
              {user.exist === true ? (
                <a href="#">{user.name}</a>
              ) : (
                  <a href="#">Login</a>
                )}
            </li>
          </ul>
        </div>
        <button onClick={()=>setShowMenu(!showMenu)} className="grow-[1/2] xs:hidden block">
          <TbMenu2 />
        </button>
      </nav>
      </>
  );
}
