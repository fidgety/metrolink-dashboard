scp ./metrolink-api.tar.gz root@139.59.169.252:/var/metrolink-api &&
ssh root@139.59.169.252 << EOF
    stop metrolinkapi &&
    cd /var/metrolink-api &&
    tar xvzf metrolink-api.tar.gz &&
    start metrolinkapi
EOF
