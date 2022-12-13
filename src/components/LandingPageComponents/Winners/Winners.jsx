import React from "react";
import WinnersData from "./WinnersData";
// import WinnerBgImg from "../../assets/images/mailbg.png";
import WinnerCircle from "../../../assets/images/bgWinners.png";
import WinnerCircle1 from "../../../assets/images/bgWinners1.png";

function Winners() {
  return (
    <React.Fragment>
      <div
        className='p-8 sm-sc:mt-[7rem]'
        style={{
          // backgroundImage: `url(https://tre.ng/wp-content/uploads/2022/06/Background-mobile.png)`,
          background: "black",
          opacity: "0.9",
        }}
      >
        <img
          className='hidden absolute w-[200px] top-[133.5rem] left-[77.4rem] sm-sc:hidden lg-sc:hidden'
          src={WinnerCircle}
          alt=''
        />
        <div className='font-normal z-[10] flex flex-col text-center w-[900px] items-center m-auto sm-sc:mt-[0rem] sm-sc:w-[300px] mini-sc:mt-[1rem] lg-sc:w-[800px]'>
          <h1 className='text-[34px] sm-sc:text-[24px] text-[#E6EAFB]'>
            New Winners Announced every 4 weeks!
          </h1>
          <p className='text-[16px] sm-sc:text-[14px] text-[#E6EAFB]'>
            We are not just a lottery company, we are a company with a goal to
            change lives.
          </p>
          <div className='border-8 mt-[2rem] border-[#E6EAFB] rounded-2xl'>
            <table
              className='w-[900px] h-[400px] m-3 m-auto sm-sc:w-[330px] mini-sc:w-[700px]'
              style={{}}
            >
              <thead
                className='text-black  text-[16px] sm-sc:text-[10px]'
                style={{ border: "1px solid black", background: "#E6EAFB" }}
              >
                <tr className=' h-[3rem] '>
                  <th
                    style={{
                      border: "1px solid #E7E9EB",
                      background: "#E6EAFB",
                    }}
                  >
                    Jackpot
                  </th>
                  <th
                    style={{
                      border: "1px solid #E7E9EB",
                      background: "#E6EAFB",
                    }}
                  >
                    Winner
                  </th>
                  <th
                    style={{
                      border: "1px solid #E7E9EB",
                      background: "#E6EAFB",
                    }}
                  >
                    Draw Date
                  </th>
                  <th
                    style={{
                      border: "1px solid #E7E9EB",
                      background: "#E6EAFB",
                    }}
                  >
                    Price
                  </th>
                  <th
                    style={{
                      border: "1px solid #E7E9EB",
                      background: "#E6EAFB",
                    }}
                  >
                    Lucky Numbers
                  </th>
                </tr>
              </thead>
              <tbody className='w-[900px] text-[16px]  text-[#E6EAFB] sm-sc:text-[10px]'>
                {WinnersData.map((winner, i) => (
                  <tr
                    key={i}
                    className='w-[900px] text-center p-[1rem]'
                    style={{ border: "1px solid #E7E9EB" }}
                  >
                    <td style={{ border: "1px solid #E7E9EB" }}>
                      {winner.jackpot}
                    </td>
                    <td style={{ border: "1px solid #E7E9EB" }}>
                      {winner.winner}
                    </td>
                    <td style={{ border: "1px solid #E7E9EB" }}>
                      {winner.drawDate}
                    </td>
                    <td style={{ border: "1px solid #E7E9EB" }}>
                      N {winner.price.toLocaleString()}
                    </td>
                    <div className='flex justify-center m-1'>
                      <td className='text-center bg-treColor1 rounded-[50%] p-2'>{winner.luckyNumber["1"]}</td>
                      <td className='text-center bg-treColor1 rounded-[50%] p-2'>{winner.luckyNumber["2"]}</td>
                      <td className='text-center bg-treColor1 rounded-[50%] p-2'>{winner.luckyNumber["3"]}</td>
                      <td className='text-center bg-treColor1 rounded-[50%] p-2'>{winner.luckyNumber["4"]}</td>
                      <td className='text-center bg-treColor1 rounded-[50%] p-2'>{winner.luckyNumber["5"]}</td>
                      <td className='text-center bg-[#ffffff] text-treColor1 rounded-[50%] p-2'>{winner.luckyNumber["5"]}</td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <img
          className='hidden absolute w-[200px] top-[163.3rem] right-[81rem] sm-sc:hidden lg-sc:hidden'
          src={WinnerCircle1}
          alt=''
        />
      </div>
    </React.Fragment>
  );
}

export default Winners;
