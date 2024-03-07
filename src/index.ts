import { getRecordsENS, getAddressENS, getNameENS } from './evm/ens';
import { getRecordsSID, getAddressSID, getNameSID } from './evm/sid';
import { getRecordsResolution, getAddressResolution, getNameResolution } from './evm/resolution';
import { getRecordsDotBit, getAddressDotBit, getNameDotBit } from './evm/dotbit';
import { getRecordsZKns, getAddressZKns, getNameZKns } from './evm/zkns';
import { getRecordsICNS, getAddressICNS, getNameICNS } from './non-evm/icns';
import { getRecordsSolana, getAddressSolana, getNameSolana } from './non-evm/solana';
import { getRecordsStargaze, getAddressStargaze, getNameStargaze } from './non-evm/stargaze';
import { getRecordsSui, getAddressSui, getNameSui } from './non-evm/suins';
import { getRecordsAptos, getAddressAptos, getNameAptos } from './non-evm/aptosns';
import { getRecordsSeiNS, getAddressSeiNS, getNameSeiNS } from './non-evm/seins';
import { SupportedNS } from './types';
import { detectNameService } from './utils/detectNameService';
import { RPC } from './utils/rpc';

let ethRPC : string;
let polygonRPC: string;
let bnbRPC: string;
let suiRPC: string;
let seiRPC: string;
let osmosisRPC: string;

export interface ProviderUrlsProps {
  ethRPC?: string;
  polygonRPC?: string;
  bnbRPC?: string;
  suiRPC?: string;
  seiRPC?: string;
  osmosisRPC?: string;
}


export class DotNamesSDK {
  constructor(param?: ProviderUrlsProps) {
    ethRPC = param?.ethRPC ? param?.ethRPC : RPC.eth;
    polygonRPC = param?.polygonRPC ? param?.polygonRPC : RPC.polygon;
    bnbRPC = param?.bnbRPC ? param?.bnbRPC : RPC.bnb;
    suiRPC = param?.suiRPC ? param?.suiRPC : RPC.sui;
    seiRPC = param?.seiRPC ? param?.seiRPC : RPC.sei;
    osmosisRPC = param?.osmosisRPC ? param?.osmosisRPC : RPC.osmosis;
  }
  public async setProviderUrl(param: ProviderUrlsProps) {
    ethRPC = param?.ethRPC ? param?.ethRPC : RPC.eth;
    polygonRPC = param?.polygonRPC ? param?.polygonRPC : RPC.polygon;
    bnbRPC = param?.bnbRPC ? param?.bnbRPC : RPC.bnb;
    suiRPC = param?.suiRPC ? param?.suiRPC : RPC.sui;
    seiRPC = param?.seiRPC ? param?.seiRPC : RPC.sei;
    osmosisRPC = param?.osmosisRPC ? param?.osmosisRPC : RPC.osmosis;
  }

  public async getRecords(domainName: string, ns?: SupportedNS) {
    let service: SupportedNS;

    if (ns) {
      service = ns;
    } else {
      service = await detectNameService(domainName);
    }

    switch (service) {
      case SupportedNS.ENS:
        return getRecordsENS(domainName, ethRPC);
      case SupportedNS.SpaceId:
        return getRecordsSID(domainName, bnbRPC);
      case SupportedNS.UnstoppableDomains:
        return getRecordsResolution(domainName, ethRPC, polygonRPC);
      case SupportedNS.DotBit:
        return getRecordsDotBit(domainName);
      case SupportedNS.Zkns: // no completed
        return getRecordsZKns(domainName);
      case SupportedNS.ICNS: // no completed
        return getRecordsICNS(domainName, osmosisRPC);
      case SupportedNS.Bonfida:
        return getRecordsSolana(domainName);
      case SupportedNS.StargazeDomains:
        return getRecordsStargaze(domainName);
      case SupportedNS.SuiNs:
        return getRecordsSui(domainName, suiRPC);
      case SupportedNS.AptosNs:
        return getRecordsAptos(domainName);
      case SupportedNS.SeiNS:
        return getRecordsSeiNS(domainName, seiRPC);
      default:
        return 'Not supported name service';
    }
  }

  public async resolveAddress(domainName: string, ns?: SupportedNS) {
    let service: SupportedNS;

    if (ns) {
      service = ns;
    } else {
      service = await detectNameService(domainName);
    }

    switch (service) {
      case SupportedNS.ENS:
        return getAddressENS(domainName, ethRPC);
      case SupportedNS.SpaceId:
        return getAddressSID(domainName, bnbRPC);
      case SupportedNS.UnstoppableDomains:
        return getAddressResolution(domainName, ethRPC, polygonRPC);
      case SupportedNS.DotBit:
        return getAddressDotBit(domainName);
      case SupportedNS.Zkns:
        return getAddressZKns(domainName);
      case SupportedNS.ICNS:
        return getAddressICNS(domainName, osmosisRPC);
      case SupportedNS.StargazeDomains:
        return getAddressStargaze(domainName);
      case SupportedNS.Bonfida:
        return getAddressSolana(domainName);
      case SupportedNS.SuiNs:
        return getAddressSui(domainName, suiRPC);
      case SupportedNS.AptosNs:
        return getAddressAptos(domainName);
      case SupportedNS.SeiNS:
        return getAddressSeiNS(domainName, seiRPC);
      default:
        return 'Not supported name service';
    }
  }

  public async resolveName(address: string, ns: SupportedNS) {
    switch (ns) {
      case SupportedNS.ENS:
        return getNameENS(address, ethRPC);
      case SupportedNS.SpaceId:
        return getNameSID(address, bnbRPC);
      case SupportedNS.UnstoppableDomains:
        return getNameResolution(address, ethRPC, polygonRPC);
      case SupportedNS.DotBit:
        return getNameDotBit(address);
      case SupportedNS.Zkns:
        return getNameZKns(address);
      case SupportedNS.ICNS:
        return getNameICNS(address, osmosisRPC);
      case SupportedNS.StargazeDomains:
        return getNameStargaze(address);
      case SupportedNS.Bonfida:
        return getNameSolana(address);
      case SupportedNS.AptosNs:
        return getNameAptos(address);
      case SupportedNS.SuiNs:
        return getNameSui(address, suiRPC);
      case SupportedNS.SeiNS:
        return getNameSeiNS(address, seiRPC);
      default:
        return 'Not supported name service';
    }
  }
}

async function main(domainNames: string) {
    const dotnames = new DotNamesSDK();
    const records = await dotnames.getRecords(domainNames, SupportedNS.ICNS);
    console.log(records);
}

main("dogemos.osmo");

