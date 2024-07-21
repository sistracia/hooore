declare namespace NodeJS {
  interface ProcessEnv {
    PG_URL: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_SECURE: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    EMAIL_FROM: string;
    EMAIL_TO: string;
  }
}
