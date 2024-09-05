import React, { useEffect, useState } from "react";

function Child2(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((pre) => pre + 1);
  }, []);

  console.log(props);
  return (
    <div>
      <h6> Render times {count} </h6>
      Child 2 name is <strong> {props.childName} </strong>{" "}
    </div>
  );
}

export default Child2;
