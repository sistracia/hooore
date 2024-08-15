CREATE TABLE project_navbar (
    id varchar NOT NULL PRIMARY KEY,
    content jsonb NOT NULL DEFAULT '{}',
    project_id varchar NOT NULL,
    template_content_id varchar NOT NULL,
    FOREIGN KEY (project_id) REFERENCES project(id),
    FOREIGN KEY (template_content_id) REFERENCES template_content(id)
);