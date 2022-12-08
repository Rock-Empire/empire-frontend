import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

function FAQQuestions() {
  return (
    <div className='h-[60vh] flex align-center'>
      <div className='w-[1200px] m-auto'>
        <div className='text-center'>
          <h1 className='text-[34px]'>FAQ</h1>
          <p className='text-[14px] pt-[10px]'>
            Below you get answers to the questions we get asked the most about
            Rock Empire
          </p>
        </div>
        <div className='mt-[2rem]'>
          <Collapse defaultActiveKey={["1"]}>
            <Panel className='text-[16px] text-[#141204]' header='Is my contribution tax deductible?' key='1'>
              <p className='text-[14px]'>No</p>
            </Panel>
            <Panel className='text-[16px] text-[#141204]' header='Can I request a refund?' key='2'>
              <p>
                No we only process refunds when the ticket fail to complete.
              </p>
            </Panel>
            <Panel className='text-[16px] text-[#141204]' header='Will I be notified when the lottery ends' key='3'>
              <p>Yes</p>
            </Panel>
            <Panel className='text-[16px] text-[#141204]' header='Can non profit work with you' key='4'>
              <p>Yes</p>
            </Panel>
            <Panel className='text-[16px] text-[#141204]' header='Can I multiple entries per raffle' key='5'>
              <p>Yes, you can purchase as many tickets as you wish.</p>
            </Panel>
            <Panel className='text-[16px] text-[#141204]' header='Do you provide any support' key='6'>
              <p>Yes, if you have any query contact support@tre.ng.</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default FAQQuestions;
