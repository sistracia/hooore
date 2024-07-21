CREATE TABLE blog  (
    id varchar PRIMARY KEY,
    title varchar NOT NULL DEFAULT '',
    description varchar NOT NULL DEFAULT '',
    slug varchar NOT NULL DEFAULT '',
    thumbnail_url varchar NOT NULL DEFAULT '',
    thumbnail_alt varchar NOT NULL DEFAULT '',
    tags varchar[] NOT NULL DEFAULT array[]::varchar[],
    published_date timestamp with time zone NOT NULL DEFAULT now(),
    viewers integer NOT NULL DEFAULT 0,
    contents jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE faq (
    id varchar PRIMARY KEY,
    title varchar NOT NULL DEFAULT '',
    contents jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE portfolio  (
    id varchar PRIMARY KEY,
    title varchar NOT NULL DEFAULT '',
    description varchar NOT NULL DEFAULT '',
    slug varchar NOT NULL DEFAULT '',
    thumbnail_url varchar NOT NULL DEFAULT '',
    thumbnail_alt varchar NOT NULL DEFAULT '',
    tags varchar[] NOT NULL DEFAULT array[]::varchar[],
    contents jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE privacy_policy  (
    id varchar PRIMARY KEY,
    title varchar NOT NULL DEFAULT '',
    last_updated timestamp with time zone NOT NULL DEFAULT now(),
    contents jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE term_and_condition  (
    id varchar PRIMARY KEY,
    title varchar NOT NULL DEFAULT '',
    last_updated timestamp with time zone NOT NULL DEFAULT now(),
    contents jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE service  (
    id varchar PRIMARY KEY,
    title varchar NOT NULL DEFAULT '',
    slug varchar NOT NULL DEFAULT '',
    description varchar NOT NULL DEFAULT '',
    tags varchar[] NOT NULL DEFAULT array[]::varchar[],
    items varchar[] NOT NULL DEFAULT array[]::varchar[],
    thumbnail_url varchar NOT NULL DEFAULT '',
    thumbnail_alt varchar NOT NULL DEFAULT '',
    background_color varchar NOT NULL DEFAULT '',
    background_image varchar NOT NULL DEFAULT '',
    footer_images jsonb NOT NULL DEFAULT '[]'::jsonb,
    contents jsonb NOT NULL DEFAULT '{}'::jsonb
);
