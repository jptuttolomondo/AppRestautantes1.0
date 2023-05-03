import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section class="px-2 pt-32   md:px-0">
      <div class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span class="block text-white">
            WOOPS!{" "}
            <span class="block mt-1 text-gray-200 lg:inline lg:mt-0">
              Parece que esa página no existe!
            </span>
          </span>
        </h1>
      
        <div class="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <Link to="/home"> Ir a la pagina principal </Link>
        </div>
      </div>
      <div class="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
   
      </div>
    </section>
  );
}
