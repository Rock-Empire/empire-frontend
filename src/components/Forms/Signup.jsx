import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { RegisterSchema } from "../FormikErrors";
import { FaEye } from "react-icons/fa";

function Signup({ handleToggle, toggle }) {
  const navigate = useNavigate()

  const Form = (
    <div className=''>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: "",
          password: "",
          // terms: true,
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            axios
              .post(`${process.env.REACT_APP_API}/signup`, values)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            navigate('/sign-in')
            actions.setSubmitting(false);
            actions.resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='flex gap-[1rem]'>
              <div>
                <label htmlFor='firstName'>
                  First Name <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type='text'
                  name='firstName'
                  onChange={handleChange}
                  value={values.firstName}
                  placeholder=''
                />
                {errors.firstName && touched.firstName && errors.firstName ? (
                  <div className='text-treColor1'>{errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor='lastName'>
                  Last Name <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type='text'
                  name='lastName'
                  onChange={handleChange}
                  value={values.lastName}
                  placeholder=''
                />
                {errors.lastName && touched.lastName && errors.lastName ? (
                  <div className='text-treColor1'>{errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <label htmlFor='phoneNumber'>
              Phone Number <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='tel'
              name='phoneNumber'
              onChange={handleChange}
              value={values.phoneNumber}
              placeholder=''
            />
            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber ? (
              <div className='text-treColor1'>{errors.phoneNumber}</div>
            ) : null}
            <label htmlFor='email'>
              email <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='email'
              name='email'
              onChange={handleChange}
              value={values.email}
              placeholder=''
            />
            {errors.email && touched.email && errors.email ? (
              <div className='text-treColor1'>{errors.email}</div>
            ) : null}
            <label htmlFor='password'>
              Date of Birth <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='date'
              name='dateOfBirth'
              onChange={handleChange}
              value={values.dateOfBirth}
              placeholder=''
            />
            {errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth ? (
              <div className='text-treColor1'>{errors.dateOfBirth}</div>
            ) : null}
            <FaEye
              className='absolute mt-[25.3rem] right-[11rem] mini-sc:right-[2rem] mini-sc:bottom-[22.5rem] sm-sc:right-[5rem]'
              onClick={handleToggle}
            ></FaEye>
            <label htmlFor='password'>
              password <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.5rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type={toggle ? "password" : "text"}
              name='password'
              onChange={handleChange}
              value={values.password}
              placeholder=''
            />
            {errors.password && touched.password && errors.password ? (
              <div className='text-treColor1'>{errors.password}</div>
            ) : null}
            <div>
              <Link>
                <input
                  className='p-[0.5rem] border border-black rounded-md'
                  type='checkbox'
                  name='terms'
                  onChange={handleChange}
                  value={values.terms}
                  placeholder=''
                />
                <span className='pr-[10px]'>
                  I agree to all the Terms and Privacy policy
                </span>
                {errors.terms && touched.terms && errors.terms ? (
                  <div className='text-treColor1'>{errors.terms}</div>
                ) : null}
              </Link>
            </div>
            <div>
              <button
                className='bg-treColor1 w-[100%] mt-[1rem] p-[1rem] text-[#ffffff] rounded-md text-[16px]sm-sc:w-[100%] sm-sc:mb-[1rem]'
                type='submit'
                disabled={isSubmitting}
              >
                Create account
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );

  return (
    <div>
      {Form}
    </div>
  )
}

export default Signup;