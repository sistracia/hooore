declare namespace NodeJS {
  interface ProcessEnv {
    CLOUDFLARE_API_TOKEN: string;
    CLOUDFLARE_ZONE_ID: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_FOLDER: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_REDIRECT_URI: string;
    UMAMI_URL: string;
    UMAMI_USERNAME: string;
    UMAMI_PASSWORD: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_SECURE: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    EMAIL_FROM: string;
    EMAIL_TO: string;
    GENERATOR_SERVER_IP: string;
    GENERATOR_SERVER_URL: string;
    GENERATOR_SERVER_TOKEN: string;
    GENERATOR_LISTENER_URL: string;
    PG_URL: string;
    HOSTNAME: string;
    PORT: string;
    MAIN_HOST_DOMAIN: string;
    NEXT_PUBLIC_ICONIFY_API_URL: string;
  }
}
