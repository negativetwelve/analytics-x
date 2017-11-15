// Libraries
import Mixpanel from 'mixpanel-browser';


class MixpanelX {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  constructor({token}) {
    Mixpanel.init(token);
  }

  // --------------------------------------------------
  // Identity
  // --------------------------------------------------
  setUserId(userId) {
    Mixpanel.identify(userId.toString());
  }

  setUserProperties(properties) {
    Mixpanel.people.set(properties);
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name, payload) {
    Mixpanel.track(name, payload);
  }

}


export default MixpanelX;
