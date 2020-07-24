<template>
  <div class="container border">
    <div class="row-no-gutters">
      <div class="col" align="center">Providers</div>
    </div>
    <div class="row border" v-for="provider in providers" :key="provider.name">
      <div class="col-2 border">
        photo here
      </div>
      <div class="col-6 border">
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
          <div class="col border"><a :href="provider.url">{{ provider.website }}</a></div>
        </div>
      </div>
      <div class="col-4 border">
        Facilities
        <my-facility
          v-for="(facility, index) in provider.facilities"
          v-bind:facility="facility"
          v-bind:index="index"
          v-bind:key="facility.id"
        ></my-facility>
      </div>
    </div>
  </div>
</template>

<script>
  import facility from './facility';

  export default {
    components: {
      'my-facility': facility
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
 