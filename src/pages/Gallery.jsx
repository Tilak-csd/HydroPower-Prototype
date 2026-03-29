import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import GlobalHeroSection from '../components/GlobalHeroSection';

const Gallery = () => {
  // 2. Added 'slug' to each album object to match the URL path
  const albums = [
    {
      id: 1,
      slug: "ridi-hydropower-construction", // Matches the key in galleryData.js
      title: "Ridi Hydropower Construction Photos",
      date: "2021/07/15",
      photoCount: 63,
      imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      slug: "butwal-solar-construction",
      title: "Butwal Solar Construction Photos",
      date: "2021/07/15",
      photoCount: 37,
      imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      slug: "lamjung-hydropower",
      title: "Lamjung Hydropower Project",
      date: "2023/05/10",
      photoCount: 21,
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="bg-white pb-12 font-sans">
      <GlobalHeroSection title={"Gallery"} page={"Gallery"} />

      <div className="pt-12 px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          /* 3. Wrap the card in a Link component */
          <Link 
            key={album.id} 
            to={`/gallery/${album.slug}`} 
            className="group block"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-100/50">
              <img
                src={album.imageUrl}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Added a small "View Album" badge on hover */}
              <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  View Album
                </span>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-5 space-y-1">
              <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                {album.title}
              </h3>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                {album.date && (
                  <>
                    <span>{album.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  </>
                )}
                <span className="text-slate-400">{album.photoCount} photos</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gallery;