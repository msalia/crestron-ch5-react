// @flow

// WebXPanel needs to be loaded before CrComLiib file gets loaded!!
import WebXPanel, {
  isActive,
  getVersion,
  getBuildDate,
} from '@crestron/ch5-webxpanel/dist/cjs/index.js';
import {Ch5Debug, Ch5Emulator} from '@crestron/ch5-crcomlib';
import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';

import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'component/app/App';
import emulator from 'emulator.json';
import reportWebVitals from 'reportWebVitals';

// We need to ensure that the panel can listen to the controller
window.CrComLib = CrComLib;
window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;

// Initialize emulator
if (process.env.REACT_APP_ENABLE_EMULATOR) {
  Ch5Debug.enableAll();
  Ch5Emulator.clear();
  const ch5Emulator = Ch5Emulator.getInstance();
  ch5Emulator.loadScenario(emulator);
  ch5Emulator.run();
}

if (isActive) {
  console.log(`WebXPanel version: ${getVersion()}`);
  console.log(`WebXPanel build date: ${getBuildDate()}`);
  console.log(`WebXPanel isActive: ${isActive}`);

  WebXPanel.initialize({
    host: '192.168.1.1',
    ipId: '0x0A', // Decimal: 10
    port: 41794,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
