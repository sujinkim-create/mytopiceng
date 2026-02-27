'use client';
import { useEffect, useRef } from 'react';
import styles from './Pricing.module.css';

const plans = [
    {
        name: 'Basic',
        price: '무료',
        unit: '영원히 무료',
        popular: false,
        features: [
            'AI 일일 대화 3회',
            '기본 문법 교정',
            '주간 학습 리포트',
            '기본 어휘 학습',
            '커뮤니티 접근',
        ],
    },
    {
        name: 'Pro',
        price: '₩19,900',
        unit: '/ 월',
        popular: true,
        features: [
            '무제한 AI 대화',
            '고급 문법 + 발음 교정',
            '일일 상세 리포트',
            '맞춤형 커리큘럼',
            '에세이 첨삭 기능',
            'TOEIC/IELTS 대비',
        ],
    },
    {
        name: 'Enterprise',
        price: '맞춤형',
        unit: '기업/단체 문의',
        popular: false,
        features: [
            'Pro 기능 전체 포함',
            '팀 관리 대시보드',
            '전담 매니저 배정',
            'API 연동 지원',
            '맞춤 콘텐츠 제작',
            'SLA 보장',
        ],
    },
];

export default function Pricing() {
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
        <section className={`section ${styles.pricing}`} id="pricing" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">합리적인 요금제</h2>
                <p className="section-subtitle reveal">
                    모든 플랜에 7일 무료 체험이 포함되어 있습니다
                </p>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`glass-card ${styles.card} ${plan.popular ? styles.cardPopular : ''} reveal`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            {plan.popular && <div className={styles.popularBadge}>추천</div>}
                            <div className={styles.planName}>{plan.name}</div>
                            <div className={styles.price}>{plan.price}</div>
                            <div className={styles.priceUnit}>{plan.unit}</div>

                            <div className={styles.featureList}>
                                {plan.features.map((f, fi) => (
                                    <div key={fi} className={styles.featureItem}>
                                        <span className={styles.featureCheck}>✓</span>
                                        {f}
                                    </div>
                                ))}
                            </div>

                            <button className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} ${styles.pricingCta}`}>
                                {plan.name === 'Enterprise' ? '문의하기' : '시작하기'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
