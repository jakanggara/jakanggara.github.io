<template>
  <b-container id="map">
    <leafletMap
      :zoom="peta.initzoom"
      :center="peta.center"
    >
      <leafletTileLayer :url="peta.url"></leafletTileLayer>
    </leafletMap>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      peta: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        initzoom: 5,
        center: [47.413220, -1.219482]
      }
    }
  }
}
</script>

<style>
  #map {
      height: 100%;
      width: 100%;
  }
</style>