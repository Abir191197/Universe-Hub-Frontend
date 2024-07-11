import Banner from "./Banner";
import Navbar from "./Navbar";
import CounsellorDetails from "./CounsellorDetails";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import WhatSayStudent from "./WhatSayStudent";
import WhatWeOffer from "./WhatWeOffer";

// ..
AOS.init();


const LandingPage = () => {
    return (
      <>
        <Navbar></Navbar>
            <Banner></Banner>
            <WhatWeOffer></WhatWeOffer>
        <div data-aos="fade-left">
          <CounsellorDetails></CounsellorDetails>
        </div>
        <div data-aos="fade-right">
          <WhatSayStudent></WhatSayStudent>
        </div>

        <Footer></Footer>
      </>
    );
};

export default LandingPage;