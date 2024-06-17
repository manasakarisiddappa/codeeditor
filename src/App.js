import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("javascript");

  const handleRun = () => {
    setOutput("Mock Output: Code is running...");
  };

  const handleSubmit = () => {
    setMessage("Mock Submission: Code has been submitted!");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div
      className={`flex flex-col md:flex-row h-screen p-1 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="w-full md:w-1/3 p-4 md:border-r md:border-gray-300 mb-2">
        <h1 className="text-2xl font-bold">Problem Statement</h1>
        <p>
          This is where the problem description will be displayed. It could be a
          coding challenge, a question, or any problem statement.
        </p>
      </div>
      <div className="w-full md:w-2/3 p-4 text-xs md:text-sm">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-500 text-white rounded mb-4"
        >
          Toggle Dark Mode
        </button>
        <div className="h-[280px] md:h-[400px]">
          <Editor
            // height="40vh md:60vh"
            language={language}
            defaultValue="// Write your code here"
            onChange={(value) => setCode(value)}
            theme={darkMode ? "vs-dark" : "light"}
          />
        </div>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleRun}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Run
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        </div>
        {output && (
          <div className="mt-2 h-10 md:h-12 md:mt-4 p-4 bg-gray-800 text-white">
            {output}
          </div>
        )}
        {message && (
          <div className="mt-2 h-10 p-4 md:h-12 md:mt-4 bg-green-800 text-white">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
