declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    PG_URL: string;
    GENERATOR_SERVER_TOKEN: string;
    MAIN_HOST_DOMAIN: string;
    PROJECT_PATH: string;
    PROJECT_APP_NAME: string;
    PROJECT_NEXT_PUBLIC_DASHBOARD_URL: string;
    PROJECT_DOCKER_NETWORK: string;
    PROJECT_HTTP_ENTRYPOINTS: string;
    PROJECT_TLS_CERTRESOLVER: string;
    PROJECT_PORT: string;
  }
}
