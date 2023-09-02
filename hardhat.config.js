require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
 solidity: "0.8.18",
 networks: {
   sepolia: {
     url: `https://sepolia.infura.io/v3/${287dbf35f5ca4bbe8db37987fad1a5ee}`,
     accounts: [Sc8e244c5931913c8de8a004effe0f2418deeb5ab223533b0c7a7c82f49f5e83d]
   }
 },
 etherscan: {
   apiKey: ETHERSCAN_API_KEY=TS1IVIY8M39JTSS6G3PNFU9GGKBKHD4Z32
   ,
 },
};