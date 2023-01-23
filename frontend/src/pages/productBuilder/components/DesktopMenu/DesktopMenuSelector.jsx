import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../../../redux/slice/util";

function DesktopMenuSelector() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.util.productBuilder);
  const { item } = useSelector(state => state.fabric.measure)
  return (
    <div className="h-14 w-full flex bg-[#e7e7e7]">
      <button onClick={() => { dispatch(setMenu(1)); }} className={`rounded-md h-full ${item !== 'Blind' ? "w-1/4" : "w-1/3"}  font-medium ${menu === 1 && "bg-white text-[#B68D40]"}`}>Fabrics</button>
      <button onClick={() => { dispatch(setMenu(2)); }} className={`rounded-md h-full ${item !== 'Blind' ? "w-1/4" : "w-1/3"}  font-medium ${menu === 2 && "bg-white text-[#B68D40]"}`}>Measure</button>
      {item !== 'Blind' && <button onClick={() => { dispatch(setMenu(3)); }} className={`rounded-md h-full w-1/4 font-medium ${menu === 3 && "bg-white text-[#B68D40]"}`}>Style</button>}
      <button onClick={() => { dispatch(setMenu(4)); }} className={`rounded-md h-full ${item !== 'Blind' ? "w-1/4" : "w-1/3"}  font-medium ${menu === 4 && "bg-white text-[#B68D40]"}`}>Features</button>
    </div>
  );
}

export default DesktopMenuSelector;
