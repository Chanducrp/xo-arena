import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.geoaxis.xoarena',
  appName: 'XO Arena',
  webDir: '.',
  server: {
    androidScheme: 'https'
  }
};

export default config;
