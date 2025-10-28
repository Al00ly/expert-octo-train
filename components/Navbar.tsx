import Link from 'next/link'
import { FC, useState } from 'react'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* الشعار */}
          <Link href="/" className="text-xl font-bold text-blue-500">
            MyPortfolio
          </Link>

          {/* روابط التنقل لشاشات كبيرة */}
          <div className="hidden md:flex space-x-4 rtl:space-x-reverse">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">الرئيسية</Link>
            <Link href="/projects" className="text-white hover:text-blue-400 transition-colors">المشاريع</Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">تواصل معي</Link>
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
                href="/projects"
                className="text-white hover:text-blue-400 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                المشاريع
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-400 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                تواصل معي
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar