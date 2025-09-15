import React, { useState } from "react";
import {
  Menu,
  X,
  Building2,
  Wrench,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman form
    alert("Terima kasih! Pesan Anda telah dikirim.");
    setFormData({ nama: "", email: "", pesan: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">
                PT Konstruksi Nusantara
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="#tentang"
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                Tentang Kami
              </a>
              <a
                href="#layanan"
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                Layanan
              </a>
              <a
                href="#kontak"
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                Kontak
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#tentang"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                Tentang Kami
              </a>
              <a
                href="#layanan"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                Layanan
              </a>
              <a
                href="#kontak"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/162568/architecture-building-joy-business-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Membangun Masa Depan Bersama
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
            Perusahaan kontraktor terpercaya dengan pengalaman lebih dari 15
            tahun dalam membangun infrastruktur berkualitas tinggi untuk masa
            depan Indonesia yang lebih baik.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Konsultasi Gratis
          </button>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tentang Kami
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                PT Konstruksi Nusantara
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Didirikan pada tahun 2008, PT Konstruksi Nusantara telah menjadi
                salah satu perusahaan kontraktor terdepan di Indonesia. Dengan
                pengalaman lebih dari 15 tahun, kami telah menyelesaikan ratusan
                proyek konstruksi dari berbagai skala, mulai dari bangunan
                residensial hingga infrastruktur komersial yang kompleks.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Komitmen kami terhadap kualitas, ketepatan waktu, dan kepuasan
                klien menjadikan kami pilihan utama untuk berbagai kebutuhan
                konstruksi Anda.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Visi</h4>
                    <p className="text-gray-600">
                      Menjadi perusahaan konstruksi terpercaya yang membangun
                      masa depan Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Misi</h4>
                    <p className="text-gray-600">
                      Memberikan layanan konstruksi berkualitas tinggi dengan
                      standar internasional
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tim Konstruksi"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-blue-700">150+</div>
                  <div className="text-gray-600">Proyek Selesai</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-blue-700">15+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-blue-700">98%</div>
                  <div className="text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi profesional untuk
              memenuhi kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Building2 className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Konstruksi Gedung
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Layanan konstruksi gedung komersial, residensial, dan industri
                dengan standar kualitas tinggi dan teknologi modern untuk hasil
                yang optimal dan tahan lama.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Perencanaan & Desain</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Konstruksi Struktur</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Finishing & Interior</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Renovasi & Perawatan
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Jasa renovasi dan perawatan bangunan untuk memperbaharui dan
                mempertahankan kondisi optimal properti Anda dengan material
                berkualitas dan workmanship terbaik.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Renovasi Total</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Maintenance Berkala</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Perbaikan Struktur</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Konsultasi Proyek
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Layanan konsultasi komprehensif untuk proyek konstruksi Anda,
                mulai dari perencanaan awal hingga eksekusi, dengan tim ahli
                berpengalaman untuk hasil optimal.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Analisis Kelayakan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Manajemen Proyek</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Quality Control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Karier */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Tim Kami!
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Kami selalu mencari talenta terbaik untuk bergabung dengan tim
            profesional kami. Kembangkan karir Anda bersama PT Konstruksi
            Nusantara dan jadilah bagian dari proyek-proyek pembangunan masa
            depan Indonesia.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeT7ahuwfsEaonVaqrK819YQtcNlG6rEbjfE8Cv1CG-29HSDA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Lamar Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Siap memulai proyek Anda? Hubungi tim kami untuk konsultasi gratis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informasi Kontak */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Alamat Kantor
                    </h4>
                    <p className="text-gray-600">
                      Jl. Imogiri Barat, Sewon
                      <br />
                      Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Nomor Telepon
                    </h4>
                    <p className="text-gray-600">+62 21 5555 0123</p>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">rafi@gmail.com</p>
                    <p className="text-gray-600">rafikun@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Kirim Pesan
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nama"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Masukkan alamat email Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pesan"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">
                  PT Konstruksi Nusantara
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Membangun masa depan Indonesia dengan dedikasi, kualitas, dan
                inovasi dalam setiap proyek konstruksi yang kami kerjakan.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konstruksi Gedung</li>
                <li>Renovasi & Perawatan</li>
                <li>Konsultasi Proyek</li>
                <li>Manajemen Konstruksi</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>Jl. Imogiri Barat, Sewon</p>
                <p>Yogyakarta, Indonesia</p>
                <p>+62 21 5555 0123</p>
                <p>rafi@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 PT Konstruksi Nusantara. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
