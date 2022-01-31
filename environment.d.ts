declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONNECTION: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
    }
  }
}

export { }