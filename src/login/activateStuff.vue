<template>
 <div v-if="activateNewAccount">
  <h4>Activate New Account</h4>
        <hr>
        <label for="email" >Email</label>
        <input 
        type="text" 
        placeholder="Enter Email"
        class="form-control">
       <label for="password"> Password</label>
       <input
        type="password"
       placeholder="Password"
       class="form-control"> 
       <label for="re-password" >re-Enter Password</label>
       <input
        type="password"
       placeholder="re-Enter Password"
       class="form-control"> 
        <label for="Activation Code" >Activation Code</label>
        <input 
        type="text" 
        placeholder="Activation Code"
        class="form-control">
        
    <br>
    <br>
       <button class="btn btn-primary" @click="switchActiveLog()">Log in</button>
        <button class="btn btn-success">Activate New Account</button>
    </div>
 
</template>

<script>
export default {
 data:function(){
     return{
         regex:{
               email:"^[-a-zA-Z0-9~!$%^&*_=+}{\\'?]+(\\.[-a-zA-Z0-9~!$%^&*_=+}{\\'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$",   
               password:"^[a-zA-Z0-9_!@#\$%\^\&*-]{8,30}$",
               activationCode:"^[a-z]{1,20}-[a-z]{1,20}-[0-9]{8}$"
              
           },
           userData:{
               email:'',
                password:'',
                rePassword:'',
                activationCode:''
           }
     }
 },methods:{

 }
  }
</script>

<style >

</style>
