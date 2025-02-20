import Image from "next/image";
import img from "@/assets/images/img.png"
export default function ExpertSolution() {



    return (
        <section className="relative h-[810px] z-10">
               {/* gradient bg  */}
               <div className="gradient-bg   lg:h-[120vh] w-[1300px]  absolute top-[-40%] left-[-20%]"></div>
            {/* gradient bg end */}
            <div>
                <div className="text-[20em] h-[400px] font-bold text-transparent uppercase  inline-block   overflow-hidden"
                    style={{ WebkitTextStroke: "3px #e5010b" }}> <p data-aos="fade-up"
                    data-aos-duration="2000">Expert</p> </div>
               <Image data-aos="zoom-in" data-aos-duration="3000" className="w-[600px] rounded-2xl animate-float absolute right-[30%] top-[30%] transform -translate-x-1/2 -translate-y-1/2" src={img} alt="img" />
               <div className="lg:text-[20em] h-[400px] font-bold uppercase absolute bottom-2 overflow-hidden"
                    ><p data-aos="fade-up"
                    data-aos-duration="3000" className="bg-gradient-to-r  from-[#e5010b] to-[#ffc947] bg-clip-text text-transparent"> Solution </p></div>
            </div>
        </section>
    );
}