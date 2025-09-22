import React from "react";
import Header from "@/components/layout/Header";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-green-100">
        <h1 className="text-4xl font-bold text-green-700">Home Page</h1>
      </main>
    </div>
  );
};

export default HomePage;
