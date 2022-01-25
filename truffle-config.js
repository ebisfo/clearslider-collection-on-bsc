require('babel-register');
require('babel-polyfill');
require("dotenv").config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  /* ... rest of truffle-config */
  plugins: ['truffle-plugin-verify'],

  api_keys: {
    bscscan: '17E2D5RMCR5EG1A1S6J68K5DEZESKY1UXT'
  },


	networks: {
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*" // Match any network id
		},

		rinkeby: {
			provider: function () {
				return new HDWalletProvider(
					[process.env.DEPLOYER_PRIVATE_KEY],
					`wss://rinkeby.infura.io/ws/v3/${process.env.INFURA_API_KEY}` // URL to Ethereum Node
				)
			},
			network_id: 4
		},

		bsc_testnet: {
			provider: function () {
				return new HDWalletProvider(
					[process.env.DEPLOYER_PRIVATE_KEY],
					`https://data-seed-prebsc-1-s1.binance.org:8545`
				)
			},
			network_id: 97
		},

		bsc_main: {
			provider: function () {
				return new HDWalletProvider(
					[process.env.DEPLOYER_PRIVATE_KEY],
					`https://bsc-dataseed.binance.org`
				)
			},
			network_id: 56
		},
	},

	contracts_directory: './src/contracts/',
	contracts_build_directory: './src/abis/',

	compilers: {
		solc: {
			version: '0.8.9',
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	}
}
