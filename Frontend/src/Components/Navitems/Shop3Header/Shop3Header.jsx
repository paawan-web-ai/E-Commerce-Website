import React from "react";
import "./Shop3Header.css";
const Shop3Header = () => {
    return (
        <div>
            <div className="bg-header">
                <div className="flex justify-center text-white flex-col items-center header-heading gap-2">
                    <p className="text-xl font-semibold">Colorful Fresh Fruits Vegetables</p>
                    <h2 className="text-5xl font-bold">One Must Eat To Live
                    </h2>
                    <h2 className="text-5xl font-bold">Not Live To Eat 40% off
                    </h2>
                    <button className="text-lg bg-green-500 py-3 px-6 rounded-4xl mt-10">Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Shop3Header