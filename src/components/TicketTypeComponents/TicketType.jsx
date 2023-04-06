import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../Button";
// import { TicketTypeData } from "./TicketTypeData";
import Checkout from "../CheckoutComponents/CheckoutForm";

function TicketType() {
  const [ticketState, setTicketState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(0)

  const ticketData = async () => {
    setIsLoading(true);
    let tickets = await axios.get(`${process.env.REACT_APP_API}/games`);
    setTicketState(tickets.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    ticketData();
  }, []);

  if (isLoading) return <p className='mt-2 ml-4 text-treColor1 '>Loading...</p>;
  if (ticketState.length === 0)
    return <p className='mt-2 ml-4 text-treColor1 '>No data available.</p>;
  console.log(clicked)
  return (
    <div>
      <div className='text-center text-[34px] p-8 font-normal'>
        <h1>Ticket Type</h1>
      </div>
      <div className='flex justify-around gap-8 ml-12 mr-12 sm-sc:flex-col sm-sc:ml-8 sm-sc:mr-8'>
        {!isLoading &&
          ticketState &&
          ticketState.map((ticket) => (
            <ul className='' key={ticket.id}>
              <div className='relative flex text-[#ffffff] font-normal'>
                <p
                  className={
                    ticket.isActive === true
                      ? "bg-[#34A853] absolute p-2 mt-2 mr-2 left-1"
                      : "bg-[#595959] absolute p-2 mt-2 mr-2 left-1 disabled"
                  }
                >
                  {ticket.isActive === true ? "Active" : "Inactive"}
                </p>
              </div>
              <li
                className={
                  ticket.isActive === true
                    ? "bg-no-repeat font-normal bg-cover flex flex-col text-center items-center justify-center gap-8 font-normal sm-sc:w-[350px] sm-sc:h-[387px] leading-7"
                    : "bg-no-repeat font-normal bg-cover flex flex-col text-center items-center justify-center gap-8 font-normal sm-sc:w-[350px] sm-sc:h-[387px] leading-7 opacity-0.3"
                }
                style={{
                  backgroundImage: `url(${ticket.poster})`,
                  height: "478px",
                  width: "100%",
                }}
              >
                <h1 className='text-white font-600 text-[24px]'>
                  {ticket.name}
                </h1>
                <p className='text-white text-[16px]'> {ticket.description} </p>
                <Link
                  to={ticket.isActive === true ? "/checkout" : "/play-ticket"}
                >
                  <Button
                    title='Play Now'
                    className={
                      ticket.isActive === true
                        ? "text-white bg-treColor1 pt-2 pb-2 pl-4 pr-4 text-[14px]"
                        : "text-black bg-treColor1 pt-2 pb-2 pl-4 pr-4 text-[14px]"
                    }
                    onClicked={() => setClicked(ticket.id)}
                  />
                </Link>
              </li>
            </ul>
          ))}
      </div>
      <Checkout className="hidden invisible" />
    </div>
  );
}

export default TicketType;
