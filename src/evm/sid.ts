import { ethers } from 'ethers';
const SID = require('@siddomains/sidjs').default;      
const SIDfunctions = require('@siddomains/sidjs');
const rpc = require('@siddomains/sidjs/dist/constants/rpc');

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

export async function getRecordsSID(domainName: string, bnbProviderUrl: string) {
  try {
      const provider = new ethers.providers.JsonRpcProvider(bnbProviderUrl);
      const sid = new SID({ provider, sidAddress: SIDfunctions.getSidAddress('56') });
      
      // Get text record
      const avatar = await sid.name(domainName).getText("avatar");
      const description = await sid.name(domainName).getText("description");
      const display = await sid.name(domainName).getText("display");
      const email = await sid.name(domainName).getText("email");
      const keywords = await sid.name(domainName).getText("keywords");
      const mail = await sid.name(domainName).getText("mail");
      const notice = await sid.name(domainName).getText("notice");
      const location = await sid.name(domainName).getText("location");
      const phone = await sid.name(domainName).getText("phone");
      const url = await sid.name(domainName).getText("url");

      const address = await sid.name(domainName).getAddress();

      const contentHash = await sid.name(domainName).getContent();

      let records: Records = {
          text: {},
          address: address,
          contentHash: contentHash.contentType === 'error' ? "" : contentHash.contentType,
      };

      if (avatar) { records.text.avatar = avatar; }
      if (description) { records.text.description = description; }
      if (display) { records.text.display = display; }
      if (email) { records.text.email = email; }
      if (keywords) { records.text.keywords = keywords; }
      if (mail) { records.text.mail = mail; }
      if (notice) { records.text.notice = notice; }
      if (location) { records.text.location = location; }
      if (phone) { records.text.phone = phone; }
      if (url) { records.text.url = url; }
      
      return records;
  } catch (err) {
      console.log("error occured: ", err);
      // throw err;
  }
}

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