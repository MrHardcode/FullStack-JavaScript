const EE = require("./CustomEmitter.js")

/**
 * Demo class that "detects" DOS attacks and emits events. Uses the custom Event Emitter (CustomEmitter.js)
 * TimeValue: Amount of milliseconds allowed between requests.
 */
class DOS_Detector {
  constructor(timeValue) {
    this.urls = new Map();
    this.TIME_BETWEEN_CALLS = timeValue;
  }
  addUrl = url => {
    const time = new Date().getTime();
    if (this.urls.has(url)) {
      const deltaTime = time - this.urls.get(url);
      if (deltaTime < this.TIME_BETWEEN_CALLS) {
        EE.emit("DOSDetected", {url : url, timeBetweenCalls : deltaTime})
      }
    }
    this.urls.set(url, time);
  };
}

module.exports = DOS_Detector;