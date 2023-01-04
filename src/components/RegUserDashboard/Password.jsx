import React, {useState} from "react";
import { Formik } from "formik";
import { FaEye } from "react-icons/fa";
import { PasswordSchema } from "../FormikErrors";

function Password() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    console.log("toggle");
  };

  const Form = (
    <div className=''>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={PasswordSchema}
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
            <div className=' gap-[1rem]'>
              <div>
                <FaEye
                  className='absolute right-[42rem] mt-[3rem] mini-sc:right-[2rem] mini-sc:bottom-[22.5rem] sm-sc:right-[5rem]'
                  onClick={handleToggle}
                ></FaEye>
                <label htmlFor='currentPassword'>
                  Current Password <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.5rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type={toggle ? 'password' : 'text'}
                  name='currentPassword'
                  onChange={handleChange}
                  value={values.currentPassword}
                  placeholder=''
                />
                {errors.currentPassword && touched.currentPassword && errors.currentPassword ? (
                  <div className='text-treColor1'>{errors.currentPassword}</div>
                ) : null}
              </div>
              <div>
                <FaEye
                  className='absolute right-[42rem] mt-[3rem] mini-sc:right-[2rem] mini-sc:bottom-[22.5rem] sm-sc:right-[5rem]'
                  onClick={handleToggle}
                ></FaEye>
                <label htmlFor='newPassword'>
                  New Password <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.5rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type={toggle ? 'password' : 'text'}
                  name='newPassword'
                  onChange={handleChange}
                  value={values.newPassword}
                  placeholder=''
                />
                {errors.newPassword && touched.newPassword && errors.newPassword ? (
                  <div className='text-treColor1'>{errors.newPassword}</div>
                ) : null}
              </div>
              <div>
                <FaEye
                  className='absolute right-[42rem] mt-[3rem] mini-sc:right-[2rem] mini-sc:bottom-[22.5rem] sm-sc:right-[5rem]'
                  onClick={handleToggle}
                ></FaEye>
                <label htmlFor='confirmPassword'>
                  Confirm Password <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.5rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type={toggle ? 'password' : 'text'}
                  name='confirmPassword'
                  onChange={handleChange}
                  value={values.confirmPassword}
                  placeholder=''
                />
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword ? (
                  <div className='text-treColor1'>{errors.confirmPassword}</div>
                ) : null}
              </div>
              <div>
              <button
                className='bg-treColor1 w-[100%] mt-[1rem] p-[1rem] text-[#ffffff] rounded-md text-[16px]sm-sc:w-[100%] sm-sc:mb-[1rem]'
                type='submit'
                disabled={isSubmitting}
              >
                Save Password
              </button>
            </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
  return (
    <div className='mt-[5rem] p-12 ml-[-11rem] bg-white h-[100vh] pb-[3rem] w-[1100px]'>
      <h1 className='text-[24px] pb-8'>Password Reset</h1>
      <div className='w-[500px] '>{Form}</div>
    </div>
  );
}

export default Password;
