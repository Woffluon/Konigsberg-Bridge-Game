# 🌉 Königsberg Köprü Oyunu / Konigsberg Bridge Game 🌉

## 🇹🇷 Türkçe Açıklama

Bu proje, ⚛️ **React** ile geliştirilmiş basit bir köprü bulmaca oyunudur 🎮. Oyunculara farklı seviyelerde, tarihi şehirlerin 🏰 veya ilginç yerlerin 🌄 arka plan görselleri üzerinde köprüler kurma görevi verilir. Amaç, görseldeki tüm köprüleri doğru şekilde işaretleyerek seviyeyi tamamlamaktır ✅. Oyun, kullanıcı arayüzü, seviye seçimi ve oyun ekranı gibi temel bileşenleri içerir. Seviye verileri `levels.ts` dosyasında tanımlanmıştır 📜 ve oyunun temel mantığı `App.tsx` içinde yer alır 🧠.

### 🎲 Nasıl Oynanır?

1. Oyunu başlatın 🚀.
2. Ana menüden "Oyna" seçeneğine tıklayın ▶️.
3. Seviye seçimi ekranından bir seviye seçin 🎚️.
4. Oyun ekranında, arka plan görselindeki köprüleri işaretleyin 🌉.
5. Tüm köprüleri doğru işaretlediğinizde seviye tamamlanır 🏆.

### 🛠️ Teknolojiler

* ⚛️ React
* 📝 TypeScript
* 🎨 Tailwind CSS
* ⚡ Vite

### 📂 Proje Yapısı

```
src/
├── App.tsx             // Ana uygulama bileşeni ve oyun mantığı 🧩
├── components/        // React bileşenleri 🗂️
│   ├── GameScreen.tsx  // Oyun ekranı bileşeni 🎮
│   ├── LevelSelect.tsx // Seviye seçimi bileşeni 🎚️
│   └── MainMenu.tsx    // Ana menü bileşeni 🏠
├── index.css         // Genel CSS stilleri (Tailwind direktifleri) 🎨
├── levels.ts           // Seviye tanımları ve verileri 📋
├── main.tsx            // React uygulamasının giriş noktası 🚪
└── vite-env.d.ts       // Vite ortam değişkenleri tanımları ⚙️
```

### 🖥️ Yerel Olarak Çalıştırma

1. Projeyi klonlayın 📥.
2. `npm install` komutu ile bağımlılıkları yükleyin 📦.
3. `npm run dev` komutu ile geliştirme sunucusunu başlatın ▶️.
4. Tarayıcınızda `http://localhost:5173` adresini açın 🌐.

---

## 🇬🇧 English Description

This project is a simple bridge puzzle game 🎲 developed with ⚛️ **React**. Players are tasked with identifying and marking bridges 🌉 on background images of historical cities 🏰 or interesting locations 🌄 across different levels. The goal is to correctly mark all the bridges in the image to complete each level ✅. The game includes core components such as a user interface, level selection, and a game screen. Level data is defined in `levels.ts` 📜, and the main game logic is located in `App.tsx` 🧠.

### 🎮 How to Play?

1. Start the game 🚀.
2. Click "Play" from the main menu ▶️.
3. Select a level from the level selection screen 🎚️.
4. In the game screen, identify and mark the bridges in the background image 🌉.
5. Complete the level by correctly marking all bridges 🏆.

### 🛠️ Technologies

* ⚛️ React
* 📝 TypeScript
* 🎨 Tailwind CSS
* ⚡ Vite

### 📂 Project Structure

```
src/
├── App.tsx             // Main application component and game logic 🧩
├── components/        // React components 🗂️
│   ├── GameScreen.tsx  // Game screen component 🎮
│   ├── LevelSelect.tsx // Level selection component 🎚️
│   └── MainMenu.tsx    // Main menu component 🏠
├── index.css         // Global CSS styles (Tailwind directives) 🎨
├── levels.ts           // Level definitions and data 📋
├── main.tsx            // Entry point of the React application 🚪
└── vite-env.d.ts       // Vite environment variables definitions ⚙️
```

### 🖥️ Running Locally

1. Clone the project 📥.
2. Install dependencies with `npm install` 📦.
3. Start the development server with `npm run dev` ▶️.
4. Open `http://localhost:5173` in your browser 🌐.
