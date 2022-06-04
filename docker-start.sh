#!/bin/bash
app="nginx"
sudo docker rm -f ${app}
# sudo docker build -t ${app} .
sudo docker run -d \
  -p 80:80 \
  -p 443:443 \
  -v ~/hypetrigger/cert/:/etc/ssl/cert/ \
  -v ~/hypetrigger/nginx-custom.conf:/etc/nginx/conf.d/nginx-custom.conf:ro \
  -v ~/hypetrigger/out/:/var/www/html/static/:ro \
  --name=${app} \
  --restart=always \
  --log-opt max-size=100m \
  --log-opt max-file=5 \
  --add-host dockerhost:$(ip route get 1.2.3.4 | awk '{print $7}') \
  nginx
docker ps -a
