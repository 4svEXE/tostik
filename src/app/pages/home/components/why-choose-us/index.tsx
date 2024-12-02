import React, { useState, useEffect } from "react";
import "./index.scss";

const WhyUs: React.FC = () => {
  const [opacityValues, setOpacityValues] = useState<number[]>([
    0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const slides = document.querySelectorAll(".slide");
      const updatedOpacities = Array.from(slides).map((slide) => {
        const rect = slide.getBoundingClientRect();
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        );
        const totalHeight = rect.height;
        return totalHeight > 0 ? visibleHeight / totalHeight : 0;
      });
      setOpacityValues(updatedOpacities);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="WhyUs">
      <div className="w-full title">
        <h2 className="mb-10">
          Чому <mark>MAGIO?</mark>
        </h2>
      </div>

      <div className="slides">
        <div className="slide" style={{ opacity: opacityValues[0] }}>
          <div className={`box`}>
            <h5>Без зтікаючої олії</h5>
          </div>
        </div>

        <div className="slide" style={{ opacity: opacityValues[1] }}>
          <div className={`box animated delay-1`}>
            <h5>Смачна шаурма!</h5>
            <img src="/tostik/img/home/recipes/6.png" alt="" />
          </div>
          <div className={`box animated delay-2`}>
            <h5>Хрусткі тости з начинкою на ваш смак!</h5>
            <img src="/tostik/img/home/recipes/1.png" alt="" />
          </div>
          <div className={`box animated delay-3`}>
            <h5>Чіпси та сухарики - без олії за 10хв! <br/> І багато чого ще</h5>
            <img src="/tostik/img/home/recipes/4.png" alt="" />
          </div>
        </div>

        <div className="slide" style={{ opacity: opacityValues[2] }}>
          <div className={`box`}>
            <h5>Без довгих, брудних приготувань</h5>
          </div>
        </div>

        <div className="slide" style={{ opacity: opacityValues[3] }}>
          <div className={`box`}>
            <h5>Чисто та акуратно! можна просто протерти</h5>
            <img src="/tostik/img/home/product/1.jpg" alt="" />
          </div>

          <div className={`box`}>
            <h5>Легко мити завдяки з'ємним насадкам</h5>
            <img src="/tostik/img/home/product/2.jpg" alt="" />
          </div>

          <div className={`box`}>
            <h5>Легка в обслуговуванні</h5>
            <img src="/tostik/img/home/product/4.jpg" alt="" />
          </div>
        </div>

        <div className="slide" style={{ opacity: opacityValues[4] }}>
          <div className={`box`}>
            <h5>Досі не знаєте що подарувати?</h5>
          </div>
        </div>

        <div className="slide" style={{ opacity: opacityValues[5] }}>
          <div className={`box`}>
            <h5>Чудовий подарунок та незамінна річ для кожної кухні</h5>
          </div>

          <div className={`box`}>
            <h5>Швидка доставка в ваше місто</h5>
            <img src="/tostik/img/home/product/7.jpg" alt="" />
          </div>

          <div className={`box`}>
            <h5>+ розприскувач олії в подарунок!</h5>
            <img src="/tostik/img/home/upsale/0.png" alt="Upsale image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
