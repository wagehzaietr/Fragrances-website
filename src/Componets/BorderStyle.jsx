import React from "react";
import { motion } from "framer-motion";

const BorderStyle = ({ image1, image2, hasAnimated }) => {
  return (
    <div>
      <div className="neon-border">
        <motion.img
          src={image1}
          alt="border-image"
          className="image1"
          whileHover={{ x: -20 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src={image2}
          alt="border-image"
          className="image2"
          whileHover={{ x: 20 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
};

//styles

export default BorderStyle;
