import React from 'react'

const Test = () => {
  return (
    <div>
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
  )
}

export default Test
