// pages/about.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          This is the about page. Here you can learn more about our app and team.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
};

export default About;
