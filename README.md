# example-cypress-cucumber

Sample project for running Cucumber tests via Cypress v10+

## Install

```bash
npm install
npx cypress install
```

### Running the Tests (headless)

```bash
npm test
```

### Running/Debugging in Cypress

```bash
npx cypress open
```

### Writing Tests

Feature files go in `cypress\e2e\features`.

Step files go in `cypress\e2e\step_definitions`.

### Config

Add the following to have screenshots/video size match in Testery

```typescript
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push(`--window-size=1920,1080`)
      launchOptions.args.push('--force-device-scale-factor=1')
    }
    return launchOptions
  });
```
