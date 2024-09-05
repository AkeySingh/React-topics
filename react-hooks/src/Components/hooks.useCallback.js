import React, { useState, useCallback, useEffect } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

function HooksuseCallback() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((pre) => pre + 1);
  }, [count]);

  function increment() {
    setCount((pre) => pre + 1);
  }
  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
      <div className="">
        <div className="p-5 text-2xl  text-indigo-500">useCallback hook : </div>
        <div className="p-5">
          <strong>useCallback </strong> Hooks is used to memoize functions, and
          prevent unnecessary re-rendering of child components that rely on
          those components. The useCallback function in React is mainly used to
          keep a reference to a function constant across multiple re-renders.
          This feature becomes useful when you want to prevent the unnecessary
          re-creation of functions, especially when you need to pass them as
          dependencies to other hooks such as useMemo or useEffect.
        </div>

        <p className=" ">
          Set State on Click in parent component{" "}
          <button className=" text-"></button>
        </p>

        <div className="p-4">
          <Child1 childName="InderJeet Jatav" />
          <br />
          <Child2 childName="Abhishek kumar" />
        </div>
      </div>
    </div>
  );
}

export default HooksuseCallback;
