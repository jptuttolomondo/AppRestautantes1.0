<template>
    <div class="hello">
    
      <h1>{{ texto }}</h1>
     
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data(){
      return{texto:'Hola Juan'}
    }
  }
  </script>
  