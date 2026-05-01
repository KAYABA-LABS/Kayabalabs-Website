import Story1 from "../../../public/assets/imgs/story/1.jpg";
import Story2 from "../../../public/assets/imgs/story/network.png";
import Story3 from "../../../public/assets/imgs/story/3.jpg";
import Story4 from "../../../public/assets/imgs/story/languages.png";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>1990</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">KayabaLabs Studio</h2>
                <h3 className="sec-title title-anim">About Us</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  KayabaLabs is a collective of blockchain builders, developers, founders, 
                  students, and researchers united by a shared passion for advancing the Ethereum ecosystem. 
                  Our team is composed of diverse contributors who actively collaborate to promote Ethereum 
                  adoption across West Africa and the broader Sub-Saharan region. 
                  </p>
                  <p>
                  We specialize in building blockchain-enabled consumer products for various industries while 
                  actively participating in and supporting local Ethereum communities across Ghana and the continent. 
                  Through collaboration and knowledge-sharing, we are committed to fostering Ethereum adoption by building collectively and inclusively.
                  </p>
                  <p> 
                  At KayabaLabs we are proud of our education program as well. We engage with a lot of key institutions , universities and 
                  state institutions to come up with education programs and effective curriculum to fast track educating the 
                  larger populace about blockchain technology and importantly the ethereum ecosystem. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                {/* <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                /> */}
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                {/* <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                /> */}
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
