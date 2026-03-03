import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./Carsousel.css"
export default function ImageCarousel() {
    const images = [
        "src/assets/img/c1.webp",
        "src/assets/img/c2.webp",
        "src/assets/img/c3.webp",
        "src/assets/img/c4.webp",

    ];

    const [active, setActive] = useState(0);

    const scrollUp = () => {
        if (active > 0) setActive(active - 1);
    };

    const scrollDown = () => {
        if (active < images.length - 1) setActive(active + 1);
    };

    return (
        <div className="flex items-center justify-center">

            {/* Main Image */}
            <div className="w-[500px] h-[400px] flex items-center justify-center">
                <img
                    src={images[active]}
                    alt="product"
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Thumbnail Section */}
            <div className="flex flex-col items-center ml-1 space-y-2">

                {/* Up Button */}
                <button onClick={scrollUp}>
                    <ChevronUp size={28} />
                </button>

                {/* Thumbnails */}
                <div className="flex flex-col space-y-2">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`w-24 h-24 cursor-pointer border-2 rounded-md overflow-hidden 
                ${active === index
                                    ? "border-green-500"
                                    : "border-transparent"
                                }`}
                        >
                            <img
                                src={img}
                                alt="thumb"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Down Button */}
                <button onClick={scrollDown}>
                    <ChevronDown size={28} />
                </button>
            </div>
        </div>
    );
}