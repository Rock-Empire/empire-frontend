import React from "react";
import { Formik } from "formik";
import { PersonalSchema } from "../FormikErrors";

function PersDetails() {
  const Form = (
    <div className=''>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          gender: "",
          dateOfBirth: "",
        }}
        validationSchema={PersonalSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // Your backend logic goes below
            alert(JSON.stringify(values, null, 2));
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
          <form className='flex flex-col font-normal' onSubmit={handleSubmit}>
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
            <label htmlFor='gender'>
              Gender <span className='text-treColor1'>*</span>
            </label>
            <select
              name='gender'
              type='select'
              onChange={handleChange}
              value={values.gender}
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
            >
              <option value='Select your gender'>Select your gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
            {errors.gender && touched.gender && errors.gender ? (
              <div className='text-treColor1'>{errors.gender}</div>
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
            <div>
              <button
                className='bg-treColor1 w-[100%] mt-[1rem] p-[1rem] text-[#ffffff] rounded-md text-[16px]sm-sc:w-[100%] sm-sc:mb-[1rem]'
                type='submit'
                disabled={isSubmitting}
              >
                Create account
              </button>
              <button
                className='text-treColor1 border-2 w-[100%] mt-[1rem] p-[1rem] text-[#ffffff] rounded-md text-[16px]sm-sc:w-[100%] sm-sc:mb-[1rem]'
                type='cancel'
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
  return (
    <div className='mt-[5rem] p-12 ml-[-11rem] bg-white h-[100vh] pb-[3rem] w-[1100px] sm-sc:w-[400px] mini-sc:w-[600px] mini-sc:ml-[-5rem] ' >
      <h1 className='text-[24px] pb-8'>Personal Details</h1>
      <div className='w-[500px] sm-sc:w-[300px] '>{Form}</div>
    </div>
  );
}

export default PersDetails;
