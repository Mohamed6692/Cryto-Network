import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@simplepay-ai/widget';

const SimplePayWidget = ({
  price,
  appId,
  clientId,
  backToStoreUrl,
  dark = false,
  invoiceId,
}) => {
  return (
    <div>
      <payment-app
        price={price}
        appId={appId}
        clientId={clientId}
        backToStoreUrl={backToStoreUrl}
        dark={dark ? 'true' : 'false'}
        invoiceId={invoiceId}
      />
    </div>
  );
};
function MyComponentPage() {

  const [inputText, setInputText] = useState('');
  const [codeOutput, setCodeOutput] = useState('');

  const handleProcessText = () => {
    // Traitement du texte ici
    setCodeOutput(inputText); // Exemple : mettre le texte d'entrée dans la zone de code
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeOutput);
    alert('Code copied to clipboard!');
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Crypto - ICO Crypto, Blockchain & Cryptocurrency Web Template</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="shortcut icon" type="image/x-icon" href="%PUBLIC_URL%/assets/img/favicon.png" />
      <link rel="stylesheet" href="%PUBLIC_URL%/assets/css/bootstrap-5.0.0-alpha-1.min.css" />
      <link rel="stylesheet" href="%PUBLIC_URL%/assets/css/LineIcons.2.0.css" />
      <link rel="stylesheet" href="%PUBLIC_URL%/assets/css/animate.css" />
      <link rel="stylesheet" href="%PUBLIC_URL%/assets/css/main.css" />

      <div>
        {/* Internet Explorer upgrade warning */}
        {/*[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]*/}

        {/* Preloader */}
        <div className="preloader d-none">
          <div className="loader">
            <div className="ytp-spinner">
              <div className="ytp-spinner-container">
                <div className="ytp-spinner-rotator">
                  <div className="ytp-spinner-left">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                  <div className="ytp-spinner-right">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="header navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`} alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#service">Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#roadmap">Roadmap</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div> {/* navbar collapse */}
              </nav> {/* navbar */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </header>
      {/* ========================= header end ========================= */}





     


      {/* ========================= hero-section start ========================= */}
      <section id="home" className="hero-section">
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="hero-content-wrapper">
                <h1 className="text-white wow fadeInDown" data-wow-delay=".2s">
                  Trade and Invest on Crypto Using Our Platform
                </h1>
                <p className="text-white wow fadeInLeft" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                </p>
                <a href="#" className="theme-btn wow fadeInUp" data-wow-delay=".6s">Register Now</a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="hero-img">
                <img src={`${process.env.PUBLIC_URL}/assets/img/hero-img.svg`} alt="" className="wow fadeInRight" data-wow-delay=".5s" />
              </div>
            </div>
          </div>
        </div>
      </section>


             {/* ========================= input-section start  Traitement========================= */}
            <section className="input-section pt-5">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Enter your text" 
                        value={inputText} 
                        onChange={(e) => setInputText(e.target.value)} 
                        />
                        <label htmlFor="floatingInput">Input Text</label>
                    </div>
                    <button 
                        className="btn btn-primary mb-3" 
                        onClick={handleProcessText}
                    >
                        Process Text
                    </button>
                    </div>
                </div>
                </div>
            </section>
            {/* ========================= input-section end ========================= */}

            {/* ========================= code-section start ========================= */}
            <section className="code-section pt-5">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="form-floating">
                        <textarea 
                        className="form-control" 
                        placeholder="Code output" 
                        id="floatingTextarea2" 
                        style={{ height: '200px' }} 
                        readOnly 
                        value={codeOutput} 
                        />
                        <label htmlFor="floatingTextarea2">Code Output</label>
                        <button 
                            className="btn btn-secondary mt-2" 
                            onClick={copyToClipboard}
                        >
                        Copy Code <i className="bi bi-back"></i>
                        </button>
                       
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* ========================= code-section end traitement========================= */}

        {/* ========================= SimplePayWidget Section ========================= */}
        <section className="payment-widget-section pt-5">
                <div className="container">
                <h2>Payment Widget</h2>
                <SimplePayWidget 
                    price="0.8"
                    appId="09476f0c-ed36-4dfe-84f4-ef2df1644830"
                    clientId="bf298925-2f45-492c-891d-f997aa7ac864"
                    backToStoreUrl="https://example.com"
                    dark={false} // Change to true if you want dark theme
                />
                </div>
            </section>
      {/* ========================= SimplePayWidget Section end ========================= */}


      {/* ========================= hero-section end ========================= */}

      {/*========================= feature-section start========================= */}
      <section id="feature" className="feature-section pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 mx-auto">
              <div className="section-title text-center mb-55">
                <h2 className="mb-20 wow fadeInUp" data-wow-delay=".2s">Our Specialities</h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <div className="features-wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".2s">
                  <div className="feature-img mb-20">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/feature-1.svg`} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Buy Your Crypto</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                  <div className="feature-img mb-25">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/feature-2.svg`} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Sell Instantly</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".6s">
                  <div className="feature-img mb-20">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/feature-3.svg`} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Invest for Longterm</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========================= feature-section end========================= */}

      {/* ========================= about-section start ========================= */}
      <section id="about" className="about-section pt-150 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img mb-30">
                <img src={`${process.env.PUBLIC_URL}/assets/img/about-img.svg`} alt="image" className="wow fadeInLeft" data-wow-delay=".4s" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content mb-30">
                <div className="section-title mb-40">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">About Us</h2>
                </div>
                <p className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                </p>
                <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                </p>
                <a href="#" className="theme-btn theme-btn-2 wow fadeInRight" data-wow-delay=".8s">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= about-section end ========================= */}

      {/* ========================= service-section start ========================= */}
      <section id="service" className="service-section pt-150 pb-120">
        <div className="container text-center">
          <h1>You are using free lite version of Crypto</h1>
          <p>Please, purchase full version to get all sections, elements, permission to remove footer credit</p>
          <br />
          <a href="https://rebrand.ly/ud-crypto" rel="nofollow" target="_blank" className="theme-btn wow fadeInUp" data-wow-delay=".6s">Purchase Now</a>
        </div>
      </section>
      {/* ========================= service-section end ========================= */}

      {/* ========================= roadmap-section start ========================= */}
      <section id="roadmap" className="roadmap-section pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <h2 className="mb-20 wow fadeInUp" data-wow-delay=".2s">Roadmap</h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="roadmap-item mb-30 wow fadeInLeft" data-wow-delay=".2s">
                  <h5>Q1 2023</h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                </div>
                <div className="roadmap-item mb-30 wow fadeInLeft" data-wow-delay=".4s">
                  <h5>Q2 2023</h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="roadmap-item mb-30 wow fadeInRight" data-wow-delay=".2s">
                  <h5>Q3 2023</h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                </div>
                <div className="roadmap-item mb-30 wow fadeInRight" data-wow-delay=".4s">
                  <h5>Q4 2023</h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= roadmap-section end ========================= */}

      {/* ========================= team-section start ========================= */}
      <section id="team" className="team-section pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <h2 className="mb-20 wow fadeInUp" data-wow-delay=".2s">Our Team</h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <div className="team-wrapper">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-team mb-30 wow fadeInUp" data-wow-delay=".2s">
                  <div className="team-img">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/team-1.jpg`} alt="image" />
                  </div>
                  <div className="team-content">
                    <h5>John Doe</h5>
                    <p>CEO & Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-team mb-30 wow fadeInUp" data-wow-delay=".4s">
                  <div className="team-img">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/team-2.jpg`} alt="image" />
                  </div>
                  <div className="team-content">
                    <h5>Jane Doe</h5>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-team mb-30 wow fadeInUp" data-wow-delay=".6s">
                  <div className="team-img">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/team-3.jpg`} alt="image" />
                  </div>
                  <div className="team-content">
                    <h5>Mike Smith</h5>
                    <p>CTO</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-team mb-30 wow fadeInUp" data-wow-delay=".8s">
                  <div className="team-img">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/team-4.jpg`} alt="image" />
                  </div>
                  <div className="team-content">
                    <h5>Emma Brown</h5>
                    <p>Marketing Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= team-section end ========================= */}

      {/* ========================= contact-section start ========================= */}
      <section id="contact" className="contact-section pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <h2 className="mb-20 wow fadeInUp" data-wow-delay=".2s">Contact Us</h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="theme-btn wow fadeInUp" data-wow-delay=".6s">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="footer pt-100 img-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/common-bg.jpg)` }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-60 wow fadeInLeft" data-wow-delay=".2s">
                <a href="index.html" className="logo mb-40">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`} alt="" />
                </a>
                  <p className="mb-30">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                  <div className="footer-social-links">
                    <ul>
                      <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                      <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                      <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                      <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-widget mb-60 wow fadeInUp" data-wow-delay=".4s">
                  <h4>Company</h4>
                  <ul className="footer-links">
                    <li><a href="javascript:void(0)">Home</a></li>
                    <li><a href="javascript:void(0)">About</a></li>
                    <li><a href="javascript:void(0)">Service</a></li>
                    <li><a href="javascript:void(0)">Team</a></li>
                    <li><a href="javascript:void(0)">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget mb-60 wow fadeInUp" data-wow-delay=".6s">
                  <h4>Resource</h4>
                  <ul className="footer-links">
                    <li><a href="javascript:void(0)">Documentation</a></li>
                    <li><a href="javascript:void(0)">IOS & Android Apps</a></li>
                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                    <li><a href="javascript:void(0)">Support Forum</a></li>
                    <li><a href="javascript:void(0)">Terms Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget mb-60 wow fadeInRight" data-wow-delay=".8s">
                  <h4>Resource</h4>
                  <ul>
                    <li className="mb-30">
                      <p>Company No: C5B345 <br />
                      CSINE GROUP LTD.</p>
                    </li>
                    <li>
                      <p>Address: M-321 Volunt Ave, <br /> Staten Islandm, NY 201526</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <p className="mb-0 text-white text-center">Template By <a href="https://uideck.com" rel="nofollow" target="_blank">UIdeck</a></p>
            </div>
          </div>
        </footer>

        {/* Scroll to top */}
        <a href="#" className="scroll-top">
          <i className="lni lni-chevron-up"></i>
        </a>

        {/* JS scripts */}
        <script src="%PUBLIC_URL%/assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js"></script>
        <script src="%PUBLIC_URL%/assets/js/contact-form.js"></script>
        <script src="%PUBLIC_URL%/assets/js/wow.min.js"></script>
        <script src="%PUBLIC_URL%/assets/js/main.js"></script>
      </div>
    </div>
  );
}

export default MyComponentPage;
