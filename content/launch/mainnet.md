---
sidebar_position: 1
description: Discover three phase towards launch 🛠️💰🚀
---

# Mainnet Launch Phase

![Mainnet Launch Phase](./img/launch-banner.png)

Swaptoshi is founded on principles of fairness and community involvement. To embody these values, the mainnet launch plan designed to reflect them by actively engaging the entire community in a transparent and equitable manner. The community plays a central and crucial role in each phase of the process.

This section will outline the various phases of the mainnet launch, detailing how the community can participate and contribute to the initial launch of Swaptoshi!

:::info

As a community-driven project, your involvement is crucial! Join us and make an impact!

:::

## 🛠️ Network Setup Phase

The goal of this phase is to initiate and bootstrap the initial networks to enable the network to start operating effectively.

This phase includes:

1. **54 Genesis Validators**: Swaptoshi will be initialized with a genesis block containing 54 validators—53 with a vote weight of 10 SWX, and 1 non-forging validator with no vote weight. The non-forging validator plays a crucial role in the [Liquidity Setup Phase](#liquidity-setup-phase) discussed later.

2. **Sidechain Registration**: To ensure a smooth registration process for the Klayr sidechain, this will occur immediately after the genesis validators begin forging blocks.

3. **20 VIP Validators**: Swaptoshi will invite 20 community validators to join from the start as part of the Validator Initialization Program (VIP). Each VIP validator will receive 31 SWX in the genesis block: 10 SWX for validator registration, 20 SWX for self-staking, and 1 SWX to cover transaction fees. The 20 SWX allocated for self-staking ensures that their validator weight surpasses that of the genesis validators, securing their role in block forging.

4. **Initialization Period**: An initialization period of 201,559 blocks (approximately 7 days) will occur, during which the block reward is inactive. This period allows validators to prepare themselves adequately.

5. **Pool Setup**: During this phase, the liquidity pools for the KLY/SWX and SWX/SWL pairs will be established. The KLY/SWX pool will be set up with an initial price of `3.5 KLY : 1 SWX`, as detailed in the [Tokenomics](../introduction/tokenomics#initial-price) section. Meanwhile, the SWX/SWL pool will start with a price of `1 SWX : 1 SWL`. The process of providing liquidity for these pools will be covered in the [Liquidity Setup Phase](#swxswl-liquidity-setup) section below.

At the end of this phase, the network will have 20 VIP Validators from the community and 33 Genesis Validators actively producing blocks.

## 💰 Liquidity Setup Phase

The goal of this phase is to establish the initial liquidity for KLY, SWX, and SWL tokens, ensuring they are ready for trading on the Swaptoshi DEX. Providing this liquidity is crucial because these three tokens are fundamental, and the community should be able to access them effortlessly.

This phase involves three main focuses: Liquidity Source, KLY/SWX Liquidity Setup, and SWX/SWL Liquidity Setup. Each of these processes will be detailed below.

### Liquidity Source

To bootstrap the initial liquidity, Swaptoshi will utilize the block rewards earned by all Genesis Validators (ranging from 33 to 53 validators). These Genesis Validators will continue forging blocks for at least `28,800 blocks` (approximately 1 day), with all the block rewards being allocated to supply liquidity.

The liquidity distribution will be allocated as follows: `80%` will go towards the KLY/SWX liquidity pool, while `20%` will be allocated to the SWX/SWL liquidity pool.

From this process, three NFT Liquidity Positions will be created. Details on how these NFTs will be handled will be covered in the [Validator Decentralization Phase](#validator-decentralization-phase) section.

:::note

Swaptoshi cannot control the exact amount of tokens earned in a day by all Genesis Validators due to the nature of `dynamicReward` module, not to mention also the activity of 20 VIP Validators. However, all block rewards earned by Genesis Validators during this period will be allocated to providing liquidity.

:::

:::info

To illustrate how the liquidity allocation works, here is a case study example:

If, over the course of one day, `4500 SWX` are collected by all genesis validators, the allocation will be as follows:

- **KLY/SWX Liquidity**: 80% of 4500 SWX, which equals `3600 SWX`.
- **SWX/SWL Liquidity**: 20% of 4500 SWX, which equals `900 SWX`.

This case study will be used throughout this section to clarify the liquidity composition process.

:::

### KLY/SWX Liquidity Setup

To set up the liquidity pools, a 50:50 ratio of tokens is needed. For the KLY/SWX pool, half of the liquidity allocation will be sold at market price. This sale will provide 50% of the KLY tokens needed.

With these KLY tokens in hand, they will be paired with the corresponding amount of SWX tokens to create the KLY/SWX liquidity.

To ensure that KLY/SWX tokens are always tradable, the liquidity position will be set up as a full-range liquidity position. In addition, the liquidity in the KLY/SWX pool will be paired with a fee amount of 0.3%.

:::info

Using the example above, where we have an allocation of `3600 SWX` for KLY/SWX liquidity, `1800 SWX` will be sold at the rate of, let say, 3.5 KLY per SWX. This sale will yield `6300 KLY` tokens.

These `6300 KLY` and `1800 SWX` will then be added to the liquidity pool.

:::

### SWX/SWL Liquidity Setup

The SWX/SWL Pool also follows a 50:50 ratio for liquidity. To acquire SWL, 50% of the SWX/SWL liquidity allocation will be staked to `genesis_validator_54`, who has no validator weight and thus won't affect the validator game fairness.

Once the SWL tokens are obtained, they will be paired with SWX tokens.

For the SWX/SWL pair, which is considered a stable pair, the liquidity fee will be set at 0.01%. To ensure liquidity remains accessible, 20% of the allocation will be set up as a full-range position, while 80% will be allocated to a price range between 0.95 and 1.05 SWX/SWL.

:::info

In the example above, where we have `900 SWX` allocated for SWX/SWL liquidity, `450 SWX` will be staked to `genesis_validator_54`, resulting in `450 SWL` tokens.

From these tokens, `90 SWX` and `90 SWL` will be used to set up a full-range liquidity position. The remaining `360 SWX` and `360 SWL` will be allocated to a liquidity position with a price range of 0.95 to 1.05 SWX/SWL.

:::

## 🚀 Validator Decentralization Phase

The goal of this phase is to achieve decentralization, ensuring that no single party controls the network and that control is fully transitioned to the Swaptoshi community.

This phase involves two key actions: Organic New Validator Wave, and NFT Position Transfer to Treasury.

### Organic New Validator Wave

With liquidity for KLY/SWX now available, acquiring SWX tokens is straightforward. This allows new validators to join the network by purchasing at least 31 SWX. Here's the breakdown: 10 SWX for validator registration, 20 SWX for self-staking to surpass the genesis validators, and 1 SWX for transaction fees.

As new validators come on board and the genesis validators gradually lose their forging positions, decentralization of Swaptoshi will be fully realized.

### NFT Position Transfer to Treasury

Until all the genesis validators have lost their positions, they will continue to earn block rewards. These rewards will be used to add liquidity following the [Liquidity Setup Phase](#-liquidity-setup-phase) process.

Once all genesis validators are no longer forging blocks, the three NFT Positions they earned will be transferred to the [Treasury Address](../introduction/governance#address). At this point, anyone can execute the `dex:collectTreasury` transaction to withdraw the earnings from these NFT positions. These funds can then be used to fund the [funding type proposal](../introduction/governance#funding).

By doing this, the liquidity associated with the three NFT positions will be locked permanently, and the earnings will be managed by the community indefinitely.
