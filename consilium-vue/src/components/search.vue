<template>
  <div class="container border">
    <div class="row">
      <div class="col">Search</div>
      <div class="col">
        <input type="radio" id="providerSearch" value="providerSearch" v-model="searchType"> Provider
      </div>
      <div class="col">
        <input type="radio" id="facilitySearch" value="facilitySearch" v-model="searchType"> Facility
      </div>
    </div>
    <div class="row">
      <div class="col-sm" align="center">
        <input type="text" id="pname" ref="pname" placeholder="Name search">
      </div>
      <div class="col-sm" align="center">
        <input type="text" id="paddress" ref="paddress" placeholder="Zone search">
      </div>
      <div class="col-sm" align="center">
        <input type="text" id="pphone" ref="pphone" placeholder="Therapy search">
      </div>
    </div>
    <div class="row">
      <button v-on:click="searchProvider">Go</button>
    </div>
  </div>
</template>

<script>

  export default {
    data: function() {
      return {
        providerSearch: true,
        facilitySearch: false,
        searchType: "providerSearch"
      };
    },
    methods: {
      searchProvider: function() {
        // call parent search function here
        this.searchProviderParent();
      },
      mounted() {
      }

    },
    props: ['providers', 'searchProviderParent']
  }
</script>

<style>

</style>