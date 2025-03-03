import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and fade out effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div 
          id="preloader"
          className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-[9999]"
          style={{
            opacity: loading ? 1 : 0,
            transition: 'opacity 1s ease'
          }}
        >
          <img 
            src="/logo/AVK_LOGO.png" 
            alt="Loading Logo" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-auto z-[2] mb-3"
            style={{
              animation: 'pulse 1.5s infinite ease-in-out',
              marginTop: '-0px' // Adjust vertical position to center properly
            }}
          />
          <div 
            className="border-8 border-[#f3f3f3] border-t-[#1e98e9] rounded-full w-[120px] h-[120px] relative"
            style={{
              animation: 'spin 1s linear infinite'
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Preloader; 