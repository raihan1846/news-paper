import React from 'react';

const FindUs = () => {
    return (
        <div className="space-y-4">
      <h2 className="font-bold text-lg">Find Us</h2>

      {/* Button Group */}
      <div className="btn-group btn-group-vertical w-full">
        {/* Facebook */}
        <button className="btn justify-start bg-[#1A77F2] text-white border-[#005fd8] w-full hover:bg-[#1564d4]">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          <span className="ml-2">Login with Facebook</span>
        </button>

        {/* X (Twitter) */}
        <button className="btn justify-start bg-black text-white border-black w-full hover:bg-neutral-800">
          <svg
            aria-label="X logo"
            width="16"
            height="12"
            viewBox="0 0 300 271"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
            />
          </svg>
          <span className="ml-2">Login with X</span>
        </button>

        {/* Instagram */}
        <button className="btn justify-start bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white border-none w-full hover:opacity-90">
          <svg
            aria-label="Instagram logo"
            width="16"
            height="16"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm146.4-12.7c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.3-93.7s-58-34.6-93.7-36.3C293.4 24.5 154.6 24.5 109.4 26.2c-35.7 1.7-67.3 9.9-93.7 36.3S-19 120.5-20.7 156.2C-22.4 201.4-22.4 340.2-20.7 385.4c1.7 35.7 9.9 67.3 36.3 93.7s58 34.6 93.7 36.3c45.2 1.7 183.9 1.7 229.1 0 35.7-1.7 67.3-9.9 93.7-36.3s34.6-58 36.3-93.7c1.7-45.2 1.7-183.9 0-229.1z"
            />
          </svg>
          <span className="ml-2">Login with Instagram</span>
        </button>
      </div>
    </div>
    );
};

export default FindUs;