'use client';
import { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: '김지은',
        role: '대학생 · TOEIC 920',
        avatar: '지',
        stars: 5,
        text: 'AI 튜터 덕분에 3개월 만에 TOEIC 점수가 200점이나 올랐어요. 제 약점을 정확히 짚어주고 맞춤 문제를 내줍니다.',
    },
    {
        name: '박현우',
        role: '직장인 · 해외 업무 담당',
        avatar: '현',
        stars: 5,
        text: '출퇴근 시간에 AI와 비즈니스 영어 대화를 연습합니다. 실제 업무에서 영어에 자신감이 생겼어요.',
    },
    {
        name: '이수민',
        role: '고등학생 · 유학 준비중',
        avatar: '수',
        stars: 5,
        text: '에세이 첨삭 기능이 정말 훌륭해요. 원어민 수준의 피드백을 24시간 받을 수 있다는 게 놀랍습니다.',
    },
];

export default function Testimonials() {
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
        <section className={`section ${styles.testimonials}`} id="testimonials" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">학습자들의 이야기</h2>
                <p className="section-subtitle reveal">
                    MyTopicEng과 함께 영어 실력을 키운 분들의 생생한 후기입니다
                </p>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`glass-card ${styles.card} reveal`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.stars}>
                                {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                            </div>
                            <div className={styles.quote}>"</div>
                            <p className={styles.text}>{t.text}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.avatar}</div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>{t.name}</div>
                                    <div className={styles.authorRole}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
