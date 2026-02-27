'use client';
import { useEffect, useRef } from 'react';
import styles from './Impact.module.css';

const impacts = [
    {
        num: '01',
        title: '교육 기회의 평등 (Accessibility)',
        desc: '인터넷만 연결되어 있다면 지구 어느 곳에서든 최고 수준의 원어민 AI 튜터에게 영어를 배울 수 있는 환경을 제공합니다.',
    },
    {
        num: '02',
        title: '비용 혁신 (Cost Reduction)',
        desc: '기존 원어민 과외나 고급 어학원 수준의 1:1 맞춤형 교육을 기존 비용의 10분의 1 수준으로 절감하여 누구나 누릴 수 있게 합니다.',
    },
    {
        num: '03',
        title: '학습 효율 극대화 (Efficiency)',
        desc: '학습자의 취약점만 골라 지능적으로 반복하고 새로운 맥락에서 연습하게 함으로써 동일 시간 대비 3배 이상의 학습 효과를 창출합니다.',
    },
    {
        num: '04',
        title: '글로벌 확장성 (Global Scale)',
        desc: '모국어에 구애받지 않는 언어 교육의 코어 모델(Core Model)을 기반으로, 어떤 국가와 문화권에도 즉각적으로 적용 가능한 아키텍처를 가집니다.',
    },
];

export default function Impact() {
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
        <section className={`section ${styles.impact}`} id="impact" ref={sectionRef}>
            <div className="container">
                <div className={`${styles.impactHeader} reveal`}>
                    <h2>
                        Our <span>Impact & Values</span>
                    </h2>
                    <p>
                        단순히 영어를 잘하게 만드는 것을 넘어,
                        우리가 만들어내는 기술적 진보가 사회에 어떤 긍정적인 영향을 미치는지 증명합니다.
                    </p>
                </div>

                <div className={styles.impactGrid}>
                    {impacts.map((impact, i) => (
                        <div
                            key={i}
                            className={`${styles.impactCard} reveal`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.impactNumber}>{impact.num}</div>
                            <div className={styles.impactContent}>
                                <h3>{impact.title}</h3>
                                <p>{impact.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
