import React, { useState } from "react";
import Signup from "./Signup";

function Form() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <Signup handleToggle={handleToggle} toggle={toggle} />
    </div>
  );
}

export default Form;
