const Blockchain = require('./blockchain/blockchain.js');
const blockchain = new Blockchain();
blockchain.addBlock({ data: 'data2' });
blockchain.addBlock({ data: 'data3' });
blockchain.addBlock({ data: 'data4' });
console.log(blockchain);
for (let idx = 0; idx < blockchain.chain.length; idx++) {
	console.log(blockchain.chain[idx].data);
}
