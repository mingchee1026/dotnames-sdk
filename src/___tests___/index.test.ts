import { DotNamesSDK } from '../index';
import { SupportedNS } from '../types';
import { detectNameService } from '../utils/detectNameService';

describe('testing detect nameservice function', () => {
  test('DetectNameService', () => {
    return detectNameService('alice.eth').then((result) => {
      expect(result).toBe(SupportedNS.ENS);
    });
  });
});

describe('testing getRecords function', () => {
  let dotnames: any;
  beforeEach(() => {
    dotnames = new DotNamesSDK();
  });

  test('Ether Name Service', () => {
    return dotnames.getRecords('vitalik.eth').then((records: any) => {
      const expected = {
        text: {
          avatar: 'eip155:1/erc1155:0xb32979486938aa9694bfc898f35dbed459f44424/10063',
          url: 'https://vitalik.ca',
        },
        address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
        contentHash: 'ipfs://QmSJUUQucb2k1XyujefZehKNk6gnk4wdSxwgFGjyJ7fBCT',
      };

      expect(records).toEqual(expected);
    });
  }, 100000);

  test('SpaceID Name Service', () => {
    return dotnames
      .getRecords('resolver.bnb', SupportedNS.SpaceId)
      .then((records: any) => {
        const expected = {
          text: {},
          address: '0x3c83efA95B4f7796E74E93e5727908F5a636d3b6',
          contentHash: '',
        };

        expect(records).toEqual(expected);
      });
  }, 100000);

  test('Unstoppable Domain', () => {
    return dotnames
      .getRecords('homecakes.crypto', SupportedNS.UnstoppableDomains)
      .then((records: any) => {
        const expected = {
          text: {},
          address: '0xe7474D07fD2FA286e7e0aa23cd107F8379085037',
          contentHash: 'QmQ38zzQHVfqMoLWq2VeiMLHHYki9XktzXxLYTWXt8cydu',
        };

        expect(records).toEqual(expected);
      });
  }, 100000);

  test('DotBit(Das)', () => {
    return dotnames.getRecords('code.bit', SupportedNS.DotBit).then((records: any) => {
      const expected = {
        records: [],
        avatar: 'https://i.v2ex.co/h2ot4l5W.png',
        address: '0x527645f22824b0e232edf80413d3775d0d4b02fe',
        contentHash: 'k51qzi5uqu5dgqjy1i78mz3oumplzt0cye32w9m8ix8hg9chpz5trvj8luwv0c',
      };

      expect(records).toEqual(expected);
    });
  }, 100000);

  test('Zkns (ZkSync)', () => {
    return dotnames.getRecords('era.zk', SupportedNS.Zkns).then((records: any) => {
      const expected = {
        text: { twitter: 'era_domain', email: 'info@era.name' },
        address: '0xa0eDC5F03449BF8977AB0ECf5924a5126E513d4B',
        contentHash: undefined,
      };

      expect(records).toEqual(expected);
    });
  }, 100000);

  test('ICNS (Osmosis)', () => {
    return dotnames.getRecords('dogemos.osmo', SupportedNS.ICNS).then((records: any) => {
      const expected = {
        admins: ['osmo1ldhpay5c66xft8w7sn80c62sg7puxmu9fddyf7'],
        addresses: [
          {
            bech32_prefix: 'agoric',
            address: 'agoric132vhnaqqkx7sfadzp9g64xhdeyluyx0au6kkrv',
          },
          {
            bech32_prefix: 'akash',
            address: 'akash1z98eg2ztdp2glyla62629nrlvczg8s7fzskk5u',
          },
          {
            bech32_prefix: 'axelar',
            address: 'axelar1z98eg2ztdp2glyla62629nrlvczg8s7ft9dex8',
          },
          {
            bech32_prefix: 'band',
            address: 'band1m0ekxsudd0q7jpdzgd4672utcwx4fup38ew88f',
          },
          {
            bech32_prefix: 'bcna',
            address: 'bcna1z98eg2ztdp2glyla62629nrlvczg8s7f4mts95',
          },
          {
            bech32_prefix: 'bitsong',
            address: 'bitsong1k68l2k35255tuq9c8pskgje9kl26rexfv8x9ja',
          },
          {
            bech32_prefix: 'bostrom',
            address: 'bostrom1z98eg2ztdp2glyla62629nrlvczg8s7fvc0znp',
          },
          {
            bech32_prefix: 'c4e',
            address: 'c4e1fq265v60zaajc2023tsum3xmdntyk0xq2qm5rf',
          },
          {
            bech32_prefix: 'canto',
            address: 'canto1z98eg2ztdp2glyla62629nrlvczg8s7faa6pew',
          },
          {
            bech32_prefix: 'celes',
            address: 'celes1z98eg2ztdp2glyla62629nrlvczg8s7f07rx5f',
          },
          {
            bech32_prefix: 'cerberus',
            address: 'cerberus1z98eg2ztdp2glyla62629nrlvczg8s7fnvmccd',
          },
          {
            bech32_prefix: 'certik',
            address: 'certik1z98eg2ztdp2glyla62629nrlvczg8s7fgr8xvd',
          },
          {
            bech32_prefix: 'cheqd',
            address: 'cheqd1z98eg2ztdp2glyla62629nrlvczg8s7fpfh3xh',
          },
          {
            bech32_prefix: 'chihuahua',
            address: 'chihuahua1z98eg2ztdp2glyla62629nrlvczg8s7fv7klvy',
          },
          {
            bech32_prefix: 'comdex',
            address: 'comdex1z98eg2ztdp2glyla62629nrlvczg8s7fgyen53',
          },
          {
            bech32_prefix: 'cosmos',
            address: 'cosmos1z98eg2ztdp2glyla62629nrlvczg8s7f0tm3dx',
          },
          {
            bech32_prefix: 'cre',
            address: 'cre1z98eg2ztdp2glyla62629nrlvczg8s7ftrg5ct',
          },
          {
            bech32_prefix: 'cro',
            address: 'cro1twratnwy2xktg345xxsf75z57q4knreaaugqjx',
          },
          {
            bech32_prefix: 'darc',
            address: 'darc1z98eg2ztdp2glyla62629nrlvczg8s7fs20qq3',
          },
          {
            bech32_prefix: 'desmos',
            address: 'desmos1e9y5t589vpz3elypd9tw5n45qhug8arclulqdk',
          },
          {
            bech32_prefix: 'emoney',
            address: 'emoney1z98eg2ztdp2glyla62629nrlvczg8s7fqgp96m',
          },
          {
            bech32_prefix: 'evmos',
            address: 'evmos1z0s89w02gmsxa8qugfudykd68nf79qsmkek075',
          },
          {
            bech32_prefix: 'fetch',
            address: 'fetch1z98eg2ztdp2glyla62629nrlvczg8s7fukj403',
          },
          {
            bech32_prefix: 'galaxy',
            address: 'galaxy1z98eg2ztdp2glyla62629nrlvczg8s7fn5a3x5',
          },
          {
            bech32_prefix: 'gitopia',
            address: 'gitopia1z98eg2ztdp2glyla62629nrlvczg8s7f3nuxz9',
          },
          {
            bech32_prefix: 'gravity',
            address: 'gravity1z98eg2ztdp2glyla62629nrlvczg8s7ftmffgw',
          },
          {
            bech32_prefix: 'iaa',
            address: 'iaa1z98eg2ztdp2glyla62629nrlvczg8s7f6fmq0h',
          },
          {
            bech32_prefix: 'inj',
            address: 'inj1z0s89w02gmsxa8qugfudykd68nf79qsm73s9ky',
          },
          {
            bech32_prefix: 'ixo',
            address: 'ixo1z98eg2ztdp2glyla62629nrlvczg8s7fs79rf4',
          },
          {
            bech32_prefix: 'jkl',
            address: 'jkl1z98eg2ztdp2glyla62629nrlvczg8s7fk44q5e',
          },
          {
            bech32_prefix: 'juno',
            address: 'juno1z98eg2ztdp2glyla62629nrlvczg8s7feec226',
          },
          {
            bech32_prefix: 'kava',
            address: 'kava1z98eg2ztdp2glyla62629nrlvczg8s7fn70vmp',
          },
          {
            bech32_prefix: 'ki',
            address: 'ki1z98eg2ztdp2glyla62629nrlvczg8s7f7x27fj',
          },
          {
            bech32_prefix: 'kujira',
            address: 'kujira1z98eg2ztdp2glyla62629nrlvczg8s7f7refqv',
          },
          {
            bech32_prefix: 'lum',
            address: 'lum1z98eg2ztdp2glyla62629nrlvczg8s7f6pxccj',
          },
          {
            bech32_prefix: 'mantle',
            address: 'mantle1z98eg2ztdp2glyla62629nrlvczg8s7f30q5jv',
          },
          {
            bech32_prefix: 'mars',
            address: 'mars1z98eg2ztdp2glyla62629nrlvczg8s7fjkzgca',
          },
          {
            bech32_prefix: 'micro',
            address: 'micro1z98eg2ztdp2glyla62629nrlvczg8s7fanxk5j',
          },
          {
            bech32_prefix: 'nomic',
            address: 'nomic1z98eg2ztdp2glyla62629nrlvczg8s7fnngt7v',
          },
          {
            bech32_prefix: 'orai',
            address: 'orai1z98eg2ztdp2glyla62629nrlvczg8s7fucdjv4',
          },
          {
            bech32_prefix: 'oraib',
            address: 'oraib1rw28wncc7yxccwqfus5dlfd5cpufq87mj4krp2',
          },
          {
            bech32_prefix: 'oraie',
            address: 'oraie1yxtyghm5ywm3l8dujvp96ku5jv0tzdg6hvhyej',
          },
          {
            bech32_prefix: 'osmo',
            address: 'osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5',
          },
          {
            bech32_prefix: 'panacea',
            address: 'panacea1ygzmx6mpxnc43lk2l47ytrsr9gke89flppf644',
          },
          {
            bech32_prefix: 'pb',
            address: 'pb1htqrg8e6ucs6wkxceer4736x7y8mvvygeuu54r',
          },
          {
            bech32_prefix: 'persistence',
            address: 'persistence1m088jnq4n7flxsnp73wdmgvytm5zr87a7m80m7',
          },
          {
            bech32_prefix: 'pylo',
            address: 'pylo1z98eg2ztdp2glyla62629nrlvczg8s7fk3vufz',
          },
          {
            bech32_prefix: 'quick',
            address: 'quick1z98eg2ztdp2glyla62629nrlvczg8s7fy0tr55',
          },
          {
            bech32_prefix: 'rebus',
            address: 'rebus1z0s89w02gmsxa8qugfudykd68nf79qsm9jy5s2',
          },
          {
            bech32_prefix: 'regen',
            address: 'regen1z98eg2ztdp2glyla62629nrlvczg8s7fsfsdmz',
          },
          {
            bech32_prefix: 'rizon',
            address: 'rizon1z98eg2ztdp2glyla62629nrlvczg8s7fvk8qp7',
          },
          {
            bech32_prefix: 'secret',
            address: 'secret1z98eg2ztdp2glyla62629nrlvczg8s7fdw0cs6',
          },
          {
            bech32_prefix: 'sent',
            address: 'sent1z98eg2ztdp2glyla62629nrlvczg8s7f5sdgff',
          },
          {
            bech32_prefix: 'sif',
            address: 'sif1z98eg2ztdp2glyla62629nrlvczg8s7f2k58zd',
          },
          {
            bech32_prefix: 'somm',
            address: 'somm1z98eg2ztdp2glyla62629nrlvczg8s7frh5auv',
          },
          {
            bech32_prefix: 'star',
            address: 'star17gz00ll2f5efl7ta7xstt35hqtr9m3azuavrc2',
          },
          {
            bech32_prefix: 'stride',
            address: 'stride1z98eg2ztdp2glyla62629nrlvczg8s7fvqmde2',
          },
          {
            bech32_prefix: 'terra',
            address: 'terra1z98eg2ztdp2glyla62629nrlvczg8s7ff0p30x',
          },
          {
            bech32_prefix: 'tgrade',
            address: 'tgrade1z98eg2ztdp2glyla62629nrlvczg8s7fytn0rk',
          },
          {
            bech32_prefix: 'tori',
            address: 'tori1z98eg2ztdp2glyla62629nrlvczg8s7fdlvckk',
          },
          {
            bech32_prefix: 'umee',
            address: 'umee1z98eg2ztdp2glyla62629nrlvczg8s7faaxwf5',
          },
        ],
        address: 'osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5',
      };

      expect(records).toEqual(expected);
    });
  }, 10000);

  test('Bonfida (Solana)', () => {
    return dotnames
      .getRecords('bonfida.sol', SupportedNS.Bonfida)
      .then((records: any) => {
        const expected = {
          text: {
            url: 'https://sns.id',
            discord: 'https://discord.gg/ESZzszuuQh',
            github: 'https://github.com/Bonfida/',
            twitter: 'https://twitter.com/bonfida',
            telegram: 'https://t.me/bonfidatg',
            pic: 'https://pbs.twimg.com/profile_images/1608753440741642240/IKcnpTnZ_400x400.png',
          },
          address: 'HKKp49qGWXd639QsuH7JiLijfVW5UtCVY4s1n2HANwEA',
          contentHash: undefined,
        };

        expect(records).toEqual(expected);
      });
  }, 100000);

  test('Stargaze Domains (Stargaze Chain)', () => {
    return dotnames
      .getRecords('nikan.stars', SupportedNS.StargazeDomains)
      .then((records: any) => {
        const expected = {
          address: 'stars1e4pzleql4gm6hngv6dfcu5hla0ettrrxm9zlne',
          imageNFT: null,
          records: { telegram: 'nikan_mk' },
        };

        expect(records).toEqual(expected);
      });
  }, 10000);

  test('Sui Name Service', () => {
    return dotnames.getRecords('coin.sui', SupportedNS.SuiNs).then((records: any) => {
      const expected = {
        address: '0xa4c4c40fb38cae294e42bcbf256acea1bbd77d3ea5b21d3cd009b5622e47f392',
        nftId: '0xc660f34cb50a98c12a98bd4233b713068fde71277a825454abba4fbbeed44fb0',
        records: [],
      };

      expect(records).toEqual(expected);
    });
  }, 5000);

  test('Aptos Name Service', () => {
    return dotnames.getRecords('test.apt', SupportedNS.AptosNs).then((records: any) => {
      const expected = {
        text: {},
        address: {
          address: '0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4',
        },
        ipfs: undefined,
      };

      expect(records).toEqual(expected);
    });
  }, 5000);

  test('Sei Name Service', () => {
    return dotnames
      .getRecords('123456789.sei', SupportedNS.SeiNS)
      .then((records: any) => {
        const expected = {
          address: 'sei1dr94pqt23atf285xvl4c63wvhxaf7mkdjzle24',
          owner: 'sei1dr94pqt23atf285xvl4c63wvhxaf7mkdjzle24',
          resolver: 'sei17xd4qyfxwnzylewlr99927h7s48tu80mdm56y9eravpqvsmrml5srrmtty',
          avatar: 'https://picsum.photos/id/237/200/300',
        };

        expect(records).toEqual(expected);
      });
  }, 5000);
});

describe('testing resolveAddress function', () => {
  let dotnames: any;
  beforeEach(() => {
    dotnames = new DotNamesSDK();
  });

  test('ENS', () => {
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
      expect(address).toBe(
        '0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4',
      );
    });
  }, 5000);

  test('Sui Name Service', () => {
    return dotnames.resolveAddress('coin.sui').then((address: string) => {
      expect(address).toBe(
        '0xa4c4c40fb38cae294e42bcbf256acea1bbd77d3ea5b21d3cd009b5622e47f392',
      );
    });
  }, 5000);

  test('Sei Name Service', () => {
    return dotnames
      .resolveAddress('123456789.sei', SupportedNS.SeiNS)
      .then((address: string) => {
        expect(address).toBe('sei1dr94pqt23atf285xvl4c63wvhxaf7mkdjzle24');
      });
  }, 2000);
});

describe('testing resolveName function', () => {
  let dotnames: any;
  beforeEach(() => {
    dotnames = new DotNamesSDK();
  });

  test('ENS', () => {
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
      .resolveName(
        '0x94ef5300cbc0aa600a821ccbc561b057e456ab23',
        SupportedNS.UnstoppableDomains,
      )
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
      .resolveName(
        'stars1myec2z2wjpkhmf8tlhkzcjck04w25sc6ymhplz',
        SupportedNS.StargazeDomains,
      )
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
        SupportedNS.AptosNs,
      )
      .then((name: string) => {
        expect(name).toBe('1717');
      });
  }, 5000);

  test('Sui Name Service', () => {
    return dotnames
      .resolveName(
        '0x175a95aa39e8bb6eecb49692ec6f9705e4bfac24877dee331a00dd15a2012adf',
        SupportedNS.AptosNs,
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
      .resolveName(
        '0x94ef5300cbc0aa600a821ccbc561b057e456ab23',
        SupportedNS.UnstoppableDomains,
      )
      .then((name: string) => {
        expect(name).toBe('sandy.nft');
      });
  }, 10000);
});
