"use client";
import { Form, Input, Select, Button, Typography, Card, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title } = Typography;
const { Option } = Select;

const SignupForm: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post("/api/signup", values);
      message.success("Signup successful!");
      form.resetFields();
      console.log(response);
      router.push("/signin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error.response?.data?.message || "Signup failed!");
      } else {
        message.error("Signup failed!");
      }
    }
  };

  return (
    <Card
      title="Sign Up"
      style={{
        maxWidth: 400,
        margin: "auto",
        marginTop: 20,
        boxShadow: "0 4px 8px rgba(0, 300, 0, 0.5)",
      }}
    >
      <Form
        form={form}
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        size="large"
      >
        <Form.Item
          name="firstname"
          label="First Name"
          rules={[{ required: true, message: "Please enter your first name!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="lastname"
          label="Last Name"
          rules={[{ required: true, message: "Please enter your last name!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email address!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter your password!" },
            { min: 6, message: "Password must be at least 6 characters long!" },
          ]}
          hasFeedback
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          name="institution"
          label="Institution"
          rules={[
            { required: true, message: "Please enter your institution!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="studentNumber"
          label="Student Number"
          rules={[
            { required: true, message: "Please enter your student number!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="year"
          label="Year"
          rules={[{ required: true, message: "Please select your year!" }]}
        >
          <Select size="large">
            <Option value="1">First Year</Option>
            <Option value="2">Second Year</Option>
            <Option value="3">Third Year</Option>
            <Option value="4">Fourth Year</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="program"
          label="Program"
          rules={[{ required: true, message: "Please enter your program!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        Already have an account? <a href="/signin">Login</a>
      </div>
    </Card>
  );
};

export default SignupForm;
