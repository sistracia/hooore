CREATE TABLE preview (
    id varchar PRIMARY KEY,
    content jsonb NOT NULL DEFAULT '[]',
    create_date timestamp with time zone NOT NULL DEFAULT now()
);