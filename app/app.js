import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import SpeedDialPlugin from "@nativescript-community/ui-material-speeddial/vue";
import { isIOS } from "@nativescript/core/platform";

Vue.use(RadSideDrawer);
Vue.use(SpeedDialPlugin);

import {
  installMixins,
  themer
} from "@nativescript-community/ui-material-core";
installMixins();
if (isIOS) {
  themer.setPrimaryColor("#bff937");
  themer.setPrimaryColorVariant("#33B5E5");
  themer.setAccentColor("#ff8a39");
  themer.setSecondaryColor("#a830d7");
}

import App from "./components/App";

Vue.config.silent = !__DEV__;

new Vue({
  render: h => h(App)
}).$start();
