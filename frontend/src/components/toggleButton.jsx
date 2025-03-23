import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);
  const hosted = useSelector((state) => state.room.isRoomHosted);
  const dispatch = useDispatch();


  const updateUser = async () => {

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ room_hosted: !isToggled })
      })

      if (response.status != 200) {
        console.log("Error. Try again !");
      }

      return response;
    }

    catch (err) {
      console.log("Error : ", err);
    }
  }

  useEffect( () => {
    if((!isToggled && hosted) || (isToggled && !hosted)){
      setIsToggled(!isToggled);
    }
  })

  const toggle = async () => {
    setIsToggled(!isToggled);
    if (hosted) {
      dispatch({ type: 'notHosted' });
    }
    else {
      dispatch({ type: 'hosted' });
    }
    const data = await updateUser();
    console.log(data);
  }

  return (
    <button onClick={toggle} className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${isToggled ? 'bg-blue-500' : 'bg-[#333333]'}`}>
      <div className={`w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${isToggled ? 'translate-x-8' : ''}`}></div>
    </button>
  );
};

export default ToggleButton;
