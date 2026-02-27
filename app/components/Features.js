'use client';
import { useEffect, useRef } from 'react';
import styles from './Features.module.css';

const features = [
    {
        icon: '🧠',
        title: 'AI 개인 튜터',
        desc: '고급 자연어 처리 기술로 학습자의 수준을 정확히 파악하고, 1:1 맞춤 피드백을 제공합니다.',
    },
    {
        icon: '🎯',
        title: '맞춤형 커리큘럼',
        desc: '학습 목표와 현재 실력을 분석하여, 가장 효율적인 학습 경로를 자동으로 설계합니다.',
    },
    {
        icon: '💬',
        title: '실시간 회화 연습',
        desc: 'AI와 자연스러운 영어 대화를 연습하세요. 발음, 문법, 표현력까지 즉시 교정해드립니다.',
    },
    {
        icon: '📊',
        title: '스마트 분석',
        desc: '학습 패턴, 취약점, 성장 추이를 대시보드에서 한눈에 확인하고 전략을 세울 수 있습니다.',
    },
];

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('.reveal');
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section ${styles.features}`} id="features" ref={sectionRef}>
            <div className={`orb orb-violet ${styles.orbFeature}`}></div>
            <div className="container">
                <h2 className="section-title reveal">AI가 만드는 새로운 영어 학습</h2>
                <p className="section-subtitle reveal">
                    최첨단 인공지능 기술로 여러분만의 학습 경험을 만들어 드립니다
                </p>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className={`glass-card ${styles.card} reveal`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.iconWrapper}>{f.icon}</div>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
