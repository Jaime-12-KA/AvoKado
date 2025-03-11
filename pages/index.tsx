import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import LanguageSelector from '@/components/LanguageSelector';

const Home: NextPage = () => {
  const { t } = useTranslation();
  
  const categories = [
    {
      id: 'housing',
      title: t('nav.housing'),
      icon: '🏠',
      description: '주거 정보, 계약, 임대료, 공과금 등',
    },
    {
      id: 'transportation',
      title: t('nav.transportation'),
      icon: '🚆',
      description: '대중교통, 택시, 운전면허, 자동차 등',
    },
    {
      id: 'administration',
      title: t('nav.administration'),
      icon: '📝',
      description: '비자, 외국인등록, 세금, 은행 등',
    },
    {
      id: 'healthcare',
      title: t('nav.healthcare'),
      icon: '🏥',
      description: '병원, 보험, 약국, 응급 의료 등',
    },
    {
      id: 'emergency',
      title: t('nav.emergency'),
      icon: '🆘',
      description: '긴급 전화번호, 재난 대응, 대사관 연락처 등',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{t('app.name')} - {t('app.tagline')}</title>
        <meta name="description" content={t('app.tagline')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="absolute top-4 right-4">
              <LanguageSelector />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('home.welcome')}</h1>
              <p className="text-xl mb-8">{t('home.subtitle')}</p>
              <button className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg">
                {t('home.cta')}
              </button>
            </div>
          </div>
        </section>
        
        {/* 카테고리 섹션 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">정보 카테고리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard 
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  icon={category.icon}
                  description={category.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* 서비스 섹션 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">맞춤형 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">정보 검색</h3>
                <p className="text-gray-600 mb-4">한국 생활에 필요한 모든 정보를 쉽게 찾아보세요.</p>
                <button className="btn btn-outline">자세히 보기</button>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🛎️</div>
                <h3 className="text-xl font-bold mb-2">맞춤 지원</h3>
                <p className="text-gray-600 mb-4">번역, 동행, 행정 지원 등 필요한 서비스를 요청하세요.</p>
                <button className="btn btn-primary">서비스 요청</button>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2">커뮤니티</h3>
                <p className="text-gray-600 mb-4">다른 외국인들과 경험을 공유하고 도움을 주고받으세요.</p>
                <button className="btn btn-outline">커뮤니티 참여</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* 긴급 정보 섹션 */}
        <section className="py-8 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-red-700">{t('home.emergency')}</h3>
              <a href="/emergency" className="text-red-700 font-medium hover:underline">모든 긴급 정보 보기 →</a>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <div className="font-bold">긴급 전화번호</div>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>경찰</span>
                    <span className="font-bold">112</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>구급차/소방서</span>
                    <span className="font-bold">119</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <div className="font-bold">외국인 지원 센터</div>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>다국어 상담</span>
                    <span className="font-bold">1345</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>관광 안내</span>
                    <span className="font-bold">1330</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <div className="font-bold">의료 지원</div>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>외국인 응급 의료 센터</span>
                    <span className="font-bold">02-790-5115</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>코로나19 상담</span>
                    <span className="font-bold">1339</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home; 