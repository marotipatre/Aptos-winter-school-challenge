# Fun click - Aptos winter school <img src="client/public/logo.png"  width="30" height="30">

### Fullstack decentralised application game which uses Petra Wallet for interaction with Aptos blockchain.Fund your wallet by testnet coins and play !

## Table of Contents

- [About the Challenge](#about-the-challenge-🌟)
- [Getting Started](#👩🏻‍💻-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to play](#🎮-how-to-play)
- [Tech stack](#tech-stack-used)
- [Smart Contract](#smart-contract-🗒️)
- [License](#license)
- [Aptos Explorer link](https://explorer.aptoslabs.com/account/0xeb82587faa0e7ba632c4c0ffd640c6821c42a4fa632b7a1061a6d7357bc27e53/transactions?network=testnet)
- [Demo Video Link](https://drive.google.com/file/d/1eGtCLgsQPEZ5SmgmQDR260EfHTUyXkaW/view?usp=drive_link)

## About the Challenge 🌟
Build a simple full-stack (frontend + smart contract) game on Aptos.

The UI of the game has these parts: 

1. A “Connect Wallet” button so users can link their wallets, using the [Wallet Adapter](https://aptos.dev/tutorials/build-e2e-dapp/add-wallet-support)
2. A button that a user can click
3. A number, displayed prominently, which will show how many times the button has been clicked globally by user.

## 👩🏻‍💻 Getting Started
- Project is deployed on [vercel](https://aptos-winter-school-challenge-r374.vercel.app),users can directly interact with the project just by installing [petra wallet extension](https://chromewebstore.google.com/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci?pli=1) to the browser.

- Note :- Don't forget to fund your petra wallet using faucet button available in your wallet.

- If you want to run it on your local server,please follow below steps --
### Prerequisites
1. [Install node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. [Install Aptos CLI](https://aptos.dev/tools/aptos-cli/install-cli/)
3. [Install Petra Wallet Extension](https://chromewebstore.google.com/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci?pli=1)

### Installation
- [Clone the repo](https://github.com/marotipatre/Aptos-winter-school-challenge.git) in your local machine using git command : `git clone https://github.com/marotipatre/Aptos-winter-school-challenge.git`


- change directory to `client` by running following command (it will take you in frontend directory) 
  ### `cd client`

- In the directory, install all the dependencies of the by running the command:
    ### `npm install`

- Run the react application by 
    ### `npm start`

- Here you go 🚀! Now you can seamlessly interact with application by your ease.

## 🎮 How to play
- 1. Install petra wallet
- 2. Connect your wallet.
- 3. Make sure to swtich your network to Testnet.
- 4. You are ready to go 🎉
- 5. Click the Button and aprrove the transaction in your wallet and you incremented your count by 1 if all goes right!.

## Tech stack Used </>
- [React framework](https://react.dev/) - for frontend
- [Move](https://move-language.github.io/move/) - Smart contract
- [Aptos CLI](https://aptos.dev/tools/aptos-cli/install-cli/) - for compilation & deployment of smart contract.

## Smart contract 🗒️
- Contract Name : `increase.move`
- Blockchain network : Aptos Nestnet network
- Deployed Module Address : 0xeb82587faa0e7ba632c4c0ffd640c6821c42a4fa632b7a1061a6d7357bc27e53
- Aptos exlorer link :  [link](https://explorer.aptoslabs.com/account/0xeb82587faa0e7ba632c4c0ffd640c6821c42a4fa632b7a1061a6d7357bc27e53/transactions?network=testnet) 

## LICENSE
This project is licensed under the MIT [License](LICENSE). See the LICENSE file for details.

### *If you want to learn more about smart contract devlopement and creation you can refer [Aptos Docs and tutorials](https://aptos.dev/tutorials/build-e2e-dapp/e2e-dapp-index)
