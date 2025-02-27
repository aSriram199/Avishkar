import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';

// Team member data
const teamMembers = [
  // Marketing Team
  {
    name: "Aneesh V",
    role: "Marketing",
    image: getImagePath("/images/Aneesh.png"),
    instagram: "https://www.instagram.com/aneesh_veesam?igsh=MWJmMmJ5N2VlZTJ6bg==",
    linkedin: "https://www.linkedin.com/in/aneesh-veesam-779352353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Shreshta",
    role: "Marketing",
    image: getImagePath("/images/Shreshta.png"),
    linkedin: "https://www.linkedin.com/in/shreshta-amudapuram-956061352",
    instagram: "https://www.instagram.com/shreshta_29?igsh=bzhzMGZjZ3d5dzdz&utm_source=qr"
  },
  {
    name: "Lohitha",
    role: "Marketing",
    image: getImagePath("/images/Lohitha.png"),
    instagram: "https://www.instagram.com/asriram199/",
    linkedin: "https://www.linkedin.com/in/asriram199/"
  },
  {
    name: "Abhirama Praneeth AVK",
    role: "Marketing",
    image: getImagePath("/images/Abhiram.png"),
    linkedin: "https://www.linkedin.com/in/abhirama-praneeth-b2300b294",
    instagram: "https://www.instagram.com/wbhirama"
  },

  // Documentation Team
  {
    name: "Ruth G",
    role: "Documentation",
    image: getImagePath("/images/Ruth.png"),
    linkedin: "https://www.linkedin.com/in/ruth-g-65578334b",
    instagram: "https://www.instagram.com/ruthgrace_3927"
  },
  {
    name: "K. Geetha Bhagyasree",
    role: "Documentation",
    image: getImagePath("/images/Geetha.png"),
    linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=geetha-kumari-b612b733b",
    instagram: "https://www.instagram.com/chinni_250605"
  },
  {
    name: "Baddam Pranav Kumar",
    role: "Documentation",
    image: getImagePath("/images/Pranav.png"),
    linkedin: "https://www.linkedin.com/in/baddam-pranav-kumar-reddy-2b5734352",
    instagram: "https://www.instagram.com/pranav_reddy_29"
  },
  {
    name: "K. Sai Kiran",
    role: "Documentation",
    image: getImagePath("/images/SaiKiran.jpeg"),
    linkedin: "https://www.linkedin.com/in/saikiran-kammari-373b6533b",
    instagram: "https://www.instagram.com/saiikiran_25?igsh=anZuYm9sNWZwejVl"
  },

  // Poster Designing Team
  {
    name: "Chiluka Deepa",
    role: "Poster Designing",
    image: getImagePath("/images/Deepa.jpeg"),
    linkedin: "https://www.linkedin.com/in/chiluka-deepa-chiluka-deepa-bb2782311",
    instagram: "https://www.instagram.com/deena_a1010"
  },
  {
    name: "P. Mrudumai",
    role: "Poster Designing",
    image: getImagePath("/images/Mrudhumai.png"),
    linkedin: "https://www.linkedin.com/in/mrudumaiperala07",
    instagram: "https://www.instagram.com/me._mruduuuuuu"
  },
  {
    name: "V. Akhil",
    role: "Poster Designing",
    image: getImagePath("/images/Akhil.png"),
    linkedin: "https://www.linkedin.com/in/vaddeboina-akhil-7397bb310",
    instagram: "https://www.instagram.com/ahhkhil"
  },
  {
    name: "Gujjara Swarnamai",
    role: "Poster Designing",
    image: getImagePath("/images/Swarnamai.png"),
    instagram: "https://www.linkedin.com/in/gujjari-swarnamai-691b4b352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    linkedin: "https://www.instagram.com/swarnamai_156?igsh=MXhvajA4dnc3MHJrZA=="
  },

  // Hospitality Team
  {
    name: "K S Anirudh",
    role: "Hospitality",
    image: getImagePath("/images/KSAnirudh.png"),
    instagram: "https://www.instagram.com/ksanirudh/",
    linkedin: "https://www.linkedin.com/in/ksanirudh/"
  },
  {
    name: "Anirudh Manoj Pradhan",
    role: "Hospitality",
    image: getImagePath("/images/Anirudh.png"),
    linkedin: "https://www.linkedin.com/in/anirudh-pradhan-0635ab352",
    instagram: "https://www.instagram.com/mounsiuer_candie"
  },
  {
    name: "B. Thanmayee",
    role: "Hospitality",
    image: getImagePath("/images/Thanmayee.png"),
    linkedin: "http://www.linkedin.com/in/thanmayeebolloju",
    instagram: "https://www.instagram.com/thanmayeeee.e"
  },
  {
    name: "Gayathri Gurram",
    role: "Hospitality",
    image: getImagePath("/images/Gayathri.png"),
    linkedin: "https://www.linkedin.com/in/gayathri-gurram-60a8b62a2",
    instagram: "https://www.instagram.com/gayathri0326"
  },

  // Treasury Team
  {
    name: "Aditya",
    role: "Treasury",
    image: getImagePath("/images/Aditya.png"),
    linkedin: "https://www.linkedin.com/in/vaddeboina-akhil-7397bb310",
    instagram: "https://www.instagram.com/ahhkhil"
  },
  {
    name: "Sai Teja",
    role: "Treasury",
    image: getImagePath("/images/SaiTeja.png"),
    instagram: "https://www.instagram.com/ruth/",
    linkedin: "https://www.linkedin.com/in/ruth/"
  },
  {
    name: "Koushik Reddy",
    role: "Treasury",
    image: getImagePath("/images/Koushik.png"),
    instagram: "https://www.instagram.com/koushik/",
    linkedin: "https://www.linkedin.com/in/koushik/"
  },
  {
    name: "Venkatajay Pulkam",
    role: "Treasury",
    image: getImagePath("/images/Ajay.png"),
    linkedin: "https://www.linkedin.com/in/pulkam-venkata-ajay-94ab89351",
    instagram: "https://www.instagram.com/mrt_.stupid"
  },

  // Web Designing Team
  {
    name: "A. Sriram",
    role: "Web Designing",
    image: getImagePath("/images/Sriram.png"),
    linkedin: "https://www.linkedin.com/in/sriram-a-04b689338",
    instagram: "https://www.instagram.com/alukanti_sriram"
  },
  {
    name: "Deevaroy Komal",
    role: "Web Designing",
    image: getImagePath("/images/Komal.png"),
    linkedin: "https://in.linkedin.com/in/komal-deevaroy-661752279",
    instagram: "https://www.instagram.com/komaldeevaroy"
  },

  // Social Media Promotions Team
  {
    name: "Lohitaksh Paka",
    role: "Social Media Promotions",
    image: getImagePath("/images/Lohit.png"),
    linkedin: "https://www.linkedin.com/in/lohitaksh-paka-6a0a312a4",
    instagram: "https://www.instagram.com/labyrinth_master"
  },
  {
    name: "N. Sai Bharati",
    role: "Social Media Promotions",
    image: getImagePath("/images/Bharathi.png"),
    linkedin: "https://www.linkedin.com/in/bharati-nallacheruvu-028a992a4",
    instagram: "https://www.instagram.com/bhaartea"
  }
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="text-center mb-8 mt-16">
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">Our Team</h2>
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#E8F4F8] shadow-lg">
                <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/70 p-2 rounded-full text-white hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/70 p-2 rounded-full text-white hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                <div className="aspect-[3/4] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover relative z-[1] transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getImagePath('/images/default-avatar.png');
                    }}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = '1';
                    }}
                    style={{ opacity: 0 }}
                  />
                </div>

                <div className="p-4 text-center bg-[#E8F4F8]">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;