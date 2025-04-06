import React from 'react';
import { Level } from '../levels'; // Level tipini import et
import { Lock, CheckCircle, ArrowLeft, Play } from 'lucide-react';

interface LevelSelectProps {
  levels: Level[];
  completedLevels: number[];
  onSelectLevel: (levelIndex: number) => void;
  onBack: () => void;
}

const LevelSelect: React.FC<LevelSelectProps> = ({ levels, completedLevels, onSelectLevel, onBack }) => {
  // Kilit mekanizması: Bir önceki seviye tamamlanmışsa sonraki açılır
  const isLevelUnlocked = (index: number) => {
    if (index === 0) return true; // İlk seviye her zaman açık
    return completedLevels.includes(index - 1); // Önceki tamamlandıysa açık
  };

  return (
    <div className="p-8 bg-gray-50 relative"> {/* Added relative positioning */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition z-10" // Added z-index
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Menüye Dön
      </button>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 pt-8">Seviye Seç</h2> {/* Added padding-top */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {levels.map((level, index) => {
          const isCompleted = completedLevels.includes(index);
          const unlocked = isLevelUnlocked(index);

          return (
            <button
              key={index}
              onClick={() => unlocked && onSelectLevel(index)}
              disabled={!unlocked}
              className={`relative p-4 aspect-square flex flex-col items-center justify-center rounded-lg shadow-md transition duration-200 ease-in-out text-center
                ${unlocked
                  ? 'bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-blue-500'
                  : 'bg-gray-300 cursor-not-allowed'
                }
                ${isCompleted ? 'border-green-500 border-2' : ''}
              `}
            >
              {isCompleted && (
                <CheckCircle className="absolute top-2 right-2 h-5 w-5 text-green-500" />
              )}
              {!unlocked && (
                <Lock className="absolute top-2 right-2 h-5 w-5 text-gray-500" />
              )}
              <span className={`text-2xl font-bold ${unlocked ? 'text-gray-700' : 'text-gray-500'}`}>
                {index + 1}
              </span>
              <span className={`text-xs mt-1 ${unlocked ? 'text-gray-600' : 'text-gray-500'}`}>
                {level.name}
              </span>
               {unlocked && !isCompleted && (
                 <Play className="mt-2 h-5 w-5 text-blue-500 opacity-75"/>
               )}
            </button>
          );
        })}
        {/* Gelecekteki seviyeler için yer tutucu (opsiyonel) */}
        {/*
        {[...Array(Math.max(0, 5 - levels.length))].map((_, i) => (
           <div key={`locked-${i + levels.length}`} className="relative p-4 aspect-square flex flex-col items-center justify-center rounded-lg shadow-md bg-gray-300 cursor-not-allowed">
             <Lock className="absolute top-2 right-2 h-5 w-5 text-gray-500" />
             <span className="text-2xl font-bold text-gray-500">?</span>
             <span className="text-sm mt-1 text-gray-500">Kilitli</span>
           </div>
        ))}
        */}
      </div>
    </div>
  );
};

export default LevelSelect;
