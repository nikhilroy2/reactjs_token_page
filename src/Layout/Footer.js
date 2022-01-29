import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <section className="footer-connect" data-prllxoxo="-.9" data-p-no-mask>
          <div className="bubble" data-p-elt>
            <h2 className="bubble-title">Play ShiPlay now and Earn Money.</h2>
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
  );
}

export default Footer;
