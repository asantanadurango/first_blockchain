const hashRan = () => Math.random().toFixed(3);
class Block {
	constructor(prevHash, data, height) {
		this.prevHash = prevHash;
		this.hash = this.generateHash();
		this.height = height;
		this.data = data;
	}

	generateHash() {
		return hashRan();
	}
}

module.exports = Block;
