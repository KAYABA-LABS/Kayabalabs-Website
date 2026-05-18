import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/Bootcamp.jpg";
import Service12 from "../../../public/assets/imgs/service/development.jpg";
import Service13 from "../../../public/assets/imgs/service/cloud.jpg";
import Service14 from "../../../public/assets/imgs/service/blockchain.jpg";
import Service15 from "../../../public/assets/imgs/service/AI.jpg";
import Service16 from "../../../public/assets/imgs/service/digital.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                       Software Development  <br />
                       Bootcamp
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Web & Mobile Product<br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Cloud Infrastructure <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Blockchain Research  <br /> 
                        And Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                        Artificial Intelligence <br />
                        & Business Analytics
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                        Digital Business <br />
                        Transformation
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service16}
                      alt="Service Image"
                    />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                         Software Development Bootcamp
                        </h2>
                        <p>
                          Accelerate your tech career with KayabaLabs’ intensive Software Development Bootcamp, 
                          designed to prepare aspiring professionals for real-world engineering roles, 
                          including Software Development Engineer in Test (SDET), QA Automation, 
                          and full software delivery environments. Our hands-on curriculum combines 
                          technical theory with practical implementation, ensuring students graduate 
                          with job-ready skills and industry confidence.
                        </p>
                        <p>
                          Through live projects, structured assignments, and mentor-led sessions, 
                          participants gain direct experience in software testing frameworks, automation tools, 
                          coding fundamentals, Agile workflows, and modern development practices. 
                          We are committed to creating opportunities for learners at every stage, 
                          empowering them to build meaningful solutions with technology and thrive
                           in today’s digital economy.
                        </p>
                        <ol style={{ color: "#fff", marginTop: "20px" }}>                          
                        <li> <strong>Hands-On Project Training - </strong>  Real-world applications, testing environments, and portfolio-ready assignments that simulate industry workflows.</li> <br/>
                          <li><strong> On-Demand Technical Skills - </strong> Training in software testing, test automation, coding principles, APIs, version control, and QA engineering tools.</li> <br/>
                          <li><strong>Mentorship & Career Guidance - </strong>Access to experienced instructors, technical coaching, interview preparation, and career pathway support.</li> <br/>
                          <li><strong>Inclusive Growth Pathway - </strong>Beginner-friendly learning designed to help students upskill, transition careers, and succeed in the tech industry.</li> 
                        </ol>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Web & Mobile Development
                        </h2>
                        <p>
                        Strengthen your digital presence with scalable web and mobile s
                        olutions engineered to support growth, efficiency, and long-term 
                        competitiveness. At KayabaLabs, we deliver custom software platforms, 
                        high-performance e-commerce systems, and enterprise integrations that 
                        help businesses modernize operations and unlock new revenue opportunities.
                        </p>
                        <p>
                         Our agile delivery model ensures every solution is secure, user-focused, 
                         and built for measurable results.
                        </p>
                        <ol style={{ color: "#fff", marginTop: "20px" }}>                          
                        <li> <strong>Custom Web Platforms - </strong>  Business websites, customer portals, booking systems, and internal management dashboards tailored to operational needs.</li> <br/>
                          <li><strong> Mobile App Development - </strong>  Native and cross-platform iOS/Android applications for customer engagement, logistics, fintech, and on-demand services.</li> <br/>
                          <li><strong>E-Commerce Solutions - </strong>Scalable online stores with secure payment gateways, inventory synchronization, and conversion-focused user journeys.</li> <br/>
                          <li><strong>Enterprise Integration & DevOps - </strong>SAP BTP integration, API connectivity, CI/CD pipelines, cloud deployment, testing, and performance optimization.</li> 
                        </ol>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Cloud Infrastructure Development
                        </h2>
                        <p>
                        Modernize your IT environment with secure, scalable, and cost-optimized 
                        cloud infrastructure built to support business growth. At KayabaLabs, 
                        we design and implement tailored cloud solutions that improve operational efficiency, 
                        strengthen resilience, and deliver measurable ROI across digital workloads.
                        </p>
                        <p>
                        Our certified engineers leverage leading platforms such as AWS and Google Cloud to build high-performance
                         environments optimized for uptime, security, compliance, and future scalability. From cloud migration to 
                         infrastructure modernization, we help businesses adopt the cloud with confidence while maintaining full control over cost and performance.

                        For highly specialized requirements, we collaborate with trusted technology partners to ensure every deployment 
                        is executed with precision, governance, and enterprise-grade standards.
                        </p>
                        <ol style={{ color: "#fff", marginTop: "20px" }}>                          
                        <li> <strong>Cloud Migration & Modernization - </strong>  Seamless migration of applications, servers, and databases from on-premise environments to AWS or Google Cloud.</li> <br/>
                          <li><strong> Scalable Infrastructure Architecture - </strong>  High-availability systems, auto-scaling environments, load balancing, and disaster recovery planning.</li> <br/>
                          <li><strong>Security & Compliance Engineering - </strong> IAM controls, network security, encryption, monitoring, and compliance-ready cloud configurations.</li> <br/>
                          <li><strong>Cost Optimization & DevOps Enablement - </strong> Resource right-sizing, CI/CD pipelines, infrastructure automation, and continuous performance tuning.</li> 
                        </ol>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Blockchain Research & Development
                        </h2>
                        <p>
                          Build next-generation digital infrastructure with enterprise-grade blockchain 
                          solutions engineered for security, scalability, and regulatory readiness. 
                          At KayabaLabs, we help organizations design, develop, and deploy blockchain 
                          systems that integrate seamlessly with existing operations while supporting long-term innovation.
                        </p>
                        <p>
                          Our expertise spans Ethereum, Starknet, smart contract architecture, 
                          decentralized applications, and protocol engineering. 
                          By combining deep technical research with practical implementation, 
                          we create secure and efficient solutions for institutions, startups, 
                          and forward-looking enterprises navigating the evolving Web3 landscape.

                          We also contribute to the broader blockchain ecosystem through open-source tooling,
                           network innovation, and research across cryptography, decentralized finance (DeFi), 
                           and next-generation protocol design.
                        </p>
                        <ol style={{ color: "#fff", marginTop: "20px" }}>                          
                        <li> <strong>Smart Contract & dApp Development - </strong>  Secure smart contracts, decentralized applications, token systems, and Web3 product ecosystems.</li> <br/>
                          <li><strong> Blockchain Infrastructure Engineering - </strong>  Node deployment, Layer 2 integrations, wallet connectivity, APIs, and scalable network architecture.</li> <br/>
                          <li><strong>Security, Compliance & Auditing - </strong> Smart contract reviews, risk assessments, governance controls, and compliance-focused implementations.</li> <br/>
                          <li><strong>Research & Innovation - </strong> Applied cryptography, DeFi systems, protocol design, zero-knowledge solutions, and open-source ecosystem contributions.</li> 
                        </ol>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Artificial Intelligence & Business Analytics
                        </h2>
                        <p>
                          Unlock smarter decision-making and operational advantage with 
                          advanced AI and data-driven analytics solutions. 
                          At KayabaLabs, we help businesses harness the power of Large Language Models (LLMs),
                           machine learning, and modern analytics platforms to automate processes, 
                           improve customer experiences, and uncover new growth opportunities.
                        </p>
                        <p>
                          Our approach combines strong software engineering expertise with practical 
                          AI implementation—building intelligent applications, internal automation systems, 
                          and analytics environments that generate measurable business value. 
                          We also translate complex data into clear insights through tailored dashboards, 
                          reporting systems, and performance intelligence aligned with your business model.

                          With experienced data scientists, analysts, and engineers, we deliver scalable solutions 
                          that turn data and AI into strategic assets.
                        </p>
                        <ol style={{ color: "#fff", marginTop: "20px" }}>                          
                        <li> <strong>AI-Powered Software Solutions - </strong>  Intelligent applications, chatbots, copilots, recommendation engines, and workflow automation using LLMs and machine learning.</li> <br/>
                          <li><strong> Business Intelligence & Dashboards - </strong>  Executive dashboards, KPI reporting, real-time metrics, and self-service analytics using modern BI platforms.</li> <br/>
                          <li><strong>Predictive & Advanced Analytics - </strong> Demand forecasting, customer behavior analysis, risk modeling, and data-driven decision support systems.</li> <br/>
                          <li><strong>Data Strategy & Integration - </strong> Data pipelines, warehouse modernization, cross-system reporting, and analytics ecosystems built for scale.</li> 
                        </ol>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Digital Business Transformation
                        </h2>
                        <p>
                          Accelerate growth and stay competitive by aligning technology with your core business objectives.
                           At KayabaLabs, we help organizations turn operational challenges and market opportunities into 
                           actionable digital strategies that improve efficiency, customer experience, and long-term profitability.
                        </p>
                        <p>
                          Our consultants work closely with leadership teams to assess current capabilities, define transformation priorities, 
                          and build execution roadmaps that deliver measurable business outcomes. From modernizing internal processes to launching 
                          new digital revenue streams, we ensure technology investments create real enterprise value.

                          Using a structured governance model, we establish clear KPIs, milestone tracking, and performance metrics from day one—giving 
                          stakeholders full visibility throughout the transformation lifecycle.
                        </p>
                        <ol style={{ color: "#fff", marginTop: "20px" }}>                          
                        <li> <strong>Digital Strategy & Roadmapping - </strong>  Business capability assessments, technology planning, transformation blueprints, and phased execution strategies.</li> <br/>
                          <li><strong> Process Automation & Efficiency - </strong>  Workflow digitization, ERP/CRM optimization, data integration, and operational cost reduction initiatives.</li> <br/>
                          <li><strong>Customer Experience Innovation - </strong> Omnichannel platforms, self-service portals, personalization systems, and digital product enhancement.</li> <br/>
                          <li><strong>Governance & Performance Tracking - </strong> KPI frameworks, PMO oversight, milestone reporting, ROI measurement, and continuous improvement management.</li> 
                        </ol>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
