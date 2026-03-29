import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GlobalHeroSection from '../components/GlobalHeroSection';
import { galleryData } from '../data/galleryData'; // Import the data from step 1

const SubGallery = () => {
  const { albumSlug } = useParams(); // Catches 'ridi-hydropower-construction' from URL
  const album = galleryData[albumSlug];

  // Handle case where URL slug doesn't exist in our data
  if (!album) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Album Not Found</h2>
        <Link to="/gallery" className="mt-4 text-blue-600 underline">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen pb-20">
      <GlobalHeroSection title={album.title} page={`Gallery / ${album.title}`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12">
        {/* Header Details */}
        <div className="mb-12">
          <Link to="/gallery" className="text-blue-600 font-medium hover:underline text-sm">
            ← Back to Gallery
          </Link>
          <h2 className="text-4xl font-black text-slate-900 mt-4 uppercase tracking-tight">
            {album.title}
          </h2>
          <p className="text-slate-500 mt-2 font-medium italic">{album.date}</p>
          <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        {/* Professional Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.images.map((img) => (
            <div key={img.id} className="group relative overflow-hidden rounded-xl aspect-square bg-slate-100">
              <img
                src={`${img.url}?auto=format&fit=crop&q=80&w=1000`}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with Caption */}
              <div className="absolute inset-0 bg-black/40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubGallery;