<template>
    <div>
        <div v-if="color=='black'" style="width: 100%; height: 100px; background-color:black">
            <h1>
                About page  
            </h1>

            <p>This is us</p>
        </div>
        <div v-else-if="color=='yellow'" style="width: 100%; height: 100px; background-color:yellow">
            <h1>
                About page  
            </h1>

            <p>This is us</p>
        </div>
        <div v-else-if="color=='red'" style="width: 100%; height: 100px; background-color:red">
            <h1>
                About page  
            </h1>

            <p>This is us</p>
        </div>
        <div v-else style="width: 100%; height: 100px; background-color:white">
            <h1>
                About page  
            </h1>

            <p>This is us</p>
        </div>
        <a :href="refactoryLink">Go to refactory website</a> <!--data binding not limited to links, any html attribute-->
        <form action="">
            <h6>Full Name: {{fullName}}</h6>
            <input v-model="fullName" type="text"> <!--two way data binding, good for password validation -->
        </form>
        <!--List rendering using v-for-->
    </div>
</template>

<script>
    export default {
    name: "about",
    components: {},
    data: function(){
        return{
            color: "black",
            refactoryLink: "https://refactory.academy/",
            fullName: "John Doe"
        }
    } 
}
</script>

<style>

</style>