<template>
  <div class='container'>
    <nav class="purple-card navbar navbar-expand-lg navbar-light mt-5 mb-5 rounded">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">COMPAS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Database</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Interact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">FLAMES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Horoscope</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  .purple-card {
    border: 2px solid #bd35d0;
    background-color: #de9be9;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
