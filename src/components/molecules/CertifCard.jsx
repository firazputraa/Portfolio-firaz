// src/components/molecules/CertifCard.jsx
import { Link } from "react-router-dom";
import React from 'react'; // Pastikan React diimpor
const CertifCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm border rounded-lg border-sky-700 shadow-2xl h-full bg-white/80 backdrop-blur-sm flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out"> {/* Tambahkan flex flex-col */}
      <a href="" className="flex-shrink-0"> {/* flex-shrink-0 untuk gambar */}
        <img src={image} alt={title} className="rounded-lg p-4 w-full h-auto object-contain"/> {/* Tambahkan object-contain jika sertifikat perlu terlihat penuh */}
      </a>
      <div className="p-5 flex flex-col flex-grow"> {/* Tambahkan flex flex-col flex-grow */}
        <h4 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-sky-900"> {/* Perubahan di sini: text-sky-900 */}
            {title}
        </h4>
        <p className="mb-4 text-gray-600 text-base md:text-lg lg:text-xl">{description}</p> {/* flex-grow untuk deskripsi */}
        <Link to="/certificate" className="inline-flex items-center px-3 py-2 text-lg font-medium text-center justify-center text-white bg-sky-700 rounded-lg mt-auto hover:bg-sky-900"> {/* Tambahkan mt-auto */}
            Detail...
        </Link>
      </div>
    </div>
  )
}

export default CertifCard;