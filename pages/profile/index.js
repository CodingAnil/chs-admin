"use client";

import React from "react";
import { Container, Row } from "react-bootstrap";

const UserProfile = () => {
  return (
    <>
      <div className="layout-wrapper">
        <div className="bg-secondprimary profile-bg relative z-10">
          <Container fluid className="pb-5">
            <Row>
              <div className="space-y-11 relative z-30">
                <div className="flex justify-end items-center  gap-2.5 px-4">
                  Profile
                </div>

                <div className="pt-5 pb-2 rounded-lg flex flex-wrap xl:flex-nowrap justify-start flex-col xl:flex-row items-start space-y-4  md:space-x-6 px-4"></div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
