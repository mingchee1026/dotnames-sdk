import { SupportedChains } from '../types';
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

export async function detectNameService(domainName: String): Promise<SupportedChains> {
  const extension = getExtensionFromDomain(domainName).toLowerCase();
  if (extension === '') {
    return SupportedChains.None;
  }

  const extensionMap = await fetchExtensionData();
  const domainServiceName = extensionMap.hasOwnProperty(extension) ? extensionMap[extension] : null;

  switch (domainServiceName) {
    case 'ENS':
      return SupportedChains.ENS;
    case 'SpaceId':
      return SupportedChains.SpaceId;
    case 'UnstoppableDomains':
      return SupportedChains.UnstoppableDomains;
    case 'DotBit':
      return SupportedChains.DotBit;
    case 'Zkns':
      return SupportedChains.Zkns;
    case 'ICNS':
      return SupportedChains.ICNS;
    case 'StargazeDomains':
      return SupportedChains.StargazeDomains;
    case 'Bonfida':
      return SupportedChains.Bonfida;
    case 'SuiNs':
      return SupportedChains.SuiNs;
    case 'AptosNs':
      return SupportedChains.AptosNs;
    default:
      return SupportedChains.ICNS;
  }
}
