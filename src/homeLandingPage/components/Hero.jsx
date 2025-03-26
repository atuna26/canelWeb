import styles from "../../style";
import cnlbanner from "../../assets/cnlbanner.png";
import bannerVideo from "../../assets/bannerVideo.mp4";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }
  , [videoRef]);

  return (
    <section className={`flex flex-col w-full justify-center items-center`}>
     
      <div className="w-full flex justify-end">
        <img
          src={cnlbanner}
          className="shadow-2xl w-full brightness-90"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between items-center h-[200px] w-full px-5 relative ">
        <svg
          width="100%"
          height="100%"
          style={{ position: "relative", top: 0, left: 0 }}
        >
          <defs>
            <mask id="text-mask">
              {/* Üst Metin */}
              <text
                x="25%"
                y="20%"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                YENİLENEBİLİR ENERJİYLE
              </text>

              {/* Orta Metin */}
              <text
                x="55%"
                y="50%"
                fontSize="90"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                CANEL
              </text>

              {/* Alt Metin */}
              <text
                x="80%"
                y="75%"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                ÇOK DAHA GÜÇLÜ
              </text>
            </mask>
          </defs>
          

          <foreignObject width="100%" height="100%" mask="url(#text-mask)">
            <video
              src={bannerVideo}
              autoPlay
              ref={videoRef}
              loop
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </foreignObject>
        </svg>
      </div>
      
      
   
    </section>
  );
};

export default Hero;
