---
sidebar_position: 3
description: Discover what makes Swaptoshi community-driven.
---

# Governance

As a community-driven project, Swaptoshi places its community at the core, allowing everyone to get involved and participate. This vision is realized through the governance system implemented by Swaptoshi.

This section will explain how Swaptoshi's governance works.

:::tip

Since nearly every behavior is managed through the `GovernableConfig`, the community can adjust settings to their preferences by submitting proposals with the action type [`config`](#config), as outlined below.

:::

## Treasury

The Swaptoshi Treasury serves as the central reserve that supports the project's growth and development.

It is controlled by the community through a [DAO Proposal](#dao-proposal) system, ensuring that the funds are allocated in a way that aligns with the community's interests and goals.

The treasury can be used for a variety of purposes, such as funding new initiatives, rewarding contributors, or providing liquidity to stabilize the ecosystem.

### Address

Treasury address is configured through `treasuryAddress` configuration.

The default value for treasury Address is `klyr49epb3jdyqmnfyrz7jdc5ws3rmyuqzje4c4jb`, which obtained by `SHA256(b"GovernanceTreasuryAccount")[:20]`, as outlined on [LIP-0074](https://github.com/klayrHQ/lips/blob/main/proposals/lip-0074.md)

### Fund Source

The treasury acquires SWX and other tokens from various sources, which can be adjusted through several configurations.

- **Block Reward Tax**: The treasury can deduct a percentage from each SWX block reward or mint new tokens with each block. This behavior is managed through the `treasuryReward` configuration. For the Swaptoshi network, it is set to deduct `10%` of each SWX block reward, with no new tokens minted.
- **Swap Fee**: The `feeProtocol` and `feeProtocolPool` configurations from the `dex` module are set to allocate `10%` of each swap fee from liquidity pools to the treasury.
- **Treasury-Owned NFT Positions**: Earnings from NFT positions owned by the treasury, which can be collected by sending a `dex:collectTreasury` transaction.
- **Community Donation**: Community is welcome to contribute and donate to the treasury by sending tokens directly to the [treasury address specified above](#address).
- **Transaction Fee**: The Swaptoshi network configures the `feePoolAddress` setting from the `fee` module to direct transaction fees to the [treasury address specified above](#address). This means all transaction fees will be sent to the treasury.

:::note

Please note that the `fee` module from Klayr SDK doesn't support `GovernableConfig` yet

:::

## DAO Proposal

Governance operates in a decentralized manner through proposals. Proposals capture changes, actions, or topics suggested by the community and record decisions through voting. Anyone can submit a proposal as long as it meets the required conditions and configurations.

### Proposal Lifecycle

Proposals can have one of seven possible statuses: `CREATED`, `ACTIVE`, `ACCEPTED`, `REJECTED`, `EXECUTED`, `EXECUTED_WITH_ERROR`, and `FAILED_QUORUM`. Each status reflects the proposal's current stage in its lifecycle. As mentioned earlier, the behavior of the proposal lifecycle is influenced by several on-chain configurations, which driven by community decisions.

#### Proposal Created

To create a proposal, the author needs to meet the minimum balance requirements defined by both the `proposalCreationMinBalance` and `proposalCreationDeposit` configurations. Note that the author must satisfy the higher of the two amounts, not the cumulative sum.

For the Swaptoshi Network, the `proposalCreationMinBalance` is set to `1,000,000,000,000 Nakamoto`, which is equivalent to `10,000 SWX`.

Once a proposal is successfully created, the deposit amount will be locked in the author's account. The handling of this deposit will be managed during the [Quorum Check](#quorum-check) process.

Additionally, the proposal status will initially be `CREATED` and will change to `ACTIVE` after the number of blocks specified by the `votingDelayDuration` configuration has passed since proposal creation. Swaptoshi network sets `votingDelayDuration` to 0, meaning that a proposal becomes active immediately after it is created.

:::info

The `proposalCreationMinBalance` configuration can be set as a percentage of the total SWX supply rather than an exact value.

:::

#### Proposal Active

Proposals with the status `ACTIVE` can be voted on by SWX holders for the duration specified by the `voteDuration` configuration since proposal created.

Swaptoshi network sets `voteDuration` to 806400 blocks, which is approximately 28 days.

:::note

Please note that before the `voteDuration` is completed, a Quorum Check will be performed as described below. Therefore, `quorumDuration` must be less than or equal to `voteDuration`.

:::

#### Quorum Check

The proposal will be checked to see if it meets the quorum limit defined by `quorumThreshold`, using the mode specified in the `quorumMode` configuration, after the block period of `quorumDuration` has passed since proposal creation. Note that the quorum calculation is based on the number of participating tokens, not the weight of the votes.

There are three possible values for `quorumMode`:

- **FOR_AGAINST_ABSTAIN**: Counts all votes (FOR, AGAINST, and ABSTAIN) for the threshold calculation.
- **FOR_AGAINST**: Counts only FOR and AGAINST votes for the threshold calculation.
- **FOR**: Counts only FOR votes for the threshold calculation.

Swaptoshi network sets `quorumThreshold` to `5%`, with a `quorumMode` of `FOR_AGAINST_ABSTAIN`, and a `quorumDuration` of 806400 blocks (the same as `voteDuration`).

If the proposal does not meet the specified quorum, its status will change to `FAILED_QUORUM`, and the author's deposit from the proposal creation process will be transferred to the Treasury address.

#### Proposal Decision

Proposals that remain in the `ACTIVE` status after the `voteDuration` will have their vote weights assessed to determine the final outcomes.

If a proposal is not accepted, its status will be set to `REJECTED`. Accepted proposals will have the status `ACCEPTED` and will await execution for a duration specified by the `executionDuration` block, starting from the time the proposal was created.

:::note

When calculating vote weight and determining proposal acceptance, boosting and/or turnout bias may be applied as described below.

:::

#### Proposal Execution

Proposals with the status `ACCEPTED` that have also passed the `executionDuration` will be executed. Each action item outlined in the proposal will be carried out accordingly.

Successful execution will change the proposal status to `EXECUTED`, while failed execution will change it to `EXECUTED_WITH_ERROR`.

:::info

An execution error might occur, for example, if a funding proposal is executed with insufficient treasury balance.

:::

:::warning

If an error occurs, the proposal cannot be re-executed; a new proposal must be submitted instead.

:::

### Proposal Actions

Swaptoshi features an action system for proposals, allowing a single proposal to include multiple actions. This enables the community to propose various changes or allocate funds to multiple accounts simultaneously, accommodating interconnected needs.

There are two types of proposal actions: `funding` and `config`. Additionally, author can propose a `non-actionable proposal` with no actions, which serves to gather community insights.

The maximum number of actions per proposal is controlled by the `maxProposalActions` configuration. Swaptoshi network sets this value to `-1`, which indicates no action limit.

:::tip

A `maxProposalActions` value of `1` means governance will enforce single-action proposals, similar to the [LIP-0074](https://github.com/klayrHQ/lips/blob/main/proposals/lip-0074.md) implementation.

:::

#### Funding

This proposal action suggests allocating funds from the treasury to a specific recipient address. The token used for funding can be any token, as long as its owned by the Treasury.

The required payload is:

```typescript
export interface FundingActionPayload {
  tokenId: Buffer;
  receivingAddress: Buffer;
  fundingAmount: bigint;
}
```

#### Config

This proposal action suggests modifying the on-chain governable configuration of a specific module. The module must implement `BaseGovernableConfig` and be registered as `GovernableConfig` through the `governance` module.

The required payload is:

```typescript
export interface ConfigActionPayload {
  moduleName: string;
  paramPath: string;
  value: Buffer;
}
```

:::info

The `paramPath` can be `.` to apply changes to all configurations, or a specific path to target a particular configuration (for example `treasuryReward.blockRewardTaxBracket` of `governance` module config). Additionally, the value provided must be encoded using `klayr-codec`.

:::

## Votes

Voting is a key part of Swaptoshi's governance, allowing community members to influence the project's direction. Votes can be cast as `FOR`, `AGAINST`, or `ABSTAIN`.

To gain voting power, SWX token holders must stake their tokens in the PoS consensus mechanism.

Additionally, several mechanisms can affect voting and decision-making, which will be detailed below.

### Boosted Vote

Boosted voting lets participants enhance their voting power by locking their tokens for extended periods. A longer lock-up increases voting power, encouraging long-term commitment and ensuring decisions reflect the interests of dedicated community members.

The boosted multiplier is applied to the base vote weight and depends on the `maxBoostDuration` and `boostFactor` configurations.

The boost multiplier can be calculated using the following formula:

<br />

$$
\text{BoostMultiplier} = 1 + \max \left( 0, \frac{\text{targetHeight} - \text{currentHeight}}{\text{maxBoostDuration}} \right) \times \left( \frac{\text{boostFactor}}{100} - 1 \right)
$$

<br />

Swaptoshi network sets `maxBoostDuration` to `20736000` (approximately 2 years), and `boostFactor` to `200`, meaning the vote weight can be boosted up to 200%.

:::info

Boosting is considered an experimental feature, so the `governance` module has `enableBoosting` set to `false` by default. Swaptoshi sets this configuration to `true`, but it can be adjusted later by community decision via a [config proposal](#config).

:::

### Turnout Bias

Turnout bias is a dependency designed to prevent low participation from disproportionately affecting governance outcomes.

The governance module uses the following turnout bias scheme: a proposal is accepted if

<br />

$$
\frac{\text{forCount}}{\sqrt{\text{totalTokenSupply}}} > \frac{\text{againstCount}}{\sqrt{\text{totalTokenVoted}}}
$$

<br />

Here is an overview of approval values required to accept a proposal for certain values of turnout, measured in percentage of electorate.

| **Turnout**, % of totalTokenSupply | **Approval needed to accept** |
| ---------------------------------- | ----------------------------- |
| 10%                                | 76%                           |
| 20%                                | 69%                           |
| 30%                                | 64%                           |
| 50%                                | 58%                           |

:::note

Since Turnout Bias is inspired by [LIP-0074](https://github.com/klayrHQ/lips/blob/main/proposals/lip-0074.md), it is highly recommended to also review that draft for a detailed understanding.

:::

:::info

Same as boosting, turnout bias is also considered an experimental feature, so the `governance` module has `enableTurnoutBias` set to `false` by default. Swaptoshi sets this configuration to `true`, but it can be adjusted later by community decision via a [config proposal](#config).

:::
