import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Admin/Navbar';
import axios from 'axios';

export default function AGallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/api/v1/view/gallery'
        );
        const data = res.data.data.data;
        setGallery(data);
      } catch (err) {}
    };

    getGallery();
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-20">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Gallery
              </th>
              <th scope="col" class="px-6 py-3">
                Images
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((el) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{el.title}</td>
                <td class="px-6 py-4 text-right">
                  <section
                    id="gallery"
                    className="max-w-6xl mx-auto h-full py-5"
                  >
                    <div className="grid grid-1 sm:grid-cols-12 gap-x-8 gap-y-10">

                    {
                        el.images.map((img) => (
                            <div className="flex w-full h-auto px-4 sm:px-0">
                        <img
                          alt={'asd'}
                          src={img}
                        />
                      </div>
                        ))
                    }
                     
                    </div>
                  </section>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
