import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./customer-access.styles.scss";

const customerAccessPage = () => (
  <div className="customer-access">
    <SignIn />
    <SignUp />
  </div>
);

export default customerAccessPage;
