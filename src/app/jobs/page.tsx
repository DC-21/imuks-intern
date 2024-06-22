"use client";

import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const JobListings: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      <Card style={{ width: 300, margin: "10px" }} hoverable>
        <Meta
          title="Web Developer"
          description={
            <>
              <p>
                We are looking for a skilled web developer to join our team. As
                a web developer, you will be responsible for designing, coding,
                and modifying websites, from layout to function.
              </p>
              <h3>Requirements:</h3>
              <ul>
                <li>
                  Proficiency with HTML, CSS, JavaScript, and related web
                  technologies.
                </li>
                <li>
                  Experience with front-end frameworks (e.g., React, Vue.js).
                </li>
                <li>
                  Familiarity with server-side languages (e.g., Node.js,
                  Python).
                </li>
                <li>Strong problem-solving skills and attention to detail.</li>
              </ul>
              <Button type="primary" style={{ marginTop: "10px" }}>
                Apply
              </Button>
            </>
          }
        />
      </Card>

      <Card style={{ width: 300, margin: "10px" }} hoverable>
        <Meta
          title="Mobile App Developer"
          description={
            <>
              <p>
                Join our mobile app development team and contribute to building
                cutting-edge applications for iOS and Android platforms.
              </p>
              <h3>Requirements:</h3>
              <ul>
                <li>
                  Proficiency in mobile app development languages (e.g., Swift,
                  Kotlin).
                </li>
                <li>
                  Experience with mobile frameworks (e.g., React Native,
                  Flutter).
                </li>
                <li>
                  Understanding of RESTful APIs and web services integration.
                </li>
                <li>Knowledge of UI/UX design principles.</li>
              </ul>
              <Button type="primary" style={{ marginTop: "10px" }}>
                Apply
              </Button>
            </>
          }
        />
      </Card>

      <Card style={{ width: 300, margin: "10px" }} hoverable>
        <Meta
          title="Frontend Developer"
          description={
            <>
              <p>
                We are seeking a frontend developer to join our dynamic team. As
                a frontend developer, you will collaborate with designers to
                translate UI/UX design wireframes into responsive user
                interfaces.
              </p>
              <h3>Requirements:</h3>
              <ul>
                <li>Proficiency with HTML5, CSS3, and JavaScript.</li>
                <li>
                  Experience with frontend frameworks and libraries (e.g.,
                  React, Angular).
                </li>
                <li>Knowledge of CSS preprocessors (e.g., Sass, Less).</li>
                <li>Experience with version control systems (e.g., Git).</li>
              </ul>
              <Button type="primary" style={{ marginTop: "10px" }}>
                Apply
              </Button>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default JobListings;
