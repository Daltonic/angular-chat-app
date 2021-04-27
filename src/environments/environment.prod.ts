import { firebaseConfig, cometChat } from './../../app.config'

export const environment = {
  production: true,
  firebase: firebaseConfig,
  ...cometChat,
};