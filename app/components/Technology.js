'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Technology.module.css';

const techCards = [
    { icon: '🧠', title: 'NLP Engine', desc: '자연어 처리 기반 문맥 분석' },
    { icon: '🔊', title: 'Speech AI', desc: '실시간 발음 인식 및 교정' },
    { icon: '📐', title: 'Adaptive Learning', desc: '적응형 학습 알고리즘' },
    { icon: '📊', title: 'Learning Analytics', desc: '학습 데이터 인사이트 분석' },
];

const stats = [
    { number: '15+', label: 'AI 모델 운영' },
    { number: '2M+', label: '학습 데이터 분석' },
    { number: '30+', label: '연구 논문 참조' },
    { number: '99.2%', label: '모델 정확도' },
];

export default function Technology() {
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
        <section className={`section ${styles.technology}`} id="technology" ref={sectionRef}>
            <div className="container">
                <div className={styles.techInner}>
                    <div className={`${styles.techImage} reveal`}>
                        <Image
                            src="/images/ai_tech.png"
                            alt="AI language technology visualization"
                            width={600}
                            height={450}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className={`${styles.techContent} reveal`} style={{ transitionDelay: '0.15s' }}>
                        <h2>
                            Our <span>Core Technology</span>
                        </h2>
                        <p className={styles.techIntro}>
                            MyTopicEng의 기술 스택은 최신 자연어 처리(NLP), 음성 인식,
                            적응형 학습 알고리즘을 결합하여 학습자에게 최적의
                            영어 교육 경험을 제공합니다.
                        </p>

                        <div className={styles.techGrid}>
                            {techCards.map((card, i) => (
                                <div key={i} className={`glass-card ${styles.techCard}`}>
                                    <div className={styles.techCardIcon}>{card.icon}</div>
                                    <h4>{card.title}</h4>
                                    <p>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className={styles.techStats}>
                    {stats.map((s, i) => (
                        <div key={i} className={`glass-card ${styles.techStat} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className={styles.techStatNumber}>{s.number}</div>
                            <div className={styles.techStatLabel}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
