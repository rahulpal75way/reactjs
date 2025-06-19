import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../components/User";

const Home = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/blogs?populate=*")
      .then((res) => {
        setblogs(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(blogs);

  return (
    <div style={{ padding: "2rem" }}>
      <User/>
      <h1 className="text-4xl">Blog Posts</h1>
      {blogs.map((blog) => {
        const { id, title, content, image } = blog;

        return (
          <div key={id} className="flex m-5 gap-x-3.5">
            <div className="w-1/2">
              {image?.url && (
                <img
                  src={`http://localhost:1337${image.url}`}
                  alt={title}
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <h2 className="text-center text-xl">{title}</h2>

              <p className="text-start">{content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
