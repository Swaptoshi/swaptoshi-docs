---
sidebar_position: 2
description: Discover ways to setup swaptoshi-core
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Swaptoshi Core

This document explains how to install `swaptoshi-core` on your machine using `npm`.

## Pre-Install

To complete the installation certain prerequisites need to be fulfilled.
If you have already performed these, then please proceed to the [Installation](#installation) section.

### Requirements

**Supported Platforms**

- Ubuntu 20.04 (LTS) x86_64
- Ubuntu 22.04 (LTS) x86_64
- MacOS x86_64

**Node.js**

- 18

The following system requirements are recommended:

**Memory**

- Machines with a minimum of 8 GB RAM for the Mainnet.

- Machines with a minimum of 8 GB RAM for the Testnet.

**Storage**

- Machines with a minimum of 40 GB HDD.

:::note

These recommendations are derived from the log level settings, in the event that the user needs to increase storage to prevent limited memory access and potential memory-related problems with a node. Furthermore, as more transactions are processed and added to the blockchain, the size of the blockchain increases over time and this directly affects the HDD storage requirements for a blockchain node. Hence, adhering to the above listed requirements is highly recommended

:::

### Toolchain components

These are used for compiling dependencies.

<Tabs>
  <TabItem value="Ubuntu" label="Ubuntu" default>

    ```
    sudo apt update
    sudo apt install -y git libtool automake autoconf curl build-essential python2-minimal
    ```

  </TabItem>
  <TabItem value="MacOS" label="MacOS">
    Ensure that both [XCode](https://developer.apple.com/xcode/) and [Homebrew](https://brew.sh/) are installed.

    ```
    brew install git autoconf automake libtool python2
    ```

  </TabItem>
</Tabs>

### Node.js

[Node.js](https://nodejs.org/) serves as the underlying engine for code execution.

<Tabs>
  <TabItem value="Option A - Node version manager" label="Option A - Node version manager" default>

    It is recommended to use a Node version manager such as [NVM](https://github.com/creationix/nvm).
    NVM is a bash script that enables the management of multiple active Node.js versions.

    - Install NVM with the following command shown below:

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
    ```

    :::info

    Please note that you may need to restart your terminal session to use the `nvm` command.

    Alternatively, you can run the following command to use `nvm` right after executing above installation script:

    ```
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
    ```

    Head to [NVM official repository](https://github.com/creationix/nvm) to learn more!

    :::

    - Install the version 18 of Node.js using NVM with the following command shown below:

    ```
    nvm install 18
    nvm alias default 18
    nvm use default
    ```

  </TabItem>
  <TabItem value="Option B - Node.js package" label="Option B - Node.js package">
    If NVM or other package managers are not required, it is possible to install the Node package globally as shown in the following commands below:

    **Ubuntu**

    ```
    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    **MacOS**

    For MacOS, please execute the following command below:

    ```
    brew install node@18
    ```

  </TabItem>
</Tabs>

### Open Ports

Please ensure, that the necessary ports are open to run Swaptoshi Core as intended.

For example, in case [ufw](https://wiki.ubuntu.com/UncomplicatedFirewall) is used on Ubuntu to manage the firewall settings, the respective ports can be opened as follows:

Node P2P communication

````

ufw allow 7887

```

Node API

```

ufw allow 8778

```

### PM2 (optional)

Install [PM2](https://github.com/Unitech/pm2) and [PM2 Logrotate](https://github.com/keymetrics/pm2-logrotate) for managing the start and stop of the application process in the background as shown below:

```

npm i -g pm2
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 100M

```

## Installation

Install swaptoshi-core globally using `npm`:

```

npm install -g swaptoshi-core

````

:::info

If you'd like to install `swaptoshi-core` by building it from source, visit the official [GitHub repository](https://github.com/swaptoshi/swaptoshi-core) for more details.

:::

## Run

<Tabs>
  <TabItem value="Using PM2" label="Using PM2" default>

    Create a new file named `swaptoshi-core.json`, and paste following lines:

    ```json
    {
        "name": "swaptoshi-core",
        "script": "swaptoshi-core start --api-ipc --network testnet --overwrite-config",
    }
    ```

    Then, use pm2 to start swaptoshi-core instance:

    ```
    pm2 start swaptoshi-core.json
    pm2 logs
    ```

    use following command to stop all pm2 process, including swaptoshi-core:

    ```
    pm2 stop all
    ```

  </TabItem>
  <TabItem value="Without PM2" label="Without PM2">
    Run swaptoshi-core and connect to specified network (e.g testnet)

    ```
    swaptoshi-core start --api-ipc --network testnet  --overwrite-config
    ```

  </TabItem>
</Tabs>

## Post-installation (optional)

### Enable IPC & WS in the config and set allowed methods

To make use of all the Swaptoshi Core commands, enable IPC in the config. Config usually located in `~/.klayr/swaptoshi-core/config/config.json`:

```json
"rpc": {
    // Enable RPC communication over 'ipc' and 'ws'
    "modes": ["ipc", "ws"],

    // Set allowed methods, or use wild cards "*" to enable all
    "allowedMethods": ["generator", "system", "random"],

    // In case `modes` include `ws` then, the following port is used
    "port": 7887,

    // Change to 0.0.0.0 to connect from a remote server
    "host": "127.0.0.1"
},
```

And restart your swaptoshi-core instance. Don't forget to add `--overwrite-config` flag to `start` command, for example:

```
swaptoshi-core start --api-ipc --network testnet --overwrite-config
```
