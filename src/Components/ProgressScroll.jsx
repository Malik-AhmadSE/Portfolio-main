import ScrollToTop from "react-scroll-to-top";
import { reactjs } from "../assets/index";
import { motion } from "framer-motion";
const ProgressScroll = () => {
  return (
    <div className="md:block hidden">
      <ScrollToTop
        smooth={true}
        style={{background:"none" }}
        component={
          <div className=" rounded-xl bg-violet-950 h-12 w-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeatType: "loop",
                repeat: Infinity,
                ease: "linear",
                duration: 5,
              }}
            >
              <div className="w-full h-full">
                <img src={reactjs} alt="X" />
              </div>
            </motion.div>
          </div>
        }
      />
    </div>
  );
};

export default ProgressScroll;
