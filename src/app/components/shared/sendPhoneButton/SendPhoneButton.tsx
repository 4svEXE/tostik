import React, { useEffect, useState } from "react";

const SendPhoneButton: React.FC = () => {
  const [isInRange, setIsInRange] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    setIsInRange(scrollY <= window.innerHeight - 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // При монтуванні компонента одразу перевіряємо початкову позицію скролу
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0, // Прокрутка до початку сторінки
      behavior: "smooth", // Плавна прокрутка
    });
  };

  return (
    <button
      type="button"
      className={`send-button send-phone flex justify-center items-center z-[99999] ${
        !isInRange ? "not-in-range" : ""
      }`}
      onClick={handleClick} // Обробка кліку по кнопці
    >
      <div className="svg-wrapper-1 flex justify-start items-center">
        <div className="svg-wrapper mt-1 mr-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#ffffff"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="#ffffff"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default SendPhoneButton;
