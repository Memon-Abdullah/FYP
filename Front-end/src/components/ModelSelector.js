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

  return (
    <div className="min-h-screen bg-[#24024C] flex flex-col items-center justify-center space-y-8 p-6">
      <h1 className="text-white text-2xl font-semibold">Choose a Model</h1>

      {/* Model Selection Buttons */}
      <div className="flex space-x-4">
        {['mode1', 'mode2', 'mode3'].map((mode) => (
          <button
            key={mode}
            onClick={() => handleModelSelect(mode)}
            className="bg-white text-black font-medium px-5 py-2 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>

      {/* Input Section */}
      {selectedModel && (
        <div className="bg-white rounded-lg shadow-xl px-4 py-3 w-full max-w-2xl flex items-center justify-between">
          {/* + File Button */}
          <button
            className="text-3xl font-bold text-black hover:text-purple-700 transition"
            onClick={handleFileUpload}
          >
            ＋
          </button>

          {/* Editable Text Input */}
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="insert speech audio here"
            className="flex-grow text-center text-black text-lg font-[cursive] placeholder-black bg-transparent border-none outline-none mx-4"
          />

          {/* Mic or Arrow */}
          {textInput.trim() === '' ? (
            <button
              className="text-2xl text-black hover:text-purple-700 transition"
              onClick={handleMicInput}
            >
              🎤
            </button>
          ) : (
            <button
              className="text-2xl text-black hover:text-purple-700 transition"
              onClick={handleSubmit}
            >
              ➡️
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ModelSelector;
