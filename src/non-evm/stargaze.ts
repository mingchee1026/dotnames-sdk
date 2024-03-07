const SGNames=require("sgnames.js");
// import SGNames from "sgnames.js";

export async function getRecordsStargaze(domainName: string) {
    try{
        const [, domain, topLevelDomain] = domainName.match(/^(.+)\.([^.]+)$/) || [];
        const nameInfo = await SGNames.fetchNameInfo(domain);
        let records: { address?: string, imageNFT?: any, records?: any } = {};

        if (nameInfo?.records) {
            records.address = nameInfo.stargazeAddress,
            records.imageNFT = nameInfo.imageNFT;
            records.records = nameInfo.records;
        }

        return records;
    } catch(err) {
        throw err;
    }
}

export async function getAddressStargaze(domainName: string) {
    try{
        const [, domain, topLevelDomain] = domainName.match(/^(.+)\.([^.]+)$/) || [];
        const {stargazeAddress} = await SGNames.fetchNameInfo(domain);
        return stargazeAddress;
    } catch(err) {
        throw err;
    }
}

export async function getNameStargaze(address: string) {
    try{
        const name = await SGNames.fetchNameOfAddress(address);
        return name;
    } catch(err) {
        throw err;
    }
}