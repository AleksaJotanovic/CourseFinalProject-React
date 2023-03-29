import React from "react";
import flower1 from "../resources/flower1.jpeg";
import flower2 from "../resources/flower2.jpeg";
import flower3 from "../resources/flower3.jpeg";
import flower4 from "../resources/flower4.jpeg";
import flower5 from "../resources/flower5.jpeg";
import flower6 from "../resources/flower6.jpeg";
import flower7 from "../resources/flower7.jpeg";
import flower8 from "../resources/flower8.jpeg";
import flowerBackground from "../resources/flowerBackground1.jpg";
import splitBannerFlower from "../resources/FTD_SplitBanner_Merx_1.png";
import SocialSidebar from "./SocialSidebar";

const Home = () => {
  return (
    <>
      <section
        style={{
          height: "30em",
          backgroundImage: "url(" + flowerBackground + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          textAlign: "right",
          paddingTop: "9em",
          paddingRight: "2em",
        }}
      >
        <div>
          <h1>March into Spring!</h1>
          <p>Bring the meadow to them in a daisy bouquet.</p>
          <button className="btn btn-secondary rounded-1">SHOP FLOWERS</button>
        </div>
      </section>
      <section className="d-flex justify-content-center mt-3 mt-xl-0">
        <p className="p-4 p-xl-5 col-sm-10 col-lg-10 col-xl-8">
          Established in 1910, FTD has been a premier provider of beautiful
          floral arrangements and gorgeous mixed flower bouquets for over 100
          years. Whatever the occasion, our evergreen collection of colorful
          stems, blossoming plants, and fragrant arrangements have warmed hearts
          all across the country with our flower delivery services. At FTD, we
          celebrate the little things in life and cherish the timeless charm a
          single flower embodies. From birthday flowers to sympathy flowers, all
          of our hand-picked flower arrangements are worth more than a thousand
          words.
          <br />
          <br />
          Our sprawling network of florists is chock-full of expert on thumbs
          with an eye for elegance and perfection. As one of the largest and
          most trusted online floral retailers in the world, we take immense
          pride in our industry- leading title. Delivering quality, innovation,
          creative artistry, and dependability, FTD is much more than just an
          online flower delivery service.
        </p>
      </section>

      <div className="row text-center justify-content-center w-100 mx-auto">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower1} style={{ height: "17em" }} alt="" />
          <p>
            Fiesta Bouquet <br /> $60
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower2} style={{ height: "17em" }} alt="" />
          <p>
            Alluring Elegance Bouquet <br /> $72
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower3} style={{ height: "17em" }} alt="" />
          <p>
            Beyond Blue Bouquet <br /> $55
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower4} style={{ height: "17em" }} alt="" />
          <p>
            Mixed Roses <br /> $35
          </p>
        </div>
      </div>

      <div className="row text-center justify-content-center w-100 mx-auto">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower5} style={{ height: "17em" }} alt="" />
          <p>
            Belle of the Ball Bouquet <br /> $45
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower6} style={{ height: "17em" }} alt="" />
          <p>
            Rainbow Garden <br /> $50
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower7} style={{ height: "17em" }} alt="" />
          <p>
            Best Day Bouquet <br /> $61
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
          <img src={flower8} style={{ height: "17em" }} alt="" />
          <p>
            Smiles & Sunshine <br /> $45
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-secondary rounded-1">
          Load More
        </button>
      </div>

      {/* FORM */}
      <section>
        <div className="mt-5 row justify-content-center mx-auto p-5 p-sm-3 p-md-5 p-lg-5 p-xl-0">
          <div className="col-md-5">
            <p>
              Send us a message <br />
              A: Laze Nancica 7, 21000 Novi Sad
            </p>
            <p>T: 021/422-022</p>
            <p>office@smartinit.net</p>
            <br />
            <p>MONDAY: 7am - 10pm</p>
            <p>SATURDAY: 8am - 10pm</p>
            <p>SUNDAY:-</p>
            <br />
            <p>FAQ /</p>
            <p>Shipping & Returns</p>
            <p>Store Policy</p>
            <p>Payment Methods/</p>
          </div>
          <div className="col-md-7 col-lg-6">
            <form className="row mt-5">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-3 rounded-0 shadow-none border-0 border-bottom border-dark"
                  id="inputEmail4"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control mb-3 rounded-0 shadow-none border-0 border-bottom border-dark"
                  id="inputPassword4"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control mb-3 rounded-0 shadow-none border-0 border-bottom border-dark"
                  id="inputEmail4"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control mb-3 rounded-0 shadow-none border-0 border-bottom border-dark"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-1"
                >
                  SEND
                </button>
              </div>
            </form>

            <p className="mt-5">Get our newletters</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow-none rounded-0 border-dark"
                placeholder="Enter your email here"
              />
              <div className="input-group-append">
                <button className="btn btn-dark ms-3 rounded-1" type="button">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <SocialSidebar />
      </section>
      <section className="container-fluid mt-5">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 text-center text-light"
            style={{
              backgroundColor: "pink",
              height: "21em",
              paddingTop: "6em",
            }}
          >
            <h3>Send Get Well Wishes</h3>
            <p style={{ fontSize: "smaller" }}>
              Brighten their recovery with beautifull florals, plants, and gifts
              that will express your well wishes.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm fw-bold rounded-5"
            >
              SHOP GET WELL FLOWERS & GIFTS
            </button>
          </div>
          <div
            className="col-lg-6 col-md-6"
            style={{
              backgroundImage: "url(" + splitBannerFlower + ")",
              height: "21em",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Home;
