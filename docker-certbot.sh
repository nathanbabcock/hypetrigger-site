# TODO: Switching to `lego` and automate?
# https://gist.github.com/ssalonen/9dc22594a37e90e81775c2600e6da0d2

# pre-install: backup old certs
sudo cp -f ~/hypetrigger-site/cert/fullchain.pem ~/hypetrigger-site/cert/fullchain-old.pem
sudo cp -f ~/hypetrigger-site/cert/privkey.pem ~/hypetrigger-site/cert/privkey-old.pem
sudo cp -rf /etc/letsencrypt/live/hypetrigger.io-000* /etc/letsencrypt/live/hypetrigger.io-old

# Remove current certs
sudo rm -rf ~/hypetrigger-site/cert/fullchain.pem
sudo rm -rf ~/hypetrigger-site/cert/privkey.pem
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
#sudo cp -f /etc/letsencrypt/live/hypetrigger.io-000*/fullchain.pem ~/HypeTrigger/cert/fullchain.pem
#sudo cp -f /etc/letsencrypt/live/hypetrigger.io-000*/privkey.pem ~/HypeTrigger/cert/privkey.pem
sudo find /etc/letsencrypt/live -name "hypetrigger.io-000*/fullchain.pem" -exec cp -f '{}' ~/hypetrigger-site/cert/fullchain.pem \;
sudo find /etc/letsencrypt/live -name "hypetrigger.io-000*/privkey.pem" -exec cp -f '{}' ~/hypetrigger-site/cert/privkey.pem \;

# docker restart nginx
echo "Double check certs copied and restart docker."

