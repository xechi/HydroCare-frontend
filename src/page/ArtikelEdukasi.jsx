import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../css/ArtikelEdukasi.css";

const ArtikelEdukasi = () => {
  return (
    <div className="artikeledukasi">
      <NavbarComponent />
      <div className="hero-section4">
        <div className="overlay">
          <h1 className="headline">&quot;Tahap Pembuatan Hidroponik.&quot;</h1>
          <div className="search-container">
            <div className="search-input-container">
              <img
                src="src/assets/img/icon-search.png"
                alt="search"
                className="icon-search"
              />
              <input
                type="text"
                className="search-input"
                placeholder="Cari artikel..."
              />
              <button className="search-button">
                <i className="fa fa-search">Search</i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section-art">
        <div className="image-container-art">
          <img
            src="src/assets/img/artikeledukasi.jpg"
            alt="Hidroponik"
            className="content-image-art"
          />
        </div>
        <div className="text-container-artikel">
          <h2 className="content-title-art">Panduan Hidroponik </h2>
          <h3 className="section-title-art">Persiapan Alat dan Bahan</h3>
          <ul className="content-list-art">
            <li>
              Sistem hidroponik: Pilih sistem yang sesuai seperti NFT (Nutrient
              Film Technique) atau Deep Water Culture (DWC).
            </li>
            <li>Reservoir: Wadah untuk menyimpan larutan nutrisi.</li>
            <li>Pompa air dan timer: Untuk mengalirkan air dalam sistem.</li>
            <li>Net pot: Pot kecil berlubang untuk menempatkan tanaman.</li>
            <li>Media tanam: Rockwool, cocopeat, atau clay pebbles.</li>
            <li>
              Nutrisi hidroponik: Larutan nutrisi khusus untuk tanaman mint.
            </li>
            <li>
              pH meter dan TDS/EC meter: Untuk mengukur pH dan konsentrasi
              larutan nutrisi.
            </li>
            <li>Benih atau bibit mint: Bibit tanaman daun mint.</li>
          </ul>
          <h3 className="section-title-art">Persiapan Bibit</h3>
          <ul className="content-list-art">
            <li>Rendam benih mint dalam air selama beberapa jam.</li>
            <li>
              Siapkan media tanam seperti rockwool yang telah dibasahi, lalu
              letakkan benih di atasnya.
            </li>
            <li>
              Tempatkan media tanam di tempat yang hangat dan lembab untuk
              berkecambah (sekitar 7-14 hari).
            </li>
          </ul>
          <h3 className="section-title-art">Persiapan Sistem Hidroponik</h3>
          <ul className="content-list-art">
            <li>
              Siapkan sistem hidroponik sesuai pilihan (NFT atau DWC). Jika
              menggunakan NFT, pastikan ada kemiringan untuk aliran air. Jika
              DWC, pastikan akar tanaman bisa terendam sebagian.
            </li>
            <li>
              Isi reservoir dengan air yang bersih dan tambahkan nutrisi
              hidroponik sesuai dosis yang dianjurkan.
            </li>
            <li>
              Atur pH larutan nutrisi antara 5.5 - 6.5. Gunakan pH meter untuk
              pengukuran.
            </li>
            <li>
              Pasang pompa air untuk sirkulasi larutan nutrisi ke seluruh
              sistem.
            </li>
          </ul>
          <h3 className="section-title-art">Penanaman Bibit Mint</h3>
          <ul className="content-list-art">
            <li>
              Setelah benih berkecambah dan memiliki 2-4 daun sejati, pindahkan
              bibit ke net pot yang telah diisi dengan media tanam.
            </li>
            <li>Letakkan net pot ke dalam sistem hidroponik.</li>
          </ul>
          <h3 className="section-title-art">Perawatan Tanaman</h3>
          <ul className="content-list-art">
            <li>
              Pencahayaan: Pastikan tanaman mint mendapatkan cahaya yang cukup,
              minimal 6-8 jam sehari. Anda bisa menggunakan lampu grow light
              jika di dalam ruangan.
            </li>
            <li>
              Nutrisi dan air: Cek secara berkala konsentrasi nutrisi
              menggunakan TDS/EC meter, dan tambahkan nutrisi jika diperlukan.
            </li>
            <li>
              Cek pH secara rutin untuk memastikan larutan tetap dalam kisaran
              ideal.
            </li>
            <li>
              Sirkulasi udara: Pastikan lingkungan mendapat ventilasi yang baik
              untuk mencegah penyakit.
            </li>
          </ul>
          <h3 className="section-title-art">Pemanenan</h3>
          <ul className="content-list-art">
            <li>Daun mint dapat dipanen 2-3 bulan setelah tanam.</li>
            <li>
              Pangkas daun dengan hati-hati untuk mendorong pertumbuhan baru,
              biasanya diambil dari bagian atas batang.
            </li>
          </ul>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default ArtikelEdukasi;
