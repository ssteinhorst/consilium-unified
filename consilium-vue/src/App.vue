<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div class="row">
        <div class="col text-center">Provider Search</div>
      </div>
      <div class="row searchrow">
        <div class="col-sm " align="center">
          <b-input-group prepend="Name">
            <b-form-input v-model="searchName" placeholder="Search by name"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-sm" align="center">
          <b-input-group prepend="Zone">
            <b-form-input type="number" v-model="searchZone" placeholder="Search by zone"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-sm" align="center">
          <b-input-group prepend="Type">
            <b-form-input v-model="searchType" placeholder="Search by type"></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row searchrow">
        <div class="col">
          <b-button v-on:click="searchProviders">Go</b-button>
        </div>
        <div class="col">
          <div class="dropdown">
            <b-form-select v-model="specialtySelected" :options="options"></b-form-select>
          </div>
        </div>
      </div>
    </div>
    <my-provider v-bind:providers="providers"></my-provider>
  </div>
</template>

<script>

import header from './components/header';
import provider from './components/provider';
let axios = require('axios');

export default {
  name: 'App',
  components: {
    'my-header': header,
    'my-provider': provider,
  },
  computed: {

  },
  data: function() {
    return {
      specialtySelected: 'Mental Health',
      options: [
        { value: 'Massage Therapy', text: 'Massage Therapy' },
        { value: 'Mental Health', text: 'Mental Health' },
        { value: 'Psychiatry', text: 'Psychiatry' },
        { value: 'Pediatricians ', text: 'Pediatricians' },
        { value: 'Podiatrists', text: 'Podiatrists' },
        { value: 'Gynecologists', text: 'Gynecologists' },
        { value: 'Urologists', text: 'Urologists' },
        { value: 'Primary Care', text: 'Primary Care' },
        { value: 'Natural Medicine', text: 'Natural Medicine' },
        { value: 'Dermatologists', text: 'Dermatologists' },
        { value: 'Rheumatology', text: 'Rheumatology' }
      ],
      searchType: "",
      searchZone: "",
      searchName: "",
      providers: [],
    };
  },
  methods: {
    searchProviders() {
      const urlWithParams = new URL("http://localhost:3000/providers");
      urlWithParams.searchParams.append("specialty", this.specialtySelected);
      if(this.searchName) {
        urlWithParams.searchParams.append("name", this.searchName);
      }
      if(this.searchZone) {
        urlWithParams.searchParams.append("zone", this.searchZone);
      }
      if(this.searchType) {
        urlWithParams.searchParams.append("type", this.searchType);
      }

      console.log("searching... " + urlWithParams.href);
      this.providers = axios.get(urlWithParams.href).then(res => (this.providers = res.data));
    },

    signIn() {
      // this.$login();
    },
    signOut() {
      // this.$logout();
    },
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

  .row.searchrow {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .container {
    padding-top: 10px;
    padding-bottom: 10px;
  }

</style>
