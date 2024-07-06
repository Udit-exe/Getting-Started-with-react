import React from "react";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-wrap justify-left">
        <video  autoPlay loop muted className="w-160 h-90 object-cover">
            <source
              src="https://videos.pexels.com/video-files/9732063/9732063-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <img
            src="https://media.istockphoto.com/id/885931726/photo/classic-black-leather-bikers-jacket-with-lining-shot-from-the-front-and-the-back-isolated-on.jpg?s=612x612&w=0&k=20&c=RIK79l_iwY--DXrpNHW_uNgzZqQKPHK7bnmtvBVXNfY="
            alt="Vesist Amans"
            className="w-60 h-70  align-middle object-cover"
          />
          <img
            src="https://media.istockphoto.com/id/92066451/photo/black-leather-motorcycle-jacket.jpg?s=612x612&w=0&k=20&c=K-eTbRSrzO3f4HsjPxijkx9S3ndwNPFfOQwNvt59tjM="
            alt="Vesist Amans"
            className="w-80 h-90 ml-8 object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">JackPack Modern</h1>
          <p className="text-gray-500">Black</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 text-gray-500">27 Reviews</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">1200$</p>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Modern</h3>
            <div className="flex space-x-2 mt-2">
              <span className="w-8 h-8 rounded-full bg-black block"></span>
              <span className="w-8 h-8 rounded-full bg-white border block"></span>
              <span className="w-8 h-8 rounded-full bg-yellow-500 block"></span>
              <span className="w-8 h-8 rounded-full bg-green-500 block"></span>
              <span className="w-8 h-8 rounded-full bg-blue-500 block"></span>
              <span className="w-8 h-8 rounded-full bg-pink-500 block"></span>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="px-4 py-2 bg-black text-white rounded">
              Men
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded">
              Women
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">
              Select your size
            </h3>
            <div className="flex flex-wrap mt-2">
              {["40", "41", "42", "43", "44", "45", "46"].map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 border rounded flex items-center justify-center text-gray-500 m-1"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            className="mt-6 px-4 py-2 bg-zinc-900 text-white rounded w-full"
            disabled
          >
            Order now
          </button>
          <p className="mt-2 text-gray-500 text-sm">
            Free Shipping & Returns from 50$ of purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
