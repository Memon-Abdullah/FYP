import React from 'react';
import modelImage1 from '../assets/images/result1.jpg';
import modelImage2 from '../assets/images/result2.jpg';
import modelImage3 from '../assets/images/result3.jpg';
import model2Image1 from '../assets/images/result4.png';
import model2Image2 from '../assets/images/result5.png';
import model2Image3 from '../assets/images/result6.png';
import model3Image1 from '../assets/images/result7.jpg';
import model3Image2 from '../assets/images/result8.jpg';
import "../assets/style/help.css";
const Results = () => {
  return (
    <div className="min-h-screen bg-[#24024C] flex flex-col justify-center items-center text-white p-8 ">
      <h1 className="text-4xl md:text-5xl font-[cursive] text-center mb-6 fontFamily mt-14">
        About The Model's <br /> Performance.
      </h1>

      {/* <p className="text-xl md:text-2xl font-[cursive] mb-4 text-center fontFamily">
        Results on our own Input:
      </p> */}

      {/* <div className="text-lg md:text-xl font-[cursive] space-y-2 text-center fontFamily">
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
      </div> */}
      <div className=" text-white py-20 px-6 fontFamily">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Left Column */}
    <div className="md:w-1/2">
      <h4 className="text-3xl md:text-4xl font-normal leading-snug mb-6">
        on other dataset from huggingface, MoodMeet performs terrifically too!
      </h4>
      <h1 className="text-4xl md:text-5xl font-normal leading-snug mb-8">
        On Simple Audio-Only Input,<br />
        Efficient Output Is Never <br className="hidden md:block" />
        Compromised!
      </h1>

      <div className="text-lg leading-relaxed">
        <p className="text-5xl font-bold mb-3">94%</p>
        <p className="text-3xl text-white">
          validation accuracy<br />
          the 'kuanhuggingface/PromptTTS_Emotion_Recognition_8k' dataset<br />
          <span className="italic text-sm text-white/80"><a href="https://huggingface.co/datasets/kuanhuggingface/PromptTTS_Emotion_Recognition_8k" className="help_link">*Dataset link*</a></span><br /><br />
          f1-score: 0.93<br />
          accuracy: 93%<br />
          validation accuracy: 94%<br />
          precision: 0.96<br />
          recall: 0.93
        </p>
      </div>
    </div>

    {/* Right Column – Stacked Images */}
    <div className="md:w-1/2 flex flex-col gap-6 items-center">
      <img
        src={model2Image1}
        alt="Model Output 1"
        className="rounded-lg w-full max-w-md shadow-lg"
      />
      <img
        src={model2Image2}
        alt="Model Output 2"
        className="rounded-lg w-full max-w-md shadow-lg"
      />
      <img
        src={model2Image3}
        alt="Model Output 3"
        className="rounded-lg w-full max-w-md shadow-lg"
      />
    </div>
        </div>
        {/* second result of model */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mt-10">
          <div className="text-lg leading-relaxed">
            <p className="text-5xl font-bold mb-3">89 %</p>
            <p className="text-3xl text-white">
              validation accuracy<br />
              the 'SAVEE' dataset<br />
              <span className="italic text-sm text-white/80">*dataset link*</span><br /><br />
              f1-score: 0.96<br />
              accuracy: 96%<br />
              validation accuracy: 98.7%<br />
              precision: 0.96<br />
              recall: 0.96
            </p>
          </div>
          {/* Right Column – Confusion Matrix Image */}
          <div className="md:w-1/2 flex flex-col gap-6 items-center">
            <img
              src={model3Image1}
              alt="Classifiaction report"
              className="rounded-lg max-w-full w-[300px] md:w-[400px] shadow-md"
            />
            <img
              src={model3Image2}
              alt="Confusion Matrix"
              className="rounded-lg max-w-full w-[300px] md:w-[400px] shadow-md"
            />
          </div>

        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mt-10">
          <div className="text-lg leading-relaxed">
            <p className="text-5xl font-bold mb-5">81%</p>
            <p className="text-3xl text-white">
              validation accuracy<br />
              the 'Revdess' dataset<br />
              <span className="italic text-sm text-white/80">*dataset link*</span><br /><br />
              f1-score: 0.79<br />
              accuracy: 81%<br />
              validation accuracy: 98.7%<br />
              precision: 0.87<br />
              recall: 0.79
            </p>
          </div>
          {/* Right Column – Confusion Matrix Image */}
          <div className="md:w-1/2 flex flex-col gap-6 items-center">
            <img
              src={modelImage3}
              alt="Classifiaction report"
              className="rounded-lg max-w-full w-[300px] md:w-[400px] shadow-md"
            />
            <img
              src={modelImage2}
              alt="Confusion Matrix"
              className="rounded-lg max-w-full w-[300px] md:w-[400px] shadow-md"
            />
          </div>

        </div>

      </div>
      <div className=" text-white px-8 py-20 font-['DM_Serif_Display',serif]">
        {/* <div className="max-w-7xl mx-auto"> */}

          {/* Header Section */}
          {/* <h2 className="text-4xl md:text-5xl mb-4">Model Generalization<br />Using Cross Validation</h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            the ability of our model to make accurate predictions on new, unseen data. This is
            critical to ensure that the model doesn’t just memorize the training data but can adapt
            to real-world scenarios:
          </p> */}

          {/* Grid Section with Images */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Table Image */}
            {/* <div className="flex justify-center">
              <img
                src="/assets/fold-table.png"
                alt="Fold Accuracy Precision Recall Table"
                className="rounded-md w-full max-w-md"
              />
            </div> */}

            {/* Diagram Image */}
            {/* <div className="flex justify-center">
              <img
                src="/assets/cross-validation-diagram.png"
                alt="Cross Validation Diagram"
                className="rounded-md w-full max-w-md"
              />
            </div> */}

          </div>
        {/* </div> */}
      </div>
      <div className="text-white px-6 py-20 font-['DM_Serif_Display',serif]">
        {/* <div className="max-w-7xl mx-auto"> */}

          {/* Section Header */}
          {/* <h2 className="text-4xl md:text-5xl mb-10">
            Model Testing Using Different Test Datasets
          </h2> */}

          {/* Image Grid */}
          {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}

            {/* Chart Image */}
            {/* <div className="flex justify-center">
              <img
                src="/assets/test-dataset-performance.png"
                alt="Test Dataset Performance Charts"
                className="rounded-md w-full max-w-md"
              />
            </div> */}

            {/* Table Image */}
            {/* <div className="flex justify-center">
              <img
                src="/assets/test-dataset-table.png"
                alt="Test Dataset Table"
                className="rounded-md w-full max-w-md"
              />
            </div> */}

          {/* </div> */}
        {/* </div> */}
      </div>



      {/* Help section
      <div className="text-lg md:text-xl space-y-2 text-center fontFamily">
        <h1>Need Some Help?</h1>
        <h2><a href="#" className="help_link">User Manual</a></h2>
        <h2><a href="#" className="help_link">FAQs</a></h2>
        <h2><a href="#" className="help_link">Relevant Documentation</a></h2>
      </div> */}

    </div>
  );
};

export default Results;
