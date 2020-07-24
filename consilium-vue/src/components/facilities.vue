<template>
  <div class="container border">
    <div class="row-no-gutters">
      <div class="col" align="center">Facilities</div>
    </div>
    <div class="row border" v-for="facility in facilities" :key="facility.name">
      <div class="col-2 border">
        photo here
      </div>
      <div class="col-6 border">
        <div class="row">
          <div class="col">{{ facility.name }}</div>
        </div>
        <div class="row">
          <div class="col">{{ facility.address }}</div>
        </div>
        <div class="row">
          <div class="col">{{ facility.phone }}</div>
        </div>
        <div class="row">
          <div class="col border"><a :href="facility.url">{{ facility.website }}</a></div>
        </div>
      </div>
      <div class="col-4 border">
        Providers available here
        <div v-for="provider in facility.providers" :key="provider.id">
          {{provider.name}}
          
        </div>
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
    props: ['facilities']
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
 