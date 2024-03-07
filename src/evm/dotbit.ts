import { BitPluginAvatar } from '@dotbit/plugin-avatar';
import { createInstance } from 'dotbit';

const dotbit = createInstance();

export async function getRecordsDotBit(domainName: string) {
  dotbit.installPlugin(new BitPluginAvatar());
  const avatar = await dotbit.avatar(domainName);

  const records = await dotbit.records(domainName, 'avatar');

  const { account_id_hex } = await dotbit.accountInfo(domainName);

  const contentHash = await dotbit.dweb(domainName);

  const results = {
    records: records,
    avatar: avatar?.url,
    address: account_id_hex,
    contentHash: contentHash?.value,
  };

  return results;
}

export async function getAddressDotBit(domainName: string) {
  const { account_id_hex } = await dotbit.accountInfo(domainName);
  return account_id_hex;
}

export async function getNameDotBit(address: string) {
  const { account } = await dotbit.accountById(address);
  return account;
}
