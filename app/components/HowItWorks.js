'use client';
import { useEffect, useRef } from 'react';
import styles from './HowItWorks.module.css';

const steps = [
    {
        num: 1,
        icon: '📝',
        title: '간편 가입',
        desc: '이메일 또는 소셜 로그인으로 30초 만에 가입하세요. 복잡한 절차 없이 바로 시작합니다.',
    },
    {
        num: 2,
        icon: '📋',
        title: 'AI 레벨 테스트',
        desc: 'AI가 여러분의 어휘력, 문법, 듣기, 말하기 능력을 정밀 진단합니다.',
    },
    {
        num: 3,
        icon: '🚀',
        title: '맞춤 학습 시작',
        desc: '분석 결과를 기반으로 개인화된 커리큘럼이 자동 생성됩니다. 매일 진화하는 AI와 함께 성장하세요.',
    },
];

export default function HowItWorks() {
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
        <section className={`section ${styles.howItWorks}`} id="how-it-works" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">시작은 간단합니다</h2>
                <p className="section-subtitle reveal">
                    단 3단계만으로 AI 영어 학습을 시작할 수 있습니다
                </p>

                <div className={styles.timeline}>
                    {steps.map((s, i) => (
                        <div
                            key={i}
                            className={`glass-card ${styles.step} reveal`}
                            style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                            <div className={styles.stepNumber}>{s.num}</div>
                            <div className={styles.stepIcon}>{s.icon}</div>
                            <h3 className={styles.stepTitle}>{s.title}</h3>
                            <p className={styles.stepDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
