import React from "react";
import { Link } from "react-router-dom";

const Feature = ({ icon, title, number, link }) => {
  return (
    <div class="p-2 lg:w-1/4 md:w-full ">
      <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col shadow-md gap-6">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          {icon || (
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          )}
        </div>
        <div class="flex-grow">
          <p class="leading-relaxed text-base mb-1">{title}</p>
          <h2 class="text-gray-900 title-font font-semibold text-2xl mb-1">
            {number || 0}
          </h2>
          <Link to={link}>
            <p class="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
