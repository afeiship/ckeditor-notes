# get-started


## ubuntu
```shell
# install
sudo apt update
sudo apt install squid

# start
sudo systemctl start squid

# modify config
sudo vim /etc/squid/squid.conf
```


## proxy at local
```shell
http_proxy=http://xx.xx.xxx.xxx:3128 curl -i icanhazip.com
```
