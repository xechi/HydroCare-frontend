import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../css/Forum.css";

const ArtikelBerita = () => {
  return (
    <div className="artikel-berita ">
      <NavbarComponent />
      <div className="hero-section5">
        <div className="overlay"></div>
      </div>
      <article className="max-w-3xl mx-auto -mt-40 relative z-40 mb-20">
        <img
          src="/src/assets/img/edukasi.png"
          alt="People standing behind hydroponic plants"
          className="w-full rounded-lg mb-6"
        />

        <div className="text-sm text-gray-600 mb-4">
          <span>13 hours ago</span>
          <span className="mx-2">•</span>
          <span>By Caroline Damanik</span>
          <span className="mx-2">•</span>
          <span>4-min read</span>
        </div>

        <div className="flex flex-col gap-3 fixed left-4 top-1/3">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="sr-only">Share count</span>
            <div className="text-xs text-gray-600">89</div>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="sr-only">Like</span>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="sr-only">Comment</span>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="sr-only">Share</span>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="sr-only">Bookmark</span>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>

        <div className="prose max-w-none">
          <p>
            Jakarta - Wakil Menteri Pertanian (Wamentan), Sudariyono
            mengemukakan bahwa, hubungan baik antara Indonesia dan Jepang harus
            diperkuat tidak hanya dalam sektor ekonomi, tetapi juga di sektor
            pertanian. Menurutnya, kedua negara harus terus mempererat kerja
            sama di sektor pertanian, termasuk pertanangan, pelatihan, dan
            teknologi pertanian.
          </p>
          <p>
            Sudariyono atau yang akrab disapa Mas Dar ini menyoroti potensi
            Indonesia sebagai negara tropis dalam memproduksi berbagai produk
            pertanian. Ia berharap adanya transfer teknologi dari Jepang agar
            produk hortikultura Indonesia dapat memenuhi kualitas internasional.
          </p>
          <blockquote>
            "Jepang dan Indonesia memiliki hubungan yang baik sudah lama. Dan
            tentu saja, kita ingin lebih diperkuat lagi di sektor pertanian,
            seperti isu ekspor-impor, transfer of technology, training, dan
            seterusnya. Saya kira, selama Anda sebagai Wakil Menteri, tolong
            untuk memperkuat itu, saya jadi teringat support dari Tsukuba-shi,"
            kata Sudariyono dalam kunjungan kerjadi, Rabu (15/10/2024).
          </blockquote>
        </div>

        <aside className="my-8">
          <h2 className="font-semibold text-lg mb-4">Recommended for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-4 items-start">
              <img
                src="/src/assets/img/artikeledukasi.jpg"
                alt="Recommended article thumbnail"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium text-sm">
                  Presiden RI Hadiri RI Hadiri Sidang Tahunan
                </h3>
                <p className="text-sm text-gray-600 mt-1">2 hours ago</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="prose max-w-none">
          <p>
            Jakarta - Wakil Menteri Pertanian (Wamentan), Sudariyono
            mengemukakan bahwa, hubungan baik antara Indonesia dan Jepang harus
            diperkuat tidak hanya dalam sektor ekonomi, tetapi juga di sektor
            pertanian. Menurutnya, kedua negara harus terus mempererat kerja
            sama di sektor pertanian, termasuk pertanangan, pelatihan, dan
            teknologi pertanian.
          </p>
          <p>
            Sudariyono atau yang akrab disapa Mas Dar ini menyoroti potensi
            Indonesia sebagai negara tropis dalam memproduksi berbagai produk
            pertanian. Ia berharap adanya transfer teknologi dari Jepang agar
            produk hortikultura Indonesia dapat memenuhi kualitas internasional.
          </p>
          <blockquote>
            "Jepang dan Indonesia memiliki hubungan yang baik sudah lama. Dan
            tentu saja, kita ingin lebih diperkuat lagi di sektor pertanian,
            seperti isu ekspor-impor, transfer of technology, training, dan
            seterusnya. Saya kira, selama Anda sebagai Wakil Menteri, tolong
            untuk memperkuat itu, saya jadi teringat support dari Tsukuba-shi,"
            kata Sudariyono dalam kunjungan kerjadi, Rabu (15/10/2024).
          </blockquote>
        </div>
        <div className="mt-12">
          <h2 className="font-semibold text-lg mb-6">More Posts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src="/src/assets/img/bgedu2.jpg"
                  alt={`Related post ${i + 1}`}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-sm">Related Post Title</h3>
                  <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      <FooterComponent />
    </div>
  );
};

export default ArtikelBerita;
