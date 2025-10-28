import mediaData from '../data/projectsData';
import MediaCard from '../components/MediaCard';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const MediaPage = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const { type, query } = router.query;
    if (type === 'movie' || type === 'tvshow') {
      setActiveFilter(type as string);
    } else {
      setActiveFilter('all');
    }
    if (query) {
      setSearchQuery(query as string);
    }
  }, [router.query.type, router.query.query]);

  const handleFilterChange = (filterType: string) => {
    setActiveFilter(filterType);
    router.push(`/media?type=${filterType}${searchQuery ? `&query=${searchQuery}` : ''}`, undefined, { shallow: true });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    router.push(`/media?type=${activeFilter}${query ? `&query=${query}` : ''}`, undefined, { shallow: true });
  };

  const filteredMedia = mediaData.filter(item => {
    const matchesFilter = () => {
      if (activeFilter === 'movie') {
        return item.type === 'Movie';
      } else if (activeFilter === 'tvshow') {
        return item.type === 'TV Show';
      }
      return true; // Show all if no type specified or invalid type
    };

    const matchesSearch = () => {
      if (!searchQuery) return true;
      const lowerCaseQuery = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.summary.toLowerCase().includes(lowerCaseQuery) ||
        item.genre.some(genre => genre.toLowerCase().includes(lowerCaseQuery))
      );
    };

    return matchesFilter() && matchesSearch();
  });

  const pageTitle = activeFilter === 'movie' ? 'الأفلام' : activeFilter === 'tvshow' ? 'المسلسلات' : 'جميع الوسائط';

  return (
    <div dir="rtl" className="bg-gray-900 min-h-screen text-white">
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">{pageTitle}</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            الكل
          </button>
          <button
            onClick={() => handleFilterChange('movie')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${activeFilter === 'movie' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            الأفلام
          </button>
          <button
            onClick={() => handleFilterChange('tvshow')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${activeFilter === 'tvshow' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            المسلسلات
          </button>
        </div>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="ابحث عن الأفلام أو المسلسلات..."
            className="p-3 rounded-lg bg-gray-700 text-white w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((media) => (
              <Reveal key={media.id}>
                <MediaCard
                  id={media.id}
                  title={media.title}
                  summary={media.summary}
                  genre={media.genre}
                  rating={media.rating}
                  type={media.type}
                  posterPlaceholder={media.posterPlaceholder}
                />
              </Reveal>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 text-xl">لا توجد نتائج مطابقة.</p>
          )}
        </div>
      </main>
      
    </div>
  );
};

export default MediaPage;