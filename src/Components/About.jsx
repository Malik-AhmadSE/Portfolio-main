import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Wrapper from "../hoc/Wrapper";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className='xs:w-64 w-full'
      options={{
        max: 45,
        scale: 1,
        speed: 400,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-3xl shadow-card'
      >
        <div className='bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-20 h-20 object-contain' />
          <h3 className='text-white text-[20px]font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className='snap-center'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h4 className={`${styles.sectionHeadText}`}>Overview</h4>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-8'
      >
      I am a software engineering graduate with 2 years of professional experience in the MERN stack. With strong expertise in JavaScript and Python, I am proficient in frameworks such as ReactJS, Next.js 14, Node.js, Express.js, and Flask. I also have experience in deployment using platforms like Azure and Google Cloud Platform (GCP). As a self-motivated and goal-oriented professional, I thrive on tackling unique and challenging tasks, constantly pushing boundaries to deliver robust, efficient, and innovative solutions for web and backend development.
      </motion.p>
      <div className='mt-20 flex justify-center items-center flex-wrap gap-5'>
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Wrapper(About, "about");
