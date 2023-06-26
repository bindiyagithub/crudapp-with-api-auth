import * as yup from "yup";

export const validations = yup.object({
  name: yup.string().required("Firstname is required")
    .matches(/^[a-zA-Z]+$/, "Only text input is allowed"),

  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),

  gender: yup.string()
    .required("Gender is required"),

  country: yup.string().required("Country is required"),
  zipcode: yup.string().required("Zip Code is required"),
  

  email: yup
    .string()
    .email("Invalid email")
    // .matches(
    //   /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/,
    //   "Enter Strong Password"
    // )
    .required("Email is required"),
  
    mobileNo: yup
    .string()
    .required("Mobile Number is required")
    .matches(/^\d{10}$/, "Invalid mobile number"),  

  userName: yup.string().required("UserName is Required"),

  password: yup
    .string()
    .matches(
      /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/,
      "Enter Strong Password"
    )
    .required("Password is required"),

  cardNo: yup.string().min(4).max(4).required("Card Number is required"),

  passPin: yup.string().required("Card PIN is required"),

  isActive : yup.boolean().oneOf([true], 'Please check the checkbox')
});

export default validations