import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../../Components/Admin/Navbar';
import { UserRequest } from '../../requestMethod';

export default function AHome() {
  const [gallery, setGallery] = useState([]);

  useMemo(() => {
    const getGallery = async () => {
      try {
        const res = await UserRequest.get('http://localhost:8000/api/v1/view');
        const data = res.data.data.data;
        setGallery(data);
      } catch (err) {}
    };

    getGallery();
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-20">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Text
              </th>
              <th scope="col" className="px-6 py-3">
                Gallery
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((el) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <img
                    alt={el.title}
                    className="h-20 w-auto"
                    src={el.coverImage}
                  />
                </th>
                <td className="px-6 py-4">{el.title}</td>
                <td className="px-6 py-4">
                  {el.text}
                </td>
                <td className="px-6 py-4">{el.Gallery.title}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
