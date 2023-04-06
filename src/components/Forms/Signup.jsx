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
          firstname: "",
          lastname: "",
          username: "",
          phone: "",
          email: "",
          dateOfBirth: "",
          password: "",
          terms: true,
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            axios
              .post(`${process.env.REACT_APP_API}/auth/register`, values)
              .then((res) => {
                console.log(res);
                navigate('/sign-in');
              })
              .catch((err) => {
                console.log(err.response.data);
              });
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
                <label htmlFor='firstname'>
                  First Name <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type='text'
                  name='firstname'
                  onChange={handleChange}
                  value={values.firstname}
                  placeholder=''
                />
                {errors.firstname && touched.firstname && errors.firstname ? (
                  <div className='text-treColor1'>{errors.firstname}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor='lastname'>
                  Last Name <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type='text'
                  name='lastname'
                  onChange={handleChange}
                  value={values.lastname}
                  placeholder=''
                />
                {errors.lastname && touched.lastname && errors.lastname ? (
                  <div className='text-treColor1'>{errors.lastname}</div>
                ) : null}
              </div>
            </div>
            <label htmlFor='username'>
              Username <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='text'
              name='username'
              onChange={handleChange}
              value={values.username}
              placeholder=''
            />
            {errors.username && touched.username && errors.username ? (
              <div className='text-treColor1'>{errors.username}</div>
            ) : null}
            <label htmlFor='phone'>
              Phone Number <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='tel'
              name='phone'
              onChange={handleChange}
              value={values.phone}
              placeholder=''
            />
            {errors.phone && touched.phone && errors.phone ? (
              <div className='text-treColor1'>{errors.phone}</div>
            ) : null}
            <label htmlFor='email'>
              Email <span className='text-treColor1'>*</span>
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
              Password <span className='text-treColor1'>*</span>
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