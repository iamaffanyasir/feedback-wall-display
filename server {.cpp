server
{
    listen 443 ssl;
    server_name 128.199.23.8;

    ssl_certificate / etc / ssl / certs / nginx - selfsigned.crt;
    ssl_certificate_key / etc / ssl / private / nginx - selfsigned.key;

    location /
    {
        proxy_pass http : // localhost:3001;
                          proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server
{
    listen 80;
    server_name 128.199.23.8;
    return 301 https: //$host$request_uri;
}
