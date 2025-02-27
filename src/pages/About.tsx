const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="text-center mb-8 mt-16">
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">About</h2>
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
        </div>
      </div>

      <div className="px-4 sm:px-12 md:px-24 lg:px-32">
        <div className="space-y-8">
          {/* INTRODUCTION */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 uppercase">Introduction</h2>
            <p className="text-lg sm:text-xl text-justify leading-relaxed">
              Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for
              the freshmen of VBIT. In 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award' in
              recognition of organizing Avishkar consecutively for five years. Avishkar is exclusively held for the first-year students
              of VBIT, offering them a platform to present their innovative ideas while improving their technical knowledge and
              communication skills. Avishkar has played a key role in encouraging research and critical thinking among first year
              students.
            </p>
          </div>

          {/* WHAT IS AVISHKAR */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 uppercase">What is Avishkar?</h2>
            <p className="text-lg sm:text-xl text-justify leading-relaxed mb-4">
              Avishkar is a Technical Paper Presentation competition, where participants address real-world challenges and
              showcase innovative solutions. It provides a valuable platform to expand knowledge, improve presentation and
              communication abilities, and foster self-confidence. Participants will have the chance to showcase their research and
              technical expertise in front of a group of experts. The event encourages a mindset of innovation and creative problem
              solving.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              It is structured in two rounds:
            </p>
            <ul className="list-disc pl-8 text-lg sm:text-xl mt-2">
              <li>Round 1: Idea Presentation Round</li>
              <li>Round 2: Final Round</li>
            </ul>
          </div>

          {/* RULES AND REGULATIONS */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 uppercase">Rules and Regulations</h2>
            <p className="text-lg sm:text-xl mb-4">Participants must follow the mentioned rules and regulations.</p>
            
            {/* ABSTRACT */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">ABSTRACT:</h3>
            <ul className="list-disc pl-8 text-lg sm:text-xl space-y-2">
              <li>The font style should be Times New Roman.</li>
              <li>The Problem statement title must be written in bold with a font size of 24.</li>
              <li>The details must include:
                <ul className="list-decimal pl-8 mt-2">
                  <li>Name</li>
                  <li>Branch</li>
                  <li>Roll number</li>
                  <li>Email ID</li>
                </ul>
              </li>
              <li>The style for the details must be italics.</li>
              <li>All sub-heading must be capitalised with font size of 10.</li>
              <li>Subheadings must include:
                <ul className="list-decimal pl-8 mt-2">
                  <li>Introduction</li>
                  <li>Problem statement</li>
                  <li>Motivation</li>
                  <li>Scope</li>
                  <li>Proposed Solution</li>
                  <li>Conclusion</li>
                </ul>
              </li>
              <li>The content must be appropriate and should be divided into two columns.</li>
              <li>The content should be in a font size of 10.</li>
              <li>There is no word count for the Abstract, but it should fit in one page.</li>
            </ul>

            {/* PPT */}
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">PPT:</h3>
            <ul className="list-disc pl-8 text-lg sm:text-xl space-y-2">
              <li>The PPT should consist of 10 slides, covering the following topics:
                <ul className="list-decimal pl-8 mt-2">
                  <li>Slide 1: Home Page</li>
                  <li>Slide 2: Problem Statement</li>
                  <li>Slide 3: Problem Explanation</li>
                  <li>Slide 4: Solution</li>
                  <li>Slide 5: Domain Chosen</li>
                  <li>Slide 6: Feasibility of the Solution</li>
                  <li>Slide 7: Comparing with Existing Solutions</li>
                  <li>Slide 8: Applications</li>
                  <li>Slide 9: Queries?</li>
                  <li>Slide 10: Thank You</li>
                </ul>
              </li>
              <li>The homepage must consist of "AVISHKAR" along with your Name, Roll Number and Branch & Section.</li>
              <li>Use Times New Roman font in the PPT.</li>
              <li>No animations or transitions should be used in the PPT.</li>
              <li>Use the same file naming format for the PPT as you did for the abstract.</li>
            </ul>

            {/* IMPORTANT NOTE */}
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">IMPORTANT NOTE:</h3>
              <ul className="list-disc pl-8 text-lg sm:text-xl space-y-2">
                <li>After submitting the abstract, you will receive a sample PPT in IEEE format.</li>
                <li>The abstract must be submitted as a .docx file.</li>
                <li>Name the abstract file as follows: 'Name_last3digitsofyourRollnumber'.</li>
                <li>Example file names:
                  <ul className="list-decimal pl-8 mt-2">
                    <li>Aneesh_314.docx</li>
                    <li>Abhirama_112_Lohitha_301.docx</li>
                  </ul>
                </li>
                <li>Example PPT names:
                  <ul className="list-decimal pl-8 mt-2">
                    <li>Lohitha_314.pptx</li>
                    <li>Aneesh_112_Shreshta_3A1.pptx</li>
                  </ul>
                </li>
                <li className="font-semibold mt-4">Both Abstract and PPT must be submitted within the provided deadline.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
