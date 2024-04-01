"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface BlogType {
  id: number;
  title: string;
  pic: string;
  desc: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (blog: BlogType) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-[1440px] px-2 lg:px-16">
      {!selectedBlog && (
        <div className="w-full h-full py-5 gap-5 grid grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleClick(blog)}
              style={{ cursor: "pointer" }}
            >
              <div className="max-w-[500px]">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={blog.pic}
                    alt={blog.title}
                    fill
                    className="object-fit rounded-md"
                  />
                </div>
                <h5>{blog.title}</h5>
                <p>{blog.desc.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedBlog && (
        <div className=" ">
          <div>
          <div className="w-full h-[300px] relative mt-2">
            <Image
              src={selectedBlog.pic}
              alt={selectedBlog.title}
              fill
              className="object-fit "
            />
          </div>
          <h2 className="font-bold pt-2">{selectedBlog.title}</h2>
          <p className="">{selectedBlog.desc}</p>
</div>

<button
        onClick={handleBack}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Back
      </button>
        </div>
        
      )}
   
    </div>
  );
};

export default Blog;
