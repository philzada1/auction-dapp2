import { AuctionController } from './auction';
import { BidController } from './bid';

const auctionController = new AuctionController();
const bidController = new BidController();

export const controller = {
    createAuction: auctionController.createAuction,
    getAllAuctions: auctionController.getAllAuctions,
    getAuctionById: auctionController.getAuctionById,
    placeBid: bidController.placeBid,
    getHighestBid: bidController.getHighestBid,
};
