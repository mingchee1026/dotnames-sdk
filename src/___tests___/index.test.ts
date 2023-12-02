import { DotNamesSDK } from '../index';
import {  SupportedNS } from '../types';
import { detectNameService } from '../utils/detectNameService';

describe('testing detect nameservice function', () => {
  test('DetectNameService', () => {
    return detectNameService('alice.eth').then((result) => {
      expect(result).toBe(SupportedNS.ENS);
    });
  });
});

describe('testing resolveAddress function', () => {
  const dotnames = new DotNamesSDK();

  test('ENS', () => {  const dotnames = new DotNamesSDK(); 

    return dotnames.resolveAddress('alice.eth').then((address: string) => {
      expect(address).toBe('0xcd2E72aEBe2A203b84f46DEEC948E6465dB51c75');
    });
  }, 4000);

  test('SpaceID', () => {
    return dotnames.resolveAddress('nft.bnb').then((address: string) => {
      expect(address).toBe('0x5242333D36A31f9253d8A360e20e622C635Bd74c');
    });
  }, 4000);

  test('Unstoppable Domain', () => {
    return dotnames.resolveAddress('sandy.crypto').then((address: string) => {
      expect(address).toBe('0x94ef5300cbc0aa600a821ccbc561b057e456ab23');
    });
  }, 5000);

  test('DotBit(Das)', () => {
    return dotnames.resolveAddress('imac.bit').then((address: string) => {
      expect(address).toBe('0x5728088435fb8788472a9ca601fbc0b9cbea8be3');
    });
  }, 5000);

  test('Zkns (ZkSync)', () => {
    return dotnames.resolveAddress('ross.zk').then((address: string) => {
      expect(address).toBe('0xf9473a70724b8f79c3ea108d5cb69d042c9fe76c');
    });
  }, 5000);

  test('ICNS (Osmosis)', () => {
    return dotnames.resolveAddress('dogemos.osmo').then((address: string) => {
      expect(address).toBe('osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5');
    });
  }, 5000);

  test('Stargaze Domains (Stargaze Chain)', () => {
    return dotnames.resolveAddress('nikan.stars').then((address: string) => {
      expect(address).toBe('stars1e4pzleql4gm6hngv6dfcu5hla0ettrrxm9zlne');
    });
  }, 2000);

  test('Bonfida (Solana)', () => {
    return dotnames.resolveAddress('🇺🇸.sol').then((address: string) => {
      expect(address).toBe('CnNHzcp7L4jKiA2Rsca3hZyVwSmoqXaT8wGwzS8WvvB2');
    });
  }, 4000);

  test('Aptos Name Service', () => {
    return dotnames.resolveAddress('test.apt').then((address: string) => {
      expect(address).toBe('0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4');
    });
  }, 5000);

  test('Sui Name Service', () => {
    return dotnames.resolveAddress('coin.sui').then((address: string) => {
      expect(address).toBe('0xa4c4c40fb38cae294e42bcbf256acea1bbd77d3ea5b21d3cd009b5622e47f392');
    });
  }, 5000);

  test('Sei Name Service', () => {
    return dotnames.resolveAddress('123456789.sei', SupportedNS.SeiNS).then((address: string) => {
      expect(address).toBe('sei1dr94pqt23atf285xvl4c63wvhxaf7mkdjzle24');
    });
  }, 2000);

});

describe('testing resolveName function', () => {
  const dotnames = new DotNamesSDK();

  test('ENS', () => {
      const dotnames = new DotNamesSDK();
    return dotnames
      .resolveName('0x5555763613a12D8F3e73be831DFf8598089d3dCa', SupportedNS.ENS)
      .then((name: string) => {
        expect(name).toBe('ricmoo.eth');
      });
  }, 5000);

  test('SpaceID', () => {
    return dotnames
      .resolveName('0x5242333D36A31f9253d8A360e20e622C635Bd74c', SupportedNS.SpaceId)
      .then((name: string) => {
        expect(name).toBe('denali0.bnb');
      });
  }, 5000);

  test('Unstoppable Domain', () => {
    return dotnames
      .resolveName('0x94ef5300cbc0aa600a821ccbc561b057e456ab23', SupportedNS.UnstoppableDomains)
      .then((name: string) => {
        expect(name).toBe('sandy.nft');
      });
  }, 5000);

  test('DotBit(Das)', () => {
    return dotnames
      .resolveName('0x5728088435fb8788472a9ca601fbc0b9cbea8be3', SupportedNS.DotBit)
      .then((name: string) => {
        expect(name).toBe('imac.bit');
      });
  }, 5000);

  test('Zkns (ZkSync)', () => {
    return dotnames
      .resolveName('0xf9473a70724b8f79c3ea108d5cb69d042c9fe76c', SupportedNS.Zkns)
      .then((name: string) => {
        expect(name).toBe('ross.zk');
      });
  }, 5000);

  test('ICNS (Osmosis)', () => {
    return dotnames
      .resolveName('osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5', SupportedNS.ICNS)
      .then((name: string) => {
        expect(name).toBe('dogemos');
      });
  }, 5000);

  test('Stargaze Domains (Stargaze Chain)', () => {
    return dotnames
      .resolveName('stars1myec2z2wjpkhmf8tlhkzcjck04w25sc6ymhplz', SupportedNS.StargazeDomains)
      .then((name: string) => {
        expect(name).toBe(null);
      });
  }, 5000);

  test('Bonfida (Solana)', () => {
    return dotnames
      .resolveName('Crf8hzfthWGbGbLTVCiqRqV5MVnbpHB1L9KQMd6gsinb', SupportedNS.Bonfida)
      .then((name: string) => {
        expect(name).toBe('bonfida');
      });
  }, 5000);

  test('Aptos Name Service', () => {
    return dotnames
      .resolveName(
        '0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4',
        SupportedNS.AptosNs
      )
      .then((name: string) => {
        expect(name).toBe('1717');
      });
  }, 5000);

  test('Sui Name Service', () => {
    return dotnames
      .resolveName(
        '0x175a95aa39e8bb6eecb49692ec6f9705e4bfac24877dee331a00dd15a2012adf',
        SupportedNS.AptosNs
      )
      .then((name: string) => {
        expect(name).toBe(undefined);
      });
  }, 5000);

  test('Sei Name Service', () => {
    return dotnames
      .resolveName('sei1dr94pqt23atf285xvl4c63wvhxaf7mkdjzle24', SupportedNS.SeiNS)
      .then((name: string) => {
        expect(name).toBe('1234567890.sei');
      });
  }, 5000);

  test('Unstoppable Name Service', () => {
    return dotnames
      .resolveName('0x94ef5300cbc0aa600a821ccbc561b057e456ab23', SupportedNS.UnstoppableDomains)
      .then((name: string) => {
        expect(name).toBe('sandy.nft');
      });
  }, 10000);
});
