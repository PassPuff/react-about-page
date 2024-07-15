import { useEffect, useRef } from 'react';
import styles from "./Chute.module.scss";
import clsx from "clsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ChuteSection = () => {
  const bgImage = '/bg-about-us.jpg';
  const mediaRef = useRef(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: media,
        start: "top bottom",
        end: "center center",
        scrub: 2,
      }
    });

    tl.fromTo(media, { clipPath: "inset(20% 20% 20% 20% round 20px)", scale: 0.8 },
      { clipPath: "inset(0% 0% 0% 0% round 20px)", scale: 1 });

    return () => {
      // Cleanup the ScrollTrigger instance
      ScrollTrigger.getById(tl.id)?.kill();
    };
  }, []);

  return (
    <section className={clsx(styles.chute, 'js-chute')}>
      <div className={clsx('container', styles.chute__wrapper)}>
        <h2 className={styles.chute__title}>About me</h2>
        <div className={styles.chute__text}>
          <p><b>I'm a frontend developer</b> I've been writing pure JavaScript for a long time, now I want to learn the React library.</p>
        </div>
        <div ref={mediaRef} className={clsx(styles.chute__media, 'js-chute-media')} style={{ backgroundImage: `url(${bgImage})` }}>
        </div>
      </div>
    </section>
  )
}

export default ChuteSection;
