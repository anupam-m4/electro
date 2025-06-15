import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping", subtext: "On orders over $100" },
  { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
  { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
  { icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" },
];
const Features = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
            {features.map((feature, index)=> {
               return <div key={index} className='flex items-center justify-center text-center sm:text-left'>
                    <feature.icon className='flex-shrink-0 h-10 w-10 text-gray-600' aria-hidden="true" />
                    <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>{feature.text}</p>
                        <p className='mt-1 text-sm text-gray-500'>{feature.subtext}</p>
                    </div>
                </div>
            })}
        </div>
      </div> */}

      {/* <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center min-w-[120px] sm:flex-row sm:text-left sm:min-w-0"
              >
                <feature.icon
                  className="flex-shrink-0 h-10 w-10 text-gray-600"
                  aria-hidden="true"
                />
                <div className="mt-2 sm:mt-0 sm:ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {feature.text}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:ml-0 ml-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-left ">
              <feature.icon
                className="flex-shrink-0 h-10 w-10 text-amber-600"
                aria-hidden="true"
              />
              <div className="md:ml-4 ml-8 ">
                <p className="text-base font-medium text-gray-900">
                  {feature.text}
                </p>
                <p className="mt-1 text-sm text-gray-500">{feature.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
