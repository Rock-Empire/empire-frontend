// // import React from 'react';
// // import { GoogleMap, useLoadScript } from '@react-google-maps/api';
// // import './maps.css';

// // export default function Map() {

// //   return (
// //     <div>
// //       <Maps />
// //     </div>
// //   )
// // }

// export default function Maps() {
//   // const { isLoaded } = useLoadScript({
//   //   googleMapsApiKey: 'AIzaSyCEVPWp4Uh3G1zgsFcfP57kftgKziTOylw',
//   // });

//   // if(!isLoaded) return <div>loading...</div>
//   return (
//     // <GoogleMap zoom={10} center={{ lat:6.4334, lng: 3.5426 }} mapContainerClassName='maps'>
//     //   {/* <Maker /> */}
//     // </GoogleMap>

//   )
// }

import * as Yup from "yup";

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
  phoneNumber: Yup.string()
    .min(10, "Phone number is too short")
    .max(11, "Phone number is too long")
    .required("Required"),
  email: Yup.string()
    .email("The email address you entered is invalid")
    .required("Required"),
  dateOfBirth: Yup.string().required("Required"),
  password: Yup.string()
    .min(1, "The password you entered is too short")
    .max(50, "The password you entered is too long")
    .required("Required"),
  terms: Yup.string().required("I agree to all the Terms and Privacy policy"),
});
