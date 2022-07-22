import React from "react";

import "../LoginRegister.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import UpdateProfile from "../UpdateProfile";
import UserInformation from "../UserInformation";

export default function MyAccount() {
  return (
    <section className="section-account p-5">
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 mt-5 "
      >
        <Tab eventKey="home" title="User Information">
          <UserInformation />
        </Tab>
        <Tab eventKey="profile" title="Update Profile">
          <UpdateProfile />
        </Tab>
      </Tabs>
    </section>
  );
}
