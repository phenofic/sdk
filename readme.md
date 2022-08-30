# @phenofic/sdk

## Installation & Usage

```sh
npm install @phenofic/sdk
```

Usage:
```js
import { * as phenofic } from '@phenofic/sdk';

const phenoficClientId = process.env.PHENOFIC_CLIENT_ID;
const phenoficApiKey = process.env.PHENOFIC_API_KEY;

const fetchTemplates = async () => {
  const response = await phenofic.getTemplates({
    clientId: phenoficClientId,
    apiKey: phenoficApiKey,
  });

  console.log(response);
};

```