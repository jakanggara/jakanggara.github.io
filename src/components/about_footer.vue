<template>
  <div id="footer">
    <b-row
      no-gutters
      align-v="center"
      align-h="center"
      class="container-sm ml-auto mr-auto pt-3 footerdiv w-25 d-none d-sm-flex text-center"
    >
      <a href="mailto:jakanggara@outlook.com">
        <b-col>
          <faIcon :icon="['fas', 'envelope']" />
          <span class="d-block">Mail Me!</span>
        </b-col>
        <b-row>
          <b-col>
          </b-col>
        </b-row>
        <b-row no-gutters style="width: 100%">
          <b-col>
            &copy;2020 Jakanggara
          </b-col>
        </b-row>
      </a>
    </b-row>
    <div
      class="text-center ml-auto mr-auto pt-3 footerdiv w-75 d-sm-none"
      >
      <a href="mailto:jakanggara@outlook.com">
        <div>
          <faIcon :icon="['fas', 'envelope']" />
          <span class="d-block">
            Mail Me!
          </span>
        </div>
        <div>
          &copy;2020 Jakanggara
        </div>
      </a>
    </div>
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
  a{
    text-decoration: none;
    color: inherit;
    &:hover {
      color: $ccolor1;
    }
  }
}
</style>
