CREATE TABLE project (
    id varchar NOT NULL PRIMARY KEY,
    business_name varchar NOT NULL DEFAULT '',
    business_logo varchar NOT NULL DEFAULT '',
    thumbnail varchar NOT NULL DEFAULT '',
    domain varchar NOT NULL DEFAULT '' UNIQUE,
    need_publish boolean NOT NULL DEFAULT false,
    build_pid varchar NOT NULL DEFAULT '',
    build_last_step smallint NOT NULL DEFAULT 0,
    build_total_step smallint NOT NULL DEFAULT 0,
    env jsonb NOT NULL DEFAULT '{}',
    user_id varchar NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);