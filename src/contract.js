import Web3 from 'web3';
const providerUrl = process.env.REACT_APP_PROVIDER_URL;
const web3 = new Web3(new Web3.providers.WebsocketProvider(providerUrl));
const contractABI = require('./GetShuffledTarotCards.json').abi;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const tarotCardsContract = new web3.eth.Contract(contractABI, contractAddress);
const privateKey = process.env.REACT_APP_USESR_PRIVATE_KEY;  
web3.eth.accounts.wallet.add(privateKey);

async function getShuffledCards() {
    
    let gas_estimate = await await tarotCardsContract.methods.getShuffledCards().estimateGas({ from: web3.eth.accounts.wallet[0].address });
    const encoded = tarotCardsContract.methods.getShuffledCards().encodeABI()
    var txCount = await web3.eth.getTransactionCount(web3.eth.accounts.wallet[0].address);
    var tx = {
        gas: Math.round(parseInt(gas_estimate) * 1.2),
        gasPrice: await web3.eth.getGasPrice(),
        to: contractAddress,
        data: encoded,
        nonce: web3.utils.toHex(txCount)
    }

    web3.eth.accounts.signTransaction(tx, web3.eth.accounts.wallet[0].privateKey).then(signed => {
        web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
    })
}

async function listenToShuffleEvent() {
    const blockNumber = await web3.eth.getBlockNumber();
    let eventReceived = false;  // Add this flag

    return new Promise((resolve, reject) => {
        tarotCardsContract.events.shunffleTarot({ filter: {}, fromBlock: blockNumber })
            .on('data', (event) => {
                eventReceived = true;  // Set flag to true when event is received
                return resolve(event);
            })

        setTimeout(() => {
            if (!eventReceived) {
                reject(new Error("Timeout after 10 seconds without receiving shuffleTarot event."));
            }
        }, 30000);
    });
}


export { getShuffledCards, listenToShuffleEvent };