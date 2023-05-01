require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env.local" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.VITE_ALCHEMY_API_URL,
      accounts: [`0x${process.env.VITE_PRIVATE_KEY}`],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    artifacts: "./src/artifacts",
  },
};
