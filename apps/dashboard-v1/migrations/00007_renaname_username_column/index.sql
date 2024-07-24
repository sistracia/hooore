ALTER TABLE "user" RENAME COLUMN username TO email, RENAME CONSTRAINT user_username_key TO user_email_key;
