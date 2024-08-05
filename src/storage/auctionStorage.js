class AuctionStorage {
    auctions;

    constructor() {
        this.auctions = new Map();
    }

    getAll() {
        return Array.from(this.auctions.values());
    }

    addOne(auction) {
        this.auctions.set(auction.id, auction);
    }

    getOneById(id) {
        return this.auctions.get(id);
    }

    updateOne(auction) {
        this.auctions.set(auction.id, auction);
    }
}

export const auctionStorage = new AuctionStorage();
