import React, { useState, useEffect } from "react";

function HooksUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
      <div className="">
        <div className="p-5 text-2xl  text-indigo-500">useEffect hook : </div>
        <div className="p-5">
          {" "}
          <strong>useEffect </strong> is typically used in React functional
          components to perform side effects, like data fetching, subscriptions,
          or DOM manipulations, after the component has rendered. It’s similar
          to lifecycle methods in class components, but it’s more flexible and
          concise.{" "}
        </div>
      </div>
      <div className="p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {count}
        </button>
      </div>
    </div>
  );
}

export default HooksUseEffect;
