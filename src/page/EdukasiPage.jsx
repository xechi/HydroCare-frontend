import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../css/EdukasiPage.css";
import RelatedVideos from "../components/RelatedVideos";

const EdukasiPage = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: "Budidaya tanaman sayuran dengan hidroponik",
      description:
        "Keseimbangan pertumbuhan dan menghindari penyakit fisiologi yang berhubungan dengan ... untuk meningkatkan ketahanan tanaman terhadap serangan penyakit atau hama. Menurut ...",
      references: "148 kali",
      link: "/artikeledukasi",
    },
    {
      title: "Media tanam terbaik untuk hidroponik",
      description:
        "Media tanam seperti rockwool, cocopeat, dan arang sekam menjadi favorit karena mampu menyerap air dengan baik dan menyediakan nutrisi bagi tanaman. Pilihan media ini ...",
      references: "98 kali",
      link: "/artikeledukasi",
    },
    {
      title: "Cara memilih bibit unggul untuk hidroponik",
      description:
        "Memilih bibit unggul sangat penting untuk hasil panen maksimal. Bibit yang sehat dan tahan terhadap penyakit memberikan hasil yang lebih baik dalam sistem hidroponik ...",
      references: "75 kali",
      link: "/artikeledukasi",
    },
    {
      title: "Manfaat hidroponik untuk urban farming",
      description:
        "Hidroponik memberikan solusi bercocok tanam di lahan terbatas. Dengan metode ini, masyarakat perkotaan dapat menanam sayuran segar di rumah mereka ...",
      references: "120 kali",
      link: "/artikeledukasi",
    },
  ];

  return (
    <div className="edukasipage" id="edukasi">
      <NavbarComponent />
      <div className="hero-section3">
        <div className="overlay-edu">
          <h1 className="headline">
            "Dari Pemula hingga Ahli, Kami Siap Membimbing Anda."
          </h1>

          {/* Bagian Pencarian */}
          <div className="search-container">
            <div className="search-input-container">
              <img
                src="src/assets/img/icon-search.png"
                alt="search"
                className="icon-search"
              />
              <input type="text" className="search-input" />
              <button className="search-button">
                <i className="fa fa-search">Search</i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="main-content">
        <div className="articles-section">
          <h2>HIDROPONIK</h2>
          {articles.map((article, index) => (
            <div
              key={index}
              className="article-card"
              onClick={() => navigate(article.link)} // Navigasi ke halaman artikel
            >
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-footer">
                <span>⭐ Simpan</span>
                <span>Dirujuk {article.references}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar">
          <ul>
            <li>Tutorial Hidroponik</li>
            <li>Macam-macam bibit tanaman hidroponik</li>
            <li>Penyakit dalam tanaman hidroponik</li>
            <li>Media Tanam Hidroponik</li>
            <li>Cara Mengetahui Tanaman Siap Panen</li>
            <li>Alat dan bahan dasar untuk memulai hidroponik di rumah</li>
            <li>Kesalahan umum dalam hidroponik dan cara mengatasinya</li>
          </ul>
        </div>
      </div>

      <RelatedVideos />

      <FooterComponent />
    </div>
  );
};

export default EdukasiPage;
