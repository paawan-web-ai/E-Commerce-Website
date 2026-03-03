import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";
import "./imageGridScrollUp.css"
const images = [
    "public/assets/demo/cs1.webp",
    "public/assets/demo/cs3.webp",
    "public/assets/demo/cs6.webp",
    "public/assets/demo/cs5.webp",
    "public/assets/demo/cs4.webp",
    "public/assets/demo/cs2.webp",
];

// Each card flies out to a different corner/direction
const cardConfigs = [
    { x: ["0%", "-160%"], y: ["0%", "-120%"], rotate: [-4, -24], scale: [0.82, 2.0] },
    { x: ["0%", "160%"], y: ["0%", "-120%"], rotate: [4, 24], scale: [0.82, 2.0] },
    { x: ["0%", "-170%"], y: ["0%", "0%"], rotate: [-7, -30], scale: [0.88, 2.0] },
    { x: ["0%", "170%"], y: ["0%", "0%"], rotate: [7, 30], scale: [0.88, 2.0] },
    { x: ["0%", "-145%"], y: ["0%", "120%"], rotate: [-3, -18], scale: [0.82, 2.0] },
    { x: ["0%", "145%"], y: ["0%", "120%"], rotate: [3, 18], scale: [0.82, 2.0] },
];

const Card = ({ src, config, scrollYProgress }) => {
    const x = useTransform(scrollYProgress, [0.1, 0.7], config.x);
    const y = useTransform(scrollYProgress, [0.1, 0.7], config.y);
    const rotate = useTransform(scrollYProgress, [0.1, 0.7], config.rotate);
    const scale = useTransform(scrollYProgress, [0.0, 0.1], config.scale);
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.65, 0.75], [0, 1, 1, 0]);

    return (

        <motion.div
            className="absolute rounded-2xl overflow-hidden"
            style={{
                x, y, rotate, scale, opacity,
                width: "clamp(120px, 22vw, 200px)",
                aspectRatio: "3/4",
                top: "50%",
                left: "50%",
                marginLeft: "clamp(-60px, -11vw, -100px)",
                marginTop: "clamp(-80px, -14.67vw, -133px)",
                boxShadow: "0 30px 70px rgba(0,0,0,0.7)",
            }}
        >
            <img src={src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{
                background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.45) 100%)"
            }} />
        </motion.div>
    );
};

const ImageGridScrollUp = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.08, 0.5, 0.68], [0, 1, 1, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 0.08], [0.9, 1]);
    const titleY = useTransform(scrollYProgress, [0.5, 0.68], ["0%", "-12%"]);

    const endOpacity = useTransform(scrollYProgress, [0.78, 0.92], [0, 1]);
    const endScale = useTransform(scrollYProgress, [0.78, 0.92], [0.92, 1]);
    const buttonOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const buttonY = useTransform(scrollYProgress, [0.85, 0.95], ["20px", "0px"]);

    const bgProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={container} className="relative w-full bg-green-00" style={{ height: "450vh" }}>

            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Purple atmosphere */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        opacity: bgProgress,
                        background: "radial-gradient(ellipse at 50% 60%, #16a34a 0%, #064e3b 70%)"
                    }}
                />

                {/* Grain */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    opacity: 0.04,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px"
                }} />

                {/* Cards */}
                {images.map((src, i) => (
                    <Card key={i} src={src} config={cardConfigs[i]} scrollYProgress={scrollYProgress} />
                ))}

                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <motion.div
                        style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
                        className="text-center select-none"
                    >
                        <p style={{
                            color: "rgba(255,255,255,0.35)",
                            fontFamily: "system-ui, sans-serif",
                            fontSize: "10px",
                            letterSpacing: "0.5em",
                            textTransform: "uppercase",
                            marginBottom: "16px"
                        }}>
                            Exclusive Deals
                        </p>

                        <h2 style={{
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontSize: "clamp(2.8rem, 8vw, 6rem)",
                            fontWeight: 500,
                            color: "#fff",
                            lineHeight: 1,
                            letterSpacing: "-0.03em",
                            textShadow: "0 0 80px rgba(34,197,94,0.45)"
                        }}>
                            Premium
                            <br />
                            <em style={{ color: "rgba(255,255,255,0.7)" }}>
                                Shopping Experience
                            </em>
                        </h2>
                    </motion.div>
                </div>

                {/* End reveal */}
                {/* End reveal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">

                    <motion.div
                        style={{ opacity: endOpacity, scale: endScale }}
                        className="text-center px-8 mb-8"
                    >
                        <p style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                            color: "#bbf7d0",
                            fontWeight: 300,
                            maxWidth: "320px",
                            lineHeight: 1.8,
                            letterSpacing: "0.02em"
                        }}>
                            Limited stock. Exclusive prices.
                            <br />
                            Shop smarter. Shop greener.
                        </p>
                    </motion.div>

                    {/* Explore Button */}
                    <motion.button
                        style={{ opacity: buttonOpacity, y: buttonY }}
                        className="px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                        onClick={() => {
                            window.location.href = "/products";
                        }}
                    >
                        Explore Collection
                    </motion.button>

                </div>

            </div>
        </div>
    );
};

export default ImageGridScrollUp;