import { getAddressDotBit, getNameDotBit } from './evm/dotbit';
import { getAddressENS, getNameENS } from './evm/ens';
import { getAddressResolution, getNameResolution } from './evm/resolution';
import { getAddressSID, getNameSID } from './evm/sid';
import { getAddressZKns, getNameZKns } from './evm/zkns';
import { getAddressAptos, getNameAptos } from './non-evm/aptosns';
import { getAddressICNS, getNameICNS } from './non-evm/icns';
import { getAddressSolana, getNameSolana } from './non-evm/solana';
import { getAddressStargaze, getNameStargaze } from './non-evm/stargaze';
import { getAddressSui, getNameSui } from './non-evm/suins';
import { getAddressSeiNS, getNameSeiNS } from './non-evm/seins';
import { SupportedChains } from './types';
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

  public async resolveAddress(domainName: string, ns?: SupportedChains) {
    let service: SupportedChains;

    if (ns) {
      service = ns;
    } else {
      service = await detectNameService(domainName);
    }

    switch (service) {
      case SupportedChains.ENS:
        return getAddressENS(domainName, ethRPC);
      case SupportedChains.SpaceId:
        return getAddressSID(domainName, bnbRPC);
      case SupportedChains.UnstoppableDomains:
        return getAddressResolution(domainName, ethRPC, polygonRPC);
      case SupportedChains.DotBit:
        return getAddressDotBit(domainName);
      case SupportedChains.Zkns:
        return getAddressZKns(domainName);
      case SupportedChains.ICNS:
        return getAddressICNS(domainName, osmosisRPC);
      case SupportedChains.StargazeDomains:
        return getAddressStargaze(domainName);
      case SupportedChains.Bonfida:
        return getAddressSolana(domainName);
      case SupportedChains.SuiNs:
        return getAddressSui(domainName, suiRPC);
      case SupportedChains.AptosNs:
        return getAddressAptos(domainName);
      case SupportedChains.SeiNS:
        return getAddressSeiNS(domainName, seiRPC);
      default:
        return 'Not supported name service';
    }
  }

  public async resolveName(address: string, ns: SupportedChains) {
    switch (ns) {
      case SupportedChains.ENS:
        return getNameENS(address, ethRPC);
      case SupportedChains.SpaceId:
        return getNameSID(address, bnbRPC);
      case SupportedChains.UnstoppableDomains:
        return getNameResolution(address, ethRPC, polygonRPC);
      case SupportedChains.DotBit:
        return getNameDotBit(address);
      case SupportedChains.Zkns:
        return getNameZKns(address);
      case SupportedChains.ICNS:
        return getNameICNS(address, osmosisRPC);
      case SupportedChains.StargazeDomains:
        return getNameStargaze(address);
      case SupportedChains.Bonfida:
        return getNameSolana(address);
      case SupportedChains.AptosNs:
        return getNameAptos(address);
      case SupportedChains.SuiNs:
        return getNameSui(address, suiRPC);
      case SupportedChains.SeiNS:
        return getNameSeiNS(address, seiRPC);
      default:
        return 'Not supported name service';
    }
  }
}
