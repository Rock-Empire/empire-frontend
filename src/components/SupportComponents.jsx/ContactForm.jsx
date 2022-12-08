import React from "react";
import { Formik } from "formik";
import { ContactSchema } from '../FormikErrors'

function ContactForm() {

  const Form = (
    <div className=''>
      <h1 className='font-bold text-[34px] pb-[2rem] sm-sc:text-[24px]'>
        Get in touch with us
      </h1>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          message: "",
        }}
        validationSchema={ContactSchema}
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
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='email'>
              Email <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[90%] border border-black rounded-md'
              type='email'
              name='email'
              onChange={handleChange}
              value={values.email}
              placeholder=''
            />
            {errors.email && touched.email && errors.email ? (
              <div className='text-treColor1'>{errors.email}</div>
            ) : null}
            <label htmlFor='phone number'>
              Phone Number <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[90%] border border-black rounded-md'
              type='tel'
              name='phoneNumber'
              onChange={handleChange}
              value={values.phoneNumber}
              placeholder=''
            />
            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber ? (
              <div className='text-treColor1'>{errors.phoneNumber}</div>
            ) : null}
            <label htmlFor='phone number'>
              Message <span className='required text-treColor1'>*</span>
            </label>
            <textarea
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[90%] border border-black rounded-md'
              type='text'
              name='message'
              onChange={handleChange}
              value={values.message}
              placeholder=''
            />
            {errors.message && touched.message && errors.message ? (
              <div className='text-treColor1'>{errors.message}</div>
            ) : null}
            <button
              className='bg-treColor1 w-[20%] p-[1rem] text-[#ffffff] rounded-md text-[16px] mt-[3rem]sm-sc:w-[30%]'
              style={{ rows: "10", cols: "50" }}
              type='submit'
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );

  return (
    <div className='w-[700px] h-[700px] sm-sc:w-[350px] sm-sc:h-[400px]'>
      { Form }
    </div>
  );
}

export default ContactForm;
