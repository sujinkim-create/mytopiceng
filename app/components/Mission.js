'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Mission.module.css';

const problems = [
    {
        icon: '💸',
        title: '고비용 · 비효율 학습 구조',
        desc: '기존 영어 교육은 높은 비용 대비 낮은 효과를 보여왔습니다. 획일화된 수업 방식은 학습 효율을 저하시킵니다.',
    },
    {
        icon: '📊',
        title: '영어 학습 격차 문제',
        desc: '소득, 지역, 환경에 따른 영어 교육 기회의 불균형이 존재합니다. 누구나 동등한 학습 기회를 가져야 합니다.',
    },
    {
        icon: '🎯',
        title: '개인화 부족 문제',
        desc: '개인의 수준, 목표, 학습 스타일을 반영하지 못하는 교육은 학습 동기를 잃게 만듭니다.',
    },
];

const solutions = [
    {
        icon: '🤖',
        title: 'AI 기반 개인화',
        desc: '학습자의 관심사, 진로, 그리고 현재의 언어 수준을 종합적으로 분석하여, 오직 한 사람만을 위한 초개인화 학습 커리큘럼을 실시간으로 제공합니다.',
    },
    {
        icon: '📈',
        title: '데이터 기반 학습 설계',
        desc: '최신 AI 언어 모델과 방대한 교육 데이터를 결합하여 학습 자료를 생성하며, 교육 전문가 수준 이상의 깊이와 정확성으로 신뢰할 수 있는 최상의 퀄리티를 보장합니다.',
    },
    {
        icon: '🌍',
        title: '접근성 확대',
        desc: 'AI 기술을 통해 시간, 장소, 비용의 제약 없이 누구나 수준 높은 영어 교육을 받을 수 있도록 합니다.',
    },
];

export default function Mission() {
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
        <section className={`section ${styles.mission}`} id="mission" ref={sectionRef}>
            <div className="container">
                <div className={styles.missionInner}>
                    {/* Left - Problems */}
                    <div className={`${styles.missionLeft} reveal`}>
                        <h2>
                            Why We Exist — <span>우리가 존재하는 이유</span>
                        </h2>
                        <p className={styles.missionIntro}>
                            영어는 전 세계를 연결하는 언어이지만, 아직도 많은 사람들이
                            효과적으로 배울 기회를 갖지 못하고 있습니다.
                        </p>

                        <div className={styles.problemLabel}>⚠ The Problems We See</div>
                        <div className={styles.problemList}>
                            {problems.map((p, i) => (
                                <div key={i} className={styles.problemItem}>
                                    <span className={styles.problemIcon}>{p.icon}</span>
                                    <div className={styles.problemText}>
                                        <h4>{p.title}</h4>
                                        <p>{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Solutions */}
                    <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className={styles.solutionLabel}>✦ Our Approach</div>
                        <p className={styles.solutionIntro}>
                            MyTopicEng은 AI 기술의 힘으로 이 문제들을 해결합니다.
                            우리는 기술이 교육의 장벽을 허물 수 있다고 믿습니다.
                        </p>

                        <div className={styles.solutionList}>
                            {solutions.map((s, i) => (
                                <div key={i} className={`glass-card ${styles.solutionItem}`}>
                                    <div className={styles.solutionIcon}>{s.icon}</div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Inspirational image banner */}
                <div className={`${styles.missionImage} reveal`}>
                    <Image
                        src="/images/studying.png"
                        alt="Student learning English with AI technology"
                        width={1200}
                        height={350}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.missionImageOverlay}>
                        <div className={styles.missionQuote}>
                            <p>"Technology should democratize education, not gatekeep it."</p>
                            <span>— MyTopicEng Vision Statement</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
