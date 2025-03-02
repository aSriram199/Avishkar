const Footer = () => {
  return (
    <footer className="bg-black text-white py-7 sm:py-9 px-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-3.5 sm:space-y-4.5">
        <p className="text-base sm:text-lg text-white text-center">
          Designed and Developed by Web Designing Team | Avishkar 2K25
        </p>
        <div className="flex items-center gap-2.5">
          <img src="/Avishkar/logo/instagram.png" alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7" />
          <a 
            href="https://www.instagram.com/avishkar.2k25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base sm:text-lg hover:text-blue-400 transition-colors"
          >
            Avishkar.2K25
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;