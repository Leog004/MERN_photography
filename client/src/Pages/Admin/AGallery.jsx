import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Admin/Navbar';
import { UserRequest } from '../../requestMethod';

export default function AGallery() {
  const [gallery, setGallery] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newGalleryName, setNewGalleryName] = useState('');

  useEffect(() => {
    const getGallery = async () => {
      try {
        const res = await UserRequest.get(
          'http://localhost:8000/api/v1/view/gallery'
        );
        const data = res.data.data.data;
        setGallery(data);
      } catch (err) {}
    };

    getGallery();
  }, []);

  const handleOnClick = (e) => {
    e.preventDefault();
    setShowForm((el) => !el);
  };

  return (
    <div className="relative">
      <Navbar />
      {!showForm ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-20">
          <div className="container mx-auto shadow-lg py-2 w-full">
            <div className="flex items-center h-full justify-end">
              <button
                onClick={handleOnClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Gallery
              </button>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Gallery
                </th>
                <th scope="col" className="px-6 py-3">
                  Images
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {gallery.map((el) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{el.title}</td>
                  <td className="px-6 py-4 text-right">
                    <section
                      id="gallery"
                      className="max-w-6xl mx-auto h-full py-5"
                    >
                      <div className="grid grid-1 sm:grid-cols-12 gap-x-8 gap-y-10">
                        {el.images.map((img) => (
                          <div className="flex w-full h-auto px-4 sm:px-0">
                            <img alt={'asd'} src={img} />
                          </div>
                        ))}
                      </div>
                    </section>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-20">
        
        <div className="flex flex-col w-full items-center justify-center">
        <button
                onClick={handleOnClick}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-10"
              >
               Cancel
              </button>
          <div className="mb-10 w-96">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Gallery Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="gallery"
              id="gallery"
              type="text"
              placeholder="gallery name"
            />
          </div>
          <div className="mb-3 w-96">
            <label
              htmlFor="formFileMultiple"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Multiple files input example
            </label>
            <input
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
