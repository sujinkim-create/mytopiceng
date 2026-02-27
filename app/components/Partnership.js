'use client';
import { useEffect, useRef } from 'react';
import styles from './Partnership.module.css';

const partners = [
    {
        icon: '🏫',
        title: 'Schools',
        desc: '공교육 현장에 AI 보조 교사 시스템을 도입하여 교사의 업무 부담을 줄이고 학생 맞춤 지도를 돕습니다.',
    },
    {
        icon: '🏢',
        title: 'Educational Institutions',
        desc: '어학원 및 사교육 기관에 B2B 화이트라벨링 솔루션과 API를 제공하여 기존 커리큘럼을 고도화합니다.',
    },
    {
        icon: '💻',
        title: 'EdTech Companies',
        desc: '콘텐츠/플랫폼 기반 에듀테크 기업들에게 당사의 지능형 학습 엔진(API)을 모듈 형태로 연동 지원합니다.',
    },
    {
        icon: '🔬',
        title: 'Research Organizations',
        desc: '대학 및 교육 공학 연구소와 협력하여 AI 교육 모델의 실효성을 검증하고 논문을 공동 집필합니다.',
    },
];

export default function Partnership() {
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
        <section className={`section ${styles.partnership}`} id="partnership" ref={sectionRef}>
            <div className="container">
                <div className={styles.partnershipInner}>
                    <div className={`${styles.partnershipContent} reveal`}>
                        <h2>
                            Partnership & <span>Collaboration</span>
                        </h2>
                        <p className={styles.partnershipIntro}>
                            MyTopicEng의 AI 기술은 닫힌 시스템이 아닙니다.
                            우리는 다양한 파트너들과 함께 B2B 교육 생태계를 확장하고 상생하는
                            인프라 플랫폼으로 도약하고 있습니다.
                        </p>

                        <div className={styles.partnerGrid}>
                            {partners.map((partner, i) => (
                                <div key={i} className={`glass-card ${styles.partnerItem}`}>
                                    <div className={styles.partnerIcon}>{partner.icon}</div>
                                    <div className={styles.partnerText}>
                                        <h4>{partner.title}</h4>
                                        <p>{partner.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.visualSide} reveal`} style={{ transitionDelay: '0.2s' }}>
                        <div className={styles.networkVisual}>
                            <div className={styles.centralNode}>🤖</div>
                            <div className={`${styles.floatingNode} ${styles.node1}`}>K-12 Schools</div>
                            <div className={`${styles.floatingNode} ${styles.node2}`}>EdTech Startups</div>
                            <div className={`${styles.floatingNode} ${styles.node3}`}>Universities</div>
                            <div className={`${styles.floatingNode} ${styles.node4}`}>Global Academies</div>

                            {/* Connecting lines purely for visual aesthetic, handled with radial gradient and positioning */}
                            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                                <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="4" />
                                <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="4" />
                                <line x1="50%" y1="50%" x2="10%" y2="80%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="4" />
                                <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
