import Header from "@/components/layout/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-4xl font-bold text-white">
          Welcome to ALX Project 2 🎉
        </h1>
      </main>
    </div>
  );
};

export default Home;
