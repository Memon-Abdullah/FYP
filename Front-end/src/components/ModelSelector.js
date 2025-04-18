import React, { useState } from 'react';

const ModelSelector = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [textInput, setTextInput] = useState('');

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setTextInput('');
    console.log(`Model selected: ${model}`);
  };

  const handleSubmit = () => {
    console.log(`Submitting: ${textInput}`);
    // Trigger your API call or action here
    alert(`Submitted: ${textInput}`);
  };

  const handleMicInput = () => {
    alert('Mic input triggered');
  };

  const handleFileUpload = () => {
    alert('File upload triggered');
  };

  // Model data to match the image
  const models = [
    {
      id: 'lstm',
      name: 'LSTM',
      description: 'By combining Convolutional Neural Networks (CNNs) for spatial/audio feature extraction with LSTMs for sequence modeling, this hybrid model digs deeper into both what\'s being said and how it unfolds over time. It\'s especially effective with prompt-based embeddings.',
    },
    {
      id: 'lstm-distilhubert',
      name: 'LSTM + DistilHuBERT',
      description: 'Trained on RAVDESS with DistilHuBERT features, the Long Short-Term Memory (LSTM) model excels at capturing emotional patterns across speech sequences — making it great at picking up on how you say things, not just individual sounds.',
    },
    {
      id: 'Birectional LSTM',
      name: 'BI-LSTM',
      description: 'A BiLSTM model trained on the SAVEE dataset to capture both past and future contextual dependencies in speech for improved emotion recognition accuracy.',
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-light text-pink-500 mb-10">Choose a Model</h1>
      
      {/* Model Cards */}
      <div className="flex justify-center w-full px-4 max-w-6xl">
        {models.map((model) => (
          <div 
            key={model.id}
            onClick={() => handleModelSelect(model.id)}
            className={`w-1/3 h-80 mx-2 p-8 bg-[#24024C] text-white cursor-pointer rounded-lg 
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl
              ${selectedModel === model.id 
                ? 'ring-4 ring-blue-500 shadow-2xl scale-105' 
                : 'shadow-md hover:shadow-lg'}`}
          >
            <h2 className="text-2xl font-light mb-4">{model.name}</h2>
            <p className="text-sm">{model.description}</p>
          </div>
        ))}
      </div>
      
      {/* Input Section - appears after model selection */}
      {selectedModel && (
        <div className="w-full max-w-2xl mt-8 px-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 px-6 py-4 flex items-center justify-between transform transition-all duration-300 hover:shadow-2xl">
            {/* + File Button */}
            <button
              className="text-3xl font-bold text-black hover:text-purple-700 transition-colors duration-200"
              onClick={handleFileUpload}
            >
              ＋
            </button>

            {/* Editable Text Input */}
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Audio/Text here"
              className="flex-grow text-center text-black text-lg font-light placeholder-black bg-transparent border-none outline-none mx-4"
            />

            {/* Mic or Arrow */}
            {textInput.trim() === '' ? (
              <button
                className="text-2xl text-black hover:text-purple-700 transition-colors duration-200"
                onClick={handleMicInput}
              >
                🎤
              </button>
            ) : (
              <button
                className="text-2xl text-black hover:text-purple-700 transition-colors duration-200"
                onClick={handleSubmit}
              >
                ➡️
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Add this at the end of your CSS file or in your Tailwind config
const styleTag = document.createElement('style');
styleTag.textContent = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(styleTag);

export default ModelSelector;