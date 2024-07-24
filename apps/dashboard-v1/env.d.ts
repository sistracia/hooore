declare namespace NodeJS {
  interface ProcessEnv {
    PG_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_REDIRECT_URI: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_SECURE: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    EMAIL_FROM: string;
    EMAIL_TO: string;
  }
}
