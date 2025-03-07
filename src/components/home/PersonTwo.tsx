/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import person1 from "@/assets/person/person.png";
import blob from "@/assets/person/blob.gif";
const PersonTwo = () => {
    return (
        <div className="h-[100vh] w-full  relative z-10 flex justify-center mt-40 t">
            <div className="absolute w-full">
                <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#f4c7221f" strokeWidth="1">
                        <path d="M 0 300 C 300 250, 300 350, 300 100 S 500 250, 600 300 S 700 350, 1000 100"></path>
                        <path d="M 0 290 C 280 230, 300 330, 300 100 S 500 230, 600 280 S 700 330, 1000 100"></path>
                        <path d="M 0 280 C 260 210, 300 310, 300 100 S 500 210, 600 260 S 700 310, 1000 100"></path>
                        <path d="M 0 270 C 240 190, 300 290, 300 100 S 500 190, 600 240 S 700 290, 1000 100"></path>
                        <path d="M 0 260 C 220 170, 300 270, 300 100 S 500 170, 600 220 S 700 270, 1000 100"></path>
                        <path d="M 0 250 C 200 150, 300 250, 300 100 S 500 150, 600 200 S 700 250, 1000 100"></path>
                        <path d="M 0 240 C 180 130, 300 230, 300 100 S 500 130, 600 180 S 700 230, 1000 100"></path>
                        <path d="M 0 230 C 160 110, 300 210, 300 100 S 500 110, 600 160 S 700 210, 1000 100"></path>
                        <path d="M 0 220 C 140 90, 300 190, 300 100 S 500 90, 600 140 S 700 190, 1000 100"></path>
                        <path d="M 0 210 C 120 70, 300 170, 300 100 S 500 70, 600 120 S 700 170, 1000 100"></path>
                        <path d="M 0 200 C 100 50, 300 150, 300 100 S 500 50, 600 100 S 700 150, 1000 100"></path>
                    </g>
                </svg>
            </div>
            <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute -z-30 top-[-20%] left-[-20%]"></div>
            <div className="w-[1200px]  h-full flex ">
                <div className="w-[50%] z-30" data-aos="fade-right"
                    data-aos-duration="3000">
                    <Image src={person1} alt="person" className="absolute" />
                    <img src={blob.src} alt="blob" className="mt-10" />
                </div>
                <div className="w-[50%]">
                    <p className="text-lg text-red-500" data-aos="fade-left"
                        data-aos-duration="1000">Welcome to Dreamz</p>
                    <h2 className="text-5xl mt-5 font-bold text-[#f4c522]" data-aos="fade-left"
                        data-aos-duration="2000">Our Company has been present for <br /> over 17+ year</h2>
                    <p className="mt-10 text-lg" data-aos="fade-left"
                        data-aos-duration="3000">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, odio, dolorum voluptatem dolores veritatis repellendus, dolore veniam officia enim doloremque accusamus eaque laboriosam a quod omnis odit voluptate sapiente cumque iusto sit! Natus possimus, culpa repellat ipsam autem voluptate vero voluptas odit, voluptates nulla impedit quam quia, magni sint omnis inventore excepturi. Eum, reiciendis. Sapiente nihil, fugit, fuga nam praesentium numquam eveniet tempore natus necessitatibus repellat aut ea atque pariatur, provident neque? Harum inventore consequatur repellendus totam nihil ipsam quis voluptatum alias, dolorum enim eaque iusto voluptates repudiandae non explicabo aliquam fugit exercitationem laborum. Ipsa nostrum non pariatur fuga dolore.
                    </p>
                    <div className="flex items-center gap-5 mt-20 z-50 " data-aos="fade-left"
                        data-aos-duration="3000">
                        <img alt="avatar" src="https://i.imgur.com/Y0KWvDO.png" className="w-20 h-20 rounded-full" />
                        <div className="">
                            <p className="text-2xl text-red-500">Muhammad Ali Hossen</p>
                            <p className="">CEO, Dreamz INS Technology</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonTwo;
