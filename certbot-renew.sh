sudo \
  --preserve-env=AWS_ACCESS_KEY_ID \
  --preserve-env=AWS_SECRET_ACCESS_KEY \
  certbot renew
docker restart nginx
