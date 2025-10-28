import Link from 'next/link'
import { FC, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`)
      setSearchQuery('')
    }
  }

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* الشعار */}
          <Link href="/" className="text-xl font-bold text-blue-500">
            CimaWatch
          </Link>

          {/* روابط التنقل لشاشات كبيرة */}
          <div className="hidden md:flex space-x-4 rtl:space-x-reverse items-center">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">الرئيسية</Link>
            <Link href="/media?type=movie" className="text-white hover:text-blue-400 transition-colors">الأفلام</Link>
            <Link href="/media?type=tvshow" className="text-white hover:text-blue-400 transition-colors">المسلسلات</Link>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث..."
                className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="ml-2 p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>

          {/* زر القائمة للشاشات الصغيرة */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

        {/* القائمة المنسدلة للشاشات الصغيرة */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-700">
            <div className="flex flex-col space-y-2 py-4">
              <Link
                href="/"
                className="text-white hover:text-blue-400 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/media?type=movie"
                className="text-white hover:text-blue-400 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                الأفلام
              </Link>
              <Link
                href="/media?type=tvshow"
                className="text-white hover:text-blue-400 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                المسلسلات
              </Link>
              <form onSubmit={handleSearch} className="flex items-center px-4 py-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="بحث..."
                  className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button type="submit" className="ml-2 p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar