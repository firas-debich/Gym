import React from "react";
import Card from "./Card";
import data from "./helpers"
const Trainers = () => {

  return (
    <>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold uppercase">
                Meet Our Trainers
              </h2>
              <p class="text-lg leading-relaxed m-4">
                Our trainers are are here to dedicate the time and effort that
                you need to get in the best shape of your life
              </p>
            </div>
          </div>

          <div class="flex flex-wrap">
     {data?.map((traine,idx)=>(
         <Card traine={traine}  key={idx}/>
     ))}

        
          </div>    
        </div>
      </section>
    </>
  );
};

export default Trainers;
