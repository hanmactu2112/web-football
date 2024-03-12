import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex h-full flex-col items-center justify-center bg-[var(--Footer-background)]">
      <div className="1xl:w-[1344px] footerTop flex w-full flex-row justify-center lg:w-[992px]">
        <div className="max-w-screen-xl w-[calc(100vw-48px)] lg:w-[calc(100vw-64px)]">
          <section className="flex gap-8 p-[40px_0_24px_0] lg:grid lg:grid-cols-3 lg:gap-4 lg:p-[48px_0_40px_0]">
            <div className="flex flex-col gap-8">
              <Logo />
              <h3 className="max-w-[302px] text-[25px] leading-8">
                FotMob is the essential football app.
              </h3>
            </div>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/matches">Matches</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-8">
              <h2>Get the App</h2>
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <g id="ic_app_store" transform="translate(-703 -5)">
                        <circle
                          id="Ellipse_312"
                          cx="25"
                          cy="25"
                          r="25"
                          fill="var(--Footer-appStoreBackground)"
                          transform="translate(703 5)"
                        ></circle>
                        <g id="XMLID_4_" transform="translate(717.883 15.393)">
                          <g id="XMLID_5_">
                            <path
                              id="XMLID_7_"
                              fill="var(--Footer-appleStoreColor)"
                              d="M26.873 21.171a5.591 5.591 0 0 1 2.7-4.721 5.8 5.8 0 0 0-4.557-2.457c-1.919-.2-3.781 1.138-4.752 1.138-.994 0-2.5-1.126-4.123-1.092a6.064 6.064 0 0 0-5.106 3.106c-2.2 3.811-.56 9.408 1.553 12.491 1.062 1.513 2.3 3.2 3.918 3.128 1.588-.068 2.182-1 4.089-1s2.444 1 4.1.967c1.7-.023 2.776-1.513 3.792-3.037a12.748 12.748 0 0 0 1.736-3.515 5.419 5.419 0 0 1-3.35-5.008z"
                              className="cls-2"
                              transform="translate(-9.984 -7.997)"
                            ></path>
                            <path
                              id="XMLID_6_"
                              fill="var(--Footer-appleStoreColor)"
                              d="M22.5 12.69a5.451 5.451 0 0 0 1.268-3.97 5.711 5.711 0 0 0-3.666 1.888 5.229 5.229 0 0 0-1.3 3.822 4.7 4.7 0 0 0 3.698-1.74z"
                              className="cls-2"
                              transform="translate(-8.734 -8.72)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <g id="ic_app_store" transform="translate(-703 -5)">
                        <circle
                          id="Ellipse_312"
                          cx="25"
                          cy="25"
                          r="25"
                          fill="var(--Footer-appStoreBackground)"
                          transform="translate(703 5)"
                        ></circle>
                        <g id="XMLID_4_" transform="translate(717.883 15.393)">
                          <g id="XMLID_5_">
                            <path
                              id="XMLID_7_"
                              fill="var(--Footer-appleStoreColor)"
                              d="M26.873 21.171a5.591 5.591 0 0 1 2.7-4.721 5.8 5.8 0 0 0-4.557-2.457c-1.919-.2-3.781 1.138-4.752 1.138-.994 0-2.5-1.126-4.123-1.092a6.064 6.064 0 0 0-5.106 3.106c-2.2 3.811-.56 9.408 1.553 12.491 1.062 1.513 2.3 3.2 3.918 3.128 1.588-.068 2.182-1 4.089-1s2.444 1 4.1.967c1.7-.023 2.776-1.513 3.792-3.037a12.748 12.748 0 0 0 1.736-3.515 5.419 5.419 0 0 1-3.35-5.008z"
                              className="cls-2"
                              transform="translate(-9.984 -7.997)"
                            ></path>
                            <path
                              id="XMLID_6_"
                              fill="var(--Footer-appleStoreColor)"
                              d="M22.5 12.69a5.451 5.451 0 0 0 1.268-3.97 5.711 5.711 0 0 0-3.666 1.888 5.229 5.229 0 0 0-1.3 3.822 4.7 4.7 0 0 0 3.698-1.74z"
                              className="cls-2"
                              transform="translate(-8.734 -8.72)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="footerBottom 1xl:w-[1344px] flex w-full flex-row justify-center lg:w-[992px]">
        <div className="max-w-screen-xl w-[calc(100vw-48px)] lg:w-[calc(100vw-64px)]">
          <section className="flex gap-8 p-[40px_0_24px_0] lg:grid lg:grid-cols-3 lg:gap-4 lg:p-[48px_0_40px_0]">
            <div className="flex flex-col gap-8">
              <p>
                <small className="whitespace-nowrap text-sm">
                  © Copyright 2024 Football
                </small>
              </p>
            </div>
            <div className="flex max-w-[308px] flex-col gap-8 text-[13px] leading-4">
              The use of automatic services (robots, crawler, indexing etc.) as
              well as other methods for systematic or regular use is not
              permitted.
            </div>
            <div className="flex flex-col gap-8">
              <p>Follow Us</p>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
