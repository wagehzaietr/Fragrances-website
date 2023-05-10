import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const BlogContent = ({ blog }) => {
  const { title, description, dateNumber, date } = blog;
  return (
    <WrapperBlog
    >
      <motion.div className="circle">
        <h2>{dateNumber}</h2>
        <h4>{date}</h4>
      </motion.div>
      <motion.div className="blog-text">
        <h3> {title}</h3>
        <p>{description}</p>
      </motion.div>
    </WrapperBlog>
  );
};

//styles
const WrapperBlog = styled.div`
  display: flex;
  gap: 1rem;

  &:hover h3 {
    cursor: pointer;
    color: #d6610d;
  }

  .blog-text {
    padding: 0.5rem;
    margin-top: 0.6rem;

    h3 {
      transition: 0.3s ease-in-out;
    }

    p {
      font-size: 13px;
    }
  }

  .circle {
    background-color: #262626;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
      display: none;
    }

    &:hover {
      cursor: pointer;
      background-color: #d6610d;
    }

    h2 {
      display: block;
      text-align: center;
      font-size: 28px;
      font-weight: 500;
      padding: 15px 10px 0px;
      letter-spacing: 0.4px;
      line-height: 30px;
      color: #ffffff;
    }

    h4 {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0px;
      font-weight: 500;
      letter-spacing: 0.4px;
      padding: 0;
      background: border-box;
      text-transform: capitalize;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }
  }
`;

export default BlogContent;
