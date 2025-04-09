import React from 'react';
import modelImage1 from '../assets/images/result1.jpg';
import modelImage2 from '../assets/images/result2.jpg';
import modelImage3 from '../assets/images/result3.jpg';
const Results = () => {
  return (
    <div className="min-h-screen bg-[#24024C] flex flex-col justify-center items-center text-white p-8">
      <h1 className="text-4xl md:text-5xl font-[cursive] text-center mb-6 fontFamily">
        About The Model's <br /> Performance.
      </h1>

      <p className="text-xl md:text-2xl font-[cursive] mb-4 text-center fontFamily">
        Results on our own Input:
      </p>

      <div className="text-lg md:text-xl font-[cursive] space-y-2 text-center fontFamily">
        <p>f1-score: 0.98</p>
        <p>accuracy: 99.2%</p>
        <p>validation accuracy: 98.7 %</p>
        <p>precision: 0.99</p>
        <p>recall: 0.98</p>
      </div>
      <div>
        <img
          src={modelImage1}
          alt="Model Performance Chart"
          className="w-full max-w-3xl mb-8 rounded shadow-xl"
        />
      </div>
      <div>
        <img
          src={modelImage2}
          alt="Model Performance Chart"
          className="w-full max-w-3xl mb-8 rounded shadow-xl"
        />
        <img
          src={modelImage3}
          alt="Model Performance Chart"
          className="w-full max-w-3xl mb-8 rounded shadow-xl"
        />
      </div>
      <div className=" text-white py-20 px-6 fontFamily">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Left Column */}
          <div className="md:w-1/2">
            <h4 className="text-3xl md:text-4xl font-normal leading-snug mb-6">
              on other popular datasets, MoodMeet performs terrifically too!
            </h4>
            <h1 className="text-4xl md:text-5xl font-normal leading-snug mb-8">
              On Simple Audio-Only Input,<br />
              Efficient Output Is Never <br className="hidden md:block" />
              Compromised!
            </h1>

            <div className="text-lg leading-relaxed">
              <p className="text-5xl font-bold mb-3">91%</p>
              <p className="text-base text-white">
                validation accuracy<br />
                the 'IESS' dataset<br />
                <span className="italic text-sm text-white/80">*dataset link*</span><br /><br />
                f1-score: 0.98<br />
                accuracy: 99.2%<br />
                validation accuracy: 98.7%<br />
                precision: 0.99<br />
                recall: 0.98
              </p>
            </div>
          </div>

          {/* Right Column – Confusion Matrix Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/your-confusion-matrix.png"
              alt="Confusion Matrix"
              className="rounded-lg max-w-full w-[300px] md:w-[400px] shadow-md"
            />
          </div>
        </div>
        {/* second result of model */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mt-10">
          <div className="text-lg leading-relaxed">
            <p className="text-5xl font-bold mb-3">89 %</p>
            <p className="text-base text-white">
              validation accuracy<br />
              the 'CREMA-D' dataset<br />
              <span className="italic text-sm text-white/80">*dataset link*</span><br /><br />
              f1-score: 0.98<br />
              accuracy: 99.2%<br />
              validation accuracy: 98.7%<br />
              precision: 0.99<br />
              recall: 0.98
            </p>
          </div>
          {/* Right Column – Confusion Matrix Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/your-confusion-matrix.png"
              alt="Confusion Matrix"
              className="rounded-lg max-w-full w-[300px] md:w-[400px] shadow-md"
            />
          </div>

        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mt-10">
          <div className="text-lg leading-relaxed">
            <p className="text-5xl font-bold mb-5">95 %</p>
            <p className="text-base text-white">
              validation accuracy<br />
              the 'IEMOCAP' dataset<br />
              <span className="italic text-sm text-white/80">*dataset link*</span><br /><br />
              f1-score: 0.98<br />
              accuracy: 99.2%<br />
              validation accuracy: 98.7%<br />
              precision: 0.99<br />
              recall: 0.98
            </p>
          </div>
          {/* Right Column – Confusion Matrix Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/your-confusion-matrix.png"
              alt="Confusion Matrix"
              className="rounded-lg max-w-full w-[300px] md:w-[400px] shadow-md"
            />
          </div>

        </div>

      </div>
      <div className=" text-white px-8 py-20 font-['DM_Serif_Display',serif]">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <h2 className="text-4xl md:text-5xl mb-4">Model Generalization<br />Using Cross Validation</h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            the ability of our model to make accurate predictions on new, unseen data. This is
            critical to ensure that the model doesn’t just memorize the training data but can adapt
            to real-world scenarios:
          </p>

          {/* Grid Section with Images */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Table Image */}
            <div className="flex justify-center">
              <img
                src="/assets/fold-table.png"
                alt="Fold Accuracy Precision Recall Table"
                className="rounded-md w-full max-w-md"
              />
            </div>

            {/* Diagram Image */}
            <div className="flex justify-center">
              <img
                src="/assets/cross-validation-diagram.png"
                alt="Cross Validation Diagram"
                className="rounded-md w-full max-w-md"
              />
            </div>

          </div>
        </div>
      </div>
      <div className="text-white px-6 py-20 font-['DM_Serif_Display',serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl mb-10">
          Model Testing Using Different Test Datasets
        </h2>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Chart Image */}
          <div className="flex justify-center">
            <img
              src="/assets/test-dataset-performance.png"
              alt="Test Dataset Performance Charts"
              className="rounded-md w-full max-w-md"
            />
          </div>

          {/* Table Image */}
          <div className="flex justify-center">
            <img
              src="/assets/test-dataset-table.png"
              alt="Test Dataset Table"
              className="rounded-md w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </div>



      {/* help section */}
      <div className="text-lg md:text-xl space-y-2 text-center fontFamily">
        <h1 className="text-lg md:text-xl space-y-2 text-center fontFamily">Need Some Help? </h1>
        <h2 className="text-lg md:text-xl space-y-2 text-center fontFamily">User Manual </h2>
        <h2 className="text-lg md:text-xl space-y-2 text-center fontFamily">FAQS </h2>
        <h2 className="text-lg md:text-xl space-y-2 text-center fontFamily">Relevant Documentation </h2>
        <h2 className="text-lg md:text-xl space-y-2 text-center fontFamily">Tatorials </h2>
      </div>
    </div>
  );
};

export default Results;
