import React from "react";

function Header(props) {
  return (
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
        <a className="header-logo" name="Home" href="https://shiplay.io/">
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
            <a className="item" data-name="Our Platform" href="/flowchart/">
              <span className="title">Our Platform</span>
            </a>
            <a
              className="item"
              data-name="Vision & Mission"
              href="/vision-and-mission/"
            >
              <span className="title">Vision &amp; Mission</span>
            </a>
            <a className="item" data-name="TOKENOMICS" href="/token/">
              <span className="title">TOKENOMICS</span>
            </a>
            <a className="item" data-name="ROADMAP" href="/roadmap/">
              <span className="title">ROADMAP</span>
            </a>
            <a className="item" data-name="Team" href="/team/">
              <span className="title">Our Team</span>
            </a>
            <a
              className="item"
              target="_blank"
              href="https://whitepaper.shiplay.io/"
            >
              <span className="title">WhitePaper</span>
            </a>
            {/* <a class="item" data-name="Pre Sale" href="/pre-sale/">
                    <span class="title">Pre-Sale</span>
                    </a>*/}
            <a
              className="item"
              target="_blank"
              style={{ backgroundColor: "#009688", padding: "0 15px" }}
              href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x40671E899e915d39036935F7cFFe35a5348E0a5c"
            >
              <span className="title">BUY NOW</span>
            </a>
          </nav>
          <nav className="second">
            <a
              className="c-btn item"
              data-name="Launch App"
              href="https://play.shiplay.io/"
              target="_blank"
              rel="noopener"
            >
              <span className="title">PLAY ALPHA</span>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
