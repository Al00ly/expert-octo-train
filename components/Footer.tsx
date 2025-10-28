import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p>&copy; Copyright © 2025</p>
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