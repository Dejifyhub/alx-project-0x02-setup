// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <nav className="space-x-4">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
           <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="/users" className="hover:underline">
            Users
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
