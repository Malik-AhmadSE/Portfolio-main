import { styles } from "../styles";
import Wrapper from "../hoc/Wrapper";
import { TypeAnimation } from "react-type-animation";
import PorfolioPic from "../assets/company/MinePic.png";
import CV from "../assets/resume/CV.pdf";
import { HashLink } from "react-router-hash-link";
// import { Distortion } from "./canvas";
const Hero = () => {
  const text = [
    "Ahmad Malik",
    3000,
    " A Web Developer",
    4000,
    "A MERN Stack Developer",
    4000,
    " A Web Designer",
    4000,
    "Data Scientist",
    4000,
  ];
  return (
    <section
      className={`w-full md:h-auto h-full  mx-auto flex flex-col lg:flex-row justify-center items-center gap-x-14`}
    >
      <div
        className={`mx-auto flex flex-row items-start gap-5 flex-[0.5] mb-10 md:mb-14`}
      >
        <div className='flex flex-col justify-center items-center mt-5 '>
          <div className='w-5 h-5 rounded-full bg-[#753df9]' />
          <div className='w-1 sm:h-96 h-52 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-pretty`}>
            Hi, Im &nbsp;
            <TypeAnimation
              sequence={text}
              wrapper='span'
              speed={1}
              style={{ color: "#753df9" }}
              repeat={Infinity}
              delay={2000}
              preRenderFirstString
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          An enthusiastic MERN Stack Developer, Data Scientist, and Researcher who thrives on tackling innovative projects that challenge his analytical mindset and technological expertise.
          </p>
          <div></div>
          <div className='mt-10 space-x-2 flex justify-start items-center'>
            <button className='font-bold text-xs md:text-lg p-2 rounded-lg border-2  bg-indigo-700 hover:bg-transparent'>
              <a href={CV} download='Ahmad_CV.pdf'>
                Download CV
              </a>
            </button>
            <button className='font-bold text-xs md:text-lg p-2 rounded-lg  border-2  hover:bg-indigo-700'>
              <HashLink smooth to={`#contact`}>
                Contact Me
              </HashLink>
            </button>
          </div>
        </div>
      </div>

      <div className='flex-[0.5] justify-start md:aspect-square items-baseline relative animate-fadeInOut'>
        <img
          src={PorfolioPic}
          alt='Profile Picture'
          className='h-full w-full object-scale-down rounded-lg'
        />
        {/* <Distortion/> */}
      </div>
    </section>
  );
};

export default Wrapper(Hero);
