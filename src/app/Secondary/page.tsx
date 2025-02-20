import BannerScroll from '@/components/home/BannerScroll';
import ExpertSolution from '@/components/home/ExpertSolution';
import GlobalPartner from '@/components/home/GlobalPartner';
import HeroSectionTwo from '@/components/home/HeroSectionTwo';
import { Marquees } from '@/components/home/Marquee';
import Person from '@/components/home/Person';
import ProductCard from '@/components/home/ProductCard';
import VideoSection from '@/components/home/VideoSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import React from 'react';

const SecondaryPage = () => {
    return (
        <div>
            <HeroSectionTwo />
            <ExpertSolution />
            <Person />
            <ProductCard />
            <VideoSection />
            <BannerScroll />
            <Marquees/>
            <WhyChooseUs />
            <GlobalPartner/>
        </div>
    );
};

export default SecondaryPage;