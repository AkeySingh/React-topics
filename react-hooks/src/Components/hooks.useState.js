import React from "react";

function HooksUseState() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((pre) => pre + 1);
  };

  const decrement = () => {
    if (count == 0) {
      setCount((pre) => pre);
    } else setCount((pre) => pre - 1);
  };

  return (
    <>
      <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="p-8">Example : </div>
          <div className="p-8"> Counter increment and decrement </div>
        </div>
        <div className="p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => increment()}
          >
            + increment
          </button>
          <span className="p-5 text-2xl"> {count}</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => decrement()}
          >
            - decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default HooksUseState;
