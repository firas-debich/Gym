import React from "react";

const Card = ({ traine }) => {
  const { name, src, role } = traine;
  return (
    <div class="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
      <div class="px-6">
        <img
          alt="..."
          src={src}
          class="shadow-lg rounded max-w-full mx-auto"
          style={{ maxWidth: "250px" }}
        />
        <div class="pt-6 text-center">
          <h5 class="text-xl font-bold">{name}</h5>
          <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
