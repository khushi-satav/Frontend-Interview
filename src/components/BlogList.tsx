// src/components/BlogList.tsx
import React from "react";

type Blog = {
  id: number;
  title: string;
  content: string;
};

const blogs: Blog[] = [
  { id: 1, title: "Future of Fintech", content: "Exploring how AI and blockchain..." },
  { id: 2, title: "Ace Your CA Finals", content: "Strategies and study plans..." },
  { id: 3, title: "Understanding Tax Reforms", content: "A comprehensive breakdown..." },
  { id: 4, title: "Building a Career in Accounting", content: "Key skills and mindset..." },
  { id: 5, title: "AI in Auditing", content: "How artificial intelligence..." },
  { id: 6, title: "Managing Work-Life Balance", content: "Practical tips for professionals..." },
  { id: 7, title: "GST Compliance Simplified", content: "Understanding GST returns..." },
  { id: 8, title: "Personal Finance for Young Professionals", content: "Smart money habits..." },
  { id: 9, title: "Digital Transformation in Accounting Firms", content: "How firms are adapting..." },
  { id: 10, title: "Ethics in Modern Finance", content: "Why ethics matter more than ever..." },
];

export default function BlogList({ onSelect }: { onSelect: (id: number) => void }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Blogs</h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => onSelect(blog.id)}
          style={{ cursor: "pointer", marginBottom: "10px" }}
        >
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
}
