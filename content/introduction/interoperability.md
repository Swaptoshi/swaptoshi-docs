---
sidebar_position: 4
description: Discover Swaptoshi interoperability.
---

# Swaptoshi Interoperability

Swaptoshi is built using the Klayr SDK, which is a toolkit for creating independent blockchains that can interoperate with each other, all using JavaScript.

In this section, we will cover some brief constraints and considerations regarding how the Klayr mainchain and Swaptoshi sidechains interact and work together.

:::info

To understand more about Klayr Interoperability, visit [Official Klayr Documentation](https://klayr.xyz/documentation/understand-blockchain/interoperability)

:::

## Cross-Chain Transfer Time

Cross-Chain Transfers enable tokens to move between different blockchains, such as transferring KLY tokens from the Klayr chain to the Swaptoshi chain for swapping purposes. This functionality is supported by the Klayr SDK's interoperability features.

The time required for a cross-chain transfer is influenced by:

1. **Block Finality**: The number of blocks needed for a transaction to be considered final and immutable.
2. **Cross-Chain Update (CCU)**: Updates sent by the [relayer](#relayer-ccu-frequency) between interoperable chains which trigger state updates.

For the specific chains involved:

- **Klayr Chain**: With a block time of `7 seconds` and a block finality of approximately `80 blocks`, transactions generally finalized around `9 minutes` to complete.
- **Swaptoshi Chain**: With a faster block time of `3 seconds` and a similar finality of `80 blocks`, transactions typically finalized around `4 minutes`.

These durations account for the time needed for the finalized block's to be included in the CCU.

:::note

After a block is finalized, it is included in the Cross-Chain Update (CCU) by the Relayer. Therefore, the total time for a cross-chain transfer also depends on the frequency with which the Relayer sends CCUs. This process impacts how quickly the updated balance is reflected on the receiving chain.

:::

## Relayer CCU Frequency

The relayer address for connecting the Klayr mainchain and the Swaptoshi sidechain is `klyof58j7a5fvs55utdnv6xmkv3b6swjmjaotbt85`. This address handles sending Cross-Chain Update (CCU) commands to both chains, which requires a transaction fee.

In addition to using the pre-minted `1,193.64 SWX` tokens as detailed in the [Tokenomics](./tokenomics.md), the community can also contribute tokens to the relayer address to help cover the transaction fees for submitting CCUs.

:::info

Remember, since transaction fees are sent to the Treasury, contributing tokens to the relayer address also helps fund the Treasury. For more details, please refer to the [Governance](./governance) section.

:::

For the relayer, Swaptoshi schedules the Cross-Chain Updates (CCU) to be sent every `15 minutes`. Consequently, cross-chain transactions, including transfers between Klayr and Swaptoshi, will be completed in about `15 minutes`.

:::note

Anyone is free to become a relayer, and sends their own Cross-Chain Updates (CCU).

:::
