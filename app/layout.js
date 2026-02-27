import './globals.css';

export const metadata = {
  title: 'MyTopicEng - AI 영어 학습 플랫폼',
  description: 'AI 개인 튜터와 함께하는 맞춤형 영어 학습. 실시간 회화 연습, 문법 교정, 스마트 분석까지. 지금 무료로 시작하세요.',
  keywords: 'AI 영어, 영어 학습, AI 튜터, 영어 회화, TOEIC, IELTS, 영어 문법',
  openGraph: {
    title: 'MyTopicEng - AI 영어 학습 플랫폼',
    description: 'AI 개인 튜터와 함께하는 맞춤형 영어 학습',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
