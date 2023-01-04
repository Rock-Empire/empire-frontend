import React from 'react';
import { UserHistoryData } from './UserHistoryData';
import HistoryTable from './HistoryTable';

function UserHistory() {

  const history = UserHistoryData.length;
  return (
    <div className="">
      <div>
        <header  className='flex justify-between ml-[8rem] mr-[8rem] items-center  sm-sc:mr-[2rem]  sm-sc:ml-[2rem] '>
          <h1 className='text-[24px]'>History ({history})</h1>
          <select className='text-[12px]' name="ticket-type" id="">
            <option value="All tickets">All tickets</option>
            <option value="win 10000">Win N10000</option>
          </select>
        </header>
      </div>
      <HistoryTable />
    </div>
  )
}

export default UserHistory;