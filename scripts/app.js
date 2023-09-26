require('dotenv').config();

const { API_URL, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const { ethers, network } = require('hardhat');
const contract = require('../artifacts/contracts/DumbMessage.sol/DumbMessage.json');

//const provider = new ethers.providers.AlchemyProvider(network= 'sepolia'), API_KEY); //provider 

const provider = new ethers.providers.JsonRpcProvider(API_URL);

//signer = (owner, my wallet)

const dumbContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function init() {
    const message = await dumbContract.message(); 
    console.log('Current message is: ', message);

}

init().then(() => proccess.exit(0)).catch((error) => {console.error(error); process.exit(1));
}