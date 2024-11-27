import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const namerules = /^(?=.*[a-z])(?=.*[A-Z])$/;
export const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    // .matches(namerules, { message: "Name Must Contain only letters" })
    .min(8, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().required("Required"),
});
