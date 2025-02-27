
import { getImagePath } from '../utils/imageUtils';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-3">
        <p className="text-base md:text-lg text-white text-center">
          Designed and Developed by Web Designing Team | Avishkar 2K25
        </p>
        <div className="flex items-center gap-2">
          <img src={getImagePath('/logo/instagram.png')} alt="Instagram" className="w-6 h-6" />
          <a 
            href="https://www.instagram.com/avishkar.2k25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base md:text-lg hover:text-blue-400 transition-colors"
          >
            Avishkar.2K25
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;