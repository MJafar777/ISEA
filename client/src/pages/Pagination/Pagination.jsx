import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { url } from "../../configs/config";
import axios from "axios";
import Info from "./Info";

import PaginationNumbers from "../PaginationNumbers/Pagination";

import s from "./pagination.module.css";

const Pagination = function () {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage; // shu pagedagi tugaydigan postni raqami
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // shu pagedagi boshlanadigan postni raqami
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-primary mb-3">Pagination Component</h1>
        <Info info={currentPosts} loading={loading} />
        <PaginationNumbers
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Pagination;
