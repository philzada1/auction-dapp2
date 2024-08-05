import { Auction } from '../model/auction';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { auctionStorage } from '../storage/auction';

export class AuctionController {
    async createAuction(data) {
        return await RollupStateHandler.advanceWrapper(() => {
            const newAuction = new Auction(data.owner, data.item, data.endTime);
            auctionStorage.addOne(newAuction);

            return {
                ok: true,
                message: `Auction created successfully!`,
                data: newAuction.getData(),
            };
        });
    }

    async getAllAuctions() {
        return await RollupStateHandler.inspectWrapper(() =>
            auctionStorage.getAll()
        );
    }

    async getAuctionById(data) {
        const auctionId = data[0];
        const storageRequest = auctionStorage.getOneById(auctionId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Auction not found for id '${auctionId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: {
                details: storageRequest.getData(),
                bids: storageRequest.getBids(),
            },
        }));
    }
}
