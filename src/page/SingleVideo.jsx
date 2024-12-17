import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../css/Forum.css";

const SingleVideo = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="hero-section5">
        <div className="overlay">
          <h1 className="headline5">
            &quot;Langkah Demi Langkah: Video Edukatif untuk Anda&quot;
          </h1>
        </div>
      </div>
      <div className="max-w-2xl mx-auto space-y-4 my-14">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="relative aspect-video">
            <img
              src="/src/assets/img/55.jpg"
              alt="Video thumbnail of hydroponic system"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20">
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h1 className="text-white text-sm md:text-base font-medium">
                  4 sistem hidroponik yang wajib kamu tau!!!
                </h1>
                <div className="flex items-center gap-4 mt-2">
                  <button className="text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-white rounded-full"></div>
                  </div>
                  <span className="text-white text-sm">2:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4">
          <h2 className="font-medium mb-4">Comments</h2>

          <div className="space-y-6">
            <div className="flex gap-3">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Tambahkan komentar..."
                  className="w-full p-2 bg-gray-100 rounded-lg text-sm"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Rizky avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Rizky</h3>
                    <p className="text-sm text-gray-600">
                      Berapa biaya awal yang dibutuhkan untuk membangun sistem
                      hidroponik sederhana dan apa saja komponen utamanya?
                    </p>
                    <button className="text-sm text-gray-500 mt-1">
                      Balasan
                    </button>
                  </div>
                </div>

                <div className="ml-11 space-y-4">
                  <div className="flex gap-3">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Akbar avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">Akbar</h3>
                      <p className="text-sm text-gray-600">
                        Biaya awal untuk membangun sistem hidroponik sederhana
                        bervariasi tergantung skala, jenis tanaman, dan metode
                        hidroponik yang dipilih (seperti NFT, wick system, atau
                        DWC).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Desi avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">Desi</h3>
                      <p className="text-sm text-gray-600">
                        Biaya ini dapat disesuaikan berdasarkan metode
                        hidroponik yang digunakan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Suryono avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Suryono</h3>
                    <p className="text-sm text-gray-600">
                      Apakah sistem hidroponik dapat diterapkan di daerah yang
                      kurang cahaya matahari, dan bagaimana cara mengatasinya?
                    </p>
                    <button className="text-sm text-gray-500 mt-1">
                      Balasan
                    </button>
                  </div>
                </div>

                <div className="ml-11">
                  <div className="flex gap-3">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Budi avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">Budi</h3>
                      <p className="text-sm text-gray-600">
                        Sistem hidroponik dapat diterapkan di daerah yang kurang
                        cahaya matahari, tetapi membutuhkan beberapa penyesuaian
                        untuk memastikan tanaman tetap mendapatkan cahaya yang
                        cukup untuk proses fotosintesis
                      </p>
                    </div>
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
};

export default SingleVideo;
