
import Image from "next/image";
import Marquee from "react-fast-marquee";
import gold from "@/assets/images/gold1.png"


export function Marquees() {


    return (
        <div className="mt-40 min-h-[80vh] relative">

            {/* gradient bg  */}
            <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute top-[-40%] left-[-25%]"></div>
            <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute top-[-40%] right-[-25%]"></div>
            {/* gradient bg end */}

            {/* Marquee for Left to Right */}
            <Marquee gradient={false} speed={100} pauseOnHover={false}>
                <h1 className="text-9xl uppercase font-bold text-[#fcd462]">* DREAMS Instrument technology * </h1>
            </Marquee>
            <div
                className="absolute top-44 left-1/2  z-10"
                style={{ transform: "translate(-50%, -50%) rotate(30deg)" }}
            >
                <Image
                    src={gold}
                    className="w-[600px] z-10 animate-spin-slow"
                    alt="gold"
                />
            </div>

            <div className="mt-28 relative z-20">
                <Marquee gradient={false} speed={100} pauseOnHover={false} direction="right">
                    <h1 className="text-9xl uppercase font-bold text-[#fcd462] ">* DREAMS Instrument technology *</h1>
                </Marquee>
            </div>
        </div>
    );
}
