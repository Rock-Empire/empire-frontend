import React from "react";
import { UserHistoryData } from "./UserHistoryData";

function HistoryTable() {
  return (
    <div className='mt-[6rem] text-[14px] font-norml'>
      <table className='w-[1200px] m-auto border-2 sm-sc:w-[380px] mini-sc:w-[700px]'>
        <thead>
          <tr className='grid grid-cols-7 m-8 sm-sc:m-1'>
            <td>Image</td>
            <td>Ticket Type</td>
            <td>Played</td>
            <td>To be Won</td>
            <td>Date</td>
            <td>Time</td>
            <td>Status</td>
          </tr>
          <hr />
        </thead>
        <tbody>
          {UserHistoryData.map((data) => {
            return (
              <>
              <tr className='grid grid-cols-7 mb-4 mt-4 m-8 items-center sm-sc:m-1'>
                <td className=''>
                  <img className='w-[40px] h-[40px] ' src={data.image} alt='' />
                </td>
                <td className=''> {data.TicketType} </td>
                <td className=''> {data.Played} </td>
                <td className=''> N {data.ToBeWon} </td>
                <td className=''> {data.Date} </td>
                <td className=''> {data.Time} </td>
                <td
                  className={
                    data.Button === "Win"
                      ? "bg-[#34A853] flex justify-center items-center cursor-pointer text-white"
                      : "bg-[#EB4335] text-center flex justify-center items-center text-white"
                  }
                >
                  {" "}
                  {data.Button}{" "}
                </td>
              </tr>
              <hr />
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
