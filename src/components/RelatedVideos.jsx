import React from "react";
import "../css/RelatedVideos.css";

// Import gambar langsung dari folder src/assets/img
import video1 from "../assets/img/1.jpg";
import video2 from "../assets/img/2.jpg";
import video3 from "../assets/img/3.jpg";
import video4 from "../assets/img/4.jpg";

const RelatedVideos = () => {
  const videos = [
    {
      title: "Teknik hidroponik - Teknik hidroponik tanpa tanah",
      views: "250 x dilihat",
      duration: "27 min",
      thumbnail: video1,
    },
    {
      title: "4 sistem hidroponik yang wajib kamu tau!!!",
      views: "800 x dilihat",
      duration: "15 min",
      thumbnail: video2,
    },
    {
      title: "Tutorial hidroponik mudah dan sederhana untuk pemula",
      views: "118 x dilihat",
      duration: "40 min",
      thumbnail: video3,
    },
    {
      title: "9 kesalahan yang sering dilakukan oleh petani hidroponik pemula",
      views: "100 x dilihat",
      duration: "10 min",
      thumbnail: video4,
    },
  ];

  return (
    <div className="related-videos">
      <h2 className="section-title">Video terkait</h2>
      <div className="videos-container">
        {videos.map((video, index) => (
          <a key={index} href="/video">
            <div className="video-card">
              <div className="thumbnail-container">
                <img
                  src={video.thumbnail} // Menggunakan gambar yang diimpor
                  alt={video.title}
                  className="thumbnail"
                />
                <div className="play-icon">▶</div>
                <div className="duration">{video.duration}</div>
              </div>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-views">{video.views}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;
