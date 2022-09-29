sudo \
  --preserve-env=AWS_ACCESS_KEY_ID \
  --preserve-env=AWS_SECRET_ACCESS_KEY \
  certbot certonly \
  --dns-route53 \
  -d hypetrigger.io \
  -d www.hypetrigger.io
