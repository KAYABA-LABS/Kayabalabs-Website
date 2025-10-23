import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, data[i]), 1000);
      });
    }
  };

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Services</h2>
                <h3 className="sec-title title-anim">
                  Our Blockchain <br /> Solutions
                </h3>
                <p>
                  We specialize in training individuals in Web Development and blockchain development, 
                  incubating innovative projects, and conducting market research to build the 
                  decentralized future. Our comprehensive approach covers all aspects of 
                  blockchain technology and Web3 development.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/service-details" className="service__title-3">
                      Web Development Training & <br />
                      Education
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Comprehensive training programs in Web Development and blockchain development 
                      for individuals and teams looking to enter Web3.
                    </p>
                    <ul className="">
                      <li>+ Smart Contract Development</li>
                      <li>+ Blockchain Fundamentals</li>
                      <li>+ DApp Architecture</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/service-details" className="service__title-3 ">
                      Smart Contract <br />
                      Development
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Expert development of secure and efficient smart contracts 
                      for decentralized applications and blockchain platforms.
                    </p>
                    <ul className="">
                      <li>+ ERC Token Standards</li>
                      <li>+ DeFi Protocols</li>
                      <li>+ Security Audits</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/2.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                      Project<br />
                      Incubation
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      We support and nurture innovative blockchain projects from 
                      concept to launch, providing guidance and resources.
                    </p>
                    <ul className="">
                      <li>+ Technical Mentorship</li>
                      <li>+ Go-to-Market Strategy</li>
                      <li>+ Community Building</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/3.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                      Blockchain<br />
                      Research & Market Analysis
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Comprehensive market research and technical analysis for 
                      blockchain solutions and emerging Web3 technologies.
                    </p>
                    <ul className="">
                      <li>+ Technology Assessment</li>
                      <li>+ Market Opportunity Analysis</li>
                      <li>+ Competitive Research</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
