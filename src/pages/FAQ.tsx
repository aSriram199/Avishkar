import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown} from 'lucide-react';

// FAQ data
const faqData = [
  {
    question: "What is Avishkar?",
    answer: "Avishkar is the flagship event of IEEE - VBIT SB. It is a Technical Paper Presentation competition where students present their ideas and innovative solutions."
  },
  {
    question: "When and where will Avishkar 2K25 be held?",
    answer: "Avishkar 2K25 will be conducted on 3rd March, 2025 and 4th March, 2025 at Vignana Bharathi Institute of Technology."
  },
  {
    question: "What are the tracks in Avishkar 2K25?",
    answer: "The tracks in Avishkar 2K25 include various domains, with each domain featuring problem statements that are organized into specific tracks."
  },
  {
    question: "What is a problem statement?",
    answer: "A problem statement is a brief description of the problem or challenge that must be addressed in the idea and presentation."
  },
  {
    question: "How can I register for Avishkar 2K25?",
    answer: "Participants can register by scanning the QR code or by filling the registration form available on the official website and Social Media Handle."
  },
  {
    question: "What is the last date for registration?",
    answer: "The registration deadline is 1st March, 2025."
  },
  {
    question: "Is there any registration fee for Avishkar 2K25?",
    answer: "There is no registration fee for Avishkar 2K25."
  },
  {
    question: "What is the mode of participation?",
    answer: "You can participate as an individual or as a team of two."
  },
  {
    question: "Can my teammate be from a different branch?",
    answer: "Yes, any first-year student from VBIT of any branch can be your teammate."
  },
  {
    question: "Is there a specific format for the Idea and PPT?",
    answer: "Yes, there is a specific format must be followed. Sample templates of Idea and PPT will be sent via email after the registration and are also available on the Social Media Handle."
  },
  {
    question: "I don't have a laptop or computer. How can I prepare my Idea and PPT?",
    answer: "Yes, a specified format must be followed. Sample templates of Idea and PPT will be sent via email after the registration and are also available on the Social Media Handle."
  },
  {
    question: "Who should I contact if I have questions?",
    answer: "For any queries, contact at:\nVenkat Ajay: 9014454476\nLohitaksh: 8851909766"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 mt-16">
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
            <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
            <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">FAQ's</h2>
            <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
          </div>
        </div>

        {/* FAQ List - removed shadow */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border-2 ${
                openIndex === index 
                  ? 'border-[#30b3ff]' 
                  : 'border-[#15A6F7]/30'
              } rounded-lg overflow-hidden`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full px-8 py-6 flex justify-between items-center transition-colors duration-200 ${
                  openIndex === index ? 'bg-[#E8F4F8]' : 'bg-white hover:bg-[#F8FBFD]'
                }`}
              >
                <span className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-8 h-8 text-black" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#E8F4F8]"
                  >
                    <div className="px-8 py-6 text-gray-600 text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;