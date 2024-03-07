// import { resolve } from "@bonfida/spl-name-service";
// const bonfida = require('@bonfida/spl-name-service');
import * as bonfida from '@bonfida/spl-name-service';
import {
  getArweaveRecord,
  getBackpackRecord,
  getBscRecord,
  getBtcRecord,
  getDiscordRecord,
  getDogeRecord,
  getEmailRecord,
  getEthRecord,
  getGithubRecord,
  getInjectiveRecord,
  getIpfsRecord,
  getLtcRecord,
  getPicRecord,
  getPointRecord,
  getRedditRecord,
  getShdwRecord,
  getSolRecord,
  getTelegramRecord,
  getTwitterRecord,
  getUrlRecord,
  Record,
} from '@bonfida/spl-name-service';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';

interface Records {
  text: {
    ARWV?: string;
    SOL?: string;
    ETH?: string;
    BTC?: string;
    LTC?: string;
    DOGE?: string;
    email?: string;
    url?: string;
    discord?: string;
    github?: string;
    reddit?: string;
    twitter?: string;
    telegram?: string;
    pic?: string;
    SHDW?: string;
    POINT?: string;
    BSC?: string;
    INJ?: string;
    backpack?: string;
  };
  address: string | undefined;
  contentHash: string | undefined;
}

export async function getRecordsSolana(domainName: string) {
  try {
    if (domainName.includes('.')) {
      domainName = domainName.split('.')[0];
    }

    const connection = new Connection(clusterApiUrl('mainnet-beta'));

    const address = await bonfida.resolve(connection, domainName);

    const contentHash = await getRealRecord(connection, domainName, Record.IPFS);
    const ARWV = await getRealRecord(connection, domainName, Record.ARWV);
    const SOL = await getRealRecord(connection, domainName, Record.SOL);
    const ETH = await getRealRecord(connection, domainName, Record.ETH);
    const BTC = await getRealRecord(connection, domainName, Record.BTC);
    const LTC = await getRealRecord(connection, domainName, Record.LTC);
    const DOGE = await getRealRecord(connection, domainName, Record.DOGE);
    const email = await getRealRecord(connection, domainName, Record.Email);
    const url = await getRealRecord(connection, domainName, Record.Url);
    const discord = await getRealRecord(connection, domainName, Record.Discord);
    const github = await getRealRecord(connection, domainName, Record.Github);
    const reddit = await getRealRecord(connection, domainName, Record.Reddit);
    const twitter = await getRealRecord(connection, domainName, Record.Twitter);
    const telegram = await getRealRecord(connection, domainName, Record.Telegram);
    const pic = await getRealRecord(connection, domainName, Record.Pic);
    const SHDW = await getRealRecord(connection, domainName, Record.SHDW);
    const POINT = await getRealRecord(connection, domainName, Record.POINT);
    const BSC = await getRealRecord(connection, domainName, Record.BSC);
    const INJ = await getRealRecord(connection, domainName, Record.Injective);
    const backpack = await getRealRecord(connection, domainName, Record.Backpack);

    const records: Records = {
      text: {},
      address: address.toBase58(),
      contentHash: contentHash,
    };

    if (ARWV) {
      records.text.ARWV = ARWV;
    }
    if (SOL) {
      records.text.SOL = SOL;
    }
    if (ETH) {
      records.text.ETH = ETH;
    }
    if (BTC) {
      records.text.BTC = BTC;
    }
    if (LTC) {
      records.text.LTC = LTC;
    }
    if (DOGE) {
      records.text.DOGE = DOGE;
    }
    if (email) {
      records.text.email = email;
    }
    if (url) {
      records.text.url = url;
    }
    if (discord) {
      records.text.discord = discord;
    }
    if (github) {
      records.text.github = github;
    }
    if (reddit) {
      records.text.reddit = reddit;
    }
    if (twitter) {
      records.text.twitter = twitter;
    }
    if (telegram) {
      records.text.telegram = telegram;
    }
    if (pic) {
      records.text.pic = pic;
    }
    if (SHDW) {
      records.text.SHDW = SHDW;
    }
    if (POINT) {
      records.text.POINT = POINT;
    }
    if (BSC) {
      records.text.BSC = await getBscRecord(connection, domainName);
    }
    if (INJ) {
      records.text.INJ = INJ;
    }
    if (backpack) {
      records.text.backpack = backpack;
    }

    return records;
  } catch (err) {
    throw err;
  }
}

export async function getAddressSolana(domainName: string) {
  try {
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    const address = await bonfida.resolve(connection, domainName);
    return address.toBase58();
  } catch (err) {
    throw err;
  }
}

export async function getNameSolana(address: string) {
  try {
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    const name = await bonfida.performReverseLookup(connection, new PublicKey(address));
    return name;
  } catch (err) {
    throw err;
  }
}

async function getRealRecord(
  connection: Connection,
  domain: string,
  record: Record,
): Promise<any> {
  try {
    if (record == Record.IPFS) {
      return await getIpfsRecord(connection, domain);
    }
    if (record == Record.ARWV) {
      return await getArweaveRecord(connection, domain);
    }
    if (record == Record.SOL) {
      return await getSolRecord(connection, domain);
    }
    if (record == Record.ETH) {
      return await getEthRecord(connection, domain);
    }
    if (record == Record.BTC) {
      return await getBtcRecord(connection, domain);
    }
    if (record == Record.LTC) {
      return await getLtcRecord(connection, domain);
    }
    if (record == Record.DOGE) {
      return await getDogeRecord(connection, domain);
    }
    if (record == Record.Email) {
      return await getEmailRecord(connection, domain);
    }
    if (record == Record.Url) {
      return await getUrlRecord(connection, domain);
    }
    if (record == Record.Discord) {
      return await getDiscordRecord(connection, domain);
    }
    if (record == Record.Github) {
      return await getGithubRecord(connection, domain);
    }
    if (record == Record.Reddit) {
      return await getRedditRecord(connection, domain);
    }
    if (record == Record.Twitter) {
      return await getTwitterRecord(connection, domain);
    }
    if (record == Record.Telegram) {
      return await getTelegramRecord(connection, domain);
    }
    if (record == Record.Pic) {
      return await getPicRecord(connection, domain);
    }
    if (record == Record.SHDW) {
      return await getShdwRecord(connection, domain);
    }
    if (record == Record.POINT) {
      return await getPointRecord(connection, domain);
    }
    if (record == Record.BSC) {
      return await getBscRecord(connection, domain);
    }
    if (record == Record.Injective) {
      return await getInjectiveRecord(connection, domain);
    }
    if (record == Record.Backpack) {
      return await getBackpackRecord(connection, domain);
    }

    return null;
  } catch (err) {
    console.error;
  }
}
