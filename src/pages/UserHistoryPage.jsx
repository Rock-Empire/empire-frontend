import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import UserHistory from '../UserHistory/UserHistory';

function UserHistoryPage() {
  return (
    <div>
      <Navbar />
        <div className='h-[100%] pt-[9rem]'>
          <UserHistory />
        </div>
      <Footer />
    </div>
  )
}

export default UserHistoryPage;