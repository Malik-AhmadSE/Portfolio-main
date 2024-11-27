import { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import Wrapper from "../hoc/Wrapper";
import { slideIn } from "../utils/motion";
import { useFormik } from "formik";
import { ValidationSchema } from "../Validate/Validation";
import contactimg from "../assets/company/contactimg.svg";
// import { OrbitControls } from "@react-three/drei";
// import { CanvasLoader } from ".";
// import { Canvas } from "@react-three/fiber";
// import { Reactd } from "./canvas";
const initialvalue = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const reference = useRef();
  const form = useRef();
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    touched,
  } = useFormik({
    initialValues: initialvalue,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      emailjs
        .sendForm(
          "service_ukuita2",
          "template_g05vcm6",
          form.current,
          "aEEUeDX7fRHj3x_Rv"
        )
        .then(
          () => {
            alert("Successfully Submited Your Email");
            resetForm({});
          },
          (error) => {
            alert("Sorry, Something went wrong", error.text);
          }
        );
    },
  });

  return (
    <div className='flex xl:mt-12 xl:flex-row flex-col-reverse overflow-hidden text-white md:w-full gap-y-14'>
      <div className='flex-[0.6]'>
        <motion.div
          variants={slideIn("left", "tween", 0.5, 1)}
          className=' green-pink-gradient p-0.5 rounded-2xl bg-blue-500 w-full'
        >
          <div className='bg-black-100 p-8 rounded-2xl '>
            <p className={`${styles.sectionSubText}`}>Get In Touch</p>
            <h4 className={`${styles.sectionHeadText}`}>Contact</h4>

            <form
              ref={form}
              onSubmit={handleSubmit}
              noValidate
              className='flex flex-col mt-12 space-y-4 '
            >
              <label htmlFor='name' className='font-medium'>
                Name
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={values.name}
                  ref={reference}
                  onBlur={handleBlur}
                  onChange={handleChange("name")}
                  className='bg-gray-400 rounded-lg border-none  w-full mt-2 p-2 text-black '
                />
              </label>

              <div className='self-end mr-3 mt-2'>
                {errors.name && touched.name && (
                  <p className=' text-red-500 text-sm text-center ml-8'>
                    {errors.name}
                  </p>
                )}
              </div>

              <label htmlFor='email'>
                Email
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={values.email}
                  ref={reference}
                  onBlur={handleBlur}
                  onChange={handleChange("email")}
                  className='bg-gray-400 rounded-lg border-none  w-full mt-2 p-2 text-black'
                />
              </label>

              <div className='self-end mr-3 mt-2'>
                {errors.email && touched.email && (
                  <p className=' text-red-500 text-sm text-center ml-8'>
                    {errors.email}
                  </p>
                )}
              </div>

              <label htmlFor='message'>
                Message
                <textarea
                  rows={3}
                  type='text'
                  name='message'
                  id='message'
                  value={values.message}
                  ref={reference}
                  onBlur={handleBlur}
                  onChange={handleChange("message")}
                  className='bg-gray-400 rounded-lg border-none  w-full mt-2 p-2 text-black'
                />
              </label>
              <div className='self-end mr-3 mt-2'>
                {errors.message && touched.message && (
                  <p className=' text-red-500 text-sm text-center ml-8'>
                    {errors.message}
                  </p>
                )}
              </div>

              <div className='p-0.5 green-pink-gradient rounded-3xl w-fit self-center mt-4'>
                <button
                  className='w-24 h-8  border-none outline-none rounded-2xl uppercase font-bold transition-all bg-tertiary'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.5, 1)}
        className='flex-[0.5] flex justify-center items-center'
      >
        <img src={contactimg} alt='Contact Us' className='animate-fadeInOut' />
        {/* <Canvas camera={{position: [0,0,10]}}>
       <Suspense fallback={<CanvasLoader />}>
           <Reactd/>
           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={20}/>
          </Suspense>
        </Canvas>  */}
      </motion.div>
    </div>
  );
};

export default Wrapper(Contact, "contact");
