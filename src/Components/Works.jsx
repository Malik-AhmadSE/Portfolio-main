import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { githubwhite } from "../assets/index";
import Wrapper from "../hoc/Wrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants/index";

const WorkCArd = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.2 * index, 0.75)}>
      <Tilt
        options={{
          max: 25,
          speed: 400,
          scale: 1,
        }}
        className=' green-pink-gradient p-0.5 rounded-3xl shadow-card'
      >
        <div className='bg-tertiary rounded-3xl p-5  sm:w-[360px] w-full'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className=' h-full w-full object-cover rounded-3xl '
            />
            <div className='absolute inset-0 flex justify-end -m-3.5 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
                title='GitHub'
              >
                <img src={githubwhite} alt='Github' />
              </div>
            </div>
          </div>

          <div className='mt-5 mb-3'>
            <h4 className=' text-2xl font-bold text-white'>{name}</h4>
            <p className='mt-2 text-secondary text-justify'>{description}</p>
          </div>
          <div className='flex flex-wrap gap-x-4'>
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color} `}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h4 className={`${styles.sectionHeadText}`}>Projects</h4>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-8'
      >
        Working with a variety of languages and technologies allows me to
        contribute to projects that are both personal and professional. I have
        Worked as Front End Developer in developing the Functional UI for
        various Projects and Following is my selected work. You can find more on
        my GitHub Account. All of These Projects are Fully Functional Website.
      </motion.p>
      <div className='mt-14 flex md:flex-row flex-col justify-center items-center md:flex-wrap gap-7  '>
        {projects.map((project, index) => (
          <WorkCArd key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Wrapper(Works, "work");
