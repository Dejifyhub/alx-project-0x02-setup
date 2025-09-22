import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center gap-6 bg-green-100 p-6">
        <Card title="Card One" content="This is the content for the first card." />
        <Card title="Card Two" content="Here’s some different content for the second card." />
        <Card title="Card Three" content="Another reusable card with unique text." />
      </main>
    </div>
  );
};

export default HomePage;
