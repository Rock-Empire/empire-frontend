import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AUTH_ACTIONS } from "../../store/AuthSlice";

function UserDropDown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const user = JSON.parse(auth.user);

  const handleLogout = () => {
    axios.get(`${process.env.REACT_APP_API}/signout`);
    delete axios.defaults.headers.common["Authorization"];
    dispatch(AUTH_ACTIONS.logout());
    navigate("/");
  };
  return (
    <>
      {auth.auth === true ? (
        <div className='bg-white w-[150px]  absolute right-12 p-2 text-[14px] font-500'>
          <h1 className='text-[14px]'>Hello {user.firstName}</h1>
          <ul className='pt-4 leading-9'>
            <Link to='/history'>
              <li>History</li>
            </Link>
            <Link to='/user-profile'>
              <li>Profile</li>
            </Link>
            <Link to='/referral'>
              <li>Referral</li>
            </Link>
            <li className='pt-6' onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default UserDropDown;
