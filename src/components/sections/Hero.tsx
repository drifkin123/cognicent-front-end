import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.leftCol}>
          <div className={styles.logoSection}>
            <picture style={{ position: "absolute", zIndex: 0, display: "inline-block", width: "100%", height: "100%" }}>
              {/* AVIF */}
              <source
                srcSet="
          https://cognicit.com/_astro/shutterstock_1013727907@320w.1865c7a3.avif 320w,
          https://cognicit.com/_astro/shutterstock_1013727907@1024w.e247263c.avif 1024w,
          https://cognicit.com/_astro/shutterstock_1013727907@1650w.645047c4.avif 1650w,
          https://cognicit.com/_astro/shutterstock_1013727907@2197w.6c05663d.avif 2197w,
          https://cognicit.com/_astro/shutterstock_1013727907@2667w.f452d3e7.avif 2667w,
          https://cognicit.com/_astro/shutterstock_1013727907@3058w.c3b9c99d.avif 3058w,
          https://cognicit.com/_astro/shutterstock_1013727907@3371w.da9d25d2.avif 3371w,
          https://cognicit.com/_astro/shutterstock_1013727907@3605w.f3123fb0.avif 3605w,
          https://cognicit.com/_astro/shutterstock_1013727907@3762w.2203dfc6.avif 3762w,
          https://cognicit.com/_astro/shutterstock_1013727907@3840w.ddb9a6f7.avif 3840w
        "
                sizes="(min-width: 3840px) 3840px, 100vw"
                type="image/avif"
              />

              {/* WebP */}
              <source
                srcSet="
          https://cognicit.com/_astro/shutterstock_1013727907@320w.51ccc96c.webp 320w,
          https://cognicit.com/_astro/shutterstock_1013727907@1024w.3d02fc75.webp 1024w,
          https://cognicit.com/_astro/shutterstock_1013727907@1650w.f166425c.webp 1650w,
          https://cognicit.com/_astro/shutterstock_1013727907@2197w.ba23b146.webp 2197w,
          https://cognicit.com/_astro/shutterstock_1013727907@2667w.52c38dce.webp 2667w,
          https://cognicit.com/_astro/shutterstock_1013727907@3058w.d7e8a7cb.webp 3058w,
          https://cognicit.com/_astro/shutterstock_1013727907@3371w.1ee2eaaf.webp 3371w,
          https://cognicit.com/_astro/shutterstock_1013727907@3605w.4fd090f0.webp 3605w,
          https://cognicit.com/_astro/shutterstock_1013727907@3762w.b3b1a132.webp 3762w,
          https://cognicit.com/_astro/shutterstock_1013727907@3840w.afc4d2b0.webp 3840w
        "
                sizes="(min-width: 3840px) 3840px, 100vw"
                type="image/webp"
              />

              {/* JPEG fallback */}
              <img
                src="https://cognicit.com/_astro/shutterstock_1013727907@3840w.4a32cb5e.jpeg"
                srcSet="
          https://cognicit.com/_astro/shutterstock_1013727907@320w.d6f871aa.jpeg 320w,
          https://cognicit.com/_astro/shutterstock_1013727907@1024w.84d0dd10.jpeg 1024w,
          https://cognicit.com/_astro/shutterstock_1013727907@1650w.772e277f.jpeg 1650w,
          https://cognicit.com/_astro/shutterstock_1013727907@2197w.ea2730e5.jpeg 2197w,
          https://cognicit.com/_astro/shutterstock_1013727907@2667w.4f291ebb.jpeg 2667w,
          https://cognicit.com/_astro/shutterstock_1013727907@3058w.1560d4aa.jpeg 3058w,
          https://cognicit.com/_astro/shutterstock_1013727907@3371w.891e590c.jpeg 3371w,
          https://cognicit.com/_astro/shutterstock_1013727907@3605w.bb3ee5ca.jpeg 3605w,
          https://cognicit.com/_astro/shutterstock_1013727907@3762w.1c96a960.jpeg 3762w,
          https://cognicit.com/_astro/shutterstock_1013727907@3840w.4a32cb5e.jpeg 3840w
        "
                sizes="(min-width: 3840px) 3840px, 100vw"
                alt="Shutterstock background"
                width={3840}
                height={2560}
                loading="lazy"
                decoding="async"
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </picture>
            <svg id="Layer_1" data-name="Layer 1" data-cog-square-cyan-white-red="1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 272.2 168.3" className={styles.logo}>
              <defs>
                <style>
                  {`
                    svg[data-cog-square-cyan-white-red] .cls-1 {
                      fill: #00aeef;
                    }

                    svg[data-cog-square-cyan-white-red] .cls-1, svg[data-cog-square-cyan-white-red] .cls-2 {
                      stroke-width: 0px;
                    }

                    svg[data-cog-square-cyan-white-red] .cls-2 {
                      fill: #fff;
                    }
                  `}
                </style>
              </defs>
              <path className="cls-1" d="M165.6,23.9c-11.2-10.4-24.6-14.6-39.6-11.8-25.4,4.6-41.6,27.8-37.1,53.2,3.1,17.8,13.8,30,31,35.6,17.4,5.7,33,1.6,46.4-10.8,2.1-2,3.1-4.4,3.1-7.4s-2.3-6.8-5.6-8.9c5.5-11,5.5-21.9,0-33,.3-.3.5-.4.7-.6,6.2-4.5,6.7-11.1,1.1-16.3h0ZM99.4,40.6c11-23.2,41.7-29.1,60.6-11.6.7.6,1.4,1.4,1.6,2.1s-.2,1.9-.7,2.1c-.8.3-1.9.3-2.7,0-1-.5-1.8-1.5-2.7-2.2-17.9-14.6-44.6-7.5-53,13.9-1.3,3.4-1.4,3.4-5.4,1.9.8-2.1,1.5-4.2,2.4-6.2h-.1ZM114,66.3c.4.6.8,1.2,1.2,1.9,7,11.9,22.6,14.5,33.2,5.6.3-.3.6-.6.9-.8,1.2-1,2.6-1.3,3.4,0,.4.8.1,2.5-.5,3.2-3.5,3.5-7.7,5.7-12.6,6.7-11.5,2.6-23.7-3.2-28.9-13.7-.3-.6-.5-1.2-.8-2,1.4-.3,2.7-.7,4.1-1h0ZM109.2,59.1c-1.1-.4-1.3-1.5-1.3-2.3,0-5.9,2-11.3,5.6-15.9.6-.8,1.3-1.5,2-2.2s1.4-1.4,2.2-2c4.6-3.7,10.5-5.8,16.4-5.8,5.3.1,10.2,1.5,14.4,4.4,1,.7,1.9,1.4,2.9,2.2,1.3,1.1,2.8,2.4,1.2,4.1-1.5,1.6-2.8.3-4.1-.7-8.6-7.3-20.6-7.4-29,0-4.5,4-6.9,9.1-7.4,15.1,0,1-.3,2-.8,2.7-.4.5-1.7.6-2.2.4h.1ZM143.5,67.8c-4,3.4-8.5,4.5-13.5,3.1-5.6-1.6-9.7-6.5-10.2-12.3-.6-5.7,2.4-11.2,7.4-13.9,5.1-2.8,11.5-2.2,15.9,1.6,2.9,2.6,6,4.3,9.9,3.4,1.7-.4,3.3-1.4,5.4-2.2,2.5,6.5,2.5,13,0,19.6-.1,0-.5,0-.7-.2h-.2c-5.3-3.5-9.1-3.2-14,1h0ZM160.2,85.2c-3.7,2.5-7.2,5.5-11.3,7.2-4.7,1.9-10.8,3-15,3.2-20.4,0-37.8-16.7-38.2-36.6v-.8c0-1.5,0-3,2-3.1,2.1,0,2.3,1.5,2.4,3.1.3,2.4.4,4.8,1,7.1,6.1,24.8,36.3,34.1,55.4,17.2.2-.2.5-.4.7-.7,1.2-1.2,2.5-1.9,3.9-.5,1.3,1.5.4,2.9-.9,3.8h0Z"></path>
              <g>
                <path className="cls-2" d="M27,139.2c0,.8-.2,1.6-.6,2.2s-.9,1.1-1.5,1.5c-.9-.6-2-1.1-3-1.6-1.1-.5-2.4-.7-3.9-.7-2.9,0-5.1.9-6.8,2.7-1.6,1.8-2.4,4.4-2.4,7.8s.9,6.1,2.6,7.8c1.7,1.8,4.1,2.6,7.1,2.6s2.9-.2,4-.6c1.1-.4,2.1-.9,3-1.5.5.4,1,1,1.3,1.6s.5,1.4.5,2.2-.2,1.4-.6,2-1,1.2-2,1.6c-.7.4-1.7.7-2.9,1-1.2.3-2.7.5-4.5.5s-4.7-.3-6.8-1c-2.1-.7-3.9-1.7-5.4-3.1-1.5-1.4-2.8-3.2-3.7-5.4-.9-2.2-1.3-4.8-1.3-7.8s.4-5.3,1.3-7.4c.9-2.2,2.1-4,3.6-5.4,1.5-1.4,3.3-2.6,5.3-3.3,2-.8,4.2-1.1,6.5-1.1,3.3,0,5.8.5,7.6,1.6,1.8,1,2.7,2.4,2.7,3.9h-.1Z"></path>
                <path className="cls-2" d="M67.3,150.9c0,2.8-.4,5.3-1.3,7.4s-2,4-3.5,5.4c-1.5,1.5-3.3,2.6-5.3,3.3-2,.8-4.3,1.1-6.7,1.1s-4.6-.4-6.7-1.1c-2-.8-3.8-1.9-5.3-3.3-1.5-1.5-2.7-3.3-3.5-5.4-.8-2.2-1.3-4.6-1.3-7.4s.4-5.3,1.3-7.4c.9-2.1,2-3.9,3.6-5.4,1.5-1.5,3.3-2.6,5.3-3.3,2-.8,4.2-1.1,6.6-1.1s4.6.4,6.6,1.1c2,.8,3.8,1.9,5.3,3.3,1.5,1.5,2.7,3.3,3.6,5.4s1.3,4.6,1.3,7.4h0ZM58.6,150.9c0-3.5-.7-6.1-2.2-7.8s-3.4-2.6-5.9-2.6-4.4.9-5.9,2.6-2.2,4.4-2.2,7.8.7,6.1,2.2,7.9,3.4,2.6,5.9,2.6,4.5-.9,5.9-2.6,2.2-4.4,2.2-7.9Z"></path>
                <path className="cls-2" d="M105.3,162.4c0,1-.2,1.8-.6,2.3s-1,1-1.9,1.5c-.5.3-1.1.6-1.8.8-.7.2-1.5.5-2.4.6-.9.2-1.8.3-2.8.4-.9.1-1.9.2-2.8.2-2.6,0-5-.3-7.2-1s-4.2-1.7-5.8-3.1c-1.7-1.4-2.9-3.2-3.9-5.4s-1.4-4.8-1.4-7.8.5-5.4,1.4-7.5,2.2-4,3.9-5.4c1.6-1.5,3.6-2.6,5.8-3.3,2.2-.7,4.6-1.1,7.2-1.1s6,.5,8,1.6c2,1,3,2.4,3,4s-.2,1.6-.7,2.2-.9,1.1-1.5,1.5c-.9-.6-2-1.1-3.4-1.6s-2.9-.8-4.8-.8-2.9.2-4.1.7-2.3,1.2-3.2,2.1-1.6,2-2.1,3.3-.8,2.8-.8,4.4.2,3.3.7,4.6,1.2,2.4,2,3.3c.9.9,1.9,1.5,3.1,1.9s2.5.6,3.9.6,1.7,0,2.3-.3c.7-.2,1.2-.4,1.7-.5v-6.1h-6.2c-.2-.4-.4-.8-.6-1.4-.2-.6-.3-1.2-.3-1.8,0-1.1.3-2,.8-2.5s1.2-.8,2.1-.8h9.1c1,0,1.8.3,2.4.8.6.6.9,1.3.9,2.4v11.2h0Z"></path>
                <path className="cls-2" d="M142.1,167.4c-.9.3-1.9.4-3.1.4s-2.4-.2-3.5-.6c-1.1-.4-2-1.3-2.7-2.7l-6.3-12.1c-.6-1.1-1.2-2.3-1.7-3.5-.5-1.1-1-2.4-1.5-3.6h-.4c.2,2.3.3,4.3.3,6.3v15.7c-.4,0-.9.1-1.6.2-.7,0-1.4.1-2.2.1-1.6,0-2.8-.3-3.4-.8s-1-1.6-1-3v-27.8c.4-.6,1.1-1.1,2.1-1.4.9-.3,2-.5,3.1-.5s2.4.2,3.5.6c1.1.4,1.9,1.3,2.7,2.6l6.3,12.1c.6,1.1,1.2,2.3,1.7,3.5.5,1.1,1,2.4,1.5,3.6h.2c-.2-2.5-.3-4.8-.3-6.9v-15.2c.4,0,.9-.2,1.6-.3s1.4-.2,2.2-.2c1.6,0,2.8.3,3.4.8s1,1.6,1,3v28.4c-.5.4-1.2.8-2.1,1.1h0l.2.2h0Z"></path>
                <path className="cls-2" d="M159.5,167.7c-1.7,0-2.9-.3-3.5-.9-.7-.6-1-1.6-1-3.1v-29.2c.4,0,1-.2,1.7-.3s1.5-.2,2.2-.2c1.6,0,2.8.3,3.5.8s1.1,1.6,1.1,3.2v29.2c-.4.1-.9.2-1.7.3s-1.5.1-2.3.1h0Z"></path>
                <path className="cls-2" d="M199.5,139.2c0,.8-.2,1.6-.6,2.2s-.9,1.1-1.5,1.5c-.9-.6-1.9-1.1-3.1-1.6s-2.4-.7-3.9-.7c-2.9,0-5.1.9-6.8,2.7-1.6,1.8-2.4,4.4-2.4,7.8s.9,6.1,2.6,7.8c1.7,1.8,4.1,2.6,7.1,2.6s2.9-.2,4-.6c1.1-.4,2.1-.9,3.1-1.5.5.4,1,1,1.3,1.6.3.7.5,1.4.5,2.2s-.2,1.4-.6,2-1,1.2-2,1.6c-.7.4-1.7.7-2.9,1s-2.7.5-4.5.5-4.7-.3-6.8-1-3.9-1.7-5.4-3.1c-1.6-1.4-2.8-3.2-3.6-5.4-.9-2.2-1.3-4.8-1.3-7.8s.4-5.3,1.3-7.4,2.1-4,3.6-5.4c1.5-1.5,3.3-2.6,5.3-3.3,2-.8,4.2-1.1,6.5-1.1,3.3,0,5.8.5,7.6,1.6,1.8,1,2.7,2.4,2.7,3.9h-.2Z"></path>
                <path className="cls-2" d="M213,167.7c-1.7,0-2.9-.3-3.5-.9-.7-.6-1-1.6-1-3.1v-29.2c.4,0,1-.2,1.7-.3s1.5-.2,2.2-.2c1.6,0,2.8.3,3.5.8s1.1,1.6,1.1,3.2v29.2c-.4.1-.9.2-1.7.3s-1.5.1-2.3.1h0Z"></path>
                <path className="cls-2" d="M242.9,141.4v25.9c-.4.1-.9.2-1.7.3s-1.5.1-2.3.1c-1.7,0-2.9-.3-3.6-.9-.7-.6-1-1.6-1-3.1v-22.3h-8.5c-.2-.4-.4-.8-.6-1.4-.2-.6-.3-1.2-.3-1.9,0-1.2.3-2.1.8-2.7s1.3-.8,2.2-.8h23.6c.2.4.5.8.6,1.4.2.6.3,1.2.3,1.9,0,1.2-.3,2.1-.8,2.6-.5.6-1.3.9-2.2.9h-6.6.1Z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.rightCol}>
          <h2 className={styles.visionTitle}>Our <span className={styles.visionHighlight}>Vision</span></h2>
          <p className={styles.visionText}>
            Increase healthcare patient satisfaction, effectiveness and profitability through organizational analysis
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;


