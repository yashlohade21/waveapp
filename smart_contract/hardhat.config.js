require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  defaultNetwork: 'sepolia',
  networks: {
    hardhat:{},
    sepolia:{
      url:'https://rpc.ankr.com/eth_sepolia',
      accounts:['76d0c61d43a0f561fc2130cbb672a76a11e4d1015eba9367511a0c46edf736cb']
    },
  },
};
