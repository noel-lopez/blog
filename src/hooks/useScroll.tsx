import { useEffect, useState } from "react";

const useScroll = () => {
  const [isInTop, setIsInTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsInTop(window.scrollY < 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isInTop };
};

export default useScroll;
