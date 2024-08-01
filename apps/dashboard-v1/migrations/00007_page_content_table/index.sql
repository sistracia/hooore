CREATE TABLE page_content (
    id varchar NOT NULL PRIMARY KEY,
    content jsonb NOT NULL DEFAULT '{}',
    page_id varchar NOT NULL,
    template_content_id varchar NOT NULL,
    FOREIGN KEY (page_id) REFERENCES "page"(id),
    FOREIGN KEY (template_content_id) REFERENCES template_content(id)
);