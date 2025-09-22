import React from "react";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-yellow-100">
        <h1 className="text-4xl font-bold text-yellow-700">About Page</h1>
      </main>
    </div>
  );
};

export default AboutPage;
