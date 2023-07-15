import { VideoForBgBlend } from './VideoForBgBlend'

export const BackgroundWave = () => {
  return (
    <div className="page">
      <header>
        <nav className="sticky-nav difference d-flex justify-content-between">
          <div id="nav-btn" className="menu box mt-20">
            <svg id="i1" className="icon" viewBox="20 30 60 40">
              <path id="top-line-1" d="M30,37 L70,37 Z"></path>
              <path id="middle-line-1" d="M30,50 L70,50 Z"></path>
              <path id="bottom-line-1" d="M30,63 L70,63 Z"></path>
            </svg>
          </div>
        </nav>
      </header>
      <div id="takeover-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="nav-col nav-contact col-12 col-md-7 d-flex align-items-center justify-content-center position-relative order-md-0 order-1 bg-black px-3 py-5">
              <div className="position-absolute w-100 h-100 bg-topographic"></div>
              <div className="content position-relative">
                <h2 className="nav-title white mb-5">
                  Build your digital success with us
                  <span className="d-inline green">.</span>
                </h2>
                <ul className="contact-items white list-unstyled mb-5">
                  <li className="pb-4">
                    <a className="text-decoration-none" href="#">
                      +1 386-235-4062
                    </a>
                  </li>
                  <li className="pb-4">
                    <a className="text-decoration-none" href="#">
                      morgan@tactusmarketing.com
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Aguadilla, PR 00603
                    </a>
                  </li>
                </ul>
                <div className="social">
                  <a className="text-decoration-none green" href="#">
                    linkedin
                  </a>
                  <span className="white mx-2">|</span>
                  <a className="text-decoration-none green" href="#">
                    facebook
                  </a>
                  <span className="white mx-2">|</span>
                  <a className="text-decoration-none green" href="#">
                    instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-col nav-menu col-12 col-md-5 bg-green d-flex align-items-center pb-md-5 px-md-5 order-0 order-md-1 px-3 pb-3 pt-5">
              <ul className="nav-items list-unstyled">
                <li className="pb-3">
                  <a className="text-decoration-none" href="#">
                    services
                  </a>
                </li>
                <li className="pb-3">
                  <a className="text-decoration-none" href="#">
                    portfolio
                  </a>
                </li>
                <li className="pb-3">
                  <a className="text-decoration-none" href="#">
                    contact
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    about
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="hero d-flex align-items-center justify-content-center">
        <VideoForBgBlend />
        <div className="position-absolute w-100 gradient-overlay"></div>
        <div className="content position-relative mb-5 text-center">
          <h1 className="hero-title blend">
            Where Creativity
            <br />
            &amp; Strategy Meet
          </h1>
        </div>
      </section>
      <div className="custom-cursor"></div>
    </div>
  )
}
