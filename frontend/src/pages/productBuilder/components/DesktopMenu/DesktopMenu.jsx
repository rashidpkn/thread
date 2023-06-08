import React from "react";
import { useSelector } from "react-redux";
import DesktopMenuSelector from "./DesktopMenuSelector";
import Fabrics from "./Fabrics";
import Features from "./Features";
import Measure from "./Measure";
import Style from "./Style";

function DesktopMenu() {
  const { menu } = useSelector((state) => state.util.productBuilder);
  return (
    <div className="DeskTop hidden lg:block Menu bg-white h-full w-2/5">
      <DesktopMenuSelector />
      <div className="w-full py-5 px-20 bg-[#5c896e] h-[calc(100%-44px)] text-white">
        {menu === 1 && <Fabrics />}
        {menu === 2 && <Measure />}
        {menu === 3 && <Style />}
        {menu === 4 && <Features />}
      </div>
    </div>
  );
}

export default DesktopMenu;
