import { ethers } from 'ethers';

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

export async function getRecordsENS(domainName: string, providerUrl: string) {
    try {
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);

        const resolver = await provider.getResolver(domainName);

        // Get text record
        const avatar = await resolver?.getText("avatar");
        const description = await resolver?.getText("description");
        const display = await resolver?.getText("display");
        const email = await resolver?.getText("email");
        const keywords = await resolver?.getText("keywords");
        const mail = await resolver?.getText("mail");
        const notice = await resolver?.getText("notice");
        const location = await resolver?.getText("location");
        const phone = await resolver?.getText("phone");
        const url = await resolver?.getText("url");

        const address = await resolver?.getAddress();

        const contentHash = await resolver?.getContentHash();

        let records: Records = {
            text: {},
            address: address,
            contentHash: contentHash
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
        throw err;
    }
}

export async function getAddressENS(domainName:string, providerUrl: string) {
    try{
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        const address = await provider.resolveName(domainName);
        return address;
    } catch (err) {
        throw err;
    }
}

export async function getNameENS(address:string, providerUrl: string) {
    try{
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        const name = await provider.lookupAddress(address);
        return name!;
    } catch (err) {
        throw err;
    }
}