import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import axios from "axios";
import { AUTH_ACTIONS } from "../../store/AuthSlice";
import { LoginSchema } from "../../components/FormikErrors";

function Signin({ handleToggle, toggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Form = (
    <div className=''>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // Your backend logic goes below
            try {
              axios
                .post(`${process.env.REACT_APP_API}/auth/login`, values)
                .then((res) => {
                  console.log(res.data.data.user)
                  axios.defaults.headers.common["authorization"] =
                    res.data.token;
                  dispatch(AUTH_ACTIONS.login(res.data.data.user));
                  if (res.data.code === 200) {
                    navigate(`/`);
                  } else {
                    navigate("/sign-in");
                  }
                });
            } catch (error) {
              console.log(error);
            }
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
            <div className='mt-[2rem]'>
              <FaEye
                className='absolute mt-[3rem] right-[11rem] mini-sc:right-[2rem] mini-sc:bottom-[22.5rem] sm-sc:top-[7rem] sm-sc:right-[5rem]'
                onClick={handleToggle}
              ></FaEye>
              <label htmlFor='password'>
                Password <span className='text-treColor1'>*</span>
              </label>
              <input
                className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                type={toggle ? "text" : "password"}
                name='password'
                onChange={handleChange}
                value={values.password}
                placeholder=''
              />
              {errors.password && touched.password && errors.password ? (
                <div className='text-treColor1'>{errors.password}</div>
              ) : null}
            </div>
            <div className='flex items-center gap-[13rem] sm-sc:gap-[3rem]'>
              <div>
                <input
                  className='p-[0.6rem] mt-[10px] mb-[10px] border border-black rounded-md'
                  type='checkbox'
                  name='rememberMe'
                  onChange={handleChange}
                  value={values.rememberMe}
                  placeholder=''
                />
                <span className='pr-[10px]'>Remember me</span>
                {errors.rememberMe &&
                touched.rememberMe &&
                errors.rememberMe ? (
                  <div className='text-treColor1'>{errors.rememberMe}</div>
                ) : null}
              </div>
              <div className=''>
                <Link to='/forgot-password' className=''>
                  <p className='mt-[0.5rem] text-[#2D3748] text-[14px]'>
                    Forgot Passowrd?
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <button
                className='bg-treColor1 w-[30%] mt-[2rem] p-[1rem] text-[#ffffff] rounded-md text-[16px] mt-[3rem] sm-sc:w-[100%]'
                type='submit'
                disabled={isSubmitting}
              >
                Sign in
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
  return <div>{Form}</div>;
}

export default Signin;
