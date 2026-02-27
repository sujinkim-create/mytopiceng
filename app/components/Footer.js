'use client';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
            {/* Contact CTA Section */}
            <section className={styles.ctaSection} id="contact">
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2 className={styles.ctaTitle}>
                            함께 만들어갈 준비가 되셨나요?{' '}
                            <span className={styles.ctaGradient}>Let's Build the Future Together.</span>
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            파트너십, 투자, 채용, 기술 문의 등 어떤 이유로든 환영합니다.
                            AI 영어 교육의 미래를 함께 만들어 갑시다.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a href="mailto:contact@mytopiceng.com" className="btn-primary">
                                contact@mytopiceng.com →
                            </a>
                            <a href="#" className="btn-secondary">기업 소개서 다운로드</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        <div className={styles.footerBrand}>
                            <div className={styles.footerLogo}>
                                <span className={styles.footerLogoIcon}>M</span>
                                MyTopicEng
                            </div>
                            <p className={styles.footerDesc}>
                                AI 기술로 영어 교육의 패러다임을 바꿉니다.
                                누구나 쉽고 효과적으로 영어를 배울 수 있는 세상을 만들어갑니다.
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink} aria-label="LinkedIn">💼</a>
                                <a href="#" className={styles.socialLink} aria-label="GitHub">💻</a>
                                <a href="#" className={styles.socialLink} aria-label="Blog">📝</a>
                                <a href="#" className={styles.socialLink} aria-label="Email">✉️</a>
                            </div>
                        </div>

                        <div className={styles.footerColumn}>
                            <h4>Company</h4>
                            <a href="#mission" className={styles.footerLink}>Our Mission</a>
                            <a href="#projects" className={styles.footerLink}>Projects</a>
                            <a href="#innovation" className={styles.footerLink}>Innovation</a>
                        </div>

                        <div className={styles.footerColumn}>
                            <h4>Resources</h4>
                            <a href="#" className={styles.footerLink}>Research Papers</a>
                            <a href="#" className={styles.footerLink}>Tech Blog</a>
                            <a href="#" className={styles.footerLink}>API Documentation</a>
                            <a href="#" className={styles.footerLink}>Partners</a>
                        </div>

                        <div className={styles.footerColumn}>
                            <h4>Contact</h4>
                            <a href="#" className={styles.footerLink}>Careers</a>
                            <a href="#" className={styles.footerLink}>Press Inquiries</a>
                            <a href="#" className={styles.footerLink}>Terms of Service</a>
                            <a href="#" className={styles.footerLink}>Privacy Policy</a>
                        </div>
                    </div>

                    <div className={styles.footerBottom}>
                        <span>© 2026 MyTopicEng Inc. All rights reserved.</span>
                        <div className={styles.footerBottomLinks}>
                            <a href="#" className={styles.footerLink}>Terms</a>
                            <a href="#" className={styles.footerLink}>Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
