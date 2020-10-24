import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);

Vue.component('faIcon', FontAwesomeIcon);