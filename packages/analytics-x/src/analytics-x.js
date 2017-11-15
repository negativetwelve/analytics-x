/* eslint-disable brace-style */
const AnalyticsX = {
  get Mixpanel() { return require('mixpanel-x').default; },
};


// Supports importing a single object or using named imports.
module.exports = AnalyticsX;
