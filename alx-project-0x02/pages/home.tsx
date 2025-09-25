// pages/home.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "First Card", content: "This is the first card's content." },
    { title: "Second Card", content: "Here’s some more information in a second card." },
    { title: "Third Card", content: "You can add as many cards as you like!" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            + New Post
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
};

export default Home;
