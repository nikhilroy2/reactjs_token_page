import React from "react";
import { Link } from "react-router-dom";

function Homepage(props) {

  return (
    <div id="Homepage">
      <div>
      <a
          href="https://t.me/+EXL2SWBwZug1M2E0"
          target="_blank"
          className="telegramim_button telegramim_shadow telegramim_pulse"
          style={{
            fontSize: "26px",
            width: "338px",
            background: "#27A5E7",
            boxShadow: "1px 1px 5px #27A5E7",
            color: "#FFFFFF",
            borderRadius: "49px",
            zIndex: 99999,
            position: "fixed",
            bottom: "10px",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
          title
        >
          <i /> Join Official Telegram{" "}
        </a>
        <header className="fix header">
          <div className="abs mobile-background" />
          <a className="header-logo" taret="_blank" name="Home" href="">
            <img
              src="https://shiplay.io/library/media/logo.png"
              alt="shiplay"
              style={{ border: "4px solid white", borderRadius: "50%" }}
            />
          </a>
          <div className="mobile-btn">
            <div className="abs f-center icon open">
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={18} height={4} fill="#F24139" />
                <rect y={7} width={18} height={4} fill="#F24139" />
                <rect y={14} width={18} height={4} fill="#F24139" />
              </svg>
            </div>
            <div className="abs f-center icon close">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3.05078"
                  y="0.222656"
                  width={18}
                  height={4}
                  transform="rotate(45 3.05078 0.222656)"
                  fill="#F24139"
                />
                <rect
                  width={18}
                  height={4}
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 12.9492 0.222656)"
                  fill="#F24139"
                />
              </svg>
            </div>
          </div>
          <div className="main-menu">
            <nav className="first">
              <a className="item" data-name="Our Platform" target="_blank" href="/flowchart">
                <span className="title">Our Platform</span>
              </a>
              <a  target="_blank"
                className="item"
                data-name="Vision & Mission"
                href="/vision-and-mission/"
              >
                <span className="title">Vision &amp; Mission</span>
              </a>
              <a  target="_blank" className="item" data-name="TOKENOMICS" href="/token/">
                <span className="title">TOKENOMICS</span>
              </a>
              <a  target="_blank" className="item" data-name="ROADMAP" href="/roadmap/">
                <span className="title">ROADMAP</span>
              </a>
              <a  target="_blank" className="item" data-name="Team" href="/team/">
                <span className="title">Our Team</span>
              </a>
              <a  target="_blank"
                className="item"
                target="_blank"
                href="https://whitepaper.shiplay.io/"
              >
                <span className="title">WhitePaper</span>
              </a>
              {/* <a class="item" data-name="Pre Sale" href="/pre-sale/">
                      <span class="title">Pre-Sale</span>
                      </a>*/}
              <a  target="_blank"
                className="item"
                target="_blank"
                style={{ backgroundColor: "#009688", padding: "0 15px" }}
                href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x40671E899e915d39036935F7cFFe35a5348E0a5c"
              >
                <span className="title">BUY NOW</span>
              </a>
            </nav>
            <nav className="second">
              <a  target="_blank"
                className="c-btn item"
                data-name="PLAY ALPHA"
                href="https://play.shiplay.io/"
                target="_blank"
                rel="noopener"
              >
                <span className="title">PLAY ALPHA</span>
              </a>
            </nav>
          </div>
        </header>
        <div id="container" role="main">
          <div id="home" className="page p-home hidden">
            <div className="fixed-wrapper" />
            <div className="js-scroll">
              <main className="page-wrapper">
                <section
                  className="p-home__header"
                  data-prllx={1}
                  data-p-top
                  data-p-no-mask
                >
                  <div className="abs p-home__intro" data-p-elt>
                    <div className="intro-wrapper">
                      <video
                        className="lazy abs intro-loop-mobile"
                        muted
                        playsInline
                        loop
                      >
                        <source
                          data-src="https://shiplay.io/library/videos/chirpley-intro-loop-mobile.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <video
                        className="lazy abs intro-loop-desktop"
                        muted
                        playsInline
                        loop
                      >
                        <source
                          data-src="https://shiplay.io/library/videos/chirpley-intro-loop.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div className="abs gradient" />
                      <video
                        className="lazy abs intro-mobile"
                        muted
                        playsInline
                      >
                        <source
                          data-src="https://shiplay.io/library/videos/chirpley-intro-mobile.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <video
                        className="lazy abs intro-desktop"
                        muted
                        playsInline
                      >
                        <source
                          data-src="https://shiplay.io/library/videos/chirpley-intro.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <h1 className="h--1 title">
                    <div className="wrapper">
                      <em>SHI</em>
                      <i>...</i>PLAY
                    </div>
                  </h1>
                  <h2 className="subtitle">
                    <div className="wrapper">
                      <a
                        target="_blank"
                        href="https://bscscan.com/token/0x40671E899e915d39036935F7cFFe35a5348E0a5c"
                      >
                        0x40671E899e915d39036935F7cFFe35a5348E0a5c
                      </a>
                    </div>
                  </h2>
                </section>
                <section className="p-home__target">
                  <div className="photos">
                    <div className="abs photo photo-1">
                      <div className="wrapper-anim">
                        <div className="wrapper">
                          <div className="image">
                            <picture
                              className="r r--resp"
                              style={{ paddingBottom: "100%" }}
                              data-ratio={1}
                            >
                              <img
                                className="lazy"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                data-src="https://shiplay.io/library/media/chirpley-homepage-selfie-02.jpg"
                                data-srcset="https://shiplay.io/library/media/chirpley-homepage-selfie-02-1024x0-c-default.jpg 320w, https://shiplay.io/library/media/chirpley-homepage-selfie-02-1024x0-c-default.jpg 640w, https://shiplay.io/library/media/chirpley-homepage-selfie-02-1024x0-c-default.jpg 1024w, https://shiplay.io/library/media/chirpley-homepage-selfie-02-1024x0-c-default.jpg 1280w, https://shiplay.io/library/media/chirpley-homepage-selfie-02-1024x0-c-default.jpg 1400w"
                                data-sizes="(min-width: 750px) 40vw, 100vw"
                                alt=""
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="abs photo photo-2">
                      <div className="wrapper-anim">
                        <div className="wrapper">
                          <div className="image">
                            <picture
                              className="r r--resp"
                              style={{ paddingBottom: "100%" }}
                              data-ratio={1}
                            >
                              <img
                                className="lazy"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                data-src="https://shiplay.io/library/media/chirpley-homepage-selfie-03.jpg"
                                data-srcset="https://shiplay.io/library/media/chirpley-homepage-selfie-03-1024x0-c-default.jpg 320w, https://shiplay.io/library/media/chirpley-homepage-selfie-03-1024x0-c-default.jpg 640w, https://shiplay.io/library/media/chirpley-homepage-selfie-03-1024x0-c-default.jpg 1024w, https://shiplay.io/library/media/chirpley-homepage-selfie-03-1024x0-c-default.jpg 1280w, https://shiplay.io/library/media/chirpley-homepage-selfie-03-1024x0-c-default.jpg 1400w"
                                data-sizes="(min-width: 750px) 40vw, 100vw"
                                alt=""
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="abs photo photo-3">
                      <div className="wrapper-anim">
                        <div className="wrapper">
                          <div className="image">
                            <picture
                              className="r r--resp"
                              style={{ paddingBottom: "100%" }}
                              data-ratio={1}
                            >
                              <img
                                className="lazy"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                data-src="https://shiplay.io/library/media/chirpley-homepage-selfie-01-1.jpg"
                                data-srcset="https://shiplay.io/library/media/chirpley-homepage-selfie-01-1-1024x0-c-default.jpg 320w, https://shiplay.io/library/media/chirpley-homepage-selfie-01-1-1024x0-c-default.jpg 640w, https://shiplay.io/library/media/chirpley-homepage-selfie-01-1-1024x0-c-default.jpg 1024w, https://shiplay.io/library/media/chirpley-homepage-selfie-01-1-1024x0-c-default.jpg 1280w, https://shiplay.io/library/media/chirpley-homepage-selfie-01-1-1024x0-c-default.jpg 1400w"
                                data-sizes="(min-width: 750px) 40vw, 100vw"
                                alt=""
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h2 className="title">PICK YOUR NFT &amp; PLAY NOW!</h2>
                    <h2></h2>
                  </div>
                </section>
                <section className="p-home__connect">
                  <h2 className="title">Our Social Media</h2>
                  <div className="scroll-x-wrapper">
                    <div className="scroll-x">
                      <ul className="platforms">
                        <li className="f-center item">
                          <a
                            href="https://discord.gg/g8E4jP6W"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/icon-discord.svg"
                              alt="https://discord.gg/g8E4jP6W"
                            />
                          </a>
                        </li>
                        <li className="f-center item">
                          <a
                            href="https://t.me/+EXL2SWBwZug1M2E0"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/icon-telegram.svg"
                              alt="https://t.me/+EXL2SWBwZug1M2E0"
                            />
                          </a>
                        </li>
                        <li className="f-center item">
                          <a
                            href="https://twitter.com/shi_play"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/twitter-1.svg"
                              alt="https://twitter.com/shi_play"
                            />
                          </a>
                        </li>
                        <li className="f-center item">
                          <a
                            href="https://www.youtube.com/channel/UCCQFIA9UGa0GOo9HXMFOdMA"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/icon-youtube.svg"
                              alt="https://www.youtube.com/channel/UCCQFIA9UGa0GOo9HXMFOdMA"
                            />
                          </a>
                        </li>
                        {/* <li class="f-center item">
                                            <a href="https://t.me/shi_play" target="_blank" style="padding: 0px !important;margin-top: -25px !important;"><img class="icon" src="https://shiplay.io/library/media/icon-tiktok.svg" alt="https://www.tiktok.com/@chirpley?"></a>
                                            </li>
                                            <li class="f-center item">
                                            <a href="https://t.me/shi_play" target="_blank" style="padding: 0px !important;margin-top: -25px !important;"><img class="icon" src="https://shiplay.io/library/media/icon-instagram.svg" alt="https://www.instagram.com/chirpley/"></a>
                                            </li>
                                            <li class="f-center item">
                                            <a href="https://t.me/shi_play" target="_blank" style="padding: 0px !important;margin-top: -25px !important;"><img class="icon" src="https://shiplay.io/library/media/icon-redit.svg" alt="https://www.reddit.com/user/me/"></a>
                                            </li> */}
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="p-home__connect">
                  <h2 className="title">Featured On</h2>
                  <div className="scroll-x-wrapper">
                    <div className="scroll-x">
                      <ul className="platforms" style={{ marginTop: "5rem" }}>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://unity.com/"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/unity-icon.png"
                              alt="https://unity3d.com/"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://nxise.com/"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/nxise-icon.png"
                              alt="https://nxise.com/"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://coinmarketcap.com/currencies/shiplay/"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/cmc-icon.png"
                              alt="https://coinmarketcap.com/currencies/shiplay/"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://www.coingecko.com/"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/cgo-icon.png"
                              alt="https://www.coingecko.com/"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://www.binance.com/en/nft/home"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/binance-icon.png"
                              alt="https://www.binance.com/en/nft/home"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://idopresales.com/presale-reviews/shiplay-project-review-sply-presale-ido-on-pinksale/"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/ido-icon.png"
                              alt="https://idopresales.com/presale-reviews/shiplay-project-review-sply-presale-ido-on-pinksale/"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://www.coinscope.co/coin/splay"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/coinscope-icon.png"
                              alt="https://www.coinscope.co/coin/splay"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://www.pinksale.finance/#/launchpad/0x8020eB257e0f0d0244e975568299d9132A096CE3?chain=BSC"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/pinksale-icon.png"
                              alt="https://www.pinksale.finance/#/launchpad/0x8020eB257e0f0d0244e975568299d9132A096CE3?chain=BSC"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://moralis.io/"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/moralis-icon.png"
                              alt="https://moralis.io/"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                        <li
                          className="f-center item"
                          style={{ background: "#fff0" }}
                        >
                          <a
                            href="https://www.unrealengine.com/"
                            target="_blank"
                            style={{
                              padding: "0px !important",
                              marginTop: "-25px !important",
                            }}
                          >
                            <img
                              className="icon"
                              src="https://shiplay.io/library/media/unreal-icon.png"
                              alt="https://www.unrealengine.com/"
                              style={{
                                width: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="p-home__oeuf">
                  <div className="abs top">
                    <div className="circle" />
                    <div className="abs oeuf">
                      <div
                        className="wrapper-prllx"
                        data-prllx=".8"
                        data-p-no-mask
                      >
                        <div className="wrapper">
                          <video
                            className="lazy"
                            autoPlay
                            muted
                            playsInline
                            loop
                          >
                            <source
                              data-src="https://shiplay.io/library/videos/chirpley-egg.mp4"
                              type="video/mp4"
                            />
                          </video>
                          <div className="abs gradient" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <p>
                      Shiplay offers many NFTS Featured.
                      <br />
                      It can be played or sold on the Marketplace, and every
                      holder of NFT can make money from airdrop in-game or
                      playing games there.
                    </p>
                  </div>
                  <ul className="facts">
                    <li className="item">
                      <h3 className="title">Play To Earn</h3>
                      <p className="p--s text">
                        NFTS character holders can also play multiplayer games
                        and have fun with friends.
                      </p>
                    </li>
                    <li className="item">
                      <h3 className="title">MULTIPLAYER, WEB3 &amp; CHAT</h3>
                      <p className="p--s text">
                        You can communicate with friends, exchange
                        conversations, and play with them.
                      </p>
                    </li>
                    <li className="item">
                      <h3 className="title">KYC &amp; AUDIT</h3>
                      <p className="p--s text">
                        We have been approved by PINKSALE &amp; COINSCOPE for
                        KYC &amp; AUDIT.
                      </p>
                    </li>
                  </ul>
                </section>
                <section className="p-home__ai">
                  <div className="title-wrapper">
                    <h2 className="title">SHIPLAY?</h2>
                    {/* <em>WHAT IS</em> */}
                  </div>
                  <div className="content">
                    <h3 className="subtitle" />
                    <p>
                      Shiba crypto world appear to be worlds apart when you
                      think about it.
                      <br />
                      SHIPLAY WILL BE ONE OF THE BEST GAMES BUILT AS A{" "}
                      <strong>PLAY-TO-EARN</strong> GAME for anyone who has a
                      deep love of SHIBA and MEME COINS and desires to earn
                      tokens &amp; NFT.
                      <br />
                      ShiPlay is a blockchain-based. This is the beginning of a
                      decentralized games ecosystem in which you can actively
                      engage in a variety of ways. This universe combines four
                      multibillion-dollar global markets: video games and NFT,
                      all of which have been integrated using blockchain and
                      also contribute towards another multibillion-dollar
                      business that has only recently begun to take off which is
                      Metaverse
                    </p>
                    <p className="p--s text" />
                  </div>
                  <div className="robot" data-prllx={1} data-p-no-mask>
                    <picture
                      className="r "
                      style={{ paddingBottom: "137.27272727273%" }}
                      data-ratio="1.3727272727273"
                    >
                      <img
                        className="lazy"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        data-src="https://shiplay.io/library/media/robot.png"
                        data-srcset="https://shiplay.io/library/media/robot.png 320w, https://shiplay.io/library/media/robot.png 640w, https://shiplay.io/library/media/robot.png 1024w, https://shiplay.io/library/media/robot.png 1280w, https://shiplay.io/library/media/robot.png 1320w"
                        data-sizes="(min-width: 750px) 50vw, 100vw"
                        alt="Robot"
                      />
                    </picture>
                  </div>
                </section>
              </main>
              <footer className="footer">
                <section
                  className="footer-connect"
                  data-prllxoxo="-.9"
                  data-p-no-mask
                >
                  <div className="bubble" data-p-elt>
                    <h2 className="bubble-title">
                      Play ShiPlay now and Earn Money.
                    </h2>
                    <a
                      className="c-btn"
                      href="https://play.shiplay.io/"
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="title">Play Alpha</span>
                    </a>
                    <div className="anchor">
                      <svg
                        viewBox="0 0 216 114"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M61.3841 84.3764C28.4548 28.8555 6.88667 15.2323 0.21875 15.3609C85.4912 8.54921 246.957 -3.68604 210.643 1.86604C174.328 7.41813 142.938 54.8165 131.782 77.8217C122.037 103.14 94.3134 139.897 61.3841 84.3764Z"
                          fill="#F24139"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="oeuf debug" data-prllx=".3" data-p-no-mask>
                    <picture
                      className="r "
                      style={{ paddingBottom: "29.658605974395%" }}
                      data-ratio="0.29658605974395"
                    >
                      <img
                        className="lazy"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        data-src="https://shiplay.io/library/media/oeuf.png"
                        data-srcset="https://shiplay.io/library/media/oeuf-320x0-c-default.png 320w, https://shiplay.io/library/media/oeuf-640x0-c-default.png 640w, https://shiplay.io/library/media/oeuf-1024x0-c-default.png 1024w, https://shiplay.io/library/media/oeuf-1280x0-c-default.png 1280w, https://shiplay.io/library/media/oeuf.png 1406w"
                        data-sizes="(min-width: 750px) 60vw, 150vw"
                        alt="Oeuf"
                      />
                    </picture>
                  </div>
                </section>
                {/* <section class="footer-menus">
                            <nav class="footer-menu">
                                <a class="item" data-name="Media Kits" href="https://shiplay.io/library/media/chirpley-media-kit.zip" target="_blank" rel="noopener">
                            <span class="title">Media Kits</span>
                            </a>
                                <a class="item" data-name="Team & Partners" href="/team-and-partners/">
                            <span class="title">Team & Partners</span>
                            </a>
                                <a class="item" data-name="Token" href="/token/">
                            <span class="title">Token</span>
                            </a>
                                <a class="item" data-name="Pre Sale" href="/pre-sale/">
                            <span class="title">Pre-Sale</span>
                            </a>
                                <a class="item" data-name="Roadmap" href="/roadmap/">
                            <span class="title">Roadmap</span>
                            </a>
                            </nav>
                            
                            <nav class="footer-more">
                                <h3 class="title">More Info</h3>
                                <a class="item" data-name="Docs " href="https://chirpley.gitbook.io/.ai/" target="_blank" rel="noopener">Docs </a>
                            </nav>
                            
                            </section> */}
                <section className="footer-bottom">
                  {/* <div class="copyright">
                                <a href=”javascript:void(0)” onclick="displayPreferenceModal()">Cookie Preferences</a>
                                <a class="item" href="https://shiplay.io/library/docs/chirpley_privacy-policy.pdf" target="_blank" rel="noopener">Privacy Policy</a>
                                <a class="item" href="https://shiplay.io/library/docs/chirpley_terms-of-use.pdf" target="_blank" rel="noopener">Terms of Use</a>
                                </div> */}
                  <nav className="footer-socials">
                    <a
                      className="item"
                      href="https://discord.gg/g8E4jP6W"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="icon"
                        src="https://shiplay.io/library/media/icon-discord.svg"
                      />
                    </a>
                    <a
                      className="item"
                      href="https://t.me/+EXL2SWBwZug1M2E0"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="icon"
                        src="https://shiplay.io/library/media/icon-telegram.svg"
                      />
                    </a>
                    <a
                      className="item"
                      href="https://www.youtube.com/channel/UCCQFIA9UGa0GOo9HXMFOdMA"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="icon"
                        src="https://shiplay.io/library/media/icon-youtube.svg"
                      />
                    </a>
                    <a
                      className="item"
                      href="https://www.coinscope.co/coin/splay/kyc"
                      target="_blank"
                      rel="noopener"
                    >
                      KYC &amp; AUDIT
                    </a>
                    {/* <a class="item" href="" target="_blank" rel="noopener"><img class="icon" src="https://shiplay.io/library/media/icon-tiktok.svg"></a> */}
                    {/* <a class="item" href="/" target="_blank" rel="noopener"><img class="icon" src="https://shiplay.io/library/media/icon-redit.svg"></a> */}
                    {/* <a class="item" href="/" target="_blank" rel="noopener"><img class="icon" src="https://shiplay.io/library/media/icon-instagram.svg"></a> */}
                  </nav>
                  {/* <div class="copyright">Website by <a href="" target="_blank" rel="noopener"></a></div> */}
                </section>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
