import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from "./WithStyles"; // Adjust the path as per your file structure

const WhatWeOffer: React.FC = () => {
    return (
      <div>
        <div className="flex justify-center mx-[600px]  text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-500">
          <h2 className="font-semibold text-4xl">What </h2>
          <h2 className="font-semibold text-4xl ml-2">we offer</h2>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable>
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="React Carousel with Server Side Rendering Support – Part 2"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
        </Carousel>
      </div>
    );
};

export default WhatWeOffer;
