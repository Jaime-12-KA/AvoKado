import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">{t('app.name')}</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/housing" className="text-gray-700 hover:text-primary-600">
              {t('nav.housing')}
            </Link>
            <Link href="/transportation" className="text-gray-700 hover:text-primary-600">
              {t('nav.transportation')}
            </Link>
            <Link href="/administration" className="text-gray-700 hover:text-primary-600">
              {t('nav.administration')}
            </Link>
            <Link href="/healthcare" className="text-gray-700 hover:text-primary-600">
              {t('nav.healthcare')}
            </Link>
            <Link href="/emergency" className="text-gray-700 hover:text-primary-600">
              {t('nav.emergency')}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600">
              {t('nav.services')}
            </Link>
          </nav>

          {/* 사용자 메뉴 */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/login" className="text-gray-700 hover:text-primary-600">
              {t('nav.login')}
            </Link>
            <Link href="/signup" className="btn btn-primary">
              {t('nav.signup')}
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/housing" className="text-gray-700 hover:text-primary-600">
                {t('nav.housing')}
              </Link>
              <Link href="/transportation" className="text-gray-700 hover:text-primary-600">
                {t('nav.transportation')}
              </Link>
              <Link href="/administration" className="text-gray-700 hover:text-primary-600">
                {t('nav.administration')}
              </Link>
              <Link href="/healthcare" className="text-gray-700 hover:text-primary-600">
                {t('nav.healthcare')}
              </Link>
              <Link href="/emergency" className="text-gray-700 hover:text-primary-600">
                {t('nav.emergency')}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary-600">
                {t('nav.services')}
              </Link>
              <div className="pt-4 border-t flex flex-col space-y-4">
                <LanguageSelector />
                <Link href="/login" className="text-gray-700 hover:text-primary-600">
                  {t('nav.login')}
                </Link>
                <Link href="/signup" className="btn btn-primary inline-block text-center">
                  {t('nav.signup')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 