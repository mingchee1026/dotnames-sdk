
export async function getAddressZKns(domainName: string) {
    try{
        const response = await fetch(`https://omniapi.zkns.app/domain-resolver/getRecord/${domainName}`);
        const address = response.text();
        return address;
    } catch(err) {
        throw err;
    }
}

export async function getNameZKns(address: string) {
    try{
        const response = await fetch(`https://omniapi.zkns.app/domain-resolver/getReverseRecord/${address}`);
        const name = response.text();
        return name;
    } catch(err) {
        throw err;
    }
}