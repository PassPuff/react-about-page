import {useEffect} from 'react';
import clsx from "clsx";
import {gsap} from "gsap";
import styles from "./Banner.module.scss";

const Banner = () => {
  const bgImage = '/bg-about-us.jpg';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pointsContent = [
    {name: 'Attempts to create a project ', value: 24, edit: true},
    {name: 'Deleting the project ', value: 6, edit: true},
    {name: 'Work experience', value: 2, edit: true},
    {name: 'Life?', value: 'life is beautiful', edit: false},
    {name: 'Advice and support', value: 420, prefix: 'languages', edit: true},
  ];

  useEffect(() => {
    const animateCounters = () => {
      pointsContent.forEach((item, index) => {
        if (item.edit) {
          const element = document.querySelector(`#point-value-${index}`);
          if (element) {
            const endValue = item.value;
            gsap.to(element, {
              duration: 2,
              innerHTML: endValue,
              snap: {innerHTML: 1},
              stagger: 1,
              onUpdate() {
                element.innerHTML = `${gsap.utils.snap(1, this.targets()[0].innerHTML)}+`;
              },
              onStart() {
                element.innerHTML = "0+";
              },
              ease: "power1.out",
            });
          }
        }
      });
    };

    animateCounters();
  }, [pointsContent]);

  return (
    <section className={styles.banner} style={{backgroundImage: `url(${bgImage})`}}>
      <div className={clsx('container', styles.banner__wrapper)}>
        {!bgImage && (
          <div className={styles.videoBg}>
            <video
              width="1920"
              height="930"
              loop
              muted
              autoPlay
              playsInline
              poster="https://virmer.com/assets/files/img/hummingbird/preview-cleaning-bg-01.jpg"
            >
              <source src="https://virmer.com/assets/files/video/cleaning-video-bg-02.webm" type="video/webm"/>
              <source src="https://virmer.com/assets/files/video/cleaning-video-bg-02.mp4" type="video/mp4"/>
              The video element is not supported by your browser
              <a href="https://virmer.com/assets/files/video/cleaning-video-bg-02.mp4" download tabIndex="-1">
                Download video
              </a>
            </video>
          </div>
        )}
        <div className={styles.banner__inner}>
          <h1 className={styles.banner__title}>
            <span>This page</span>is designed for learning React Js.
          </h1>
          <p>
            Everything here is for <span>educational</span> purposes only.
          </p>
        </div>
        <dl className={clsx(styles.banner__list, styles.ponty)}>
          {pointsContent.map((item, i) => (
            <div className={styles.ponty__item} key={i}>
              <dt className={styles.ponty__name}>{item.name}</dt>
              <dd className={clsx(styles.ponty__value)}>
                <span id={`point-value-${i}`} className={styles.ponty__count}>
                  {item.edit ? '0+' : item.value}
                </span>
                {item.prefix && <span className={styles.ponty__prefix}>{item.prefix}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Banner;
