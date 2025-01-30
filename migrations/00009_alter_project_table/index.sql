ALTER TABLE project RENAME COLUMN build_pid TO app_id;
ALTER TABLE project RENAME COLUMN domain TO business_name_slug;
ALTER TABLE project ADD COLUMN custom_domain varchar NOT NULL DEFAULT '';