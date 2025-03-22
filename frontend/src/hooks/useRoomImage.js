import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useRoomImage = (id) => {
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/room/get-photo?id=${id}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
          dispatch({ type: 'uploaded' });
        } 
        else {
          dispatch({ type: 'notUploaded' });
          console.log("Failed to fetch image");
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [dispatch]);

  return imageUrl;
};

export default useRoomImage;
