import React from "react";
import styled from "styled-components";
import { SectionAbout, WrapperAbout } from "../Home/about";
import { motion } from "framer-motion";
import BorderStyle from "../BorderStyle";
import rightcmsbanner1 from "../../assets/Images/rightcmsbanner-1.png";
import rightcmsbanner2 from "../../assets/Images/rightcmsbanner-2.png";
import BlogContent from "./BlogContent";
import { Blogs } from "../../Data/BlogsData";

const Blog = () => {
  return (
    <SectionBlog id="blog">
      <WrapperBlog>
        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <BorderStyle image1={rightcmsbanner1} image2={rightcmsbanner2} />
        </motion.div>
        <div className="about-info">
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="about-title"
          >
            Latest Blog
          </motion.h1>
          <div className="blog-text">
            {Blogs.map((blog) => {
              return <BlogContent key={blog.id} blog={blog} />;
            })}
          </div>
        </div>
      </WrapperBlog>
    </SectionBlog>
  );
};

//styles

const SectionBlog = styled(SectionAbout)``;

const WrapperBlog = styled(WrapperAbout)`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .about-info{

    .about-title{
    margin-bottom: 4rem;
  }
  }
`;

export default Blog;
