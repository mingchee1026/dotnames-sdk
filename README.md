# DotNames-Js : A Javascript Library To Resolve Names On All Blockchains

## Overview of the SDK

### Installation

Install @dotlabs/dotnamesjs

```
yarn add @dotlabs/dotnamesjs
```

### Getting Started

Setup with default RPC (May increase latency) :

```
  const dotnames = new DotNamesSDK();
```

Setup with custom RPC :

```
  const dotnames = new DotNamesSDK(
  param:{ ethRPC: '',
  polygonRPC: '',
  bnbRPC: '',
  suiRPC: '',
  seiRPC: '',
  osmosisRPC: ''
  });

```

Can be initalized with required selected RPC configuration

### Supported Naming Service

```
import {SupportedNs} from '@dotnames/dotnamesjs'

```

#### Initial Supported Naming Services :   
ENS,
UnstoppableDomains
DotBit,
Zkns,
ICNS,
StargazeDomains,
Bonfida,
SuiNs,
AptosNs,
SeiNS,


### Resolving addresses from names without providing domain name identifier

ENS : 
```
const ensAddress = await dotnames.resolveAddress('alice.eth');
```
Unstoppable Domains : 
```
const udAddress = await dotnames.resolveAddress('alice.crypto');
```
Dotsei Domains: 
```
const seiAddress = await dotnames.resolveAddress('alice.sei');
```
Space Id : 
```
const sidAddress = await dotnames.resolveAddress('alice.bnb');
```
### Resolving addresses from names by providing domain name identifier

ENS : 
```
const ensAddress = await dotnames.resolveAddress('alice.eth',SupportedNS.ENS);
```
Unstoppable Domains : 
```
const udAddress = await dotnames.resolveAddress('alice.crypto',SupportedNS.UnstoppableDomains);
```
Dotsei Domains: 
```
const seiAddress = await dotnames.resolveAddress('alice.sei',SupportedNS.SeiNS);
```
Space Id : 
```
const sidAddress = await dotnames.resolveAddress('alice.bnb',SupportedNS.SpaceId);
```


### Resolving names from addresses

ENS : 
```
const ensName = await dotnames.resolveName('//Address', SupportedNS.ENS);
```
Unstoppable Domains : 
```
const udName = await dotnames.resolveName('//Address', SupportedNS.UnstoppableDomains);
```
Dotsei Domains: 
```
const dotseiName = await dotnames.resolveName('//Address', SupportedNS.SeiNS);
```
Space Id : 
```
const sidName = await  dotnames.resolveName('//Address', SupportedNS.SpaceId);
```
