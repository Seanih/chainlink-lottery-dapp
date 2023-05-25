require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: __dirname + '/.env.local' });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',
	networks: {
		sepolia: {
			url: process.env.SEPOLIA_URL,
			accounts: [process.env.METAMASK_PK],
		},
	},
	etherscan: { apiKey: process.env.ETHERS_API_KEY },
};
