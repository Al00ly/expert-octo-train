import { NextPage } from 'next';
import { useState } from 'react';
import mediaData from '../data/projectsData';
import MediaCard from '../components/MediaCard';
import Reveal from '@/components/Reveal';

const SearchPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof mediaData>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 2) { // Perform search if term is at least 3 characters long
      const results = mediaData.filter(media =>
        media.title.toLowerCase().includes(term.toLowerCase()) ||
        media.summary.toLowerCase().includes(term.toLowerCase()) ||
        media.genre.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div dir="rtl" className="bg-gray-900 min-h-screen text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">البحث</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="ابحث عن أفلام أو مسلسلات..."
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.length > 0 ? (
            searchResults.map((media) => (
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
            searchTerm.length > 2 && <p className="text-center text-gray-500">لا توجد نتائج للبحث.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;