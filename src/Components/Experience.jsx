import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import Wrapper from "../hoc/Wrapper";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = (props) => {
  const { icon, date, title, company_name, points, iconBg } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(-90deg, #2f1567 0%, rgba(60, 51, 80, 0) 100%)",
        color: "#cfc7c7",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
      date={date}
      iconStyle={{ background: iconBg, color: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={icon}
            alt={company_name}
            className='h-[90%] w-[90%] object-contain'
          />
        </div>
      }
    >
      <h4 className={`${styles.heroSubText}`}>{title}</h4>
      <p className={`${styles.sectionSubText}`}>{company_name}</p>
      <ul className='list-disc mt-5 ml-5 space-y-2'>
        {points.map((bullets, index) => (
          <li
            key={index}
            className='text-white-100 pl-1 tracking-wider text-sm'
          >
            {bullets}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What Have I Done</p>
        <h2 className={`${styles.sectionHeadText}`}>Experiences</h2>
      </motion.div>
      <div className='md:mt-10 relative'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Wrapper(Experience, "work");
