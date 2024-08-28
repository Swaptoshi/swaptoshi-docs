---
sidebar_position: 3
description: Discover ways to configure swaptoshi-core
---

# Configure Swaptoshi Core

:::note

This information assumes that you have already successfully installed Swaptoshi-Core. If you haven't, please visit the [Install Swaptoshi-Core Page](./install).

:::

## Using a network-specific default configuration

To quickly connect your Swaptoshi Core node to a specific network, specify the desired network with the `--network` or `-n` flag.

This will use the default config file for the specific network when starting Swaptoshi Core.
The default configurations are located in the `config` folder of Swaptoshi Core.

```
swaptoshi-core start --network NETWORK
```

`NETWORK` may be `mainnet`, `testnet`, or `devnet`.

## Using a custom config file

Swaptoshi Core uses the default config for connecting to the mainnet by default.

However, it is possible to use Swaptoshi Core with a custom config, by specifying the path to the config file with the `--config` or `-c` flag.

The custom config file needs to follow the JSON config structure of Swaptoshi Core.
A straightforward method is to copy one of the network-specific default configs of Swaptoshi Core and adjust it to suit your requirements.

~/klayr/

```
cp .klayr/swaptoshi-core/config/config.json custom-config.json
vim custom-config.json
```

NOTE: If you intend to connect the node to the mainnet, change the `testnet` to the `mainnet` in the snippet above.

```
swaptoshi-core start --config=/home/klayr/custom-config.json --overwrite-config
```

NOTE: Remember to restart the node for the new config changes to take effect.

:::info

On-chain `GovernableConfig`, as outlined on the [Governance page](../introduction/governance), will not be overwritten using this method. In this context, `overwrite-config` can only be used to modify node settings, not on-chain settings.

:::

## Enabling plugins

Plugins are not enabled by default. Dedicated flags can be used to enable them on the application start.

However, to enable the following plugins it is recommended to view the following detailed guides here, on how to register and enable the [Misbehavior plugin](https://klayr.xyz/documentation/run-blockchain/enabling-misbehavior-report.html), and also the [Dashboard plugin](https://klayr.xyz/documentation/build-blockchain/using-dashboard.html).
