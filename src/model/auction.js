import crypto from 'node:crypto';

export class Auction {
    id;
    owner;
    item;
    createdAt;
    endTime;
    bids;

    constructor(owner, item, endTime) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.item = item;
        this.createdAt = Date.now();
        this.endTime = endTime;
        this.bids = new Map();
    }

    getData() {
        return {
            id: this.id,
            owner: this.owner,
            item: this.item,
            createdAt: this.createdAt,
            endTime: this.endTime,
        };
    }

    getBids() {
        return Array.from(this.bids.values());
    }

    addBid(bid) {
        this.bids.set(bid.id, bid);
    }

    getHighestBid() {
        return Array.from(this.bids.values()).reduce((highest, bid) => 
            highest.amount > bid.amount ? highest : bid, { amount: 0 });
    }
}
