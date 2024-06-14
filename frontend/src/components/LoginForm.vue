<template>
    <div>
      <input v-model="form.userid" />
      <input v-model="form.userpw" />
      <button @click.prevent="login">로그인</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "loginView",
    data() {
      return { form: { userid: "", userpw: "" } };
    },
    methods: {
      login() {
        axios
          .post("/api/login", this.form)
          .then((result) => console.log(result.data));
      },
    },
  };
  </script>