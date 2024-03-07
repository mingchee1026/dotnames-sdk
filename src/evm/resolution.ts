import { Resolution } from '@unstoppabledomains/resolution';

interface Records {
  text: {
    avatar?: string;
    description?: string;
    display?: string;
    email?: string;
    keywords?: string;
    mail?: string;
    notice?: string;
    location?: string;
    phone?: string;
    url?: string;
  };
  address: string | undefined;
  contentHash: string | undefined;
}

export async function getRecordsResolution(
  domainName: string,
  ethProviderUrl: string,
  polygonProviderUrl: string,
) {
  try {
    const resolution = new Resolution({
      sourceConfig: {
        uns: {
          locations: {
            Layer1: {
              url: ethProviderUrl,
              network: 'mainnet',
            },
            Layer2: {
              url: polygonProviderUrl,
              network: 'polygon-mainnet',
            },
          },
        },
        zns: {
          url: 'https://api.zilliqa.com',
          network: 'mainnet',
        },
      },
    });

    // Get text record
    const avatar: string = await getRecord(resolution, domainName, 'avatar');
    const description = await getRecord(resolution, domainName, 'description');
    const display = await getRecord(resolution, domainName, 'display');
    const email = await getRecord(resolution, domainName, 'email');
    const keywords = await getRecord(resolution, domainName, 'keywords');
    const mail = await getRecord(resolution, domainName, 'mail');
    const notice = await getRecord(resolution, domainName, 'notice');
    const location = await getRecord(resolution, domainName, 'location');
    const phone = await getRecord(resolution, domainName, 'phone');
    const url = await getRecord(resolution, domainName, 'url');

    const address = await resolution.addr(domainName, 'ETH');

    const contentHash = await resolution.ipfsHash(domainName);

    const records: Records = {
      text: {},
      address: address,
      contentHash: contentHash,
    };

    if (avatar) {
      records.text.avatar = avatar;
    }
    if (description) {
      records.text.description = description;
    }
    if (display) {
      records.text.display = display;
    }
    if (email) {
      records.text.email = email;
    }
    if (keywords) {
      records.text.keywords = keywords;
    }
    if (mail) {
      records.text.mail = mail;
    }
    if (notice) {
      records.text.notice = notice;
    }
    if (location) {
      records.text.location = location;
    }
    if (phone) {
      records.text.phone = phone;
    }
    if (url) {
      records.text.url = url;
    }

    return records;
  } catch (err) {
    throw err;
  }
}

export async function getAddressResolution(
  domainName: string,
  ethProviderUrl: string,
  polygonProviderUrl: string,
) {
  try {
    const resolution = new Resolution({
      sourceConfig: {
        uns: {
          locations: {
            Layer1: {
              url: ethProviderUrl,
              network: 'mainnet',
            },
            Layer2: {
              url: polygonProviderUrl,
              network: 'polygon-mainnet',
            },
          },
        },
        zns: {
          url: 'https://api.zilliqa.com',
          network: 'mainnet',
        },
      },
    });

    const address = await resolution.addr(domainName, 'ETH');
    return address;
  } catch (err) {
    throw err;
  }
}

export async function getNameResolution(
  address: string,
  ethProviderUrl: string,
  polygonProviderUrl: string,
) {
  try {
    const resolution = new Resolution({
      sourceConfig: {
        uns: {
          locations: {
            Layer1: {
              url: ethProviderUrl,
              network: 'mainnet',
            },
            Layer2: {
              url: polygonProviderUrl,
              network: 'polygon-mainnet',
            },
          },
        },
        zns: {
          url: 'https://api.zilliqa.com',
          network: 'mainnet',
        },
      },
    });

    const name = await resolution.reverse(address);
    return name;
  } catch (err) {
    throw err;
  }
}

async function getRecord(
  resolution: Resolution,
  domain: string,
  recordKey: string,
): Promise<any> {
  try {
    const value = await resolution.record(domain, recordKey);
    return value;
  } catch (err) {
    console.error;
  }
}
