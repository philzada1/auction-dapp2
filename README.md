<a id="readme-top"></a>
<div align="center">
  <a href="https://github.com/your-repo/decentralized-auction">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Decentralized Auction Dapp</h3>

  <p align="center">
    The Decentralized Auction dapp documentation.
  </p>
</div>

## About
<p>
    This is a decentralized auction system powered by <a href="https://docs.cartesi.io/cartesi-rollups/1.3/">Cartesi</a> rollups technology.
</p>
<p> 
    Users can list items for auction, bidders can place bids within a specified time frame, and the system automatically determines the highest bidder.
</p>

## Getting Started

Below you'll find instructions on how to set up this dapp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) 

* [docker](https://docs.docker.com/get-docker/)

* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/your-repo/decentralized-auction.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dapp via `cartesi-cli`
   ```sh
   cartesi build
   ```
   and
   ```sh
   cartesi run
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### Handlers
* #### createAuction
  ```js
    description — create an auction.
    param data — {owner: address ("0x..."), item: string, endTime: number}
  ```
  data sample
  ```json
    {
        "action":"createAuction", 
        "data":{
            "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "item":"Rare Painting",
            "endTime": 1719806200000
        }
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a2263726561746541756374696f6e222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20226974656d223a2252617265205061696e74696e67222c2022656e6454696d65223a313731393830363230303030307d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:
  
    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545

 \
        --payload=0x7b22616374696f6e223a2263726561746541756374696f6e222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20226974656d223a2252617265205061696e74696e67222c2022656e6454696d65223a313731393830363230303030307d7d
    ```

* #### getAllAuctions
  ```js
    description — get all auctions.
  ```
  data sample
  ```json
    {
        "action":"getAllAuctions"
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a22676574416c6c41756374696f6e73227d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:
  
    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --payload=0x7b22616374696f6e223a22676574416c6c41756374696f6e73227d
    ```

* #### getAuctionById
  ```js
    description — get an auction by ID.
    param data — [auctionId: string]
  ```
  data sample
  ```json
    {
        "action":"getAuctionById", 
        "data":["6640510b-d97e-4a3d-8b13-22b16e1c2a21"]
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a2267657441756374696f6e42794964222c202264617461223a5b2236363430353130622d643937652d346133642d386231332d323262313665316332613231225d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:
  
    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --payload=0x7b22616374696f6e223a2267657441756374696f6e42794964222c202264617461223a5b2236363430353130622d643937652d346133642d386231332d323262313665316332613231225d7d
    ```

* #### placeBid
  ```js
    description — place a bid on an auction.
    param data — {auctionId: string, bidder: address, amount: number}
  ```
  data sample
  ```json
    {
        "action":"placeBid", 
        "data":{
            "auctionId":"6640510b-d97e-4a3d-8b13-22b16e1c2a21",
            "bidder":"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
            "amount":1000
        }
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a22706c616365426964222c202264617461223a7b2261756374696f6e4964223a2236363430353130622d643937652d346133642d386231332d323262313665316332613231222c2022626964646572223a22307833433434436444444236613930306661326235383564643239396530336431324641343239334243222c2022616d6f756e74223a313030307d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:
  
    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --payload=0x7b22616374696f6e223a22706c616365426964222c202264617461223a7b2261756374696f6e4964223a2236363430353130622d643937652d346133642d386231332d323262313665316332613231222c2022626964646572223a22307833433434436444444236613930306661326235383564643239396530336431324641343239334243222c2022616d6f756e74223a313030307d7d
    ```

* #### getHighestBid
  ```js
    description — get the highest bid for an auction by ID.
    param data — [auctionId: string]
  ```
  data sample
  ```json
    {
        "action":"getHighestBid", 
        "data":["6640510b-d97e-4a3d-8b13-22b16e1c2a21"]
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a2267657448696768657374426964222c202264617461223a5b2236363430353130622d643937652d346133642d386231332d323262313665316332613231225d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:
  
    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --payload=0x7b22616374696f6e223a2267657448696768657374426964222c202264617461223a5b2236363430353130622d643937652d346133642d386231332d323262313665316332613231225d7d
    ```

## Roadmap

- [x] Create Auction
- [x] Get All Auctions
- [x] Get Auction By ID
- [x] Place Bid
- [x] Get Highest Bid

## Acknowledgements

Thanks to the team at [Cartesi](https://cartesi.io/) for providing the rollups technology.

<p align="right">(<a href="#readme-top">back to top</a>)</p>