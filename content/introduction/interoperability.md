---
sidebar_position: 4
description: Discover Swaptoshi interoperability.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interoperability

Swaptoshi is built using the Klayr SDK, which is a toolkit for creating independent blockchains that can interoperate with each other, all using JavaScript.

In this section, some brief constraints and considerations regarding how the Klayr mainchain and Swaptoshi sidechains interact and work together will be covered.

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

In addition to using the pre-minted `573.64 SWX` tokens as detailed in the [Tokenomics](./tokenomics#allocation--distribution), the community can also contribute tokens to the relayer address to help cover the transaction fees for submitting CCUs.

:::info

Remember, since transaction fees are sent to the Treasury, contributing tokens to the relayer address also helps fund the Treasury. For more details, please refer to the [Governance](./governance) section.

:::

For the relayer, Swaptoshi schedules the Cross-Chain Updates (CCU) to be sent every `15 minutes`. Consequently, cross-chain transactions, including transfers between Klayr and Swaptoshi, will be completed in about `15 minutes`.

:::note

Anyone is free to become a relayer, and sends their own Cross-Chain Updates (CCU).

:::

## Relayer Inclusion Proof

As outlined in the [Klayr Documentation](https://klayr.xyz/documentation/run-blockchain/setup-relayer.html#calculating-inclusionproofkeys), setting up an inclusion proof is essential for configuring the relayer node.

Below is the inclusion proof for the Swaptoshi network:

<Tabs>
  <TabItem value="Testnet" label="Testnet" default>

    ```
    83ed0d2500007ebb29227bd18cfbe1827f4bec44e6be8b53304ac01b00aaf63b056b85c9d059
    ```

  </TabItem>
  <TabItem value="Devnet" label="Devnet" default>

    ```
    83ed0d2500005735b05e48e476be8b87c6fcfcccdb3012808926eaa933b756379214586d380c
    ```

  </TabItem>
</Tabs>

You can then insert this value into your Klayr node's `config.json` file under `system > inclusionProofKeys` as follows:

```json
{
  "system": {
    "inclusionProofKeys": [
      "83ed0d2500005735b05e48e476be8b87c6fcfcccdb3012808926eaa933b756379214586d380c"
    ]
  }
}
```

## Registration Height

Setting up `registrationHeight` is important to setup a relayer node from Klayr mainchain to Swaptoshi sidechain. Below is the `registrationHeight` of Swaptoshi sidechain on Klayr mainchain:

<Tabs>
  <TabItem value="Testnet" label="Testnet" default>

    ```
    1281500
    ```

  </TabItem>
</Tabs>

You can then insert this value into your Klayr node's `config.json` file under `plugins > chainConnector > registrationHeight` as follows:

```json
{
  "plugins": {
    "chainConnector": {
      "registrationHeight": 1281500
    }
  }
}
```
