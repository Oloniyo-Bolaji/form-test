CREATE TABLE "organizations" (
	"id" text PRIMARY KEY NOT NULL,
	"firstname" varchar(50) NOT NULL,
	"lastname" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"nin" varchar(11) NOT NULL,
	"organization_name" varchar(100) NOT NULL,
	"country" varchar DEFAULT 'Nigeria' NOT NULL,
	"postal_code" varchar(10) NOT NULL,
	"password" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "organizations_email_unique" UNIQUE("email"),
	CONSTRAINT "organizations_nin_unique" UNIQUE("nin"),
	CONSTRAINT "organizations_organization_name_unique" UNIQUE("organization_name")
);
