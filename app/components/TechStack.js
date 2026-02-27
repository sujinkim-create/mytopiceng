'use client';
import { useEffect, useRef } from 'react';
import styles from './TechStack.module.css';

const stacks = [
    {
        icon: '🔬',
        title: 'AI Research',
        desc: '최신 논문 기반의 자체 R&D 랩을 운영하며, 자연어 처리(NLP)와 지능형 튜터링 시스템(ITS) 모델의 한계를 돌파합니다.',
    },
    {
        icon: '⚙️',
        title: 'Machine Learning Models',
        desc: '경량화된 Edge AI부터 거대 언어 모델(LLM) 파인튜닝까지, 실제 교육 현장에 즉각 도입 가능한 최적화된 모델 아키텍처를 보유합니다.',
    },
    {
        icon: '🗄️',
        title: 'Data Infrastructure',
        desc: '수백만 건의 학습 인터랙션 데이터를 실시간으로 수집, 정제, 학습할 수 있는 확장 가능한 클라우드 데이터 파이프라인을 구축했습니다.',
    },
    {
        icon: '🔒',
        title: 'Security & Privacy',
        desc: '학습자의 개인정보와 음성 데이터를 국제 보안 표준(ISO 27001 등)에 맞추어 암호화하고 철저하게 익명화 처리합니다.',
    },
    {
        icon: '⚖️',
        title: 'Ethical AI Policy',
        desc: '인공지능의 편향성을 최소화하고, 모든 계층과 연령의 학습자에게 공정하게 동작하도록 자체 AI 윤리 기준을 엄격하게 적용합니다.',
    },
];

export default function TechStack() {
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
        <section className={`section ${styles.techStack}`} id="techstack" ref={sectionRef}>
            <div className="container">
                <div className={`${styles.techStackHeader} reveal`}>
                    <h2>
                        Our <span>Technology Stack</span>
                    </h2>
                    <p>
                        투자자와 파트너사가 신뢰할 수 있는 견고한 기술 기반.
                        단순한 서비스가 아닌, 검증된 AI 인프라 위에서 동작합니다.
                    </p>
                </div>

                <div className={styles.stackGrid}>
                    {stacks.map((stack, i) => (
                        <div
                            key={i}
                            className={`${styles.stackCard} reveal`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.stackIconWrapper}>{stack.icon}</div>
                            <h3>{stack.title}</h3>
                            <p>{stack.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
