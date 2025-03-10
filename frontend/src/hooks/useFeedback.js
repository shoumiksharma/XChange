import { useEffect, useState } from 'react';

const useFeedback = () => {
  const [feedback, setFeedback] = useState(false);

  const openFeedback = () => setFeedback(true);
  const closeFeedback = () => setFeedback(false);

  useEffect(() => {
    if (feedback) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [feedback]);

  return {
    feedback,
    openFeedback,
    closeFeedback
  };
};

export default useFeedback;
