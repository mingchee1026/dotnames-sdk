import { getCosmWasmClient } from '@sei-js/core';
// @ts-ignore: Unreachable code error
import DotSei from '@dotnames/dotseijs'

export async function getAddressSeiNS(domainName: string, providerUrl: string) {
  try {
    const cosmWasmClient = await getCosmWasmClient('https://sei-rpc.polkachu.com/');
    const dotSei = new DotSei({
      cosmWasmClient,
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
    const cosmWasmClient = await getCosmWasmClient(providerUrl);
    const dotSei = new DotSei({
      cosmWasmClient,
      networkId: 'pacific-1',
    });
    const name = await dotSei.getName(address);
    return name;
  } catch (err) {
    throw err;
  }
}
