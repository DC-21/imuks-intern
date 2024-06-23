"use client";

import React, { useState } from "react";
import { Card, Button, Form, Input, Select, Modal, Spin } from "antd";

const { Meta } = Card;
const { Option } = Select;

const JobListings: React.FC = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [loading, setLoading] = useState(false); // State to manage loading state of form submission

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowApplyModal(true);
  };

  const onFinish = async (values: any) => {
    setLoading(true); // Start loading state on form submission

    try {
      const response = await fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application");
    } finally {
      setLoading(false); // Stop loading state after submission attempt (whether success or failure)
      setShowApplyModal(false); // Close modal on submission attempt completion
    }
  };

  const onCancel = () => {
    setShowApplyModal(false);
  };

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
              <Button
                type="primary"
                style={{ marginTop: "10px" }}
                onClick={() => handleApplyClick("Web Developer")}
              >
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
              <Button
                type="primary"
                style={{ marginTop: "10px" }}
                onClick={() => handleApplyClick("Mobile App Developer")}
              >
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
              <Button
                type="primary"
                style={{ marginTop: "10px" }}
                onClick={() => handleApplyClick("Frontend Developer")}
              >
                Apply
              </Button>
            </>
          }
        />
      </Card>

      {/* Apply Modal */}
      <Modal
        title={`Apply for ${selectedJob}`}
        visible={showApplyModal}
        onCancel={onCancel}
        footer={null}
      >
        <Spin spinning={loading} tip="Submitting application...">
          <Form
            name="applyForm"
            initialValues={{ jobtitle: selectedJob }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="firstname"
              label="First Name"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="lastname"
              label="Last Name"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="studentId"
              label="Student ID"
              rules={[
                { required: true, message: "Please enter your student ID" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="institution"
              label="Institution"
              rules={[
                { required: true, message: "Please enter your institution" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="program"
              label="Program"
              rules={[{ required: true, message: "Please enter your program" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="education"
              label="Education"
              rules={[
                {
                  required: true,
                  message: "Please select your education level",
                },
              ]}
            >
              <Select placeholder="Select education level">
                <Option value="POST">Postgraduate</Option>
                <Option value="UNDERGRADUATE">Undergraduate</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="jobtitle"
              label="Job Title"
              rules={[
                { required: true, message: "Please enter the job title" },
              ]}
            >
              <Select onChange={(value: string) => setSelectedJob(value)}>
                <Option value="Web Developer">Web Developer</Option>
                <Option value="Mobile App Developer">
                  Mobile App Developer
                </Option>
                <Option value="Frontend Developer">Frontend Developer</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="experience"
              label="Experience"
              rules={[
                { required: true, message: "Please enter your experience" },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="skills"
              label="Skills"
              rules={[{ required: true, message: "Please enter your skills" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
              <Button style={{ marginLeft: "10px" }} onClick={onCancel}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </div>
  );
};

export default JobListings;
