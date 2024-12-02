import React, { useState, useRef } from "react";
import "./index.scss";

const Upsale: React.FC = () => {
  const [isVideoActive, setVideoActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoToggle = () => {
    setVideoActive(!isVideoActive);
    if (videoRef.current) {
      if (!isVideoActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <section className="Upsale pt-20">
      <h2 className="my-10">Бонус</h2>

      <div className="upsale-box">
        <img src="/tostik/img/home/upsale/0.png" alt="Upsale image" />

        <div className="flex flex-col gap-5">
          <h3> А ви знаєте, <mark>що це</mark> таке?</h3>
          <button onClick={handleVideoToggle}>Дізнатися</button>
        </div>
      </div>

      <div className={`video-box ${isVideoActive ? "active" : ""}`}>
        <h3>Розприскувач олії</h3>

        <video ref={videoRef} src="/tostik/oil.mp4"></video>

        <div className="flex gap-2">
          <button onClick={handleVideoToggle}>
            {isVideoActive ? "Зупинити" : "Відтворити"}
          </button>
          <a href="#recipes" onClick={() => setVideoActive(false)}>
            Далі
          </a>
        </div>
      </div>
    </section>
  );
};

export default Upsale;
