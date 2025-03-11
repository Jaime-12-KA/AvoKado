import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 번역 리소스
const resources = {
  en: {
    translation: {
      // 공통
      'app.name': 'KoreAmigo',
      'app.tagline': 'Making life in Korea easier for foreigners',
      
      // 네비게이션
      'nav.home': 'Home',
      'nav.housing': 'Housing',
      'nav.transportation': 'Transportation',
      'nav.administration': 'Administration',
      'nav.healthcare': 'Healthcare',
      'nav.emergency': 'Emergency',
      'nav.services': 'Services',
      'nav.community': 'Community',
      'nav.login': 'Login',
      'nav.signup': 'Sign Up',
      
      // 홈페이지
      'home.welcome': 'Welcome to KoreAmigo',
      'home.subtitle': 'Your companion for life in Korea',
      'home.cta': 'Get Started',
      'home.emergency': 'Emergency Information',
      
      // 카테고리
      'category.popular': 'Popular Topics',
      'category.related': 'Related Categories',
      
      // 사용자
      'user.profile': 'Profile',
      'user.settings': 'Settings',
      'user.saved': 'Saved Content',
      'user.tickets': 'My Tickets',
      
      // 서비스
      'service.request': 'Request Service',
      'service.track': 'Track Request',
      'service.pricing': 'Pricing',
      
      // 기타
      'feedback.helpful': 'Was this helpful?',
      'search.placeholder': 'Search for information...',
    },
  },
  ko: {
    translation: {
      // 공통
      'app.name': 'KoreAmigo',
      'app.tagline': '외국인을 위한 한국 생활 도우미',
      
      // 네비게이션
      'nav.home': '홈',
      'nav.housing': '주거',
      'nav.transportation': '교통',
      'nav.administration': '행정',
      'nav.healthcare': '의료',
      'nav.emergency': '긴급상황',
      'nav.services': '서비스',
      'nav.community': '커뮤니티',
      'nav.login': '로그인',
      'nav.signup': '회원가입',
      
      // 홈페이지
      'home.welcome': 'KoreAmigo에 오신 것을 환영합니다',
      'home.subtitle': '한국 생활의 동반자',
      'home.cta': '시작하기',
      'home.emergency': '긴급 정보',
      
      // 카테고리
      'category.popular': '인기 주제',
      'category.related': '관련 카테고리',
      
      // 사용자
      'user.profile': '프로필',
      'user.settings': '설정',
      'user.saved': '저장된 콘텐츠',
      'user.tickets': '내 티켓',
      
      // 서비스
      'service.request': '서비스 요청',
      'service.track': '요청 추적',
      'service.pricing': '가격',
      
      // 기타
      'feedback.helpful': '도움이 되었나요?',
      'search.placeholder': '정보 검색...',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 