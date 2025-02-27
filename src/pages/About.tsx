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
              Avishkar, the flagship event of IEEE - VBIT SB, is held exclusively for the freshmen of VBIT. In 2011, Avishkar was
              awarded the esteemed 'Darrel Chong Gold Student Activity Award' in recognition of organizing Avishkar
              consecutively for five years. Avishkar offers a platform to present their innovative ideas while improving their
              technical knowledge and communication skills. Avishkar has played a key role in encouraging research and critical
              thinking among first year students.
            </p>
          </div>

          {/* WHAT IS AVISHKAR */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 uppercase">What is Avishkar?</h2>
            <p className="text-lg sm:text-xl text-justify leading-relaxed mb-4">
              Avishkar is a Technical Paper Presentation competition that provides students with the opportunity to address real-
              world challenges and suggest innovative solutions. Participants will showcase their technical expertise through
              presentations. This competition plays a key role in the professional development of VBIT freshmen, providing them
              with essential problem-solving skills and real-world exposure.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-4">
              It is structured into two rounds:
            </p>
            <ul className="list-disc pl-8 text-lg sm:text-xl mb-4">
              <li>Round 1: Idea Presentation Round</li>
              <li>Round 2: Final Round</li>
            </ul>
            <p className="text-lg sm:text-xl text-justify leading-relaxed mb-4">
              During the initial stage, participants are assigned to designated halls for their presentations. Each team is given a
              specific amount of time for presenting their ideas and two minutes for the Queries.
            </p>
            <p className="text-lg sm:text-xl text-justify leading-relaxed">
              After Round 2, a panel of judges will evaluate the presentations and select the best participants based on the innovative
              ideas, technical expertise and presentation skills. The top participants will be recognized for their outstanding
              contributions.
            </p>
          </div>

          {/* RULES AND REGULATIONS */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 uppercase">Rules and Regulations</h2>
            <p className="text-lg sm:text-xl mb-4">Participants should follow the mentioned rules and regulations.</p>
            
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
                  <li>Slide 9: Queries</li>
                  <li>Slide 10: Thank You</li>
                </ul>
              </li>
              <li>The homepage must consist of "AVISHKAR" along with your Name, Roll Number and Branch & Section.</li>
              <li>"AVISHKAR" must be in capital letters, bold and font size 80.</li>
              <li>Use Times New Roman font in the PPT.</li>
              <li>No animations or transitions should be used in the PPT.</li>
              <li>The subheadings of the slide 2, slide 3, slide 4, slide 5, slide 6, slide 7 and slide 8 must be in font size 40 and the content font size should be 20.</li>
              <li>Use the same file naming format for the PPT as you did for the abstract.</li>
            </ul>

            {/* IMPORTANT NOTE */}
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">IMPORTANT NOTE:</h3>
              <ul className="list-disc pl-8 text-lg sm:text-xl space-y-2">
                <li>After submitting the abstract, you will receive a sample PPT in IEEE format.</li>
                <li>The abstract must be submitted as a .docx file.</li>
                <li>Name the abstract file as follows: 'Name_last3digitsofyourRollnumber'.</li>
                <li>Example file names for Abstract:
                  <ul className="list-decimal pl-8 mt-2">
                    <li>Aneesh_314.docx</li>
                    <li>Abhirama_112_Lohitha_301.docx</li>
                  </ul>
                </li>
                <li>Example file names for PPT:
                  <ul className="list-decimal pl-8 mt-2">
                    <li>Lohitha_314.pptx</li>
                    <li>Aneesh_112_Shreshta_3A1.pptx</li>
                  </ul>
                </li>
                <li className="font-semibold mt-4">Both the Abstract and PPT must be submitted by the provided deadline.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
