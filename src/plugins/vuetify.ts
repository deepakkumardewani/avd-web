/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
// Styles
import "@fortawesome/fontawesome-free/css/all.css";

import { IconAliases, createVuetify } from "vuetify";
import { aliases as defaultAliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi-svg";
import "vuetify/styles";

const aliases: IconAliases = {
  ...defaultAliases,
};

export default createVuetify({
  theme: {},
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
});
