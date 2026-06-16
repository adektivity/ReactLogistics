import React from "react";
import "./styles.css";

import Truck from "../../assets/Truck.svg";
import imageOne from "../../assets/tagImage/image-1.jpg";
import imageTwo from "../../assets/tagImage/image-2.jpg";
import imageThree from "../../assets/tagImage/image-3.jpg";
import { LucideGlobe, LucideArrowRight } from "lucide-react";

function LandingPage() {
  return (
    <>
      <main className="container">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-one">
              <div className="tagline">
                <div className="icon">
                  <img src={Truck} alt="truck svg" />
                </div>
                <span>Transporters</span>
              </div>
              <div className="title">
                <h1>Move heavy industry forward globally</h1>
                <p>
                  Experience world-class transport of massive industrial loads -
                  safely, globally, and fast.
                </p>
              </div>
              <div className="hero-icons">
                <div className="icon">
                  <img src={Truck} alt="truck svg" />
                </div>
                <div className="icon">
                  <LucideGlobe />
                </div>
              </div>
              <div className="text">
                <p>
                  Transporter is now a global logistics partner to many
                  companies
                </p>
              </div>
            </div>
            <div className="hero-two">
              <div className="one">
                <h2>Find locations to buy, sell or lease containers</h2>
                <div className="one-tagline">
                  <div className="tag-icon">
                    <LucideArrowRight />
                  </div>
                  <p>Request a Quote</p>
                </div>
              </div>
              <div className="two">
                <div className="two-content">
                  <div className="two-title">
                    <h2>
                      2M+ <br />
                      TONS DELIVERED
                    </h2>
                  </div>
                  <div className="two-tagline">
                    <h2>Trusted global partner in logistics</h2>
                    <div className="img-tagline">
                      <img src={imageOne} alt="" />
                      <img src={imageTwo} alt="" />
                      <img src={imageThree} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
