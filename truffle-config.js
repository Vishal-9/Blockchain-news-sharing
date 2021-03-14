
var HDWalletProvider = require("@truffle/hdwallet-provider");

var mnemonic = "piano assist attract palm dinner combine oven man light aspect rose trim";
require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/110ff462a51c4fd09ec432636debb8c4"),
      network_id: 3,
      gas: 4700000,
      gasPrice: 100000000000
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
