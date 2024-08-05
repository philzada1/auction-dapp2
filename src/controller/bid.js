import { Bid } from '../model/bid';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { auctionStorage } from '../storage/auction';

export class BidController {
    async placeBid(data) {
        if (!data.auctionId || !data.bidder || !data.amount) {
            return await RollupStateHandler.handleReport({
                error: 'Auction ID, bidder, and amount must be provided.',
            });
        }

        const auction = auctionStorage.getOneById(data.auctionId);

        if (!auction?.id) {
            return await RollupStateHandler.handleReport({
                error: `Auction not found for id '${data.auctionId}'`,
            });
        }

        if (auction.endTime < Date.now()) {
            return await RollupStateHandler.handleReport({
                error: 'Auction has ended.',
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newBid = new Bid(data);
            auction.addBid(newBid);
            auctionStorage.updateOne(auction);

            return {
                ok: true,
                message: `Bid placed successfully on auction '${auction.id}'!`,
                data: newBid.getData(),
            };
        });
    }

    async getHighestBid(data) {
        const auctionId = data[0];
        const auction = auctionStorage.getOneById(auctionId);

        if (!auction?.id)
            return await RollupStateHandler.handleReport({
                error: `Auction not found for id '${auctionId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            highestBid: auction.getHighestBid(),
        }));
    }
}
