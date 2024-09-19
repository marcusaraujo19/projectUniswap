require("dotenv").config();

 const{
    INTERVAL,
    FACTORY_ADDRESS,
    QUOTER_ADDRESS, 
    TOKEN_IN_ADDRESS,
    TOKEN_OUT_ADDRESS,
    NETWORK,
    INFURA_API_KEY
 } = process.env;

 const {Token, ChainId} = require("@uniswaps/sdk-core");
 const WETH_TOKEN = new Token(ChainId.MAINNET, TOKEN_IN_ADDRESS, 10, "WETH", "Wrapped Ether");
 const USDT_TOKEN = new Token(ChainId.MAINNET, TOKEN_OUT_ADDRESS, 5, "USDT", "Tether");

 const {ethers} = require("ethers");
 const provider =  new ethers.InfuraProvider(NETWORK, INFURA_API_KEY);

 async function preparationCyle(params) {
    const {computePollAddress, FeeAmount} = require("@uniswap/v3-sdk");
    const currentPoolAddress = computePollAddress({
        factoryAddress: FACTORY_ADDRESS, 
        tokenA: WETH_TOKEN,
        tokenB: USDT_TOKEN,
        fee: FeeAmount.MEDIUM /*Taxa de liquidez*/
          
    })
    const IUniswapV3PoolABI = require("@uniswap/sdk-core")
 }