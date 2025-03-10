import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {

    AOS.init({
      duration: 1000,
      easing: 'fade-up',
      once: false,
      offset: 400,
      delay: 700
    });

    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAOS;
