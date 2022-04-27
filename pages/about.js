import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";

const About = () => (
  <Root>
    <Head>
      <title>About | Automated Art</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">Automated Art</h2>
            <h4 className="font-size-subheader mb-4">
              Automated Art is an online marketplace providing pre-made and custom Promotional Art
              material and graphic design services, Automated Art hosts a vast array of stimulating
              aesthetics that cover all genres.
            </h4>
            {/* <div className="about-cjs mt-3 d-flex flex-row">
              <a
                className="px-4 py-3 font-color-white about-doc"
                href="https://commercejs.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <a
                className="px-4 py-3 about-dev"
                href="https://commercejs.com/docs/community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guides from the community
              </a>
            </div> */}
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/illustration-1.jpg" alt="Commerce.js illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/illustration-2.jpg" alt="Netlify illustration" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            {/* <h3 className="font-size-header mb-4">Deploy to Netlify</h3> */}
            <h4 className="font-size-subheader mb-4">
              Work with me to create Iconic Album Covers, cool album covers or just choose an image
              to start your album cover ideas
            </h4>
            {/* <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-net"
                href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy to Netlify
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            {/* <h3 className="font-size-header mb-4">Clone in GitHub</h3> */}
            <h4 className="font-size-subheader mb-4">
              Great for Album Artwork – Single Artwork – Playlists – Wall Art – T-Shirt Designs –
              Skateboards
            </h4>
            {/* <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-gb"
                href="https://github.com/chec/commercejs-nextjs-demo-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clone in GitHub
              </a>
            </div> */}
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/illustration-3.jpg" alt="GitHub illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/illustration-4.jpg" alt="Commerce.js blog illustration" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            {/* <h3 className="font-size-header mb-4">Technical Blog</h3> */}
            <h4 className="font-size-subheader mb-4">
              After you purchase a piece, it is then removed from the website so you get exclusive
              rights to the image Help me out and credit me as the artist, feel free to share my
              artwork linking the website.
              <br />
              <br />
              File sizes 1440x1440p 12cmx12cm 300dpi ( Cd Size) Contact me For Graphic Design
              Services, or Custom Sizes Portfolio: CV
            </h4>
            {/* <div className="mt-3">
              <a
                className="px-5 py-3 flex-grow-1 font-color-white about-blog"
                href="https://www.netlify.com/blog/2020/07/09/create-a-fully-fledged-jamstack-commerce-store-with-commerce.js-and-netlify/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Blog
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
