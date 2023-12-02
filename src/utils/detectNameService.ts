import { SupportedNS } from '../types';
import extensionData from './extensionData.json';

const extensionDataUrl = 'https://sow-sdk-support-9gw2zt6e4-0xdead-e0f.vercel.app/api/extension';

function getExtensionFromDomain(domainName: String): String {
  const extension = domainName.split('.').pop();
  if (!extension) return '';
  return extension.toLowerCase();
}

async function fetchExtensionData() {
  try {
    const response = await fetch(extensionDataUrl);
    if (response.status !== 200) {
      return extensionData;
    }
    return await response.json();
  } catch (err) {
    return extensionData;
  }
}

export async function detectNameService(domainName: String): Promise<SupportedNS> {
  const extension = getExtensionFromDomain(domainName).toLowerCase();
  if (extension === '') {
    return SupportedNS.None;
  }

  const extensionMap = await fetchExtensionData();
  const domainServiceName = extensionMap.hasOwnProperty(extension) ? extensionMap[extension] : null;

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
    default:
      return SupportedNS.ICNS;
  }
}
