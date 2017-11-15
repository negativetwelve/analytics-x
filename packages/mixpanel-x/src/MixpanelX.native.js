// Libraries
import Mixpanel from 'react-native-mixpanel';


class MixpanelX {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  constructor({token}) {
    Mixpanel.sharedInstanceWithToken(token);
  }

  // --------------------------------------------------
  // Identity
  // --------------------------------------------------
  setUserId(userId) {
    return Mixpanel.identify(userId.toString());
  }

  setUserProperties(properties) {
    return Mixpanel.set(properties);
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name, payload) {
    return Mixpanel.trackWithProperties(name, payload);
  }

}


export default MixpanelX;
