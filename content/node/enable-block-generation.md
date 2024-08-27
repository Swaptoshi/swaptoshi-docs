---
sidebar_position: 5
description: Discover how to enable/disable block generation
---

# Enable/Disable Block Generation

On this page, you’ll learn how to enable and disable block generation for a validator on a blockchain that uses the Klayr PoS module, like the Swaptoshi Mainnet.

This includes how to:

- Enable block generation
- Disable block generation
- Safely re-enable block generation on another node
- Estimate the [Validator info data](#validator-info-data), in case it is lost

## How to enable block generation on a node

:::warning

1. The blockchain application needs to be running to successfully enable block generation on the node.
2. Ensure the node is **_fully synchronized_** with the network, before enabling block generation on this node.
3. To enable block generation for a validator for the **_first time_**, check out the dedicated guide: [on How to Become Validator](./becoming-validator.md).
4. Ensure to adhere to the following points to avoid being punished by the network:

   1. Never use outdated [Validator info data](#validator-info-data).
   2. Never activate block generation for the same validator on two or more nodes at the same time.

:::

### Validator info data

The validator info data is required for enabling block generation for the corresponding validator.

It consists of the following three properties:

- `height`: Last generated block height.
- `maxHeightGenerated`: Validator’s largest previously generated height.
- `maxHeightPrevoted`: Validator’s largest prevoted height for a block.

### Get the validator info data

:::warning

Don’t trust any [Validator info data](#validator-info-data) from public APIs or explorers, make sure to always use your local data!
:::

:::note

This command returns the validator info data only for validators, who **generated at least one block** on the node.
If you newly enabled block generation, it will return an empty array whilst requesting `generator:status`.
That means, your validator info data is still `0` for all values.
See [Initial validator info](./becoming-validator#initial-validator-info-data) for more information.

:::

```bash
swaptoshi-core generator:status --pretty
```

This will return the following information for a validator who imported her/his keys to the node:

- `address`: The Klayr32 address of the validator.
- `enabled`: `true`, if the validator has block generation enabled, `false` if not.
- The [Validator info data](#validator-info-data).

Below is the **Example output**:

```json
{
  "info": {
    "status": [
      {
        "address": "klyzpvesvp7p9odszcp3s4dffnj4ozqz7b79tonqp",
        "height": 574,
        "maxHeightPrevoted": 487,
        "maxHeightGenerated": 459,
        "enabled": true
      }
    ]
  }
}
```

### Enable block generation

Use the `generator:enable` command to enable block generation on your node.

```bash
swaptoshi-core generator:enable klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3 --height=123 --max-height-generated=101 --max-height-prevoted=101
```

Replace `klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3` with your validator address.

Verify the correctness of the values: `height`, `max-height-prevoted`, and `max-height-generated` by answering `yes`, and use your password created in step [Creating the validator keys](./becoming-validator#creating-the-validator-keys) to enable block generation.

:::tip

To prefill the validator info data as stored on the node, automatically, add the flag `--use-status-value` to the `generator:enable` command.

```bash
swaptoshi-core generator:enable klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3 --use-status-value
```

```bash
Current block generation status for validator account klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3 is:
{"height":14814092,"maxHeightPrevoted":14814017,"maxHeightGenerated":14814025}

? Do you want to use the above values to enable block generation? yes
? Enter password to decrypt the encrypted passphrase:  ********
```

The node will then enable block generation for the validator and respond with the following message:

```
Updated block generation status:
{"address":"klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3","enabled":true}
```

:::

## How to disable block generation on a node

If you wish to disable block generation on the node for a validator, follow the steps described below.

:::warning

If you would like to **completely stop block generation** without being punished by the network, make sure to `unstake` all self-stakes for a validator, before you disable block generation on the node.

:::

Use the `generator:disable` command to disable block generation on your node.

```bash
swaptoshi-core generator:disable klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3
```

Replace `klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3` with the address of your validator.

When prompted for a password, use the password that you defined while [creating the validator keys](./becoming-validator#creating-the-validator-keys).

```
? Enter password to decrypt the encrypted passphrase:  ********
```

The node will then disable block generation for the validator and respond with the following message:

```
Disabled block generation for klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3
```

## Safely enabling block generation on another node

Sometimes it is desired or necessary to move to a new/different node, to generate blocks with a particular validator.

To safely enable block generation on another node, please ensure to follow the steps below:

1. Install a new node on another server.
2. Start the node and let it synchronize with the network.
   If available, it is recommended to synchronize from a snapshot, to speed up the synchronization process.
3. Login to the server with the old node.
4. [Disable block generation](#how-to-disable-block-generation-on-a-node) on the old node.
5. [Export the hash onion seed](./becoming-validator#get-the-hash-onion) used by the validator.
6. After securely storing the hash onion of the old node, stop the old node.
7. Export the validator info data from the old node.

   ```bash
   swaptoshi-core generator:export --output genInfo.json
   ```

8. Login to the server with the new node.
9. Restore the validator info data.

   ```bash
   swaptoshi-core generator:import ./genInfo.json
   ```

10. [Import the validator keys](./becoming-validator#import-the-validator-keys).
11. [Import the hash onion seed](./becoming-validator#set-the-hash-onion) used by the validator.
12. Ensure the node is fully synchronized with the network.
    Synchronization ensures that the new node is up-to-date and has the latest blocks and transactions from the network.
    After sync, the height of the newer node should be equal to the current network height.

```bash
swaptoshi-core node:info
```

13. [Get the validator info data](#get-the-validator-info-data) to fetch the validator info data.
14. [Enable block generation](#how-to-enable-block-generation-on-a-node).

## Estimating the validator info data in case it is lost (Advanced)

A validator can lose their [Validator info data](#validator-info-data), for example, if their server crashes, or if general access to the node is lost.

In these cases, it is possible to estimate the validator info data, to enable block generation on another node safely.

### Automatic estimation with the `estimateSafeStatus` endpoint (recommended)

It is recommended to use the endpoint `generator_estimateSafeStatus` to estimate the validator info data safely.

The only input required is the `timeShutdown`, which is a Unix timestamp of the last time a validator was active and created a block in the network.

:::warning

**⚠️ WARNING: Never underestimate the shutdown time**

Underestimating the `timeShutdown` value will violate the Klayr BFT protocol if this info data is used to enable block generation.
The validator will be punished by the network as a consequence.

To avoid this, if you are unsure about the exact shutdown time, **always overestimate**, to be on the safe side.
If you overestimate, you will never break the Klayr BFT protocol - in the worst case, you will lose a few block rewards.

:::

```bash
curl --location --request POST 'http://localhost:7887/rpc' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "generator_estimateSafeStatus",
    "params": {
         "timeShutdown": 1675259371
    }
}'
```

This will respond with the estimated validator info data, which can now be used to enable block generation on a node:

```json
{
  "id": "1",
  "jsonrpc": "2.0",
  "result": {
    "height": 61837,
    "maxHeightGenerated": 61837,
    "maxHeightPrevoted": 61837
  }
}
```

### Manual estimation of the validator info data

**Required Delegate Input**

- `timeShutdown`: Unix timestamp of the last height when the validator node could have possibly been active and forging (over-estimate with a larger number when uncertain about the exact time).

**Configurable Constants**

- `BLOCK_TIME = 3`: The block time of the considered blockchain in seconds, i.e., 3 for Swaptoshi Mainnet.
- `MAX_FORK_DEPTH = 8640`: An upper boundary on the largest chain of off-chain blocks for which the validator generated a block, i.e., for every block at height `h` generated by the validator, the parent block at height `h - MAX_FORK_DEPTH` must be contained in the canonical chain that is eventually finalized.
  It is recommended to use `MAX_FORK_DEPTH` = 8640 = 24*60 *6 (number of blocks generated in 24 h).

**Instructions**

1. Start a new node with block generation disabled.
2. Synchronize with the Swaptoshi blockchain until there is a finalized block: `finalizedBlock` with a block header timestamp greater than the last active height: `finalizedBlock.header.timestamp > timeShutdown`.
3. Obtain a block `parentBlock` which is a parent block of `finalizedBlock` at height `finalizedBlock.header.height - MAX_FORK_DEPTH`.

```
parentBlock.header.height = finalizedBlock.header.height - MAX_FORK_DEPTH
```

4. Compute the number of missed blocks in the current chain between the `finalizedBlock` and the `parentBlock`, i.e., as shown below:

```
missedBlocks = ceil((finalizedBlock.header.timestamp - parentBlock.header.timestamp)/BLOCK_TIME) - (finalizedBlock.header.height - parentBlock.header.height)
```

5. Use the following forging configuration and activate forging:

```
height = finalizedBlock.header.height
maxHeightPreviouslyForged = finalizedBlock.header.height + missedBlocks
heightPrevoted = finalizedBlock.header.height
```
