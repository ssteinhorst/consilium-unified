<template>
  <div class="headerBox border container ">
    <div id="topRow" class="topRow row" >
      <div class="col text-left">
        <a href="./">Consilium</a>
      </div>
      <div class="col text-center">
        <div id="environment">
          <p id="environmentText"> {{environment}}</p>
        </div>
      </div>
      <div class="col text-right">
        <p id="userName" >Welcome: {{user}}</p>
      </div>
    </div>
  </div>
</template>

<script>
   export default{
     data: function() {
       return {
         environment: 'Under Development',
         user: 'User'
       }
     },
     props: ['']
   }

</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {

  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  white-space: nowrap;
  color: #2c3e50;
  padding: 20px;
}


.topRow {
  padding: 15px;
  margin-left: 30px;
  border-bottom: 0.5px solid #f0f4f8;

}

.environmentText {
  color: #fff;
}

.headerBox {
  background-color: white;
  box-sizing: border-box;
  padding-left: 45px;

}

</style>
 