<template>
  <div>
    <my-header></my-header>
    <div class="headerBox border container-fluid m-0 p-0">
      <div class="navBar row m-1">
        <div class="m-1" id="nav">
          <p class="navLinks m-1">
            <button v-on:click="toggleSearch">Search</button>
            |
            <button v-on:click="toggleEdit">Create</button>
            |
            <button v-on:click="toggleFacilities">Facilites</button>
            |
            <button v-on:click="signIn">Sign In</button>
            |
            <button v-on:click="signOut">Sign Out</button>
          </p>
        </div>
      </div>
    </div>
<!--    <my-search v-if="searchEnabled" v-bind:providers="providers" searchProviderParent="searchProviders"></my-search>-->

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
          <input type="text" id="sname" ref="searchName" placeholder="Name search">
        </div>
        <div class="col-sm" align="center">
          <input type="text" id="szone" ref="searchZone" placeholder="Zone search">
        </div>
        <div class="col-sm" align="center">
          <input type="text" id="stype" ref="searchType" placeholder="Type search">
        </div>
      </div>
      <div class="row">
        <button v-on:click="searchProviders">Go</button>
      </div>
    </div>

    <my-provider v-if="searchEnabled" v-bind:providers="providers"></my-provider>
    <my-create v-if="createEnabled" v-bind:providers="providers" v-bind:facilities="facilities"></my-create>
    <my-facilities v-if="facilitiesEnabled" v-bind:facilities="facilities"></my-facilities>
  </div>
</template>

<script>

import header from './components/header';
import provider from './components/provider';
// import search from './components/search';
import create from './components/create';
import data from './assets/data.json';
import facilities from './components/facilities';
let axios = require('axios');

export default {
  name: 'App',
  components: {
    'my-header': header,
    // 'my-search': search,
    'my-provider': provider,
    'my-create': create,
    'my-facilities': facilities
  },
  computed: {
    // searchUrlParms: function() {
    //   let searchString = "?";
    //
    //   return searchString;
    // },
    searchEnabled:{
      get: function() {
        return true;

      },
      set: function () {

      }
    }
  },
  data: function() {
    return {

      // isAuthorized: this.$isSignedIn(),
      providerSearch: true,
      facilitySearch: false,
      searchType: "providerSearch",
      providers: [],
      facilities: data.facilities,
      createEnabled: true,
      // searchEnabled: false,
      facilitiesEnabled: false
    };
  },
  methods: {
    searchProviders() {
      const urlWithParams = new URL("http://localhost:3000/providers");

      if(this.$refs.searchName.value) {
        urlWithParams.searchParams.append("name", this.$refs.searchName.value);
      }
      if(this.$refs.searchZone.value) {
        urlWithParams.searchParams.append("zone", this.$refs.searchZone.value);
      }
      if(this.$refs.searchType.value) {
        urlWithParams.searchParams.append("type", this.$refs.searchType.value);
      }



      console.log(urlWithParams.href);




      this.providers = axios.get(urlWithParams.href).then(res => (this.providers = res.data));
      // this.providers = axios.get('http://localhost:3000/providers').then (function (res) {
      //   console.log("res: "+res);
      //   console.dir(res);
      //   this.providers = res.data;
      // });
      console.log(" searching...");
      // console.dir(this.providers);
      // make axoios call to get providers from external soure
      // set the providers variable to the result

    },
    created(){
      // Fetch Data
      // this.fetchData();
      console.log("in created");
    },

    signIn() {
      this.$login();
    },
    signOut() {
      this.$logout();
    },

    toggleEdit() {
      this.createEnabled = this.createEnabled? false:true;
      // if(this.createEnabled) {
      //   this.createEnabled = false
      // } else {
      //   this.createEnabled = true;
      // }
    },
    toggleSearch() {
      this.searchEnabled = this.searchEnabled? false:true;
    },
    toggleFacilities() {
      this.facilitiesEnabled = this.facilitiesEnabled? false:true;

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
}


</style>
