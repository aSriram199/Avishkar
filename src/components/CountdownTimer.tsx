import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-03-03').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12">
        <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
        <h1 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">
          Event Starts In
        </h1>
        <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
      </div>
      <div className="flex justify-center items-center">
        {timeBlocks.map(({ label, value }, index) => (
          <>
            <div key={label} className="text-center">
              <motion.div
                key={value}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white"></div>
                <span className="relative text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A365D">
                  {value.toString().padStart(2, '0')}
                </span>
              </motion.div>
              <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900">
                {label}
              </span>
            </div>
            {index < timeBlocks.length - 1 && (
              <div className="flex items-center justify-center w-8 sm:w-12 md:w-16 lg:w-20">
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black -mt-8">
                  :
                </span>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;