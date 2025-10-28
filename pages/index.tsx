import Head from 'next/head'
import { NextPage } from 'next'
import Reveal from '@/components/Reveal'
import mediaData from '../data/projectsData'; // Import mediaData
import Link from 'next/link'; // Import Link

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>CimaWatch - أفلام ومسلسلات</title>
        <meta name="description" content="موقع لعرض الأفلام والمسلسلات" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* شريط التنقل */}


      {/* قسم البطل (Hero Section) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>

        {/* تأثيرات بصرية */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-indigo-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-500 rounded-full opacity-25 animate-ping"></div>
        </div>

        {/* محتوى القسم البطل */}
        <div className="relative z-10 text-center text-white px-4">
          {/* إعلان كبير لفيلم أو مسلسل واحد */}
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto">
              <img
                src={mediaData[0].posterPlaceholder}
                alt={mediaData[0].title}
                className="w-64 h-96 object-cover rounded-lg shadow-xl mx-auto mb-6"
              />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                {mediaData[0].title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {mediaData[0].summary}
              </p>
              <Link href={`/media/${mediaData[0].id}`}>
                <button className="group relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="relative z-10">شاهد الآن</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-2">
                    <div className="w-full h-full bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-all duration-1000"></div>
                  </div>
                </button>
              </Link>
            </div>
          </Reveal>

          {/* مؤشر التمرير للأسفل */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-8 h-8 text-white opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* تأثيرات Parallax إضافية */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-6 h-6 bg-white rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-4 h-4 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-8 h-8 bg-purple-300 rounded-full opacity-15 animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-indigo-300 rounded-full opacity-25 animate-bounce"></div>
        </div>
      </section>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-8">
        {/* قسم أحدث الأفلام */}
        <Reveal direction="up">
          <section className="text-center py-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">أحدث الأفلام</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaData.filter(item => item.type === 'Movie').slice(0, 3).map(movie => (
                <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img src={movie.posterPlaceholder} alt={movie.title} className="w-full h-96 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{movie.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">التقييم: {movie.rating}</p>
                    <p className="text-gray-700 text-sm">{movie.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* قسم المسلسلات الأكثر تقييماً */}
        <Reveal direction="up">
          <section className="text-center py-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">المسلسلات الأكثر تقييماً</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaData.filter(item => item.type === 'TV Show').slice(0, 3).map(tvShow => (
                <div key={tvShow.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img src={tvShow.posterPlaceholder} alt={tvShow.title} className="w-full h-96 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tvShow.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">التقييم: {tvShow.rating}</p>
                    <p className="text-gray-700 text-sm">{tvShow.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </main>

    </div>
  );
};

export default Home;