import React, { useState, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import LevelSelect from './components/LevelSelect';
import GameScreen from './components/GameScreen';
import { levels } from './levels'; // Seviye verilerini import et

export type GameState = 'menu' | 'levelSelect' | 'playing';

function App() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  // Yerel depolamadan tamamlanan seviyeleri yükle
  useEffect(() => {
    const savedLevels = localStorage.getItem('completedLevels');
    if (savedLevels) {
      setCompletedLevels(JSON.parse(savedLevels));
    }
  }, []);

  // Tamamlanan seviyeleri yerel depolamaya kaydet
  useEffect(() => {
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
  }, [completedLevels]);

  const handlePlayClick = () => {
    setGameState('levelSelect');
  };

  const handleLevelSelect = (levelIndex: number) => {
    setSelectedLevel(levelIndex);
    setGameState('playing');
  };

  const handleBackToMenu = () => {
    setGameState('menu');
    setSelectedLevel(null);
  };

  const handleBackToLevelSelect = () => {
    setGameState('levelSelect');
    setSelectedLevel(null);
  };

  const handleLevelComplete = (levelIndex: number) => {
    if (!completedLevels.includes(levelIndex)) {
      setCompletedLevels([...completedLevels, levelIndex]);
    }
    // İsteğe bağlı: Otomatik olarak seviye seçimine geri dön
    // setGameState('levelSelect');
    // setSelectedLevel(null);
  };

  const renderScreen = () => {
    switch (gameState) {
      case 'menu':
        return <MainMenu onPlayClick={handlePlayClick} />;
      case 'levelSelect':
        return (
          <LevelSelect
            levels={levels}
            completedLevels={completedLevels}
            onSelectLevel={handleLevelSelect}
            onBack={handleBackToMenu}
          />
        );
      case 'playing':
        if (selectedLevel !== null) {
          return (
            <GameScreen
              level={levels[selectedLevel]}
              levelIndex={selectedLevel}
              onComplete={handleLevelComplete}
              onBack={handleBackToLevelSelect}
            />
          );
        }
        // Eğer selectedLevel null ise (beklenmedik durum), menüye dön
        handleBackToMenu();
        return null; // Veya bir yükleme/hata ekranı göster
      default:
        return <MainMenu onPlayClick={handlePlayClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
