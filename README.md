1. Charities receive ERC20s, but have fiat expenses.
2. Charities may not be very well-versed in crypto, and have a hard time converting it to usable currencies.
  1. We don&#39;t want any fat finger sales, or individuals not understanding the difference between market and limit orders, selling down a thin orderook.
3. The lag time between fundraising and completion means that charities are exposed to underlying risk on the coins they own.
4. Individuals want to donate crypto, but don&#39;t want downward selling pressure on their favorite coin when it gets to the hands of the charity 



Each of these factors leads to less than 100% of the money donated actually reaching the end beneficiaries.



Solution:

a one-stop portal for charities to input their Ethereum address and manage their crypto contriutions.

From here, they view all the recent donations they have received, generate a QR code to collect more donations, and liquidate into stable assets that they can actually use within their jurisdictions.

From this dashboard, they can one-click right to the KyberSwap Widget portals to sell only on the parameter that they receive the full 100% of the minimum threshhold for the token (default on KyberSwap Widget is 97%).

To-Do:

A how to use Kyber Swap:

Set parameters to at least 99%.



If tokens are unsold, we don&#39;t want the charity to panic, nor do we want to worry if Kyber doesn&#39;t support some of the tokens that we have collected during charity.



This is where we pass on the token Symbols &amp; corresponding token contract addresses to Set Protocol.

We then create a &quot;Lightpool&quot; of bundled token transactions that can be auctioned off in a set at a slight discount to the calculated marketprice, using Cryptocompare&#39;s API as an oracle. The discount is structured in the form of a rebate out to a verified address of the charity of one&#39;s choice.

.

Sample URL:

https://min-api.cryptocompare.com/data/price?fsym=ETH&amp;tsyms=DAI

There are two main reasons why we want to bundle these tokens.

First of all, we want to avoid creating negative selling pressure on the market as a whole, and so bundling the assets gives a more diversified portfolio for the individual to hopefully hold onto the tokens. If they do sell, any slight discount from the basket was not a realized gain because the discount actually goes to another charity of the user&#39;s choice. Thus, they do not have incentive to sell below market rate for any of the collateral that they receive.



The magnitude of the discount is a bounded function of how long since the charity received the last transaction (using the timestamp of each ERC20 transaction from home.html), such that individuals can essentially participate in a dutch auction for the assets, capped at a 5% discount to market price, and a minimum of 0.1% discount to market price. This ensures that the individual is able to cover costs during times of Ethereum Gas price surges on the low end, but risks losing the bid if they do not provide liquidity at the earliest possible time for the charity.

This variable discount factor that goes the charity of one&#39;s choice acts like a dynamic gas fee by increasing the reward when it is &quot;difficult&quot; to sell off the assets.



For example, the last transaction of a particular ERC20 token was in lock 4570000, the time elapsed since then has been 120,000 blocks (roughly 3 weeks&#39; time). let&#39;s say we don&#39;t want charities to hold onto tokens for more than 3 weeks to reduce their exposure.

Thus, we create a log function as follows:

R(120,000) = 5%

R(0) = 0.1%
Which works out to roughly:
\log\left(0.666\left(120000\right)+1\right)+\ 0.1


Such that the reward grows quickly at first - incentivizing competition to fill the order within the first day or two, and reduce the marginal benefit from keeping the charity out on a limb without fulfilling its orders.

We then complete an ecosystem that:

1. increases the proportion of every donated ERC20 token that reaches its intended impact
2. individual donors do not cause downward pressure on their favorite tokens
3. different teams are incentivized to donate their tokens to provide more possible tokens to pair in a diversified Set to raise even more funds for projects

Additional notes:

[https://etherscan.io/address/0xECa04bB23612857650D727B8ed008f80952654ee#writeContract](https://etherscan.io/address/0xECa04bB23612857650D727B8ed008f80952654ee#writeContract)

Earn an extra rebate for charity with the Kyber Free Rebate System



[https://developer.kyber.network/docs/FeeSharingGuide/](https://developer.kyber.network/docs/FeeSharingGuide/)

With this extra fee sharing, we could collect even more funds to add to a DAO that can proportionately redistribute these rewards to the charities that utilize Kyber the most.
