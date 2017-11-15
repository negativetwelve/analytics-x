// Libraries
import warning from 'warning';

// Analytics
import MixpanelX from './MixpanelX';


class Mixpanel {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  constructor({token}) {
    warning(
      token,
      `Mixpanel not initialized. Missing 'token' from constructor.`,
    );

    this.sdk = new MixpanelX({token});
  }

  // --------------------------------------------------
  // Identity
  // --------------------------------------------------
  setUserId(userId) {
    this.sdk.setUserId(userId);
  }

  setUserProperties(properties) {
    this.sdk.setUserProperties(properties);
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name, payload) {
    this.sdk.logEvent(name, payload);
  }

}


export default Mixpanel;
