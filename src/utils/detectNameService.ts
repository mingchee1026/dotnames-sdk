import { SupportedNS } from '../types';
import extensionData from './extensionData.json';

function getExtensionFromDomain(domainName: string): string {
  const extension = domainName.split('.').pop();
  if (!extension) return '';
  return extension.toLowerCase();
}

function fetchExtensionData() {
  return extensionData;
}

export async function detectNameService(domainName: string): Promise<SupportedNS> {
  const extension = getExtensionFromDomain(domainName).toLowerCase();
  if (extension === '') {
    return SupportedNS.None;
  }

  const extensionMap = fetchExtensionData();
  const domainServiceName = extensionMap.hasOwnProperty(extension)
    ? extensionMap[extension as keyof typeof extensionMap]
    : null;

  switch (domainServiceName) {
    case 'ENS':
      return SupportedNS.ENS;
    case 'SpaceId':
      return SupportedNS.SpaceId;
    case 'UnstoppableDomains':
      return SupportedNS.UnstoppableDomains;
    case 'DotBit':
      return SupportedNS.DotBit;
    case 'Zkns':
      return SupportedNS.Zkns;
    case 'ICNS':
      return SupportedNS.ICNS;
    case 'StargazeDomains':
      return SupportedNS.StargazeDomains;
    case 'Bonfida':
      return SupportedNS.Bonfida;
    case 'SuiNs':
      return SupportedNS.SuiNs;
    case 'AptosNs':
      return SupportedNS.AptosNs;
    case 'SeiNS':
      return SupportedNS.SeiNS;
    default:
      return SupportedNS.ICNS;
  }
}
