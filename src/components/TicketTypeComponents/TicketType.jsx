import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { TicketTypeData } from "./TicketTypeData";

function TicketType() {
  return (
    <div>
      <div className='text-center text-[34px] p-8 font-normal'>
        <h1>Ticket Type</h1>
      </div>
      <div className='flex justify-around gap-8 ml-12 mr-12 sm-sc:flex-col sm-sc:ml-8 sm-sc:mr-8'>
        {TicketTypeData &&
          TicketTypeData.map((ticket) => (
            <ul className='' key={ticket.id}>
              <div className='relative flex text-[#ffffff] font-normal'>
                <p
                  className={
                    ticket.status === "active"
                      ? "bg-[#34A853] absolute p-2 mt-2 mr-2 left-1"
                      : "bg-[#595959] absolute p-2 mt-2 mr-2 left-1"
                  }
                >
                  {ticket.status}
                </p>
              </div>
              <li
                className={
                  ticket.status === "active"
                    ? "bg-no-repeat font-normal bg-cover flex flex-col text-center items-center justify-center gap-8 font-normal sm-sc:w-[350px] sm-sc:h-[387px] leading-7"
                    : "bg-no-repeat font-normal bg-cover flex flex-col text-center items-center justify-center gap-8 font-normal sm-sc:w-[350px] sm-sc:h-[387px] leading-7 opacity-0.3"
                }
                style={{
                  backgroundImage: `url(${ticket.image})`,
                  height: "478px",
                  width: "100%",
                }}
              >
                <h1 className='text-white font-600 text-[24px]'>
                  {ticket.title}
                </h1>
                <p className='text-white text-[16px]'> {ticket.desc} </p>
                <Link to={ticket.status === 'active' ? '/checkout' : '/play-ticket'}>
                  <Button
                    title='Play Now'
                    className={
                      ticket.status === "active"
                        ? "text-white bg-treColor1 pt-2 pb-2 pl-4 pr-4 text-[14px]"
                        : "text-black bg-treColor1 pt-2 pb-2 pl-4 pr-4 text-[14px] disabled"
                    }
                  />
                </Link>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default TicketType;
