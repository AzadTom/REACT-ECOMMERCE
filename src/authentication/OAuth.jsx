import React from "react";

function OAuth() {
  return (
    <div className="flex flex-row gap-4 text-white ">
      <div className="bg-blue-600 px-8 py-2 flex gap-2  shadow cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 28 50"
          fill="none"
        >
          <path
            d="M25.2332 28.1232L26.658 19.0786H17.8813V13.1995C17.8813 10.7264 19.1066 8.30978 23.0248 8.30978H27.0712V0.607688C24.7148 0.232252 22.3337 0.0291419 19.9472 0C12.7235 0 8.00739 4.33861 8.00739 12.182V19.0786H0V28.1232H8.00739V50H17.8813V28.1232H25.2332Z"
            fill="#FFFFFE"
          />
        </svg>
        <h2>Facebook</h2>
      </div>

      <div className="bg-white px-8 py-2 flex gap-2 text-black shadow cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
          alt="google"
          width={24}
          height={24}
        />
        <h2>Google</h2>
      </div>
    </div>
  );
}

export default OAuth;
