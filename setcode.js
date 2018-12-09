const Web3 = require('web3')
const BN = require('bignumber.js')
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io"))

/**
 * Approve all component tokens for transfer to the Set Protocol contracts
 */
const approveTokensForTransfer = (tokenAddresses) => {
  tokenAddresses.forEach(async function(address) {
    await setProtocol.setUnlimitedTransferProxyAllowanceAsync(
      address, { gas: 30000, gasPrice: 6000000000 },
    );
  });
};

//Adding some ropsten addresses	
//	This isere we want to add more
const trueUSDAddress = '0x02Ca5A9c33585C06336481559FB0eadd3d656324';
const daiAddress = '0xb224a70ef6ee268cb0dadb6c06a95e3b8040793d';

approveTokensForTransfer([trueUSDAddress, daiAddress]);
	
	// Grab the setAddress after creating our Set
const stableSetAddress = createStableSet();

const issueStableSet = async function() {
  // Issue 1x StableSet which equals 10 ** 18 base units.
  const issueQuantity = new BigNumber(10 ** 18);

  // Check that our issue quantity is divisible by the natural unit.
  const isMultipleOfNaturalUnit = await setProtocol.setToken.isMultipleOfNaturalUnitAsync(stableSetAddress, issueQuantity);

  if (isMultipleOfNaturalUnit) {
    try {
      return await setProtocol.issueAsync(
        stableSetAddress,
        issueQuantity,
        {
          from: '0xYourMetaMaskAddress',
          gas: 4000000,
          gasPrice: 8000000000,
        },
      );
    } catch (err) {
      throw new Error(`Error when issuing a new Set token: ${err}`);
    }
  }
  throw new Error(`Issue quantity is not multiple of natural unit. Confirm that your issue quantity is divisible by the natural unit.`);
};

const issueTxHash = await issueStableSet();