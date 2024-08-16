CREATE TABLE template_content (
    id varchar NOT NULL PRIMARY KEY,
    code varchar NOT NULL DEFAULT '',
    slug varchar NOT NULL DEFAULT '',
    name varchar NOT NULL DEFAULT '',
    content_schema jsonb NOT NULL DEFAULT '{}',
    type varchar NOT NULL DEFAULT ''
);