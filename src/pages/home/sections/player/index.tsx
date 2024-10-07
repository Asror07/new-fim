import './player.scss';
const PlayerSection = () => {
   return (
      <section className="player fade-up">
         <div className="container">
            <div className="player-points">
               {' '}
               <div className="point point-text">
                  <h2 className="point-text-title">Ready to partner up?</h2>
                  <span className="point-text-content">
                     Join our Partner Program <br />
                     and get up to{' '}
                     <a href="https://docs.idle.finance/products/get-involved">
                        50% fee share
                     </a>
                  </span>
               </div>
               <div className="point">
                  <div className="point-logo">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="none"
                        viewBox="0 0 430 430"
                     >
                        <g
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="12"
                        >
                           <path
                              stroke="#08a88a"
                              d="M134.94 295.06h160.12m-53.37 53.37h53.37m-160.12 0H215m35.81-161.16-5.2 32.28A40.8 40.8 0 0 1 231.33 242L215 254.79 198.67 242a40.83 40.83 0 0 1-14.28-22.44l-5.2-32.28s30.29-6.39 35.81-12.54c5.52 6.14 35.81 12.53 35.81 12.53"
                           />
                           <path
                              stroke="#121331"
                              d="M241.69 28.19H81.57v373.14h266.86V134.94z"
                           />
                           <path
                              stroke="#121331"
                              d="M241.69 28.19v106.75h106.74"
                           />
                        </g>
                     </svg>
                  </div>
                  <div className="point-title">
                     DeFi <br /> integrations
                  </div>
                  <div className="point-desc">
                     Avoid the need to integrate multiple yield sources, and
                     achieve the best risk adjusted yield with just one
                     integration, powered by ERC-4626.
                  </div>
                  <div className="point-btn">
                     <button className="point-btn-first">Join</button>
                     <button className="point-btn-second">Learn more →</button>
                  </div>
               </div>
               <div className="point">
                  <div className="point-logo">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="none"
                        viewBox="0 0 430 430"
                     >
                        <g
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="12"
                        >
                           <path
                              stroke="#08a88a"
                              d="M134.94 295.06h160.12m-53.37 53.37h53.37m-160.12 0H215m35.81-161.16-5.2 32.28A40.8 40.8 0 0 1 231.33 242L215 254.79 198.67 242a40.83 40.83 0 0 1-14.28-22.44l-5.2-32.28s30.29-6.39 35.81-12.54c5.52 6.14 35.81 12.53 35.81 12.53"
                           />
                           <path
                              stroke="#121331"
                              d="M241.69 28.19H81.57v373.14h266.86V134.94z"
                           />
                           <path
                              stroke="#121331"
                              d="M241.69 28.19v106.75h106.74"
                           />
                        </g>
                     </svg>
                  </div>
                  <div className="point-title">
                     Institutions and <br />
                     Organizations
                  </div>
                  <div className="point-desc">
                     From DAOs to institutions, Idle DAO provides yield
                     optimization and risk diversification solutions for any
                     treasury manager.
                  </div>
                  <div className="point-btn">
                     <button className="point-btn-first">Join</button>
                     <button className="point-btn-second">Learn more →</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PlayerSection;
