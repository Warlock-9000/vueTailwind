<template>


  <div id="nav" class="py-5 px-5">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login Page</router-link> |
    <router-link to="/restorePass">Restore Password</router-link>
  </div>


  <router-view class="border mt-24 px-5"/>


</template>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
