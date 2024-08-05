import crypto from 'node:crypto';

export class Bid {
    id;
    auctionId;
    bidder;
    amount;
    timestamp;

    constructor({ auctionId, bidder, amount }) {
        this.id = crypto.randomUUID();
        this.auctionId = auctionId;
        this.bidder = bidder;
        this.amount = amount;
        this.timestamp = Date.now();
    }

    getData() {
        return {
            id: this.id,
            auctionId: this.auctionId,
            bidder: this.bidder,
            amount: this.amount,
            timestamp: this.timestamp,
        };
    }
}
