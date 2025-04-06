import React from 'react';
import { Play, Info } from 'lucide-react';

interface MainMenuProps {
  onPlayClick: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onPlayClick }) => {
  return (
    <div className="p-8 md:p-16 flex flex-col items-center text-center bg-white">
       <img
        src="https://www.meisterdrucke.com.tr/kunstwerke/1260px/Ludwig_Hermann_-_Konigsberg_%28Kaliningrad%29_-_%28MeisterDrucke-73457%29.jpg"
        alt="Königsberg Bridge"
        className="w-full max-w-md h-48 object-cover rounded-lg mb-8 shadow-md"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Königsberg Köprüleri Oyunu
      </h1>

      <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8 max-w-2xl text-left border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
          <Info className="mr-2 h-6 w-6" /> Oyun Hakkında
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Amaç:</strong> Haritadaki tüm köprülerden sadece bir kez geçerek başlangıç noktasına dönmeden tüm kara parçalarını birbirine bağlayan bir yol çizmektir. Euler'in ünlü matematik problemine dayanan bu oyunda mantığınızı test edin!
        </p>
        <p className="text-gray-700">
          <strong>Nasıl Oynanır:</strong> Fareyi kullanarak kara parçaları arasında çizgiler çizin. Her köprüyü yalnızca bir kez kullanabilirsiniz. Suya dokunmadan ve köprüleri tekrar etmeden tüm köprüleri kullanmaya çalışın.
        </p>
      </div>

      <button
        onClick={onPlayClick}
        className="flex items-center justify-center px-8 py-3 bg-green-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <Play className="mr-2 h-6 w-6" /> Oyna
      </button>
    </div>
  );
};

export default MainMenu;
