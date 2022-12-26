-- public."family" definition

-- Drop table

-- DROP TABLE public."family";

CREATE TABLE public."family" (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	gender varchar(255) NOT NULL,
	id_parent int4 NULL,
	CONSTRAINT family_pkey PRIMARY KEY (id)
);


-- public.product definition

-- Drop table

-- DROP TABLE public.product;

CREATE TABLE public.product (
	id serial4 NOT NULL,
	product_title varchar(255) NOT NULL,
	product_price int4 NOT NULL,
	CONSTRAINT product_pkey PRIMARY KEY (id)
);


-- public.asset definition

-- Drop table

-- DROP TABLE public.asset;

CREATE TABLE public.asset (
	id serial4 NOT NULL,
	family_id int4 NOT NULL,
	product_id int4 NOT NULL,
	CONSTRAINT asset_pkey PRIMARY KEY (id),
	CONSTRAINT asset_family_id_fkey FOREIGN KEY (family_id) REFERENCES public."family"(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT asset_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE ON UPDATE CASCADE
);