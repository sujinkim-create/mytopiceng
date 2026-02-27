'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Innovation.module.css';

const roadmap = [
    {
        title: '글로벌 AI 영어 학습 플랫폼 구축',
        desc: '아시아 시장을 시작으로 비영어권 국가에 최적화된 학습 플랫폼을 배포하여 전 세계적인 스케일업을 달성합니다.',
    },
    {
        title: '교육기관 및 공공 인프라 협력 모델',
        desc: '공교육 현장과 사교육 기관에 당사의 AI 엔진을 공급(B2B/B2G)하여 교사의 보조자 역할을 수행합니다.',
    },
    {
        title: 'AI + 인간 교사의 하이브리드 협력 모델',
        desc: 'AI가 반복적이고 데이터 집약적인 평가를 전담하고, 인간 교사는 학습자의 동기 부여와 심층 지도에 집중하는 최적의 모델을 완성합니다.',
    },
    {
        title: '다국어 확장 가능성 입증',
        desc: '영어 교육에서 검증된 자연어 처리 및 지식 추적 모델을 타 언어 학습(스페인어, 한국어 등) 파이프라인으로 이식합니다.',
    },
];

export default function Innovation() {
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
        <section className={`section ${styles.innovation}`} id="innovation" ref={sectionRef}>
            <div className={`orb orb-violet ${styles.orbInnovation}`}></div>

            <div className="container">
                <div className={styles.innovationInner}>
                    <div className={`${styles.innovationContent} reveal`}>
                        <h2>
                            Future <span>Innovation</span>
                        </h2>
                        <p className={styles.innovationIntro}>
                            미래 교육의 모습을 설계합니다. 현재의 연구 성과를 바탕으로
                            다음 단계의 교육 생태계를 구축할 현실적인 계획을 가지고 있습니다.
                        </p>

                        <div className={styles.timeline}>
                            {roadmap.map((item, i) => (
                                <div key={i} className={styles.timelineItem}>
                                    <div className={styles.timelineDot}></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.innovationImage} reveal`} style={{ transitionDelay: '0.2s' }}>
                        <Image
                            src="/images/future.png"
                            alt="Future of global AI education ecosystem"
                            width={600}
                            height={500}
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.innovationGlow}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
