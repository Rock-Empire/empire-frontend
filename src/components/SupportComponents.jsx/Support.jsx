import React from "react";

function Support() {
  const Map = (
    <iframe
      title='iframe the empire google map'
      className='w-[700px] h-[700px] sm-sc:hidden mini-sc:w-[400px]'
      src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=The rock empire&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
    ></iframe>
  );

  console.log(Map)

  if(!Map) return <div>Loading...</div>;
  return (
    <div className=''>
      <div class='mapouter'>
        {Map}
      </div>
    </div>
  );
}

export default Support;
