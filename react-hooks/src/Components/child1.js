import React, { useEffect, useState } from "react";

function Child1(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((pre) => pre + 1);
  }, []);

  console.log(props);
  return (
    <div>
      <h6> Render times {count} </h6>
      Child 1 name is <strong>{props.childName} </strong>
    </div>
  );
}

export default Child1;
