import * as Yup from "yup";
import { sub } from "date-fns/fp"

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email address you entered is invalid")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Too Short!")
    .max(11, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(10, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email address you entered is invalid")
    .required("Required"),
  password: Yup.string()
    .min(1, "The password you entered is too short")
    .max(50, "The password you entered is too long"),
  rememberMe: Yup.string().required("Required"),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name is too short")
    .max(50, "The first name you entered is too long")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Last name is too short")
    .max(50, "The last name you entered is too long")
    .required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string()
    .email("The email address you entered is invalid")
    .required("Required"),
  dateOfBirth: Yup.date()
    .required()
    .max(sub({ years: 18 }, new Date()), "User must be over 18 years old"),
  password: Yup.string()
    .min(1, "The password you entered is too short")
    .max(50, "The password you entered is too long")
    .required("Required"),
  terms: Yup.string().required("I agree to all the Terms and Privacy policy"),
});
