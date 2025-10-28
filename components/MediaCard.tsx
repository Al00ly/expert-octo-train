import React from 'react';
import Link from 'next/link';

interface MediaCardProps {
  id: string;
  title: string;
  summary: string;
  genre: string;
  rating: number;
  type: 'Movie' | 'TV Show';
  posterPlaceholder: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  id,
  title,
  summary,
  genre,
  rating,
  type,
  posterPlaceholder,
}) => {
  return (
    <Link href={`/media/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img src={posterPlaceholder} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">التقييم: {rating}</p>
          <p className="text-gray-700 text-sm">النوع: {type}</p>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
