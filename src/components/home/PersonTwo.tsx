/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import person1 from "@/assets/person/person.png";
import blob from "@/assets/person/blob.gif";
const PersonTwo = () => {
    return (
        <div className="h-[80vh] w-full  relative z-10 flex justify-center mt-40">
                  <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute -z-30 top-[-20%] left-[-20%]"></div>
            <div className="w-[1200px]  h-full flex">
                <div className="w-[50%] z-30" data-aos="fade-right"
                        data-aos-duration="3000">
                    <Image src={person1} alt="person" className="absolute"  />
                    <img src={blob.src} alt="blob" className="mt-10"  />
                </div>
                <div className="w-[50%]">
                    <p className="text-lg text-red-500" data-aos="fade-left"
                        data-aos-duration="1000">Welcome to Dreamz</p>
                    <h2 className="text-5xl mt-5 font-bold text-[#fcd462]" data-aos="fade-left"
                        data-aos-duration="2000">Our Company has been present for <br /> over 17+ year</h2>
                    <p className="mt-10 text-lg" data-aos="fade-left"
                        data-aos-duration="3000">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, odio, dolorum voluptatem dolores veritatis repellendus, dolore veniam officia enim doloremque accusamus eaque laboriosam a quod omnis odit voluptate sapiente cumque iusto sit! Natus possimus, culpa repellat ipsam autem voluptate vero voluptas odit, voluptates nulla impedit quam quia, magni sint omnis inventore excepturi. Eum, reiciendis. Sapiente nihil, fugit, fuga nam praesentium numquam eveniet tempore natus necessitatibus repellat aut ea atque pariatur, provident neque? Harum inventore consequatur repellendus totam nihil ipsam quis voluptatum alias, dolorum enim eaque iusto voluptates repudiandae non explicabo aliquam fugit exercitationem laborum. Ipsa nostrum non pariatur fuga dolore.
                    </p>
                    <div className="flex items-center gap-5 mt-20" data-aos="fade-left"
                        data-aos-duration="3000">
                        <img alt="avatar" src="https://i.imgur.com/Y0KWvDO.png" className="w-20 h-20 rounded-full" />
                        <div>
                            <p className="text-2xl text-red-500">ALi Hossen</p>
                            <p className="">CEO, Dreamz INS Technology</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonTwo;
