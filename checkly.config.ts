/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'checkly';
import { EmailAlertChannel, Frequency } from 'checkly/constructs';
import { siteConfig } from 'helpers/next.data.mjs';

const emailChannel = new EmailAlertChannel('email-channel-1', {
  // FIXME: add your own email address, Checkly will send you an email notification if a check fails
  address: 'contact@paalamugan.com',
  sendDegraded: true,
});

export const config = defineConfig({
  projectName: 'Next14 with Next Auth Boilerplate',
  logicalId: 'next14-boilerplate-with-i18n-and-next-auth',
  repoUrl: siteConfig.github.repoLink,
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    runtimeId: '2023.09',
    environmentVariables: [
      {
        key: 'PRODUCTION_URL',
        // FIXME: Add your own production URL
        value: 'https://google.com',
      },
    ],
    browserChecks: {
      frequency: Frequency.EVERY_24H,
      testMatch: '**/tests/e2e/**/*.check.spec.ts',
      alertChannels: [emailChannel],
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    reporters: ['list'],
  },
});

export default config;
