# Stock Market App

Welcome to the Stock Market App, a React Native project for tracking stock information. This app provides features such as user registration, login, a dashboard with stock charts, and a news fetcher.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Screens](#screens)
- [Development](#development)
- [Support and Contribution](#support-and-contribution)

## Project Overview

This React Native app leverages Expo for development and includes essential features for tracking stock market data. The project uses the `react-navigation` library for navigation and various other dependencies for enhanced functionality.

## Getting Started

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/akhilesh-sahu12/stocks-market.git

2. **Navigate to the Project Directory:**

   ```bash
   cd stocks-market

3. **Install Dependencies:**

   ```bash
   npm install

## Usage

   **Start the Expo Development Server:**

    npx expo start

This will open the Expo DevTools in your default web browser. Run the app on an Android or iOS emulator, or on a physical device by scanning the QR code with the Expo Go app.


## Project Structure

The project is organized into several key directories:

- **`app/`**: Contains the main application code.
  - **`home/`**: Includes screens and components related to the home and dashboard functionality.
  - **`news/`**: Houses components responsible for fetching and displaying stock-related news.
  - **`charts/`**: Contains components for fetching and displaying stock charts.
  - **`context/`**: Holds context providers such as `ThemeProvider`.

## Dependencies

The project relies on several dependencies to enhance its functionality. Notable dependencies include:

- **`@react-navigation/native`**: Version 6.1.9. Core navigation library for React Navigation.
- **`@react-navigation/stack`**: Version 6.3.20. Stack navigator for React Navigation.
- **`expo`**: Version ~49.0.15. The Expo framework for React Native development.
- **`expo-constants`**: Version ~14.4.2. Provides access to device constants.
- **`expo-status-bar`**: Version ~1.6.0. Component for managing the status bar.
- **`react`**: Version 18.2.0. Core React library.
- **`react-dom`**: Version 18.2.0. React DOM library.
- **`react-native`**: Version 0.72.6. Core React Native library.
- **`react-native-chart-kit`**: Version ^6.12.0. Library for creating various charts.
- **`react-native-gesture-handler`**: Version ~2.12.0. Gesture handler library for React Native.
- **`react-native-paper`**: Version ^4.12.6. Material Design components for React Native.
- **`react-native-reanimated`**: Version ~3.3.0. React Native library for building smooth animations.
- **`react-native-svg`**: Version ^14.1.0. SVG library for React Native.
- **`react-native-web`**: Version ~0.19.6. React Native for Web library.

## Screens

Explore the different screens within the `app/` directory:

- **`Layout`**: Main layout screen.
- **`DashboardScreen`**: Dashboard screen.
- **`LoginScreen`**: Login screen.
- **`RegistrationScreen`**: User registration screen.
- **`StockDataFetcher`**: Screen for fetching and displaying stock charts.
- **`NewsFetcher`**: Screen for fetching and displaying stock-related news.

## Development

To start the app on specific platforms:

- Run the app on Android: `npx expo start --android`
- Run the app on iOS: `npx expo start --ios`
- Run the app on the web: `npx expo start --web`

## Support and Contribution

Feel free to explore and customize the app according to your requirements. If you encounter issues or have suggestions, please create an issue or submit a pull request.

Happy coding!

## Screenshots

![App Screenshot](https://github.com/akhilesh-sahu12/stocks-market/blob/master/screenshots/photo1703953331%20(9).jpeg)
![App Screenshot](https://github.com/akhilesh-sahu12/stocks-market/blob/master/screenshots/photo1703953331%20(7).jpeg)
