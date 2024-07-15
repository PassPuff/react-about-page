import React from 'react';
import clsx from "clsx";
import {gsap} from "gsap";
import styles from "./BannerAbout.module.scss";


export default function BannerAbout() {

  const [stats, setStats] = React.useState({ value: 0 })

  const bgImage = '/bg-about-us.jpg';

  const pointsContent = [
    {
      name: 'Number of machines sold',
      value: 70,
    },
    {
      name: 'Number of clients',
      value: 50,
    },
    {
      name: 'Choose our products',
      value: 25,
    },
    {
      name: 'Country of origin',
      value: 'Netherlands',
    },
    {
      name: 'Advice and support',
      value: 7,
      prefix: 'languages'
    }
  ]

  return (
    <section className={styles.banner} style={{backgroundImage: `url(${bgImage})`}}>
      <div className={clsx('container')}>
        {
          !bgImage &&
          <div className={styles.videoBg}>
            <video width="1920" height="930" loop muted autoPlay playsInline
                   poster="https://virmer.com/assets/files/img/hummingbird/preview-cleaning-bg-01.jpg">
              <source src="https://virmer.com/assets/files/video/cleaning-video-bg-02.webm" type="video/webm"/>
              <source src="https://virmer.com/assets/files/video/cleaning-video-bg-02.mp4" type="video/mp4"/>
              The video element is not supported by your browser
              <a href="https://virmer.com/assets/files/video/cleaning-video-bg-02.mp4" download="" tabIndex="-1">Download
                video</a>
            </video>
          </div>
        }
        <div className={styles.banner__inner}>
          <h1 className={styles.banner__title}><span>Virmer</span> is an official supplier
            of CNC laser machines and Wattsan CNC milling machines</h1>
          <p>with over <span>15 years</span> experience in manufacturing industrial equipment for various industries.
          </p>
        </div>
        <dl className={clsx(styles.banner__list, styles.ponty)}>
          {
            pointsContent.map((item, i) => (
              <div className={styles.ponty__item} key={i}>
                <dt className={styles.ponty__name}>{item.name}</dt>
                <dd className={clsx(styles.ponty__value)}>
                  <span className={styles.ponty__count}>{item.value}</span>
                  {item.prefix && <span className={styles.ponty__prefix}>{item.prefix}</span>}
                </dd>
              </div>
            ))
          }
        </dl>
      </div>
    </section>
  );
}