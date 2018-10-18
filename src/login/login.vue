<template>
 
 <div class="form-group" id="cont">
 <div v-if="!activateNewAccount">
    <div v-if="isnotValidForm"> 
       <p> {{errorMessage}}</p>
    </div>
        <h4>Login</h4>
        <hr>
        <label for="email" >Email</label>
        <input 
        type="text" 
        placeholder="Enter Email"
         @click="resetform()" 
        v-model="userData.email"
        class="form-control">
       <label for="password"> Password</label>
       <input
        type="password"
        @click="resetform()" 
       placeholder="Password"
        v-model="userData.password"
       class="form-control">  
    <br>
    <br>
       <button class="btn btn-success" 
      @click="onSubmit()">Log in</button>
        <button class="btn btn-primary" @click="switchActiveLog()">Activate New Account</button>
    </div>

 </div>
</template>

<script>
export default {
    data:function(){
        return{
           activateNewAccount:false,
           errorMessage:'Invalid Email or password',
           isnotValidForm:false,
           regex:{
               email:"^[-a-zA-Z0-9~!$%^&*_=+}{\\'?]+(\\.[-a-zA-Z0-9~!$%^&*_=+}{\\'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$",   
               password:"^[a-zA-Z0-9_!@#\$%\^\&*-]{8,30}$"
              
           },
            userData:  {
                email:'',
                password:''

            }
        };

    },methods:{
        validateform(){
            console.log('validateform');
            if(this.isValid(this.userData.email,this.regex.email)&&this.isValid(this.userData.password,this.regex.password))
            {
                return true
            }
            else{
                return false;
            } 

        },
         onSubmit(){
             if(!this.validateform()){
                 console.log('onSubmit');
               this.isnotValidForm=true;
                
             }
             else{
                 this.$http.post(this.$Url+'api/en/access/user',{"email":this.userData.email,"password":this.userData.password}).then((data)=>{
                             this.$localStorage.set('ticket', data.body.ticket);

                             //console.log(this.$localStorage.get('ticket'));  
                            
                 }).catch((e)=>{
                           this.isnotValidForm=true;
                           console.log('error',e)
                 })
             }

         },
         isValid (value,reg){
             console.log('inside isValid');
            //return reg.test(value);
          return RegExp(reg,'g').test(value)
        }
        ,
         resetform(){
           this.isnotValidForm=false;
        },
        switchActiveLog(){
            if(this.activateNewAccount){
                this.activateNewAccount=false;
            }
            else{
                this.activateNewAccount=true;
            }

        }
        }
      
        
}
 
  

</script>

<style scoped>
p{
    color:red;
}
</style>
