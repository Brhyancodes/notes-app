# 📝 Notes App

A simple **React Native Notes App** built as a practice project to improve my React Native skills. The app allows users to create, edit, and delete notes while storing them locally on the device.

## 🚀 Features

- 📝 Create, edit, and delete notes
- 💾 Save notes locally using AsyncStorage
- 🎨 Clean and simple User Interface
- 🔍 *(Upcoming)* Search functionality
- ☁️ *(Upcoming)* Cloud sync with Firebase
- 🌙 *(Upcoming)* Dark mode

## 🛠️ Tech Stack :

- **React Native**
- **React Navigation** for screen navigation
- **AsyncStorage** for local storage
- **Expo** for development environment

## 📦 Installation & Setup

# Clone the Repository
git clone https://github.com/your-username/notes-app.git
cd notes-app

# Install Dependencies
npm install
# or
yarn install

# Run the App
# For Expo:
npx expo start

# For Android (if using React Native CLI):
npx react-native run-android

# For iOS (Mac users, if using React Native CLI):
npx react-native run-ios

📌 Make sure you have an emulator running or a device connected when using React Native CLI.

## 🛠️ Troubleshooting

If you encounter issues while setting up or running the app:

- If you get a dependency error, try clearing the cache:
  npx react-native start --reset-cache

- For iOS users, if CocoaPods dependencies are missing:
  cd ios && pod install && cd ..

- If the app crashes on startup, verify that all dependencies are installed correctly.

## 🔮 Future Enhancements include:

- 🔍 Add search functionality
- ☁️ Sync notes with Firebase
- 🌙 Implement Dark Mode
- 📋 Support Markdown formatting in notes
- 🔔 Add reminder notifications

## 🤝 Contributing

This is a personal practice project, but feel free to fork it, suggest improvements, or submit pull requests.Contributions are much welcome!

## 📜 License

This project is licensed under the MIT License.