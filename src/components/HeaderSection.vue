<template>
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to='/'>
            <a class="nav-link active" aria-current="page"> Home </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/products'>
            <a class="nav-link" aria-current="page"> Products </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/services'>
            <a class="nav-link" aria-current="page"> Services </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/about'>
            <a class="nav-link " aria-current="page"> About </a>
          </router-link>
        </li>        

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>   
    </nav>    
    </div>
</template>

<script>
    export default {
    name: "HeaderSection"  
}
</script>

<style>

</style>