import '../../global';
import Web3 from 'web3';
import { INFURA_API_KEY } from 'react-native-dotenv';

export const web3 = new Web3(
    new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${INFURA_API_KEY}`)
);
