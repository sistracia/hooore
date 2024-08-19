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
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_FOLDER: string;
    CLOUDINARY_CLOUD_NAME: string;
    UMAMI_USERNAME: string;
    UMAMI_PASSWORD: string;
    UMAMI_URL: string;
    GENERATOR_SERVER_URL: string;
    GENERATOR_SERVER_TOKEN: string;
  }
}
