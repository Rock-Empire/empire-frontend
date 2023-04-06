import React from "react";
import { UserHistoryData } from "./UserHistoryData";
import HistoryTable from "./HistoryTable";

function UserHistory() {
  const [selected, setSelected] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const history = UserHistoryData.length;

  console.log("Selected:", selected);
  console.log("Filtered Selected:", filteredData);

  const filt = () => {
      const filtered = UserHistoryData.filter((item) => item.TicketType === selected);
      setFilteredData(filtered);
    };

  React.useEffect(() => {
    filt();
  }, [selected]);

  const getTicketType = () => {
    return UserHistoryData.map((item) => {
      return (
        <option
          className='sm-sc:relative top-50 right-10 '
          key={item.id}
          value={item.TicketType}
        >
          {item.TicketType}
        </option>
      );
    });
  };

  return (
    <div className=''>
      <div>
        <header className='flex justify-between ml-[8rem] mr-[8rem] items-center  sm-sc:mr-[2rem]  sm-sc:ml-[2rem] '>
          <h1 className='text-[24px]'>History ({history} )</h1>
          <select
            onChange={(e) => setSelected(e.target.value)}
            className='text-[12px] p-2'
            name='ticket-type'
            id=''
          >
            <option
              value='All tickets'
              className='sm-sc:absolute sm-sc:top-[50rem] '
            >
              All tickets
            </option>
            {getTicketType()}
          </select>
        </header>
      </div>
      <HistoryTable ticket={filteredData} selected={selected} />
    </div>
  );
}

export default UserHistory;
