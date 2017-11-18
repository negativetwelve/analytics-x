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
    return Mixpanel.identify(userId.toString());
  }

  setUserProperties(properties) {
    return Mixpanel.people.set(properties);
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name, payload) {
    return Mixpanel.track(name, payload);
  }

}


export default MixpanelX;
