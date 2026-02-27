'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Team.module.css';

export default function Team() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        const items = sectionRef.current?.querySelectorAll('.reveal');
        items?.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section ${styles.team}`} id="team" ref={sectionRef}>
            <div className="container">
                <div className={styles.teamInner}>
                    <div className={`${styles.founderImage} reveal`}>
                        {/* Using a placeholder meeting/office image for the team section */}
                        <Image
                            src="/images/meeting.png"
                            alt="MyTopicEng Team & Founder"
                            width={500}
                            height={625}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className={`${styles.teamContent} reveal`} style={{ transitionDelay: '0.15s' }}>
                        <h2>
                            Our <span>Team & Philosophy</span>
                        </h2>

                        <blockquote className={styles.quote}>
                            "기술의 발전이 진정한 가치를 갖는 순간은, 그 혜택이 상위 1%가 아닌 전 세계 99%에게 평등하게 주어질 때입니다. 우리는 AI로 교육의 구조적 불평등을 해소합니다."
                        </blockquote>

                        <div className={styles.founderName}>
                            <h4>Dr. Jane Doe</h4>
                            <p>Founder & CEO, MyTopicEng</p>
                        </div>

                        <div className={styles.philosophy}>
                            <div className={styles.philosophyItem}>
                                <div className={styles.philosophyIcon}>🔬</div>
                                <h4>연구 기술 역량 (Research)</h4>
                                <p>Top-tier 대학 출신의 AI 연구원과 교육 전문가들이 모여 학습 과학과 딥러닝 기술을 결합하는 최전선에서 연구합니다.</p>
                            </div>
                            <div className={styles.philosophyItem}>
                                <div className={styles.philosophyIcon}>🌱</div>
                                <h4>교육 철학 (Philosophy)</h4>
                                <p>단순한 도구 제작을 넘어, 뇌과학과 인지 심리학에 기반한 인간 중심의 지능형 튜터링 모델을 추구합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
