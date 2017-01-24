scp ./metrolink-dashboard.tar.gz root@139.59.169.252:/var/metrolink-dashboard &&
ssh root@139.59.169.252 << EOF
    stop metrolinkdashboard &&
    stop metrolinkdashboardclient &&
    cd /var/metrolink-dashboard &&
    tar xvzf metrolink-dashboard.tar.gz &&
    start metrolinkdashboard
    start metrolinkdashboardclient
EOF
