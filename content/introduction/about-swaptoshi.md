---
sidebar_position: 1
description: Discover Swaptoshi and its on-chain modules.
---

# About Swaptoshi

![About Swaptoshi](./img/about-swaptoshi.png)

## Overview

Swaptoshi is a Fair-Launched Community-Driven Klayr DEX!

Built using Klayr SDK, it operates as an independent blockchain sidechain app, fully interoperable with the Klayr mainchain and its ecosystem. To learn more about how the Klayr ecosystem works and how sidechains are built, please visit the [Official Klayr Documentation](https://docs.klayr.xyz).

Swaptoshi offers DEX features inspired by industry best practices, including:

- Concentrated Liquidity AMM
- NFT-Based Liquidity Positions
- Liquid Staking
- Decentralized Treasury Governance

Swaptoshi also introduces new innovations to enhance the trading experience, such as:

- Automatic Network Fee Conversion
- One-Click Token Creation
- Governable Chain Configurations

Additionally, Swaptoshi is powered by its native token, `SWX`, along with its Liquid Staking token, `SWL`

:::info

To learn more about the utility of `SWX` and how it incentivizes network growth and contribution, please head to the [Tokenomics section](./tokenomics.md)

:::

## Modules

Swaptoshi utilizes several on-chain modules, including the [`nft`](https://github.com/klayrhq/klayr-sdk/blob/main/framework/src/modules/nft) module from the Klayr SDK and its own custom modules, to power its features. This section provides a brief overview of our custom modules

:::info

For more details, Visit the `swaptoshi-core` [Github repository](https://github.com/swaptoshi/swaptoshi-core/blob/main/src/app/modules).

:::

:::note

These modules will also be included in the `Swaptoshi SDK` upon release, allowing Klayr sidechain developers to create their own unique use cases.

:::

### dex

The `dex` module implements Concentrated Liquidity AMM, following best practices from industry leaders like Uniswap V3. It supports commands for swapping, minting/burning positions, adjusting liquidity, and collecting position earnings. Additionally, it includes commands for transferring leftover pool balances to the treasury and collecting earnings owned by the treasury.

### tokenFactory

The `tokenFactory` module allows for easy issuance of new tokens without the need for additional sidechain or node deployments. It also includes commands for post-creation activities like airdrops and ICO management.

### liquidPos

The `liquidPos` module provides liquid staking functionality, automatically minting a specific LST token when the native token is staked in PoS and vice versa.

### feeConversion

The `feeConversion` module allows transaction fees to be paid with a non-native chain token. For example, you can use `KLY` instead of `SWX` to cover transaction fees.

:::info

Non-native tokens must meet specific rules to enable fee conversion. For more details, check out the [Fee Conversion Section](./tokenomics#fee-conversion) on Tokenomics page.

:::

### governance

The `governance` module handles treasury management and on-chain configuration modification through DAO proposals.

:::info

To learn more about Swaptoshi's governance, visit the [Governance Section](./governance.md).

:::
