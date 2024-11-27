import React, { Component } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-[100rem] md:mx-auto relative z-0`}
      >
        <span className='hush-span' id={idName}></span>
        <Component />
      </motion.div>
    );
  };

export default Wrapper;
