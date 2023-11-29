import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const resolverAddress = "osmo1xk0s8xgktn9x5vwcgtjdxqzadg88fgn33p8u9cnpdxwemvxscvast52cdd";

export async function getAddressICNS(domainName: string,osmosisProviderUrl:string) {
    try{
        const client = await CosmWasmClient.connect(osmosisProviderUrl);
        const {bech32_address}= await client.queryContractSmart(resolverAddress, 
                {
                    address_by_icns: {
                        "icns": domainName
                    }
                }
            );

        return bech32_address;
    } catch(err) {
        throw err;
    }

}

export async function getNameICNS(address: string, osmosisProviderUrl: string) {
  try {
    const client = await CosmWasmClient.connect(osmosisProviderUrl);

    const { name } = await client.queryContractSmart(resolverAddress, {
      primary_name: {
        address,
      },
    });

    return name;
  } catch (err) {
    throw err;
  }
}