import Head from 'next/head'
import { NextPage } from 'next'
import Reveal from '@/components/Reveal'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const allSkills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: '🟦' },
    { name: 'Node.js', level: 80, icon: '🟩' },
    { name: 'Tailwind CSS', level: 85, icon: '💨' },
    { name: 'Next.js', level: 80, icon: '⏭️' },
    { name: 'Express', level: 75, icon: '🚏' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
    { name: 'PostgreSQL', level: 70, icon: '🐘' },
    { name: 'Git', level: 85, icon: '🔧' },
    { name: 'Docker', level: 60, icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MyPortfolio - Home</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* شريط التنقل */}
      <Navbar />

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
          {/* Avatar مع تأثير Parallax */}
          <Reveal direction="up">
            <div
              className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage: 'radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6, #8b5cf6)',
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
              }}
            >
              <span className="text-4xl font-bold">MP</span>
            </div>
          </Reveal>
          {/* تأثير دائري متحرك */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-blue-300 border-opacity-50 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-indigo-300 border-opacity-30 rounded-full animate-pulse"></div>
          </div>

          {/* العنوان الرئيسي */}
          <Reveal direction="up" threshold={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              مرحباً، أنا محمد
            </h1>
          </Reveal>

          {/* النص الفرعي */}
          <Reveal direction="up" threshold={0.3}>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              مطور ومصمم واجهات مستخدم متخصص في إنشاء تجارب رقمية استثنائية
            </p>
          </Reveal>

          {/* زر المشاريع */}
          <Reveal direction="up" threshold={0.4}>
            <button className="group relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* تأثير زر متحرك */}
              <div className="absolute -inset-2">
                <div className="w-full h-full bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-all duration-1000"></div>
              </div>
            </button>
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
        <Reveal direction="up">
          <section className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              مرحباً بك في MyPortfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              هذا هو موقعي الشخصي لعرض مشاريعي ومهاراتي
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              تصفح المشاريع
            </button>
          </section>
        </Reveal>

        {/* قسم المهارات والمكدس التقني */}
        <Reveal direction="up">
          <section className="bg-white rounded-lg shadow-md p-8 mt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">المهارات والمكدس التقني</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allSkills.map((skill) => (
                <Reveal key={skill.name} direction="up">
                  {skill.level ? (
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="text-2xl" aria-hidden>
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="text-4xl" aria-hidden>{skill.icon}</div>
                      <div className="text-sm font-medium text-gray-700">{skill.name}</div>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default Home