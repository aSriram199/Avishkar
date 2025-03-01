import { Download } from 'lucide-react';

const Sample = () => {
  const handleDownload = (fileType: string) => {
    const fileMap = {
      'individual': '/Avishkar/samples/SampleAbstractIndividual.pdf',
      'team': '/Avishkar/samples/SampleAbstractTeam.pdf',
      'ppt': '/Avishkar/samples/ppt.pptx',
      'problems': '/Avishkar/samples/ProblemStatements.pdf'
    };

    const filePath = fileMap[fileType as keyof typeof fileMap];
    if (filePath) {
      window.open(filePath, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sample Header - adjusted spacing */}
        <div className="text-center mb-8 mt-16">
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
            <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
            <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">Sample</h2>
            <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
          </div>
        </div>

        {/* Sample Video Section */}
        <div className="mb-12 sm:mb-16">
          <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
              <video 
                className="absolute top-0 left-0 w-full h-full object-contain bg-gray-100"
                controls
                preload="metadata"
                playsInline
              >
                <source src="/Avishkar/samples/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Download Sample Abstracts Section */}
        <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 sm:mb-8 pl-4">DOWNLOAD SAMPLE ABSTRACTS</h2>
          <div className="flex flex-col sm:flex-row gap-4 pl-4">
            <button 
              onClick={() => handleDownload('individual')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E8EEF9] text-black px-6 sm:px-8 py-3 rounded-lg hover:bg-[#d0ddf7] transition-colors"
            >
              <span className="text-base sm:text-lg font-medium">INDIVIDUAL</span>
              <Download className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleDownload('team')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E8EEF9] text-black px-6 sm:px-8 py-3 rounded-lg hover:bg-[#d0ddf7] transition-colors"
            >
              <span className="text-base sm:text-lg font-medium">TEAM</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download Sample PPT Section */}
        <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 sm:mb-8 pl-4">DOWNLOAD SAMPLE PPT</h2>
          <div className="pl-4">
            <button 
              onClick={() => handleDownload('ppt')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E8EEF9] text-black px-6 sm:px-8 py-3 rounded-lg hover:bg-[#d0ddf7] transition-colors"
            >
              <span className="text-base sm:text-lg font-medium">PPT</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download Problem Statements Section */}
        <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 sm:mb-8 pl-4">DOWNLOAD PROBLEM STATEMENTS</h2>
          <div className="pl-4">
            <button 
              onClick={() => handleDownload('problems')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E8EEF9] text-black px-6 sm:px-8 py-3 rounded-lg hover:bg-[#d0ddf7] transition-colors"
            >
              <span className="text-base sm:text-lg font-medium">PROBLEM STATEMENTS</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;