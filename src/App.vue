<template>
  <div id="app">
    <AddUser />
  </div>
</template>

<script>
import AddUser from "./components/AddUser.vue";

export default {
  name: "App",
  components: { AddUser }
};
</script>

<style>
body {
  background-color: #f8f9fa; /* خلفية فاتحة */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* تحسين شكل الروابط */
a {
  text-decoration: none;
  color: #0d6efd;
}

a:hover {
  text-decoration: underline;
}

/* تحسين شكل العناوين */
h1, h2, h3 {
  font-weight: 600;
  color: #343a40;
}

/* تحسين شكل الأزرار */
button, .btn {
  padding: 10px 20px;
  font-size: 16px;
}
</style>