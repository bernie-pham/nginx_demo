all: update_default_conf update_main_conf

update_main_conf:
	docker cp nginx.conf f9f761dd5326:/etc/nginx/nginx.conf

update_default_conf:
	docker cp conf.d/default.conf f9f761dd5326:/etc/nginx/conf.d/default.conf
	