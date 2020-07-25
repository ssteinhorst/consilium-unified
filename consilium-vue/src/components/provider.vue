<template>
  <div class="container">
    <div class="row-no-gutters">
      <div class="col" align="center">Providers</div>
    </div>
    <div class="row border" v-for="provider in providers" :key="provider.name">
      <div class="col-2">
        photo here
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col">{{ provider.name }}</div>
        </div>
        <div class="row">
          <div class="col">{{ provider.address }}</div>
        </div>
        <div class="row">
          <div class="col">{{ provider.phone }}</div>
        </div>
        <div class="row">
          <div class="col"><a :href="provider.url">{{ provider.website }}</a></div>
        </div>
      </div>
      <div class="col-4">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data: function() {
        return {
        };
    },
    props: ['providers']
  }

</script>

<style>
  .row + .row {
    border-top:0;
  }
  a {
    padding-left: 0;
  }
</style>
 