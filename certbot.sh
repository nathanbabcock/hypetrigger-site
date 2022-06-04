# pre-install: backup old certs
sudo cp -f ~/hypetrigger/cert/fullchain.pem ~/hypetrigger/cert/fullchain-old.pem
sudo cp -f ~/hypetrigger/cert/privkey.pem ~/hypetrigger/cert/privkey-old.pem
sudo cp -rf /etc/letsencrypt/live/hypetrigger.io-000* /etc/letsencrypt/live/hypetrigger.io-old

# Remove current certs
sudo rm -rf ~/hypetrigger/cert/fullchain.pem
sudo rm -rf ~/hypetrigger/cert/privkey.pem
#sudo rm -rf /etc/letsencrypt/live/hypetrigger.io-000*
sudo find /etc/letsencrypt/live -name "hypetrigger.io-000*" -exec rm -rf '{}' \;

# Run letsencrypt
docker run -it --rm --name letsencrypt \
    -v "/etc/letsencrypt:/etc/letsencrypt" \
    -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
    quay.io/letsencrypt/letsencrypt:latest \
        certonly \
        -d hypetrigger.io \
        --manual \
        --preferred-challenges dns \
        --server https://acme-v02.api.letsencrypt.org/directory

# post-install: copy certs over
#sudo cp -f /etc/letsencrypt/live/hypetrigger.io-000*/fullchain.pem ~/hypetrigger/cert/fullchain.pem
#sudo cp -f /etc/letsencrypt/live/hypetrigger.io-000*/privkey.pem ~/hypetrigger/cert/privkey.pem
sudo find /etc/letsencrypt/live -name "hypetrigger.io-000*/fullchain.pem" -exec cp -f '{}' ~/hypetrigger/cert/fullchain.pem \;
sudo find /etc/letsencrypt/live -name "hypetrigger.io-000*/privkey.pem" -exec cp -f '{}' ~/hypetrigger/cert/privkey.pem \;

# docker restart nginx
echo "Double check certs copied and restart docker."

