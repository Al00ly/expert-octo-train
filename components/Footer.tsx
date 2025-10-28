import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p>&copy; Copyright © 2025</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2 rtl:space-x-reverse">
                        <Link href="/privacy-policy" className="text-white hover:text-blue-400 transition-colors">سياسة الخصوصية</Link>
                        <Link href="/terms-of-service" className="text-white hover:text-blue-400 transition-colors">شروط الاستخدام</Link>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;