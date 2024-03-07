# DotNames-Js : A Javascript Library To Resolve Domains On All Blockchains

## Overview of the SDK

### Installation

Install @dotnames/dotnames-js

```
npm i @dotnames/dotnames-js
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

### Supported Naming Service Types

```
import {SupportedNs} from '@dotnames/dotnames-js'

```

#### Supported Naming Services :

ENS,
UnstoppableDomains
DotBit,
Zkns,
ICNS,
StargazeDomains,
Bonfida,
SuiNs,
AptosNs,
DotSeiNS

#### ContentHash Records Supported Domains (Decentralized Websites)

ENS,
UnstoppableDomains
DotBit,
Zkns,
Bonfida

### Usage :

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

### Resolving Records without providing domain name identifier

```
const ensRecords = await dotnames.getRecords('alice.eth');
```

Unstoppable Domains :

```
const udRecords = await dotnames.getRecords('alice.crypto');
```

Dotsei Domains:

```
const seiRecords = await dotnames.getRecords('alice.sei');
```

Space Id :

```
const sidRecords = await dotnames.getRecords('alice.bnb');
```

### Resolving Records by providing domain name identifier

ENS :

```
const ensRecords = await dotnames.getRecords('alice.eth',SupportedNS.ENS);
```

Unstoppable Domains :

```
const udRecords = await dotnames.getRecords('alice.crypto',SupportedNS.UnstoppableDomains);
```

Dotsei Domains:

```
const seiRecords = await dotnames.getRecords('alice.sei',SupportedNS.SeiNS);
```

Space Id :

```
const sidRecords = await dotnames.getRecords('alice.bnb',SupportedNS.SpaceId);
```
