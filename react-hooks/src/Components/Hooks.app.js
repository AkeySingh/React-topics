import React from "react";

function HooksApp() {
  return (
    <div className="App">
      <p
        className="text-5xl my-5 text-black-500
      "
      >
        React Hooks Cover --
      </p>

      <div className="w-4/5 m-auto grid grid-cols-3 divide-x  lex items-stretch self-center	rounded-sm border-2">
        <div className="text-xl">useState Hooks</div>
        <div className="text-xl">useEffect</div>
        <div className="text-xl">useRef</div>
      </div>
    </div>
  );
}

export default HooksApp;
