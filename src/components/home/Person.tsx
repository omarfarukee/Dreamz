/* eslint-disable @next/next/no-img-element */
import React from "react";

const Person = () => {
  return (
    <div className="relative w-full h-[90vh] z-10 mt-40 mb-40">
      {/* Image */}
      <img
        src="https://i.imgur.com/w6O0LIn.jpeg"
        alt="person"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#01010f] to-[#01010f44]" />

      {/* Text Content */}
      <div className="absolute left-1/2 top-[10%] w-[600px] z-20">
      <p className="text-lg text-red-500"data-aos="fade-right"
                    data-aos-duration="1000">Welcome to Dreamz</p>
        <h2 className="text-5xl mt-5 font-bold text-[#fcd462]" data-aos="fade-right"
                    data-aos-duration="2000">Our Company has been present for <br /> over 17+ year</h2>
        <p className="mt-10 text-lg" data-aos="fade-right"
                    data-aos-duration="3000">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, odio, dolorum voluptatem dolores veritatis repellendus, dolore veniam officia enim doloremque accusamus eaque laboriosam a quod omnis odit voluptate sapiente cumque iusto sit! Natus possimus, culpa repellat ipsam autem voluptate vero voluptas odit, voluptates nulla impedit quam quia, magni sint omnis inventore excepturi. Eum, reiciendis. Sapiente nihil, fugit, fuga nam praesentium numquam eveniet tempore natus necessitatibus repellat aut ea atque pariatur, provident neque? Harum inventore consequatur repellendus totam nihil ipsam quis voluptatum alias, dolorum enim eaque iusto voluptates repudiandae non explicabo aliquam fugit exercitationem laborum. Ipsa nostrum non pariatur fuga dolore. 
        </p>
        <div className="flex items-center gap-5 mt-20" data-aos="fade-right"
                    data-aos-duration="3000">
                <img alt="avatar" src="https://i.imgur.com/Y0KWvDO.png" className="w-20 h-20 rounded-full"/>
                <div>
                    <p className="text-2xl text-red-500">Muhammad Ali Hossen</p>
                    <p className="">CEO, Dreamz INS Technology</p>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
