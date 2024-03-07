import { Contract, ethers } from 'ethers';
import { Provider } from 'zksync-ethers';

import { zknsAbi } from '../abi/zkns_abi';

interface Records {
  text: {
    twitter?: string;
    discord?: string;
    instagram?: string;
    telegram?: string;
    avatar?: string;
    url?: string;
    description?: string;
    email?: string;
  };
  address: string | undefined;
  contentHash: string | undefined;
}

export async function getRecordsZKns(domainName: string) {
  try {
    const zkns_controller_address = '0x935442AF47F3dc1c11F006D551E13769F12eab13';
    const providerUrl_eth = 'https://mainnet.era.zksync.io';

    const provider = new Provider(providerUrl_eth);
    const contract = await new ethers.Contract(
      zkns_controller_address,
      zknsAbi,
      provider,
    );
    const [, domain, topLevelDomain] = domainName.match(/^(.+)\.([^.]+)$/) || [];

    const address = await contract.resolveAddress(domain);

    // Get text record
    const twitter = await getData(contract, domain, 'twitter');
    const discord = await getData(contract, domain, 'discord');
    const instagram = await getData(contract, domain, 'instagram');
    const telegram = await getData(contract, domain, 'telegram');
    const avatar = await getData(contract, domain, 'avatar');
    const url = await getData(contract, domain, 'url');
    const description = await getData(contract, domain, 'description');
    const email = await getData(contract, domain, 'email');

    const records: Records = {
      text: {},
      address: address,
      contentHash: undefined,
    };

    if (twitter) {
      records.text.twitter = twitter;
    }
    if (discord) {
      records.text.discord = discord;
    }
    if (instagram) {
      records.text.instagram = instagram;
    }
    if (telegram) {
      records.text.telegram = telegram;
    }
    if (avatar) {
      records.text.avatar = avatar;
    }
    if (url) {
      records.text.url = url;
    }
    if (description) {
      records.text.description = description;
    }
    if (email) {
      records.text.email = email;
    }

    return records;
  } catch (err) {
    throw err;
  }
}

export async function getAddressZKns(domainName: string) {
  try {
    const response = await fetch(
      `https://omniapi.zkns.app/domain-resolver/getRecord/${domainName}`,
    );
    const address = response.text();
    return address;
  } catch (err) {
    throw err;
  }
}

export async function getNameZKns(address: string) {
  try {
    const response = await fetch(
      `https://omniapi.zkns.app/domain-resolver/getReverseRecord/${address}`,
    );
    const name = response.text();
    return name;
  } catch (err) {
    throw err;
  }
}

async function getData(contract: Contract, domain: string, record: string) {
  try {
    const value = await contract.getDataAddress(domain, record);
    return value;
  } catch (err) {
    console.log(err);
    return null;
  }
}
