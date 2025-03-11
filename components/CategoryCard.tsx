import Link from 'next/link';

interface CategoryCardProps {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const CategoryCard = ({ id, title, icon, description }: CategoryCardProps) => {
  return (
    <Link href={`/${id}`} className="block">
      <div className="card hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-3">{icon}</span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-medium">자세히 보기</span>
          <svg
            className="h-5 w-5 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard; 