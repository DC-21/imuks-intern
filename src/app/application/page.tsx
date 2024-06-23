"use client";

import React, { useEffect, useState } from "react";
import { Card, List, Spin, message } from "antd";
import axios from "axios";

interface Application {
  id: number;
  firstname: string;
  lastname: string;
  studentId: string;
  institution: string;
  program: string;
  education: string;
  jobtitle: string;
  skills: string[];
  experience: string;
  status: string;
}

const ApplicationsPage: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        // Retrieve and parse user object from local storage
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const userId = user.id;

        if (!userId) {
          throw new Error("User not logged in");
        }

        const response = await axios.get(`/api/app/${userId}`);
        console.log("Response:", response);

        if (response.status === 200) {
          setApplications(response.data.applications);
        } else {
          throw new Error("Failed to fetch applications");
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
        message.error("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="mb-6">My Applications</h2>
      {loading ? (
        <Spin tip="Loading applications..." />
      ) : applications.length > 0 ? (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={applications}
          renderItem={(application: Application) => (
            <List.Item key={application.id}>
              <Card title={application.jobtitle}>
                <p>
                  <strong>First Name:</strong> {application.firstname}
                </p>
                <p>
                  <strong>Last Name:</strong> {application.lastname}
                </p>
                <p>
                  <strong>Student ID:</strong> {application.studentId}
                </p>
                <p>
                  <strong>Institution:</strong> {application.institution}
                </p>
                <p>
                  <strong>Program:</strong> {application.program}
                </p>
                <p>
                  <strong>Education:</strong> {application.education}
                </p>
                <p>
                  <strong>Experience:</strong> {application.experience}
                </p>
                <p>
                  <strong>Skills:</strong> {application.skills}
                </p>
                <p>
                  <strong>Status:</strong> {application.status}
                </p>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default ApplicationsPage;
