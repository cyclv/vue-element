<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y:hidden;
}
/* flex */
.flexfs{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.flexct{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.flexlb{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/* margin */
.mglf20{
  margin-left: 20px;
}
a{
  text-decoration: none;
}
.wt100{
  width: 100%;
}
</style>
