import React, { useState } from "react";
import Signin from "./Signin";

function SigninForm() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Signin handleToggle={handleToggle} toggle={toggle} />
    </React.Fragment>
  );
}

export default SigninForm;
