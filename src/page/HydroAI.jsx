import { useState } from "react";
import axios from "axios";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../css/Forum.css";

const HydroAI = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [detectedImage, setDetectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Pilih file sebelum mengirim.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/detect", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { output_file } = response.data;
      const outputUrl = `http://localhost:5000/${encodeURIComponent(output_file.replace("\\", "/"))}`;
      setDetectedImage(outputUrl);

    } catch (error) {
      console.error("Gagal mengunggah file:", error);
      alert("Gagal mendeteksi gambar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="hero-section5">
        <div className="overlay">
          <h1 className="headline5">
            &quot;Optimalkan Hasil Hidroponik Anda dengan Teknologi AI&quot;
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-14">
        <h1 className="text-2xl font-semibold text-center mb-6">Diagnosis</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#1B3B25] text-white p-3">
              <h2 className="font-medium">ImageDetector</h2>
            </div>
            <div className="p-4">
              <div className="aspect-square w-full relative mb-4">
                <img
                  src={detectedImage}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="flex-1 bg-transparent text-sm"
                />
                <button onClick={handleUpload} className="p-2">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                *Note: Sorot ke aplikasi image detector hingga titik untuk konfirmasi identitas report. Silahkan Tekan dan Rekam.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#1B3B25] text-white p-3">
              <h2 className="font-medium">RequestImageDiagnosis</h2>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HydroAI;