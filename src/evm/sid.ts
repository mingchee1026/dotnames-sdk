import { ethers } from 'ethers';
const SID = require('@siddomains/sidjs').default;      
const SIDfunctions = require('@siddomains/sidjs');
const rpc = require('@siddomains/sidjs/dist/constants/rpc');

export async function getAddressSID(domainName:string,bnbProviderUrl:string) {
    try{
        const provider = new ethers.providers.JsonRpcProvider(bnbProviderUrl);
        const sid = new SID({ provider, sidAddress: SIDfunctions.getSidAddress('56') })
        const address = await sid.name(domainName).getAddress();
        return address;
    }catch( err) {
        throw err;
    }
}

export async function getNameSID(address: string, bnbProviderUrl: string) {
  try {
    const provider = new ethers.providers.JsonRpcProvider(bnbProviderUrl);
    const sid = new SID({ provider, sidAddress: SIDfunctions.getSidAddress('56') });
    const { name } = await sid.getName(address);
    return name;
  } catch (err) {
    throw err;
  }
}