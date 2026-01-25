# National E-Voting Portal (Simulation)

A secure, blockchain-based electronic voting system simulation designed to demonstrate a modern, transparent, and user-friendly voting process. This project features a bilingual interface (English & Tamil), strict identity verification, and blockchain integration for immutable vote recording.

## 🌟 Features

-   **Bilingual Support**: Full support for **English** and **Tamil** languages across all interfaces.
-   **Granular Jurisdiction Selection**: Users can select their voting scope from Central down to Taluk level (State -> District -> Taluk).
-   **Secure Identity Verification**:
    -   **OTP Verification**: Simulated mobile OTP verification flow.
    -   **Aadhaar Integration**: Simulated Aadhaar number and PIN verification.
    -   **Voter ID**: Visual confirmation of voter identity.
-   **Blockchain Integration**:
    -   Connects to Ethereum-based networks (specifically Sepolia Testnet).
    -   Uses smart contract interaction to cast and verify votes.
    -   Prevents double voting using on-chain data.
-   **Real-time Results**: Live vote counting and visualization using progress bars.
-   **Responsive Design**: Fully responsive UI built with modern CSS and glassmorphism effects.

## 🛠️ Tech Stack

-   **Frontend**: HTML5, CSS3 (Custom properties, Animations), JavaScript (Vanilla).
-   **Blockchain Interaction**: [Ethers.js](https://docs.ethers.org/v6/) (v6.10.0).
-   **Fonts**: 'Outfit' from Google Fonts.
-   **Assets**: SVG icons and localized resource mapping.

## 📂 Project Structure

-   `index.html`: Entry point. Handles language, jurisdiction selection, and splash screen.
-   `login.html`: Citizen login interface for initiating the authentication flow.
-   `otp.html`: 6-digit OTP verification simulation with timer and resend functionality.
-   `aadhaar.html`: Aadhaar identity verification step.
-   `aadhaar-image.html` & `voter-id-image.html`: Visual confirmation steps for user identity documents.
-   `blockchaincontract.html`: Interface to input and connect to the deploying smart contract address.
-   `voting.html`: Main voting interface. Handles wallet connection, vote casting, and result checking.
-   `notifications.js`: Utility script for handling toast notifications and user alerts.
-   `style.css`: Global stylesheet containing variables, responsiveness, and animations.

## 🚀 Setup & Usage

1.  **Clone or Download**: Download the project files to your local machine.
2.  **Web Server**: It is recommended to serve the files using a local web server (e.g., Live Server in VS Code, Python's `http.server`, or `npx serve`) to ensure proper loading of modules and assets.
    ```bash
    # Example using Python
    python -m http.server 8000
    ```
    Or simply open `index.html` in your modern web browser.
3.  **MetaMask**: Ensure you have the [MetaMask](https://metamask.io/) browser extension installed.
4.  **Network**: Connect MetaMask to the **Sepolia Testnet** (or the network where your contract is deployed).
5.  **Smart Contract**: You will need a deployed voting smart contract address to use the voting features. Enter this address in the `blockchaincontract.html` step.

## ⚠️ Disclaimer

This project is a **simulation** developed for academic and demonstration purposes.
-   The "Aadhaar" and "OTP" verifications are simulated and do not connect to actual government databases.
-   Blockchain interactions are on a testnet.
-   Do not use real personal data.

## 📜 License

This project is open-source and available for educational use.
