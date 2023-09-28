import React from "react";
import InputTextComp from "./InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { ButtunYellowComp } from "./ButtunYellowComp";

export const FlightBookingFormComp = () => {
  return (
    <div className="bg-white pb-0 w-[22%] rounded-3xl absolute bottom-3 shadow shadow-gray-400 ">
      <div className="p-5">
        <p className="font-semibold">
          Book Cheap <span className="text-yellow-400">Flights</span>
        </p>
      </div>

      <div className="flex bg-black text-white justify-center py-3">
        <div className="flex">
          <input className="" type="radio" id="age1" name="age" value="30" />
          <p className="text-sm ml-3">One Way</p>
          <div className="flex ml-3">
            <input type="radio" id="age1" name="age" value="30" />
            <p className="text-sm ml-3">Round Trip</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label={"Departure"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label={"Departure"}
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label={"Departure"}
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label={"Departure"}
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label={"Departure"}
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label={"Departure"}
          extraStyle={"mt-2"}
        />
        <div className="px-5">
        <ButtunYellowComp lable={"FIND FLIGHTS"} extraStyle={"mt-5"}/>
        </div>
      </div>
    </div>
  );
};
