import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Truck from "../../assets/Truck.svg?react";
import imageOne from "../../assets/tagImage/image-1.jpg";
import imageTwo from "../../assets/tagImage/image-2.jpg";
import imageThree from "../../assets/tagImage/image-3.jpg";
import { LucideGlobe, LucideArrowRight } from "lucide-react";

function LandingPage() {
  return (
    <>
      <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-one">
              <div className="hero-one-content">
                <div className="tagline">
                  <div className="icon">
                    <Truck />
                  </div>
                  <span>Transporters</span>
                </div>
                <div className="title">
                  <h1>
                    Move heavy <br /> industry forward <br /> globally
                  </h1>
                  <p>
                    Experience world-class transport of <br /> massive
                    industrial loads - safely, globally, <br />
                    and fast.
                  </p>
                </div>
                <div className="hero-icons">
                  <div className="icon" style={{ backgroundColor: "white" }}>
                    <Truck />
                  </div>
                  <div
                    className="icon"
                    style={{ color: "white", backgroundColor: "black" }}>
                    <LucideGlobe />
                  </div>
                </div>
                <div className="text">
                  <p>
                    Transporter is now a global logistics <br /> partner to many
                    companies
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-two">
              <div className="one">
                <h2>
                  Find locations to <br /> buy, sell or lease <br /> containers
                </h2>
                <div className="one-tagline">
                  <div className="icon">
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
                    <h2>
                      Trusted global <br /> partner in logistics
                    </h2>
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

        {/* Services Section */}
        <section className="services-section">
          <div className="service-content">
            <div className="service-text">
              <h3>Our Services</h3>
              <div className="inner-text">
                <h2>
                  <span className="span-color">We provide the best </span>
                  Logistic <span className="span-color">Services</span>
                </h2>
                <p>
                  Experience Reliable Efficient and customized Logistics
                  solution designed to move your goods safely and on time - By
                  Air, sea or land.
                </p>
              </div>
            </div>
            <div className="service-cards">
              <div className="card card-1">
                <h3>Air Freight</h3>
                <p>
                  Fast & Reliable air shipping services for urgent deliveries
                </p>
              </div>
              <div className="card card-2">
                <h3>Land Transportation</h3>
                <p>Efficient trucking services for in-land cargo movement</p>
              </div>
              <div className="card card-3">
                <h3>Ocean Freight</h3>
                <p>Cost-effective sea transport solutions for large shipment</p>
              </div>
              <div className="card card-4">
                <h3>Express Shipping</h3>
                <p>Quick delivery options for time-sensitive shipments</p>
              </div>
              <div className="card card-5">
                <h3>Container Leasing</h3>
                <p>Flexible options for leasing cargo containers</p>
              </div>
            </div>
            <div className="service-link">
              <Link>
                <p>View All Services</p>
                <div className="icon">
                  <LucideArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="work">
          <div className="work-content">
            <div className="work-head">
              <h3>Work Process</h3>
              <div className="work-subhead">
                <h2>We always follow the best way</h2>
                <p>
                  We use proven methods and smart strategies to ensure safe,
                  fast, and reliable delivery every time.
                </p>
              </div>
            </div>
            <div className="work-list">
              <div className="list">
                <div className="list-text">
                  <h3>1. Booking confirmation</h3>
                  <p>
                    The Customer Requests Transport Service By Providing
                    Shipment Details - Type Of Goods, Pickup And Delivery
                    Points, And Deadlines.
                  </p>
                </div>
                <div className="list-text">
                  <h3>2. Documentation</h3>
                  <p>
                    The Logistics Team Prepares All Necessary Transport And
                    Customs Documents And Plans The Most Efficient Route
                  </p>
                </div>
                <div className="list-text">
                  <h3>3. Cargo Pick-up</h3>
                  <p>
                    The Team Checks Packaging, Quantity, And Condition Before
                    Loading Them For Transport.
                  </p>
                </div>
              </div>
              <div className="image-border">
                <div className="image-div"></div>
              </div>
              <div className="list">
                <div className="list-text">
                  <h3>4. Customs Clearance</h3>
                  <p>
                    Customs Agents Handle All Export And Import Paperwork For
                    Smooth Border Clearance.
                  </p>
                </div>
                <div className="list-text">
                  <h3>5. Shipment</h3>
                  <p>
                    Cargo moves by air, sea or road with real time tracking
                    until delivery
                  </p>
                </div>
                <div className="list-text">
                  <h3>6. Delivery and closure</h3>
                  <p>
                    Goods Are Delivered And Final Documents Shared With The
                    Customer.
                  </p>
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
