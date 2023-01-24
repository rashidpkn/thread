import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../../../redux/slice/util";

function DesktopMenuSelector() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.util.productBuilder);
  const { item } = useSelector(state => state.fabric.measure)
  return (
    <div className="h-11 w-full flex bg-[#e7e7e7]">
      <button onClick={() => { dispatch(setMenu(1)); }} className={`h-full ${item !== 'Blind' ? "w-1/4" : "w-1/3"}  font-medium ${menu === 1 ? "bg-[#E1B980] text-[#2B2B2B] " : "text-[#2B2B2B]/50" } `}>Fabrics</button>
      <button onClick={() => { dispatch(setMenu(2)); }} className={`h-full ${item !== 'Blind' ? "w-1/4" : "w-1/3"}  font-medium ${menu === 2 ? "bg-[#E1B980] text-[#2B2B2B] " : "text-[#2B2B2B]/50" } `}>Measure</button>
      {item !== 'Blind' && 
      <button onClick={() => { dispatch(setMenu(3)); }} className={`h-full ${item !== 'Blind' ? "w-1/4" : "w-1/3"}  font-medium ${menu === 3 ? "bg-[#E1B980] text-[#2B2B2B] " : "text-[#2B2B2B]/50" } `}>Style</button>}
      <button onClick={() => { dispatch(setMenu(4)); }} className={`h-full ${item !== 'Blind' ? "w-1/4" : "w-1/3"}  font-medium ${menu === 4 ? "bg-[#E1B980] text-[#2B2B2B] " : "text-[#2B2B2B]/50" } `}>Features</button>
    </div>
  );
}

export default DesktopMenuSelector;
