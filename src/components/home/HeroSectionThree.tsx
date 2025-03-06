/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import { CiCircleMore } from 'react-icons/ci';
import { FiArrowDownRight } from 'react-icons/fi';
import 'animate.css';
import CountUp from 'react-countup';
const HeroSectionThree = () => {

    const videoRef = useRef(null);
    const [activeSlider, setActiveSlider] = useState(1);
    useEffect(() => {
        const interval = setTimeout(() => {
            setActiveSlider((prev) => (prev === 3 ? 1 : prev + 1));
        }, 600000);
        return () => clearTimeout(interval);
    }, [activeSlider]);


    return (
        <main className='min-h-[100vh] bg-[#f4c522] flex p-5'>

            <div className='w-[20%]  p-5 flex flex-col justify-between'>
                <div className='mt-20 animate__animated animate__backInLeft animate__delay-2s'>
                    <p className='text-lg font-bold text-red-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, esse natus magni error repellat libero sint voluptas quam animi praesentium?</p>
                    <button className='flex items-center gap-3 mt-5 bg-red-600/20  px-4 py-2 rounded-3xl shadow-2xl'>Learn more <CiCircleMore size={30} />
                    </button>
                </div>
                <div className='mini-div absolute bottom-[3%] bg-red-600/20 z-40 p-2 shadow-2xl animate__animated animate__backInLeft animate__delay-2s'>
                    <div className='h-24  w-[50%] rounded-3xl'>
                        <img className='object-cover w-full h-full rounded-[35px] bg-transparent backdrop-blur-sm' src="/assets/gif/gif.gif" alt="" />
                    </div>
                    <div className='mt-5 p-2 border-t border-red-600'>
                        <h1 className='text-xl font-bold text-red-600'>This is the title</h1>
                        <div className='flex '>
                             <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam itaque corrupti excepturi esse nobis fugiat harum tempora, soluta expedita.</p>

                        <p className='mt-5 text-3xl text-red-600 animate-float'>  <FiArrowDownRight /></p>
                        </div>
                       
                    </div>


                </div>
                <div>

                </div>

            </div>
            <div className='w-[80%] custom-div  relative animate__animate animate__bounceIn'>
                <div className="absolute inset-0 bg-black/50 z-40"></div>
                {/* Add relative and lower z-index */}
                <img
                    className={`w-full relative z-10 animate__animated animate__fadeIn ${activeSlider === 1 ? 'block' : 'hidden'}`}
                    alt='card'
                    src="https://media.wired.com/photos/6423826d7f6ce88e606d7b55/16:9/w_1900,h_1069,c_limit/Lamborghini-Revuelto-Featured-Gear.jpg"
                />
                <img
                    className={`w-full relative z-10 animate__animated animate__fadeIn ${activeSlider === 2 ? 'block' : 'hidden'}`}
                    alt='card'
                    src="https://autodesignmagazine.com/wp-content/uploads/2024/05/IG7ZVY_New_Ferrari_V12_ext_02_red_media-1920x0_G6WF13.jpg"
                />
                <img
                    className={`w-full relative z-10 animate__animated animate__fadeIn ${activeSlider === 3 ? 'block' : 'hidden'}`}
                    alt='card'
                    src="https://www.motortrend.com/files/66744ad99326e80008e5cda7/bugatti-hypercar-four-door-render-motortrend-ryan-lugo-design.jpg"
                />
                {/* Higher z-index so it appears above */}

                {/* content section */}
                <div className={` ${activeSlider === 1 ? 'block' : 'hidden'}`}>
                    <div className={`absolute  pt-10 top-[10%] left-10 z-40 w-[700px] h-[500px]`}>
                        <div className='overflow-hidden'>
                            <h1 className='text-8xl text-red-600 animate__animated animate__fadeInUp'>Skyay Trusted Global Partner</h1>
                        </div>

                        <div className='mt-5 overflow-hidden'>
                            <div className='animate__animated animate__fadeInUp'>
                                <p className='text-[#eed478]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos facilis iste porro, vel aliquam saepe iure quaerat fuga corrupti corporis, in ea amet laborum perspiciatis qui? Culpa, quibusdam sint.</p>
                                <button className='flex items-center gap-3 mt-5 text-[#eed478] bg-red-600 text  px-4 py-2 rounded-3xl shadow-2xl'>Learn more <CiCircleMore size={30} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`${activeSlider === 2 ? 'block' : 'hidden'}`}>
                    <div className={`absolute top-[10%] pt-10 left-10 z-40 w-[700px] h-[500px]`}>
                        <div className='overflow-hidden'>
                            <h1 className='text-8xl text-red-600 animate__animated animate__fadeInUp'>Skyay Trusted Global Partner</h1>
                        </div>

                        <div className='mt-5 overflow-hidden'>
                            <div className='animate__animated animate__fadeInUp'>
                                <p className='text-[#eed478]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos facilis iste porro, vel aliquam saepe iure quaerat fuga corrupti corporis, in ea amet laborum perspiciatis qui? Culpa, quibusdam sint.</p>
                                <button className='flex items-center gap-3 mt-5 text-[#eed478] bg-red-600 text  px-4 py-2 rounded-3xl shadow-2xl'>Learn more <CiCircleMore size={30} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`${activeSlider === 3 ? 'block' : 'hidden'}`}>
                    <div className={`absolute top-[10%] pt-10 left-10 z-40 w-[700px] h-[500px]`}>
                        <div className='overflow-hidden'>
                            <h1 className='text-8xl text-red-600 animate__animated animate__fadeInUp'>Skyay Trusted Global Partner</h1>
                        </div>

                        <div className='mt-5 overflow-hidden'>
                            <div className='animate__animated animate__fadeInUp'>
                                <p className='text-[#eed478]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos facilis iste porro, vel aliquam saepe iure quaerat fuga corrupti corporis, in ea amet laborum perspiciatis qui? Culpa, quibusdam sint.</p>
                                <button className='flex items-center gap-3 mt-5 text-[#eed478] bg-red-600 text  px-4 py-2 rounded-3xl shadow-2xl'>Learn more <CiCircleMore size={30} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* content section end*/}

                <div className='w-[20%] h-[14%] bg-[#f4c522] absolute bottom-[-1px] left-0 z-40 bottom-left-box'>

                </div>
                <div className='w-[20%] h-[10px] absolute bg-[#f4c522] bottom-[-4%] left-[20%] z-40 bottom-left-box'>

                </div>
                <div className='w-[20%] h-[27%] bg-[#f4c522] absolute bottom-[-1px] right-0 z-40 bottom-right-box'>

                </div>
                <div className='w-[20%] h-[10px] absolute bg-[#f4c522] bottom-[-5.3%] right-[20%] z-40 bottom-right-box'>

                </div>

            </div>
            {/* video area  */}
            <div className={`w-[15%] h-[33vh] animate__animated animate__fadeIn right-[1%] bottom-[4%] rounded-3xl overflow-hidden shadow-2xl ${activeSlider === 1 ? 'block absolute' : 'hidden'}`}>
                {/* Video Background */}
                <div>
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover absolute top-0 left-0"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/assets/videos/chianMaking.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

            </div>
            <div className={`w-[15%] h-[33vh] animate__animated animate__fadeIn  right-[1%] bottom-[4%] rounded-3xl overflow-hidden shadow-2xl ${activeSlider === 2 ? 'block absolute' : 'hidden'}`}>
                {/* Video Background */}
                <div>
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover absolute top-0 left-0"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/assets/videos/refining.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

            </div>

            <div className={`w-[15%] h-[33vh] animate__animated animate__fadeIn right-[1%] bottom-[4%] rounded-3xl overflow-hidden shadow-2xl ${activeSlider === 3 ? 'block absolute' : 'hidden'}`}>
                <div>
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover absolute top-0 left-0"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/assets/videos/hallmark.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

            </div>
            {/* video area  end*/}

            {/* Button for slider control start */}
            <div className="flex justify-center">
                <div className="flex flex-col items-end gap-2 absolute top-[40%] right-[5%] text-3xl">
                    <button
                        className={`h-[2px] transition-all duration-700 ${activeSlider === 1 ? 'bg-red-600 w-20' : 'bg-white  w-10'}`}
                        onClick={() => setActiveSlider(1)}
                    >

                    </button>
                    <div className="w-16 h-[1px] bg-red"></div>
                    <button
                        className={`h-[2px] transition-all duration-700 ${activeSlider === 2 ? 'bg-red-600 w-20' : 'bg-white  w-10'}`}
                        onClick={() => setActiveSlider(2)}
                    >

                    </button>
                    <div className="w-16 h-[1px] bg-red"></div>
                    <button
                        className={`h-[2px] transition-all duration-700 ${activeSlider === 3 ? 'bg-red-600 w-20' : 'bg-white  w-10'}`}
                        onClick={() => setActiveSlider(3)}
                    >

                    </button>
                </div>
            </div>


            {/* counter */}
            {/* 1 */}
            <div className='w-[40%] h-[90px] overflow-hidden absolute left-[40%] bottom-[4%]'>
                 <div className={`h-full w-full absolute animate__animated animate__fadeInDown flex ${activeSlider === 1 ? 'block absolute' : 'hidden'}`}>
                {/* 1st slider */}
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={17} duration={4} delay={2} />+
                    </p>
                        <p>Years off bond</p>
                    </div>
                </div>
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={10000} duration={4} delay={2} />+
                    </p>
                        <p>imported machine</p>
                    </div>
                </div>
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={33} duration={4} delay={2} />%
                    </p>
                        <p>Shares</p>
                    </div>
                </div>
            </div>
            </div>
           
            {/* 2 */}
            <div className='w-[40%] h-[90px] overflow-hidden absolute left-[40%] bottom-[4%]'>
                  <div className={`h-full w-full absolute animate__animated animate__fadeInDown  flex ${activeSlider === 2 ? 'block absolute' : 'hidden'}`}>
                {/* 1st slider */}
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={25} duration={4} delay={0} />+
                    </p>
                        <p>Years off bond</p>
                    </div>
                </div>
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={22000} duration={4} delay={0} />+
                    </p>
                        <p>imported machine</p>
                    </div>
                </div>
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={14} duration={4} delay={0} />%
                    </p>
                        <p>Shares</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='w-[40%] h-[90px] overflow-hidden absolute left-[40%] bottom-[4%]'>
            <div className={`h-full w-full absolute animate__animated animate__fadeInDown  flex ${activeSlider === 3 ? 'block absolute' : 'hidden'}`}>
                {/* 1st slider */}
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={15} duration={4} delay={0} />+
                    </p>
                        <p>Years off bond</p>
                    </div>
                </div>
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={8000} duration={4} delay={0} />+
                    </p>
                        <p>imported machine</p>
                    </div>
                </div>
                <div className='w-[33%] h-full'>
                    <div><p className="mt-2 text-5xl font-semibold text-red-600">
                        <CountUp start={0} end={22} duration={4} delay={0} />%
                    </p>
                        <p>Shares</p>
                    </div>
                </div>
            </div> 
            </div>
            {/* counter end  */}


            <div className="flex justify-center ">
                <div className="flex items-center flex-col absolute top-[50%] lg:left-[2%] animate__animated animate__backInLeft animate__delay-2s">
                    <button
                        className={`transition-all duration-500 ${activeSlider === 1 ? 'text-red-600 text-4xl' : 'text-black text-3xl'}`}
                        onClick={() => setActiveSlider(1)}
                    >
                        01 
                    </button>
                    <div className="w-16 h-[1px] bg-red"></div>
                    <button
                        className={`transition-all duration-500 ${activeSlider === 2 ? 'text-red-600 text-4xl' : 'text-black text-3xl'}`}
                        onClick={() => setActiveSlider(2)}
                    >
                        02
                    </button>
                    <div className="w-16 h-[1px] bg-red"></div>
                    <button
                        className={`transition-all duration-500 ${activeSlider === 3 ? 'text-red-600 text-4xl' : 'text-black text-3xl'}`}
                        onClick={() => setActiveSlider(3)}
                    >
                        03
                    </button>
                </div>
            </div>

        </main>
    );
};

export default HeroSectionThree;
