import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { testimonials } from "../constants";
import Wrapper from "../hoc/Wrapper";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const TestimonialCard = (props, { index }) => {
  const { name, testimonial, designation, company, image } = props;
  return (
    <motion.div variants={fadeIn("", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 55,
          speed: 450,
          scale: 1,
        }}
        className="text-white green-pink-gradient p-0.5 rounded-3xl"
      >
        <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
          <p className=" text-5xl font-black">"</p>
          <div>
            <p className="mt-2 text-secondary text-base">{testimonial}</p>
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="font-medium text-base">
                  <span className="blue-text-gradient ">@</span>
                  {name}
                </p>
                <p className="text-secondary text-sm mt-1">
                  {designation} of {company}
                </p>
              </div>
              <img
                src={image}
                alt={`feedback by ${name}`}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>{" "}
      </Tilt>
    </motion.div>
  );
};

const Feedback = () => {
  return (
    <div className="rounded-2xl bg-black-100">
      {/* <div
        className={`${styles.padding} bg-tertiary  min-h-[280px] rounded-3xl`}
      >
        <motion.div variants={textVariant()}>
          <h4 className={`${styles.sectionSubText}`}>What Others Say</h4>
          <h1 className={`${styles.sectionHeadText}`}>Tetsimonials</h1>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} flex justify-center items-center flex-wrap gap-6 pb-14 -mt-16`}
      >
        {testimonials.map((reviews, index) => (
          <TestimonialCard key={reviews.name} index={index} {...reviews} />
        ))}
      </div> */}
    </div>
  );
};

export default Wrapper(Feedback, "");
