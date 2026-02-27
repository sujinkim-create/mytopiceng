'use client';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={`orb orb-blue ${styles.orbOne}`}></div>
            <div className={`orb orb-violet ${styles.orbTwo}`}></div>
            <div className={styles.gridPattern}></div>

            <div className="container">
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            AI-POWERED EDTECH COMPANY
                        </div>

                        <h1 className={styles.title}>
                            AI Technology{' '}
                            <span className={styles.titleGradient}>
                                Empowering the Future of English Education
                            </span>
                        </h1>

                        <p className={styles.subtitle}>
                            We build intelligent systems that make English learning
                            simpler, faster, and more accessible. 누구나 평등하게
                            영어를 배울 수 있는 세상을 기술로 만들어갑니다.
                        </p>

                        <div className={styles.heroCta}>
                            <a href="#mission" className="btn-primary">
                                Our Mission →
                            </a>
                            <a href="#technology" className="btn-secondary">
                                Explore Technology
                            </a>
                        </div>
                    </div>

                    <div className={styles.heroImage}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/images/meeting.png"
                                alt="MyTopicEng team collaborating on AI education technology"
                                width={600}
                                height={400}
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.heroImageOverlay}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
