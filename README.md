# Hypetrigger Site

<https://hypetrigger.io>

## Placement

Root folder must be adjacent to the `hypetrigger` private repository.

Configs and other resources are read directly from the `hypetrigger` source files.

## Deployment

Build locally and then upload to S3 bucket via the AWS CLI.

```bash
pnpm export
aws s3 sync out/ s3://hypetrigger-site
```

or:

```bash
pnpm export && pnpm run deploy
```

### AWS CLI

Install with

```cmd
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

<https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html>

## Secrets

Create a `.env.local` in the root. See `.env.example` for the list of exported secrets and config vars.
