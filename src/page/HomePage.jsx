import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // Deklarasikan navigate

  // Fungsi untuk menangani klik pada tombol
  const handleButtonClick = () => {
    navigate("/edukasi"); // Arahkan ke /edukasi saat tombol diklik
  };

  return (
    <div className="homepage">
      <NavbarComponent />
      <div className="hero-section">
        <div className="overlay">
          <h1 className="headline">
            &quot;Temukan solusi hidroponik inovatif untuk meningkatkan hasil
            panen Anda.&quot;
          </h1>
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

      {/* Section Kenapa Memilih Kami */}
      <div className="why-choose-us">
        <h2 className="section-title">Kenapa memilih kami?</h2>
        <div className="content-container">
          {/* Gambar Kiri */}
          <div className="image-container">
            <img
              src="src/assets/img/gambar2.png"
              alt="Kenapa memilih kami"
              className="main-image"
            />
          </div>

          {/* Teks Kanan */}
          <div className="text-container">
            <div className="text-item">
              <h3>Teknologi AI Terdepan untuk Hidroponik</h3>
              <p>
                Kami menggunakan teknologi kecerdasan buatan canggih yang
                membantu Anda memantau, menganalisis, dan mengoptimalkan sistem
                hidroponik secara real-time. Dengan sistem berbasis AI kami,
                Anda dapat memaksimalkan hasil panen dengan efisiensi tinggi dan
                meminimalisir risiko.
              </p>
            </div>
            <div className="text-item">
              <h3>Komunitas Edukasi Terintegrasi</h3>
              <p>
                Melalui EduConnect, kami menyediakan platform bagi para praktisi
                dan peminat hidroponik untuk belajar, berbagi ilmu, dan
                terkoneksi dengan para ahli. EduConnect memungkinkan Anda
                mendapatkan panduan langsung dan pengetahuan terkini untuk
                kesuksesan dalam bercocok tanam hidroponik.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Hydro AI */}
      <div className="hydro-ai-section">
        <h2 className="section-title2">Hydro AI</h2>
        <div className="hydro-ai-container">
          <div className="text-content">
            <p>
              Menggunakan HydroAI, kami mempermudah Anda untuk mendeteksi
              potensi masalah pada tanaman sejak dini, memberikan rekomendasi
              perawatan, dan membantu Anda mencapai pertumbuhan tanaman yang
              lebih sehat dan produktif.
            </p>
            <p>
              HydroAI siap menjadi partner andalan Anda di ladang! Hanya dengan
              mengunggah foto, petani akan mendapatkan analisis cepat dan
              akurat, memungkinkan tindakan pencegahan atau perawatan yang tepat
              waktu. Mari bersama menciptakan pertanian yang lebih cerdas,
              produktif, dan berkelanjutan.
            </p>
            <button className="cta-button">Coba Sekarang</button>
          </div>
          <div className="image-grid">
            <img
              src="src/assets/img/group4.png"
              alt="Hydro AI 1"
              className="grid-image"
            />
          </div>
        </div>
      </div>

      {/* Inovasi Edukasi Hidroponik */}
      <div className="education-section">
        <div className="education-content">
          <div className="education-image">
            <img src="src/assets/img/edukasi.png" alt="Edukasi Hidroponik" />
          </div>
          <div className="education-text">
            <h2>Inovasi Edukasi Hidroponik untuk Masa Depan Pertanian</h2>
            <p>
              Pelajari cara bertani tanpa tanah dengan teknologi hidroponik yang
              efisien dan ramah lingkungan. Solusi kami dirancang bagi mereka
              yang ingin memahami dan mengembangkan pertanian modern secara
              praktis dan berkelanjutan.
            </p>
            <button className="cta-button2" onClick={handleButtonClick}>
              Selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* news section */}
      <div className="jarak-scroll" id="berita">
        <div className="news-section">
          <div className="background-shape"></div>{" "}
          {/* Elemen hijau di belakang */}
          <h2>News</h2>
          <div className="news-cards">
            <a href="/artikelberita">
              <div className="news-card">
                <img src="src/assets/img/6.jpg" alt="News 1" />
                <h3>Ratusan Juta dan Peluang Bisnis</h3>
                <p>
                  Pepatah lama yang menyatakan &quot;hidup seperti roda
                  berputar&quot; tampaknya berlaku bagi Kostaman. Berawal dari
                  menjadi asisten sopir angkutan produk pertanian dan perkebunan
                </p>
              </div>
            </a>
            <a href="/artikelberita">
              <div className="news-card">
                <img src="src/assets/img/77.jpg" alt="News 2" />
                <h3>Ratusan Juta dan Peluang Bisnis</h3>
                <p>
                  Pepatah lama yang menyatakan &quot;hidup seperti roda
                  berputar&quot; tampaknya berlaku bagi Kostaman. Berawal dari
                  menjadi asisten sopir angkutan produk pertanian dan perkebunan
                </p>
              </div>
            </a>
            <a href="/artikelberita">
              <div className="news-card">
                <img src="src/assets/img/88.jpg" alt="News 3" />
                <h3>
                  Wamentan Sudaryono Ajak Jepang Ikut Perkuat Program Pertanian
                  Indonesia
                </h3>
                <p>
                  Pepatah lama yang menyatakan &quot;hidup seperti roda
                  berputar&quot; tampaknya berlaku bagi Kostaman. Berawal dari
                  menjadi asisten sopir angkutan produk pertanian dan perkebunan
                </p>
              </div>
            </a>
            <a href="/artikelberita">
              <div className="news-card">
                <img src="src/assets/img/55.jpg" alt="News 4" />
                <h3>Peternakan Sapi Lokal Dorong Swasembada Daging</h3>
                <p>
                  Peternak lokal terus berkembang dengan dukungan subsidi pakan
                  dan pelatihan manajemen modern. Langkah ini diharapkan dapat
                  meningkatkan produksi daging sapi nasional dan mengurangi
                  ketergantungan pada impor dalam beberapa tahun ke depan.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Section Berita Terkini */}
      <div className="latest-news-section">
        <div className="title-container">
          <h2 className="section-title-berita">Berita Terkini</h2>
          <p className="section-description">
            Dapatkan informasi terbaru seputar dunia hidroponik dan teknologi
            pertanian.
          </p>
        </div>
        <div className="news-list">
          <a href="/artikelberita">
            <div className="news-item">
              <img
                src="src/assets/img/1.jpg"
                alt="Berita 1"
                className="news-image-left"
              />
              <div className="news-content-right">
                <h3 className="news-title">
                  Petani Lokal Berhasil Tingkatkan Produksi Padi dengan
                  Teknologi Pertanian Presisi novasi teknologi presisi{" "}
                </h3>
                <p className="news-summary">
                  Teknologi pertanian yang inovatif ini membantu petani lokal
                  mencapai hasil panen yang lebih tinggi. Dengan sistem
                  pemantauan yang canggih, kebutuhan air dan pupuk dapat
                  dipantau secara akurat dan tepat waktu, yang memastikan
                  tanaman mendapatkan nutrisi yang optimal. Ini berimbas pada
                  peningkatan hasil panen padi yang signifikan, sekaligus
                  mengurangi pemborosan sumber daya. Selain itu, teknologi ini
                  juga memungkinkan petani untuk memprediksi kondisi cuaca dan
                  memilih waktu terbaik untuk tanam dan panen, sehingga
                  produktivitas pertanian dapat terus meningkat dan
                  menguntungkan secara berkelanjutan.
                </p>
              </div>
            </div>
          </a>
          <a href="/artikelberita">
            <div className="news-item">
              <img
                src="src/assets/img/2.jpg"
                alt="Berita 2"
                className="news-image-left"
              />
              <div className="news-content-right">
                <h3 className="news-title">
                  Petani Lokal Dorong Ketahanan Pangan
                </h3>
                <p className="news-summary">
                  Teknologi pertanian yang inovatif ini membantu petani lokal
                  mencapai hasil panen yang lebih tinggi. Dengan sistem
                  pemantauan yang canggih, kebutuhan air dan pupuk dapat
                  dipantau secara akurat dan tepat waktu, yang memastikan
                  tanaman mendapatkan nutrisi yang optimal. Ini berimbas pada
                  peningkatan hasil panen padi yang signifikan, sekaligus
                  mengurangi pemborosan sumber daya. Selain itu, teknologi ini
                  juga memungkinkan petani untuk memprediksi kondisi cuaca dan
                  memilih waktu terbaik untuk tanam dan panen, sehingga
                  produktivitas pertanian dapat terus meningkat dan
                  menguntungkan secara berkelanjutan.
                </p>
              </div>
            </div>
          </a>
          <a href="/artikelberita">
            <div className="news-item">
              <img
                src="src/assets/img/3.jpg"
                alt="Berita 3"
                className="news-image-left"
              />
              <div className="news-content-right">
                <h3 className="news-title">
                  Perkembangan Hidroponik di Indonesia
                </h3>
                <p className="news-summary">
                  Teknologi pertanian yang inovatif ini membantu petani lokal
                  mencapai hasil panen yang lebih tinggi. Dengan sistem
                  pemantauan yang canggih, kebutuhan air dan pupuk dapat
                  dipantau secara akurat dan tepat waktu, yang memastikan
                  tanaman mendapatkan nutrisi yang optimal. Ini berimbas pada
                  peningkatan hasil panen padi yang signifikan, sekaligus
                  mengurangi pemborosan sumber daya. Selain itu, teknologi ini
                  juga memungkinkan petani untuk memprediksi kondisi cuaca dan
                  memilih waktu terbaik untuk tanam dan panen, sehingga
                  produktivitas pertanian dapat terus meningkat dan
                  menguntungkan secara berkelanjutan.
                </p>
              </div>
            </div>
          </a>
          <a href="/artikelberita">
            <div className="news-item">
              <img
                src="src/assets/img/4.jpg"
                alt="Berita 4"
                className="news-image-left"
              />
              <div className="news-content-right">
                <h3 className="news-title">Peningkatan Produktivitas Padi</h3>
                <p className="news-summary">
                  Teknologi pertanian yang inovatif ini membantu petani lokal
                  mencapai hasil panen yang lebih tinggi. Dengan sistem
                  pemantauan yang canggih, kebutuhan air dan pupuk dapat
                  dipantau secara akurat dan tepat waktu, yang memastikan
                  tanaman mendapatkan nutrisi yang optimal. Ini berimbas pada
                  peningkatan hasil panen padi yang signifikan, sekaligus
                  mengurangi pemborosan sumber daya. Selain itu, teknologi ini
                  juga memungkinkan petani untuk memprediksi kondisi cuaca dan
                  memilih waktu terbaik untuk tanam dan panen, sehingga
                  produktivitas pertanian dapat terus meningkat dan
                  menguntungkan secara berkelanjutan.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* contact */}

      <div id="contact">
        <section className="hero-section2">
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Hubungi Kami</h1>
        </section>
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="card">
              <div className="card-content">
                <div className="heading">
                  <h2>Memiliki pertanyaan?</h2>
                  <h3>Hubungi Kami di sini</h3>
                </div>
                <form className="form">
                  <div className="form-group">
                    <label htmlFor="name">Nama</label>
                    <input id="name" placeholder="Name" className="input" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        placeholder="Email"
                        type="email"
                        className="input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        placeholder="Phone"
                        type="tel"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Pertanyaan</label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="textarea"
                    ></textarea>
                  </div>
                  <button className="btn">Send Message</button>
                </form>
              </div>
            </div>
            <div className="contact-info">
              <div className="info">
                <h2>Informasi Kontak</h2>
                <p>
                  Hubungi kami di Nomor Telepon/WhatsApp, Email atau Instagram
                  di bawah ini untuk mempermudah komunikasi.
                </p>
              </div>
              <div className="links">
                <div className="icon-sosmed">
                  <img src="src/assets/img/whatsapp.png" alt="Instagram" />
                  <div className="link-info">
                    <div className="link-title">WhatsApp</div>
                    <div className="link-detail">+62890923202</div>
                  </div>
                </div>

                <div className="icon-sosmed">
                  <img src="src/assets/img/gmail.png" alt="Instagram" />
                  <div className="link-info">
                    <div className="link-title">Gmail</div>
                    <div className="link-detail">hydrocare@gmail.com</div>
                  </div>
                </div>

                <div className="icon-sosmed">
                  <img src="src/assets/img/ig.png" alt="Instagram" />
                  <div className="link-info">
                    <div className="link-title">Instagram</div>
                    <div className="link-detail">@instagramusername</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default HomePage;
