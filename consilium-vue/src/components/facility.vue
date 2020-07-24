<template>
  <div class="container border">
    <div class="row border">
      <div class="col border">
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
          <div class="col"><a :href="facility.url">{{ facility.website }}</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data: function() {
        return {
        };
    },
    props: ['facility']
  }

</script>

<style>
  .row + .row {
    border-top:0;
  }
</style>
 