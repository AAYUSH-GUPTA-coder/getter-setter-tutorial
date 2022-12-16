/* hardhat.config.js */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
// require("@nomiclabs/hardhat-etherscan");

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const RPC_URL_MUMBAI = process.env.RPC_URL_MUMBAI;

const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //  unused configuration commented out for now
    mumbai: {
      url: RPC_URL_MUMBAI,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.4",
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};
