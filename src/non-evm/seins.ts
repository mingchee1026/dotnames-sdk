import DotSei from '@dotnames/dotseijs';
import { getCosmWasmClient } from '@sei-js/core';

export async function getRecordsSeiNS(domainName: string, providerUrl: string) {
  try {
    const client = await getCosmWasmClient(providerUrl);
    const dotSei = new DotSei({
      client,
      networkId: 'pacific-1',
    });

    const records: {
      address?: string;
      owner?: string;
      resolver?: string;
      avatar?: string;
    } = {};

    const address = await dotSei.name(domainName).getAddress();
    const owner = await dotSei.name(domainName).getOwner();
    const resolver = await dotSei.name(domainName).getResolver();
    const avatar = await dotSei.name(domainName).getAvatar();

    if (address) {
      records.address = address;
    }
    if (owner) {
      records.owner = owner;
    }
    if (resolver) {
      records.resolver = resolver;
    }
    if (avatar) {
      records.avatar = avatar;
    }

    return records;
  } catch (err) {
    throw err;
  }
}

export async function getAddressSeiNS(domainName: string, providerUrl: string) {
  try {
    const client = await getCosmWasmClient('https://sei-rpc.polkachu.com/');
    const dotSei = new DotSei({
      client,
      networkId: 'pacific-1',
    });
    const address = await dotSei.name(domainName).getAddress();
    return address;
  } catch (err) {
    throw err;
  }
}

export async function getNameSeiNS(address: string, providerUrl: string) {
  try {
    const client = await getCosmWasmClient(providerUrl);
    const dotSei = new DotSei({
      client,
      networkId: 'pacific-1',
    });
    const name = await dotSei.getName(address);
    return name;
  } catch (err) {
    throw err;
  }
}
