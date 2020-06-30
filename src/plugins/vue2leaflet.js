import Vue from "vue";

import * as Vue2Leaflet from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("leafletMap", Vue2Leaflet.LMap);
Vue.component("leafletTileLayer", Vue2Leaflet.LTileLayer);
Vue.component("leafletGJson", Vue2Leaflet.LGeoJson);
