<template>
  <div id="footer">
    <b-row
      no-gutters
      align-v="center"
      class="container-sm ml-auto mr-auto pt-3 footerdiv"
    >
      <b-col cols="2" sm="2" align-self="center">
        <b-img
          center
          src="@/assets/images/logo.svg"
          width="40px"
          alt="Jaka Anggara Logo"
        />
      </b-col>
      <b-col cols="10" sm="10">
        Email: jakanggara@outlook.com
      </b-col>
      <b-row no-gutters style="width: 100%">
        <b-col class="text-center">
          &copy;2020 Jakanggara
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footerdiv {
  background-color: $color2;
  border-top-left-radius: 10px 10px;
  border-top-right-radius: 10px 10px;
}
</style>
