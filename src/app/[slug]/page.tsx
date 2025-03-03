
import MachineSection from '@/components/catalouge/machine-section/MachineSection';
import React from 'react';
type TProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: any
}

const CatalogueDetailsPage = async ({ params }: TProps) => {

    const { slug } = params
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const videoSources: any = {
        1: "/assets/videos/goldtest.mp4",
        2: "/assets/videos/hallmark.mp4",
        3: "/assets/videos/melting.mp4",
        4: "/assets/videos/diamondTest.mp4",
        5: "/assets/videos/refining.mp4",
        6: "/assets/videos/chianMaking.mp4",
        7: "/assets/videos/goldBar.mp4",
    };
    // Get the video source or use a default fallback
    const videoSrc = videoSources[slug];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const titleById: any = {
        1: "gold testing machine",
        2: "gold hallmark machine",
        3: "gold melting machine",
        4: "diamond testing machine",
        5: "gold refining machine",
        6: "chain making machine",
        7: "gold cleaning",
    };

    const heroTitle = titleById[slug]


    return (
        <div className=" mx-auto w-full">

            <div className="relative w-full h-[50vh]">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

                {/* Centered Content */}
                <div className="absolute z-30 inset-0 flex items-center justify-center  text-center">
                    <h1 className="text-[10em] p-2 uppercase rounded-xl bg-transparent  shadow-xl font-bold mt-[23.2%] bg-gradient-to-r  from-[#c09128] to-[#ffd87e] bg-clip-text text-transparent ">
                        {heroTitle}
                    </h1>
                </div>
            </div>

            <MachineSection slug={slug}/>
        </div>
    );
};

export default CatalogueDetailsPage;