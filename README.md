## 测试学习仓库

- 阿丽
- 阿夜

user www www;
worker_processes auto;
error_log /www/wwwlogs/nginx_error.log crit;
pid /www/server/nginx/logs/nginx.pid;
worker_rlimit_nofile 51200;

stream {
log_format tcp_format '$time_local|$remote_addr|$protocol|$status|$bytes_sent|$bytes_received|$session_time|$upstream_addr|$upstream_bytes_sent|$upstream_bytes_received|$upstream_connect_time';

    access_log /www/wwwlogs/tcp-access.log tcp_format;
    error_log /www/wwwlogs/tcp-error.log;
    include /www/server/panel/vhost/nginx/tcp/*.conf;

}

events
{
use epoll;
worker_connections 51200;
multi_accept on;
}

http
{
include mime.types;
#include luawaf.conf;

    	include proxy.conf;

        default_type  application/octet-stream;

        server_names_hash_bucket_size 512;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 50m;

        sendfile   on;
        tcp_nopush on;

        keepalive_timeout 60;

        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;
    	fastcgi_intercept_errors on;

        gzip on;
        gzip_min_length  1k;
        gzip_buffers     4 16k;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   "MSIE [1-6]\.";

        limit_conn_zone $binary_remote_addr zone=perip:10m;
    	limit_conn_zone $server_name zone=perserver:10m;

        server_tokens off;
        access_log off;

server
{
listen 80;
server_name 139.9.130.68;

        index index.html;
        root  /www/wwwroot/default;
            location ~ /tmp/ {
                return 403;
            }

        error_page   404   /404.html;
        include enable-php.conf;



     location  ~ .*\.(gif|jpg|jpeg|png)$ {
            expires 24h;
            root  /images/;#指定图片存放路径
            proxy_store on;
            proxy_temp_path      /images/;#图片访问路径
            proxy_redirect     off;
            proxy_set_header    Host 127.0.0.1;
            client_max_body_size  10m;
            client_body_buffer_size 1280k;
            proxy_connect_timeout  900;
            proxy_send_timeout   900;
            proxy_read_timeout   900;
            proxy_buffer_size    40k;
            proxy_buffers      40 320k;
            proxy_busy_buffers_size 640k;
            proxy_temp_file_write_size 640k;
            if ( !-e $request_filename)
              {
                 proxy_pass http://127.0.0.1; #默认80端口
              }
        }



        location ~ .*\.(js|css)?$
        {
            expires      12h;
        }

        location ~ /\.
        {
            deny all;
        }

        access_log  /www/wwwlogs/access.log;
    }




    server {

listen 1209;
listen [::]:80;

          server_name 139.9.130.68;

          root /www/wwwroot/netSafe;
          index index.html;

          location / {
    	      try_files $uri $uri/ =404;
          }



         location ^~/api/ {
         	 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        		proxy_pass http://139.9.130.68:8081;
      		rewrite ^/api/(.*)$ /$1 break;
      	}

}
include /www/server/panel/vhost/nginx/\*.conf;
}
