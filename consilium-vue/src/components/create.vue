<template>
  <div class="container border">
    <div class="row-no-gutters">
      <div class="col-sm" align="center">Add Provider</div>
    </div>
    <div class="row">
      <div class="col"><input type="text" placeholder="Name" id="pname" ref="pname"></div>
      <div class="col"><input type="text" placeholder="Type" id="ptype" ref="ptype"></div>
      <div class="col"><input type="text" placeholder="Address" id="paddress" ref="paddress"></div>
      <div class="col"><input type="text" placeholder="Phone Number" id="pphone" ref="pphone"></div>
    </div>
    <div class="row">  
      <div class="col"><input type="text" placeholder="Zone" id="pzone" ref="pzone"></div>
      <div class="col"><input type="text" placeholder="Practice" id="ppractice" ref="ppractice"></div>
      <div class="col"><input type="text" placeholder="Website Name" id="pwebsite" ref="pwebsite"></div>
      <div class="col"><input type="text" placeholder="Website URL" id="purl" ref="purl"></div>
    </div>
    <div class="row">    
      <div class="col"><input type="text" placeholder="Pricing" id="ppricing" ref="ppricing"></div>
      <div class="col"><input type="text" placeholder="Wait Time" id="pwaittime" ref="pwaittime"></div>
      <div class="col"><input type="text" placeholder="Therapy Provided" id="ptherapyprovided" ref="ptherapyprovided"></div>
      <div class="col"><input type="text" placeholder="Communication Style" id="pcommunicationstyle" ref="pcommunicationstyle"></div>
    </div>
    <div class="row">
      <div class="col">

      <label for="facilityselect">Facilities available at:</label>
      <select multiple class="form-control" id="facilityselect">
        <option v-for="(facility, index) in facilities" v-bind:value="facility.name" :key="index">
          {{ facility.name }}
        </option>
      </select>


    </div>


    </div>
    <button v-on:click="addProvider">Save</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        facilitySelected: ""
      };
  },
  methods: {
        addProvider: function() {
            this.providers.push({
              id: 5,
              name: this.$refs.pname.value,
              type: this.$refs.ptype.value,
              address: this.$refs.paddress.value,
              phone: this.$refs.pphone.value,
              zone: this.$refs.pzone.value,
              practice: this.$refs.ppractice.value,
              website: this.$refs.pwebsite.value,
              url: this.$refs.purl.value,
              pricing: this.$refs.ppricing.value,
              waittime: this.$refs.pwaittime.value,
              therapyprovided: this.$refs.ptherapyprovided.value,
              communicationstyle: this.$refs.pcommunicationstyle.valuee
            })
        }
    },
    props: ['providers', 'facilities']
}
</script>

<style>

</style>