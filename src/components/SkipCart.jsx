import React, { useEffect, useRef } from "react";

function SkipCart({ skip, onClose }) {
  const cartRef = useRef(null);

  useEffect(() => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);
  if (!skip) return null;

  return (
    <div
      className="fixed top-10 right-0 w-80 h-[85vh] overflow-y-auto bg-yellow-50  dark:bg-zinc-900 dark:text-white shadow-lg p-4 z-50 border flex flex-col justify-center rounded"
      ref={cartRef}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Selected Skip</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black dark:hover:text-white text-xl"
        >
          ×
        </button>
      </div>
      <p className="text-s text-gray-500 dark:text-gray-200 mb-4">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </p>
      <p>
        <strong>Size :</strong> {skip.size} Yard Skip
      </p>
      <p>
        <strong>Hire Period :</strong> {skip.hire_period_days} day hire
      </p>
      <p>
        <strong>Price :</strong> £{skip.price_before_vat}
      </p>
      <button
        className="mt-6 w-full px-4 py-2 font-bold bg-yellow-500 text-black rounded hover:bg-yellow-600"
        onClick={onClose}
      >
        Continue to Checkout
      </button>
    </div>
  );
}

export default SkipCart;
