import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const CreativeAgencyService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(
          ".animation_service_7 .service__item-7"
        );
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-7 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Web Development <span>Training</span>
                    </h3>
                  </Link>
                  <p>
                    Comprehensive training programs in Web Development and blockchain development 
                    for individuals and teams entering Web3.
                  </p>
                  <ul>
                    <li>+ Smart Contract Development</li>
                    <li>+ Blockchain Fundamentals</li>
                    <li>+ DApp Architecture</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Smart Contract <span>Development</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    Expert development of secure and efficient smart contracts 
                    for decentralized applications and blockchain platforms.
                  </p>
                  <ul>
                    <li>+ ERC Token Standards</li>
                    <li>+ DeFi Protocols</li>
                    <li>+ Security Audits</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Project <span>Incubation</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    Supporting and nurturing innovative blockchain projects from 
                    concept to launch with technical and strategic guidance.
                  </p>
                  <ul>
                    <li>+ Technical Mentorship</li>
                    <li>+ Go-to-Market Strategy</li>
                    <li>+ Community Building</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Blockchain <span>Research</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    Comprehensive market research and technical analysis for 
                    blockchain solutions and emerging Web3 technologies.
                  </p>
                  <ul>
                    <li>+ Technology Assessment</li>
                    <li>+ Market Analysis</li>
                    <li>+ Competitive Research</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      DApp <span>Development</span>
                    </h3>
                  </Link>
                  <p>
                    Building decentralized applications with modern frameworks 
                    and integrating Web3 capabilities for blockchain interaction.
                  </p>
                  <ul>
                    <li>+ Web3 Integration</li>
                    <li>+ Frontend Development</li>
                    <li>+ Wallet Integration</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Tokenomics <span>Design</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    Designing sustainable token economies and governance 
                    structures for blockchain projects and protocols.
                  </p>
                  <ul>
                    <li>+ Token Distribution</li>
                    <li>+ Governance Models</li>
                    <li>+ Economic Modeling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyService;
