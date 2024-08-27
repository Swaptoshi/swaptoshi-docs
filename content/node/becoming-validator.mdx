---
sidebar_position: 4
description: Discover how to become validator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Become Swaptoshi Validator

On this page, you’ll learn how to become a validator for a blockchain that uses the Klayr PoS module, like the Swaptoshi Mainnet.

This includes how to:

- Register as a validator
- Enable block generation for the first time

## Prerequisites

To be able to become a validator for a blockchain, it is assumed that the following requirements are fulfilled:

1. Operating a [swaptoshi-core](./install.mdx) connected to the respective blockchain network, e.g. a Swaptoshi Core node connected to the Swaptoshi Mainnet.
2. Owning an account on the respective blockchain.
3. A sufficient account balance to send the "Register Validator" transaction (minimum 10 SWX for the Swaptoshi Mainnet). You can verify your balance for example by requesting the `token_getBalance` endpoint.
4. A sufficient account balance to perform the [self-stake](#how-to-stake-to-increase-the-validator-weight).

## How to register as a validator

To generate new blocks on a network, it is required to register as a validator.
This is achieved by choosing a unique **validator name** and posting a corresponding "Register Validator" transaction to the network.

### Creating the validator keys

It is possible to generate all relevant validator keys to enable block generation from the account passphrase.

To do so, use the command `keys:create`.

```bash
swaptoshi-core keys:create --output config/keys.json
```

Next, you will be prompted for the validator **passphrase**, and it will also ask for a **password**, in order to symmetrically encrypt the passphrase for the config.

```
? Please enter passphrase:  [hidden]
? Please re-enter passphrase:  [hidden]
? Please enter password:  [hidden]
? Please re-enter password:  [hidden]
```

:::warning

The password is sensitive information.
Store the password used here for the encryption somewhere safe.
It will be required every time to enable block generation, in order to decrypt the generator keys in the node.

:::

This will generate the following **config/keys.json** file, which includes all important keys for the validator account:

```json
{
  "keys": [
    {
      "address": "klyp24b6ev62w67v8qvk8wnvkhh2gv3hcoohes5z3",
      "keyPath": "m/44'/134'/0'",
      "publicKey": "83eac294606806e0f4125203e2d0dac5ef1fc8730d5ec12e77e94f823f2262fa",
      "privateKey": "eafb0bc7f148e60f69fda52e0cc862071871bbfff884aad095ae84bdde8d298283eac294606806e0f4125203e2d0dac5ef1fc8730d5ec12e77e94f823f2262fa",
      "plain": {
        "generatorKeyPath": "m/25519'/134'/0'/0'",
        "generatorKey": "97fe3280b25ca122cf91eb891c157c939becd75a7fed394254b1005608c3bffc",
        "generatorPrivateKey": "67afd3d3eda7c060f8f4e19540a5416c2d29a6dc687b47a5bebcd41d9d0df1e897fe3280b25ca122cf91eb891c157c939becd75a7fed394254b1005608c3bffc",
        "blsKeyPath": "m/12381/134/0/0",
        "blsKey": "a3dcd6dedf3a0cf45608f9e1f3844e8b30c033c186851671ea1a655541b3fda482e4617f67367438012cf0855fadda13",
        "blsProofOfPossession": "954f4f6be134626367353d68cd19d00a3475dd0cb0961605ec925c659c581c0a91e6223715eba261cca817aca134078e014d1f340aac32e21038a861708e8b2c33190d0dc32902fde8b270490a7f81a8ea5736bfcaaaf502704f0d9573623dd3",
        "blsPrivateKey": "07dec698f9b62092196c15b8074dc6a0366722cd77b351f968b2291c1fbcc699"
      },
      "encrypted": {
        "ciphertext": "4e9c24db810fb641d9ad148e0a9c461db5c52b001592c910b2b11a4f4ce9bf271d530d2bfd9a6b50c59b09a4e872ef7a0ff65802e0bde6e685dd07db6b9b4f365b24af0488a5fdb3d4688b5c5a4ffbf302573a53219a1ec120bd1b1bc602e356bdb910ab7be245e7488409fc1ea059ffcb4382cfb309d5673a258cd2cf4114a39ffbb0097f3bef6985c45ea3ffbc2f7b793a2366d9e5921d3ba8490906a17bf458a85c19100834877fde498fc3165a02f68a72e1b6e8509f",
        "mac": "1730decdc41721e0156f9aaad0685b1a65c0edc56d653c0ae6266f08826b13f3",
        "kdf": "argon2id",
        "kdfparams": {
          "parallelism": 4,
          "iterations": 1,
          "memorySize": 2097023,
          "salt": "34ac1bfb751d5f78"
        },
        "cipher": "aes-128-gcm",
        "cipherparams": {
          "iv": "9c6903d0c6e6ab900e9389d8466dd8ff",
          "tag": "8e21a9239cb4d5855e54cf9da34bc5ce"
        },
        "version": "1"
      }
    }
  ]
}
```

:::warning

The generated keys are very sensitive information.

Especially the not encrypted values need to be treated **equally sensitive as the passphrase for an account.**
So after the keys are imported in step [Import the validator keys](#import-the-validator-keys), make sure to store the file somewhere safe, or delete the file completely.

:::

### Create the Register Validator transaction

Create a transaction to register your account as a validator.

The following parameters are required:

1. `name`: The unique name of the new validator.
   Please be aware that the name can have a **maximum length of 20 characters**, and only the following **characters are allowed: `[a-z0-9!@$&_.]`**
2. `generatorKey`: The public key whose corresponding private key is used to sign blocks generated by the validator.
   To enhance security, the `generatorKey` is different from the key used to sign transactions in the network.
3. `blsKey`: The public BLS key whose corresponding private key is used to sign certificates.
4. `proofOfPossession`: The cryptographic proof that the validator owns the corresponding private key to the BLS key.
   In the validator keys file, it can be found under `blsProofOfPosession`.

:::info

For more details about the validator registration process and the related cryptography, check out [LIP 0044 - Introduce Validators module](https://github.com/KlayrHQ/lips/blob/main/proposals/lip-0044.md)

:::

The parameters mentioned in 2, 3, and 4 are all generated in the step [Creating the validator keys](#creating-the-validator-keys).

Use the `transaction:create` command to create the `registerValidator` transaction: (please modify the params with value you obtain above)

:::note

If it is not already running, start the node to create the transaction as described below.

:::

```bash
swaptoshi-core transaction:create pos registerValidator 1100000000 \
--params='{"name":"myuniqueame","generatorKey":"aaecd278a3fadc40a4a824d6f4aa24547d8fb9d075ec4d6967a7084f9a3f2541","blsKey":"815a9e7643cf2bace98d1337f1dca8e39949592cd3fcb79bf3ab5784981468b9987b3340527bc9ca263a2fd061812024","proofOfPossession":"add8669bb57f3dceec04dc0f875906cb52a677f1df911536c01f447c8830bf27cd43713af18d84de5a64ec504aeaf9a30521c09438bb5a4d5fd634946c65e0fc4ea3681fdb4f6949cb6c1bc1ac1ddec3df058a13466af5a13d50737938fd7d5f"}'
```

Next, enter the passphrase of your account.

```
? Please enter passphrase:  [hidden]
? Please re-enter passphrase:  [hidden]
```

The CLI will return the transaction already in hex format, ready to be posted to a node.

```json
{
  "transaction": "0a0464706f731210726567697374657244656c656761746518002080d6c28c042a206290c8b58de8b71fedb7e3cb9a6ee9426aa3e7ac0141f278526375d46705b54632be010a066d796e616d651220aaecd278a3fadc40a4a824d6f4aa24547d8fb9d075ec4d6967a7084f9a3f25411a30815a9e7643cf2bace98d1337f1dca8e39949592cd3fcb79bf3ab5784981468b9987b3340527bc9ca263a2fd0618120242260add8669bb57f3dceec04dc0f875906cb52a677f1df911536c01f447c8830bf27cd43713af18d84de5a64ec504aeaf9a30521c09438bb5a4d5fd634946c65e0fc4ea3681fdb4f6949cb6c1bc1ac1ddec3df058a13466af5a13d50737938fd7d5f3a40d841c3ea463e2c2fd598bd56c77998241bc86e8143e59baf5f06b11491f3c8557e2d82c1139f927adcb0055256f5a5419a4853950856c2e9ae3588a7885a3f05"
}
```

:::tip

To return the transaction in JSON format as well, add the flags `--json` and `--pretty` to the command.

:::

### Send the transaction

Copy the transaction in the hex format that was created in the previous step and post it to the node.

```bash
swaptoshi-core transaction:send 0805100018032080d6c28c042a20bad983c72bed43fd274f852658c298b74c71ab6fc50508879fef309e3836384b32080a066d796e616d653a4045afdd04d0c0bc6e548c0915d5fabef1311b1b75b1eb919a43b88dab539e7b6a99b9075f5d6382ec3bbebfca3301651a15d8af3f999d5b6fa7873b3969cd3d0c
```

If the sending process was successful, it will return the following message, including the respective transaction ID.

```
Transaction with id: '1809da284fe26dba90d34dc3aab837a32d3c291a4ca78a9bfa263f927c69598a' received by node.
```

### Check validator details

After the `registerValidator` transaction got included in a block, invoke the `pos_getValidator` endpoint, to verify the account has now registered a validator name:

```bash
swaptoshi-core endpoint:invoke pos_getValidator '{ "address":"klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3"}' --pretty
```

The new validator’s name should be displayed in the response, along with the corresponding address and other public information about the particular validator.

```json
{
  "name": "myuniquename",
  "totalStakeReceived": "0",
  "selfStake": "0",
  "lastGeneratedHeight": 14,
  "isBanned": false,
  "pomHeights": [],
  "consecutiveMissedBlocks": 0,
  "commission": 10000,
  "lastCommissionIncreaseHeight": 14,
  "sharingCoefficients": [],
  "address": "klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3",
  "punishmentPeriods": []
}
```

## Allow methods in the node config

To be able to run certain validator-related commands of the node, it is required to enable security-sensitive methods in the node **config.json**.

```json
{
  "rpc": {
    "modes": ["ipc"],
    "allowedMethods": ["generator", "system", "random"]
  }
}
```

Restart the node with the `--overwrite-config` flag, to load the updated configuration.

:::tip

`allowedMethods` refers to the `method` defined in the [JSON-RPC specification](https://www.jsonrpc.org/specification).

Add the `namespace`, to allow all endpoints of `namespace`, or `namespace_endpointName` to allow a specific endpoint.

:::

## Import the validator keys

After creating the validator keys as suggested in the [Creating the validator keys](#creating-the-validator-keys) section, the next step is to import them into the node.

```bash
swaptoshi-core keys:import --file-path config/keys.json
```

### Verifying correct import

After the validator keys are imported to the node, it is possible to verify that the import worked as expected with the following command:

```bash
swaptoshi-core endpoint:invoke generator_getAllKeys --pretty
```

That will return the validator keys that are currently imported on the node:

```json
{
  "keys": [
    {
      "address": "klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3",
      "type": "encrypted",
      "data": {
        "ciphertext": "4e9c24db810fb641d9ad148e0a9c461db5c52b001592c910b2b11a4f4ce9bf271d530d2bfd9a6b50c59b09a4e872ef7a0ff65802e0bde6e685dd07db6b9b4f365b24af0488a5fdb3d4688b5c5a4ffbf302573a53219a1ec120bd1b1bc602e356bdb910ab7be245e7488409fc1ea059ffcb4382cfb309d5673a258cd2cf4114a39ffbb0097f3bef6985c45ea3ffbc2f7b793a2366d9e5921d3ba8490906a17bf458a85c19100834877fde498fc3165a02f68a72e1b6e8509f",
        "mac": "1730decdc41721e0156f9aaad0685b1a65c0edc56d653c0ae6266f08826b13f3",
        "kdf": "argon2id",
        "kdfparams": {
          "parallelism": 4,
          "iterations": 1,
          "memorySize": 2097023,
          "salt": "34ac1bfb751d5f78"
        },
        "cipher": "aes-128-gcm",
        "cipherparams": {
          "iv": "9c6903d0c6e6ab900e9389d8466dd8ff",
          "tag": "8e21a9239cb4d5855e54cf9da34bc5ce"
        },
        "version": "1"
      }
    }F
]}
```

## Set the hash onion

If the hash onion is absent, a validator will be unable to receive rewards for block generation, even though the blocks would remain valid in such a scenario.
To ensure that no rewards are missed, a validator must set the hash onion before enabling block generation on the node.

To setup hash onion for 1,000,000 blocks, first make sure you already install `jq`.

<Tabs>
  <TabItem value="Ubuntu" label="Ubuntu" default>

    ```
    sudo apt install -y jq
    ```

  </TabItem>
  <TabItem value="MacOS" label="MacOS">
    Ensure that both [XCode](https://developer.apple.com/xcode/) and [Homebrew](https://brew.sh/) are installed.

    ```
    brew install jq
    ```

  </TabItem>
</Tabs>

use this command by replacing the ADDRESS with your address.

```
ADDRESS="klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3"; swaptoshi-core hash-onion --count 1000000 --output $HOME/hash_onion.json; jq --arg x $ADDRESS '. + {address: $x}' $HOME/hash_onion.json > tmp && mv tmp $HOME/hash_onion.json; swaptoshi-core endpoint:invoke random_setHashOnion --file $HOME/hash_onion.json; rm $HOME/hash_onion.json
```

To verify that the hash onion was set correctly, [Get the hash onion](#get-the-hash-onion) back from the node.

:::tip

If you use the default `random_setHashOnion` endpoint from `swaptoshi-core`, it will only generate a hash onion for 10,000 blocks.

It is recommended to use the command above to set up more hash onions for peace of mind. However, if you wish to generate a hash onion every 10,000 blocks, you can use this command:

```bash
swaptoshi-core endpoint:invoke random_setHashOnion '{"address":"klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3"}'
```

:::

:::warning

If you see the following error after running the command:

```bash
$ swaptoshi-core endpoint:invoke random_setHashOnion '{"address":"klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3"}'
 ›   Error: Response not received in 3000ms
```

This suggests that the API timed out.
However, the hash onion is still created in most cases.
You can wait for a while and then [Get the hash onion](#get-the-hash-onion), to verify that it actually is set.

:::

:::info

**❗ IMPORTANT: Import of an existing hash onion**

When attempting to migrate to a new or a different node, it is crucial that the hash onions from the previous node are used.
Use the previously stored hash onion seed values such as the `address`, `seed`, `count`, and `distance` to successfully migrate information from the previous node to a newer node.

```bash
swaptoshi-core endpoint:invoke random_setHashOnion '{"address":"klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3","seed":"2aa20ce749838a5c6bac8bdf14dcebd8","count":1000000,"distance":1000}'
```

:::

### Get the hash onion

Currently, there is nothing else to do with the hash onion, after it is created.
There are some situations though, where it is needed to get the seed hash onion back, for example, when [moving from one node to another](./enable-block-generation#safely-enabling-block-generation-on-another-node).
In that case, retrieve the hash onions from the node as described below, and store them in a secure location.
Later on, these values can be used to import hash onions to a newer node.

To get the hash onion seed, request the `random_getHashOnionSeeds` endpoint.

```bash
swaptoshi-core endpoint:invoke random_getHashOnionSeeds '{"address":"klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3"}' --pretty
```

This will return a list of all hash onion seeds that are stored in the node.

```json
{
  "seeds": [
    {
      "address": "klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3",
      "seed": "5be11bacb61de5c1309d50a5548b1834",
      "count": 1000000,
      "distance": 1000
    }
  ]
}
```

You can also retrieve the usage stats of the hash onions of an account by invoking the `random_getHashOnionUsage` endpoint.

## Initial validator info data

If a validator has never created a block on the blockchain before, the initial values of the [validator info data](./enable-block-generation#validator-info-data) are as follows:

- `height`: `0`
- `maxHeightGenerated`: `0`
- `maxHeightPrevoted`: `0`

## How to enable block generation for the first time

:::warning

**🔥 CAUTION: Check this before enabling block generation on a node:**

1. Ensure the node is running.
2. Ensure the node is **_fully synchronized_** with the network.
   This is particularly relevant for nodes who have been set up recently, because they might not have caught up with the current state of the network, yet.
   To verify that your node is fully synched, request the `system_getNodeInfo` endpoint.
   It should return `"syncing": false`.
3. To avoid breaking the BFT rules and being punished by the network, adhere to the following points:
   1. Never activate block generation for the same validator on two or more nodes at the same time.

:::

Use the `generator:enable` command to enable block generation on your node.

```bash
swaptoshi-core generator:enable klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3 --height=0 --max-height-generated=0 --max-height-prevoted=0
```

Replace `klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3` with your validator address.

Next, you will be prompted for the password that was defined in step [Creating the validator keys](#creating-the-validator-keys).

```
? Enter password to decrypt the encrypted passphrase:  ********
```

Block generation should now be enabled for the validator.
This is confirmed by the following message:

```
Enabled block generation for klyqaxxmj78frvgpjgwvf4yqjjkcrr9yhn2sxxwm3
```

## How to stake to increase the validator weight

If you followed all of the above steps, your node is now well-prepared to start generating blocks in the network.
The last remaining step is now to perform a [self-stake](https://klayr.xyz/documentation/understand-blockchain/consensus/pos-poa.html#self-stake).

Without performing a self-stake, a validator will never be considered by the validator selection algorithm.
Being selected directly depends on the **validator weight**, and this is computed directly from the stakes and self-stakes of a validator, as defined in the Klayr PoS protocol

:::info

For more details about the Klayr staking protocol which Swaptoshi is based on, please read [LIP 0023 - Introduce vote locking periods and new vote weight definition](https://github.com/KlayrHQ/lips/blob/main/proposals/lip-0023.md).

Please also check the [Klayr validator weight](https://klayr.xyz/documentation/understand-blockchain/consensus/pos-poa.html#validator-weight) explanation for further information on the topic.

:::

For each blockchain network, there is a specific **minimum validator weight** that is required for a validator to be considered for block generation in general.

:::tip

In the Swaptoshi Mainnet, the minimum validator weight is 10 SWX.

:::

The required validator weight to achieve an active position in the block generation is relative to the validator weights of the other validators who are participating in the network.
A good way to check the exact validator weight required to reach an active position is to just check the validator weights of the currently active 51 validators.

:::note

Please note, that even if you do not have enough validator weight to be an active validator, there is still a chance for you in each round to be selected as one of the two random validators.
To be considered for the random selection, a validator just needs to have a weight equal to or greater than the minimum validator weight of the network.

:::