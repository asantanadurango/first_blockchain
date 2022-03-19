const Block = require('../block/block.js');

class Blockchain {
	constructor() {
		this.chain = [];
		this.validate();
	}

	addBlock(data) {
		const prevHash = this.chain[this.chain.length - 1].hash;
		const height = this.chain.length;
		this.chain.push(new Block(prevHash, data, height));
	}

	validate() {
		if (this.chain.length === 0) {
			this.chain.push(new Block(null, { data: 'Genesis Block' }, this.chain.length));
		}
	}
}

module.exports = Blockchain;
