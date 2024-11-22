import { useState } from "react";

const DogAdoptionQuiz = ({ onQuizComplete }: { onQuizComplete: (type: string, breeds: string[]) => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ size: "", energy: "", age: "" });

  const questions = [
    {
      question: "What size of dog do you prefer?",
      options: ["Small", "Medium", "Large", "I don't care"],
      key: "size",
    },
    {
      question: "What energy level matches your lifestyle?",
      options: ["Low", "Moderate", "High", "I don't care"],
      key: "energy",
    },
    {
      question: "Do you prefer a puppy, adult, or senior dog?",
      options: ["Puppy", "Adult", "Senior", "I don't care"],
      key: "age",
    },
  ];

  const recommendations = {
    "Small Lap Dog": {
      type: "Small Lap Dog",
      breeds: ["Chihuahua", "Pug", "Maltese"],
    },
    "Active Large Breed": {
      type: "Active Large Breed",
      breeds: ["German Shepherd", "Golden Retriever", "Labrador"],
    },
    "Mixed Breed": {
      type: "Mixed Breed",
      breeds: ["Border Collie Mix", "Australian Shepherd Mix", "Husky Mix"],
    },
  };

  const handleAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      const { type, breeds } = generateRecommendation(answers);
      onQuizComplete(type, breeds);
    }
  };

  const generateRecommendation = (answers: any) => {
    if (answers.size === "Small" && answers.energy === "Low") return recommendations["Small Lap Dog"];
    if (answers.size === "Large" && answers.energy === "High") return recommendations["Active Large Breed"];
    return recommendations["Mixed Breed"];
  };

  return (
    <div className="p-6 border rounded-lg bg-gray-50 mb-8">
      {step < questions.length ? (
        <div>
          <h3 className="text-xl font-bold mb-4">{questions[step].question}</h3>
          <div className="flex gap-4">
            {questions[step].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(questions[step].key, option)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              Back
            </button>
          )}
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold mb-4">Quiz Complete!</h3>
        </div>
      )}
    </div>
  );
};

export default DogAdoptionQuiz;
