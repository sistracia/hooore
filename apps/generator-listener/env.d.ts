declare namespace NodeJS {
  interface ProcessEnv {
    HOSTNAME: string;
    PORT: string;
    PG_URL: string;
  }
}
