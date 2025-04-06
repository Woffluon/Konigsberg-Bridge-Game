import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Level, Point, BridgeInteraction, intersectLineRectangle } from '../levels'; // Güncellenmiş importlar
import { ArrowLeft, RotateCcw, AlertTriangle, Check } from 'lucide-react';

interface GameScreenProps {
  level: Level;
  levelIndex: number;
  onComplete: (levelIndex: number) => void;
  onBack: () => void;
}

// isPointOnLine fonksiyonu artık kullanılmıyor, kaldırıldı.

const GameScreen: React.FC<GameScreenProps> = ({ level, levelIndex, onComplete, onBack }) => {
  const [path, setPath] = useState<Point[]>([]);
  const [crossedBridgeIds, setCrossedBridgeIds] = useState<number[]>([]); // ID'leri sakla
  const [isDrawing, setIsDrawing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const getSVGPoint = (event: React.MouseEvent | React.TouchEvent): Point | null => {
    if (!svgRef.current) return null;
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();

    let clientX: number, clientY: number;
    if ('touches' in event) {
      if (event.touches.length === 0) return null; // Dokunma bittiyse
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    const screenPoint = new DOMPoint(clientX, clientY);
    const svgPoint = screenPoint.matrixTransform(svg.getScreenCTM()?.inverse());
    return { x: svgPoint.x, y: svgPoint.y };
  };

  const resetGame = useCallback(() => {
    setPath([]);
    setCrossedBridgeIds([]);
    setIsDrawing(false);
    setMessage(null);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    resetGame(); // Seviye değiştiğinde oyunu sıfırla
  }, [level, resetGame]);

  const handleInteractionStart = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault(); // Kaydırmayı engellemek için önemli
    if (isComplete) return;
    const point = getSVGPoint(event);
    if (point) {
      setPath([point]);
      setIsDrawing(true);
      setMessage(null);
    }
  };

  const handleInteractionMove = (event: React.MouseEvent | React.TouchEvent) => {
     event.preventDefault(); // Kaydırmayı engellemek için önemli
    if (!isDrawing || isComplete) return;
    const point = getSVGPoint(event);
    if (point) {
      const newPath = [...path, point];
      setPath(newPath);

      // Köprü geçişlerini kontrol et
      if (newPath.length >= 2) {
        const lastPoint = newPath[newPath.length - 1];
        const prevPoint = newPath[newPath.length - 2];

        level.bridges.forEach((bridgeRect) => {
          // Eğer bu köprü daha önce geçilmediyse ve son çizgi segmenti köprü alanı ile kesişiyorsa
          if (!crossedBridgeIds.includes(bridgeRect.id) &&
              intersectLineRectangle(prevPoint, lastPoint, bridgeRect)) {
             console.log(`Bridge ${bridgeRect.id} crossed!`); // Konsola log ekle
            setCrossedBridgeIds(prev => [...prev, bridgeRect.id]);
          }
        });
      }
    }
  };

  const handleInteractionEnd = (event: React.MouseEvent | React.TouchEvent) => {
     event.preventDefault(); // Kaydırmayı engellemek için önemli
    if (!isDrawing || isComplete) return;
    setIsDrawing(false);

    // Oyun bitiş kontrolü
    if (crossedBridgeIds.length === level.totalBridges) {
       setTimeout(() => {
        setMessage('Tebrikler! Bu bölümü başarıyla tamamladınız!');
        setIsComplete(true);
        onComplete(levelIndex);
      }, 300);
    } else if (path.length <= 1) {
        // Çok kısa çizim veya tıklama ise yolu temizle
        setPath([]);
    }
     // Bitmediyse mesaj göstermeye gerek yok, kullanıcı devam edebilir.
  };

   // Dokunmatik olayları pasif hale getirerek sayfa kaydırmasını engelle
   useEffect(() => {
    const svgElement = svgRef.current;
    if (svgElement) {
      // 'touch-action: none' CSS ile daha iyi çalışabilir, ancak JS ile de deneyelim
      const preventDefault = (e: Event) => e.preventDefault();
      svgElement.addEventListener('touchstart', preventDefault, { passive: false });
      svgElement.addEventListener('touchmove', preventDefault, { passive: false });
      svgElement.addEventListener('touchend', preventDefault, { passive: false });
      svgElement.addEventListener('touchcancel', preventDefault, { passive: false }); // İptal durumunu da ekle

      return () => {
        svgElement.removeEventListener('touchstart', preventDefault);
        svgElement.removeEventListener('touchmove', preventDefault);
        svgElement.removeEventListener('touchend', preventDefault);
        svgElement.removeEventListener('touchcancel', preventDefault);
      };
    }
  }, []);


  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
       <div className="flex justify-between items-center mb-4">
         <button
           onClick={onBack}
           className="flex items-center px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition z-10"
         >
           <ArrowLeft className="mr-1 h-4 w-4" /> Seviye Seçimine Dön
         </button>
         <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 flex-grow mx-4">
           {level.name}
         </h2>
         <button
           onClick={resetGame}
           className="flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-500 transition z-10"
           disabled={isComplete && path.length === 0}
         >
           <RotateCcw className="mr-1 h-4 w-4" /> Yeniden Başla
         </button>
       </div>

      {/* SVG Konteyneri */}
      <div className="relative w-full max-w-[800px] mx-auto aspect-auto" style={{ aspectRatio: level.viewBox.split(' ')[2] + '/' + level.viewBox.split(' ')[3] }}>
        <svg
          ref={svgRef}
          viewBox={level.viewBox}
          className="absolute inset-0 w-full h-full border-2 border-blue-300 rounded-lg cursor-crosshair touch-none bg-gray-100" // touch-none önemli
          onMouseDown={handleInteractionStart}
          onMouseMove={handleInteractionMove}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchMove={handleInteractionMove}
          onTouchEnd={handleInteractionEnd}
          onTouchCancel={handleInteractionEnd} // İptal durumunu da ele al
        >
          {/* Arka Plan Görseli */}
          <image href={level.backgroundImage} x="0" y="0" width="100%" height="100%" />

          {/* Köprü Etkileşim Alanları (Görünmez ama Debug için görünür yapılabilir) */}
          {level.bridges.map((bridge) => (
            <rect
              key={`bridge-area-${bridge.id}`}
              x={bridge.x}
              y={bridge.y}
              width={bridge.width}
              height={bridge.height}
              fill={crossedBridgeIds.includes(bridge.id) ? "rgba(0, 255, 0, 0.3)" : "rgba(255, 0, 0, 0.0)"} // Geçileni yeşil yap (debug), normalde 0.0 alpha
              // stroke="red" // Debug için kenarlık
              // strokeWidth="1" // Debug için kenarlık
            />
          ))}

          {/* Kullanıcının Çizdiği Yol */}
          {path.length > 1 && (
            <polyline
              points={path.map(p => `${p.x},${p.y}`).join(' ')}
              fill="none"
              stroke="#FF0000" // Kırmızı çizgi
              strokeWidth="4" // Biraz daha kalın yapalım
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pointerEvents: 'none' }} // Yolun kendisi tıklamaları engellemesin
            />
          )}

           {/* Başlangıç Noktası */}
           {path.length > 0 && (
              <circle cx={path[0].x} cy={path[0].y} r="6" fill="darkred" style={{ pointerEvents: 'none' }} />
           )}
        </svg>
      </div>

       {/* Mesaj Alanı */}
       {message && (
         <div className={`mt-4 p-3 rounded-lg text-center font-semibold flex items-center justify-center
           ${isComplete ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
           {isComplete ? <Check className="mr-2 h-5 w-5" /> : <AlertTriangle className="mr-2 h-5 w-5" />}
           {message}
         </div>
       )}

        {/* Köprü Sayacı */}
        <div className="mt-2 text-center text-gray-600">
            Geçilen Köprüler: {crossedBridgeIds.length} / {level.totalBridges}
        </div>

        {/* Tamamlanma Durumu */}
        {isComplete && (
            <div className="mt-4 text-center">
                <button
                    onClick={onBack}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Seviye Seçimine Dön
                </button>
            </div>
        )}
    </div>
  );
};

export default GameScreen;
