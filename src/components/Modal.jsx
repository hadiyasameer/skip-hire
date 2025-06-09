import React, { useEffect, useRef } from "react";

function Modal({ skip, onClose, onConfirm }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

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
  if (!skip) return null;
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };
  const handleConfirmClick = () => {
    onConfirm(skip);
    onClose();
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={handleOutsideClick}
    >
      <div
        className="p-6 rounded-lg max-w-md w-full shadow-xl relative bg-gradient-to-r from-yellow-600 to-yellow-300 dark:bg-zinc-900 dark:text-white dark:bg-none "
        ref={modalRef}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
          onClick={onClose}
        >
          {" "}
          ✕{" "}
        </button>
        <img src={image} alt={`${skip.size} Yard Skip`} className="pb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{skip.size} Yard Skip</h2>
          <p className="mb-2">Hire Period: {skip.hire_period_days} days</p>
          <p className="mb-2 dark:text-yellow-500 font-bold">
            Price: £{skip.price_before_vat}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Allows heavy waste: {skip.allows_heavy_waste ? "Yes" : "No"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Allowed on road: {skip.allowed_on_road ? "Yes" : "No"}
          </p>
          <button
            className="mt-4 px-4 py-2 font-bold bg-yellow-500 text-black rounded hover:bg-yellow-600"
            onClick={handleConfirmClick}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
