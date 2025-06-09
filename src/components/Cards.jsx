import React, { useState } from "react";
import Modal from "./Modal";

function Cards({ skip, onConfirm, isSelected }) {
  const imageMap = {
    4: "4-yarder-skip.jpg",
    6: "4-yarder-skip.jpg",
    8: "4-yarder-skip.jpg",
    10: "4-yarder-skip.jpg",
    12: "4-yarder-skip.jpg",
    14: "4-yarder-skip.jpg",
    16: "4-yarder-skip.jpg",
    20: "20-yarder-skip.jpg",
    40: "20-yarder-skip.jpg",
    default: "skip-image.webp",
  };
  const image = imageMap[skip.size] || imageMap.default;
  const borderClass = isSelected
    ? "border-4 border-yellow-500"
    : "border border-transparent";

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div
        className="relative rounded-lg shadow p-4 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-xl hover:scale-[1.05]  cursor-pointer group"
        onClick={handleShow}
      >
        <div className="absolute -inset-1 rounded-lg z-0 opacity-0 blur transition duration-300 group-hover:opacity-70 group-hover:bg-gradient-to-r group-hover:from-yellow-700 group-hover:to-yellow-400"></div>
        <div className="relative flex flex-col items-center p-4">
          <div className="relative mb-4 w-full h-48 lg:h-60 rounded overflow-hidden">
            <img
              src={image}
              alt={`${skip.size} Yard Skip`}
              className="w-full h-full object-cover"
            />
            {!skip.allowed_on_road && (
              <div className="absolute top-1 left-2 text-red-600 px-1 py-1 hidden md:block font-bold rounded">
                Not Allowed On Road
              </div>
            )}

            {!skip.allows_heavy_waste && (
              <div className="absolute bottom-1 left-2 bg-black text-yellow-600 px-1 py-1 hidden md:block font-bold rounded">
                Heavy Waste Not Allowed
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold pt-3 dark:text-white">
            {skip.size} Yard Skip
          </h3>
          {/* <p className="text-sm text-gray-600">{skip.hire_period_days} day hire period</p> */}
          <p className="text-xl font-bold mt-2 mb-5 text-yellow-400">
            £{skip.price_before_vat}
          </p>
          {/* <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"> Select This Skip </button> */}
        </div>
      </div>
      {showModal && (
        <Modal skip={skip} onClose={handleClose} onConfirm={onConfirm} />
      )}
    </>
  );
}

export default Cards;
