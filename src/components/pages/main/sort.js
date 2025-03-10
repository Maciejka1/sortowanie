import React, { useState } from 'react';
import { motion } from 'framer-motion';
const BubbleSort = () => {
  const [inputValue, setInputValue] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [cycles, setCycles] = useState([]);
  const [isAscending, setIsAscending] = useState(false);

  const handleAddNumber = (e) => {
    e.preventDefault();
    const number = Number(inputValue.trim());
    if (!isNaN(number)) {
      setNumbers(prev => [...prev, number]);
      setInputValue('');
    }
  };

  const reset = () => {
    setNumbers([]);
    setCycles([]);
    setIsSorting(false);
  };

  const startSorting = async () => {
    setIsSorting(true);
    setCycles([]);
    
    let arr = [...numbers];
    const newCycles = [];
    let cycleNumber = 0;

    for (let i = 0; i < arr.length; i++) {
      cycleNumber++;
      const cycleSteps = [];
      let swapped = false;

      for (let j = arr.length - 1; j > i; j--) {
        const shouldSwap = isAscending 
          ? arr[j] < arr[j - 1]
          : arr[j] > arr[j - 1];

        if (shouldSwap) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
          swapped = true;
          cycleSteps.push([...arr]);
        }
      }

      if (cycleSteps.length > 0) {
        newCycles.push({
          cycle: cycleNumber,
          steps: cycleSteps,
          finalState: [...arr]
        });
        setCycles([...newCycles]);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      if (!swapped) break;
    }

    setNumbers(arr);
    setIsSorting(false);
  };

  return (
    <motion.bubble
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className='container pt-24 min-h-[95vh]'>
    <div className='container pt-24 min-h-[95vh]'>
      <form onSubmit={handleAddNumber} className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isSorting}
            className="flex-1 p-2 border rounded"
            placeholder="Wprowadź liczbę"
          />
          <button 
            type="submit" 
            disabled={isSorting}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Dodaj liczbę
          </button>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Resetuj
          </button>
        </div>
      </form>

      <div className="mb-6">
        <div className="flex gap-2">
          <button 
            onClick={startSorting} 
            disabled={isSorting || numbers.length < 2}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            Rozpocznij sortowanie
          </button>
          <button
            onClick={() => setIsAscending(!isAscending)}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            {isAscending ? "Rosnąco" : "Malejąco"}
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Aktualne liczby:</h2>
        <div className="flex flex-wrap gap-2 p-3 bg-gray-100 rounded">
          {numbers.map((num, index) => (
            <div 
              key={index}
              className="px-3 py-1 bg-gray-200 rounded font-medium"
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Proces sortowania:</h2>
        {cycles.map((cycle, index) => (
          <div 
            key={index}
            className="mb-6 p-4 border-2 border-blue-300 rounded-lg bg-white shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Cykl {cycle.cycle} - {cycle.steps.length} kroków
            </h3>
            
            {cycle.steps.map((step, stepIndex) => (
              <div 
                key={stepIndex}
                className={`mb-3 p-3 border rounded ${
                  stepIndex === cycle.steps.length - 1 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-sm text-gray-600 mb-1">
                  Krok {stepIndex + 1}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {step.map((num, numIndex) => (
                    <div 
                      key={numIndex}
                      className={`px-2 py-1 rounded ${
                        numIndex === index 
                          ? 'bg-yellow-100' 
                          : 'bg-gray-100'
                      }`}
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-4 p-3 bg-green-100 rounded border border-green-200">
              <span className="font-semibold">Stan po cyklu {cycle.cycle}:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {cycle.finalState.map((num, index) => (
                  <div 
                    key={index}
                    className="px-2 py-1 bg-green-200 rounded"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </motion.bubble>
  );
};

export default BubbleSort;