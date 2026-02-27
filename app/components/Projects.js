'use client';
import { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const projects = [
    {
        icon: '🧠',
        title: 'AI Adaptive Learning Engine',
        status: 'active',
        statusLabel: 'In Development',
        desc: '학습자의 실력, 학습 패턴, 취약점을 실시간으로 분석하여 최적의 학습 경험을 자동 구성하는 엔진을 연구 개발하고 있습니다.',
        research: [
            { label: '학습자 수준 분석 알고리즘', detail: '자연어 처리 기반으로 학습자의 현재 수준을 정밀 진단하고, 학습 진행에 따라 동적으로 난이도를 조절합니다.' },
            { label: '실시간 피드백 모델', detail: '학습 중 발생하는 오류를 즉시 감지하고 맥락에 맞는 교정 피드백을 생성하는 AI 모델을 개발합니다.' },
        ],
        tags: ['Reinforcement Learning', 'NLP', 'Personalization'],
    },
    {
        icon: '📚',
        title: 'Content Intelligence System',
        status: 'active',
        statusLabel: 'In Development',
        desc: '교육 콘텐츠를 자동으로 분석하고, 학습자에게 최적화된 자료를 생성하는 지능형 콘텐츠 시스템을 구축합니다.',
        research: [
            { label: '자동 난이도 조절', detail: '텍스트의 어휘 복잡도, 문장 구조, 주제 난이도를 분석하여 학습자 수준에 맞게 자동 조절합니다.' },
            { label: '검증된 자료 기반 생성 시스템', detail: '교육 전문가가 검증한 데이터를 기반으로 신뢰성 높은 학습 자료를 AI가 자동 생성합니다.' },
        ],
        tags: ['Content Generation', 'Difficulty Analysis', 'Quality Assurance'],
    },
    {
        icon: '🎙️',
        title: 'Speech & Interaction Research',
        status: 'research',
        statusLabel: 'Research Phase',
        desc: '학습자의 발화 패턴을 분석하고, 자연스러운 대화형 학습 환경을 구축하기 위한 핵심 연구를 진행합니다.',
        research: [
            { label: '발화 분석', detail: '음성 인식 AI를 활용하여 발음, 억양, 유창성을 정밀 분석하고 원어민 수준과 비교합니다.' },
            { label: '대화형 학습 모델', detail: '실제 대화 상황을 시뮬레이션하여 학습자가 자연스럽게 영어를 습득할 수 있는 모델을 설계합니다.' },
        ],
        tags: ['Speech Recognition', 'Dialogue Systems', 'Phoneme Analysis'],
    },
];

export default function Projects() {
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
        <section className={`section ${styles.projects}`} id="projects" ref={sectionRef}>
            <div className="container">
                <div className={`${styles.projectsHeader} reveal`}>
                    <h2>
                        Current <span>Projects & Research</span>
                    </h2>
                    <p>
                        우리는 이런 기술을 연구하고 있습니다. AI 영어 교육의 핵심 과제를
                        해결하기 위해 끊임없이 도전합니다.
                    </p>
                </div>

                <div className={styles.projectGrid}>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`glass-card ${styles.projectCard} reveal`}
                            style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                            <div className={`${styles.projectStatus} ${project.status === 'active' ? styles.statusActive : styles.statusResearch
                                }`}>
                                <span className={styles.statusDot}></span>
                                {project.statusLabel}
                            </div>
                            <div className={styles.projectIcon}>{project.icon}</div>
                            <h3>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.desc}</p>

                            <div className={styles.researchItems}>
                                {project.research.map((r, ri) => (
                                    <div key={ri} className={styles.researchItem}>
                                        <div className={styles.researchLabel}>
                                            <span className={styles.researchDot}></span>
                                            {r.label}
                                        </div>
                                        <p className={styles.researchDetail}>{r.detail}</p>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.projectTags}>
                                {project.tags.map((tag, ti) => (
                                    <span key={ti} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
