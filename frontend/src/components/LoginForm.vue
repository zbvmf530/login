<template>
    <div v-if="account">
      <h3>{{ account.userid }}</h3>
      <button @click="logout">로그아웃</button>
    </div>

    <div v-else>
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
      return { form: { userid: "", userpw: "" }};
    },
    created(){
      axios.get('/api/account')
      .then(result=>this.$store.commit('user',result.data))
      .catch((err)=>console.log(err))
    },
    computed:{
      account(){
        return this.$store.state.user.userid;
      }
    },
    methods: {
      login() {
        axios
          .post("/api/login", this.form)
          .then((result) =>{
            this.$store.commit('user',result.data);
            alert('로그인 시각: '+`${Date(Date.now())}`);
            this.form={};
          })
          .catch(()=>{alert('로그인실패!');this.form={};});

      },
      logout(){
        axios.post("/api/logout")
        .then((res)=>{
          if(res.data=="OK"){
            alert('로그아웃 시간 : '+`${Date(Date.now())}`);
            window.localStorage.removeItem('vuex');
            this.$store.commit('user',{}) ;
            this.form={};
          }
        })
        .catch((e)=>console.log(e))
      }
    },
  };
  </script>