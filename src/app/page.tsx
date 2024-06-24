import { Layout } from "antd";
import Image from "next/image";

const { Content } = Layout;

const Home = () => {
  return (
    <Content className="p-24">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
          <Image
            src="/job.webp"
            alt="Jobs Image"
            width={800}
            height={1200}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-lg mb-4">
            Discover exciting opportunities in various industries. Whether you
            are a seasoned professional or just starting out, we have something
            for everyone.
          </p>
          <a
            href="/jobs"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg inline-block transition-colors duration-300"
          >
            Explore Jobs
          </a>
        </div>
      </div>
    </Content>
  );
};

export default Home;
