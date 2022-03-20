<template>
  <div 
    class="profile-card-div purple-card container-fluid d-flex flex-column align-items-center justify-content-start col-lg-4 m-0 p-3 rounded"
  >
    <div class="header-img-container">
      <img 
        src="@/assets/imgs/Parerun_pfp_2.jpg" 
        class="header-img image-responsive" 
        alt="profile header image"
      >
    </div>
    <img 
      src="@/assets/imgs/Parerun_pfp_1.jpg" 
      class="profile-pic rounded-circle image-fluid" 
      alt="profile picture"
    >
    <p>Numbers_00</p>
    <p>
      Nullam efficitur sem at mauris pellentesque, ut lobortis augue finibus. 
      Integer in est nec purus blandit consectetur vel sed nisi. Sed velit eros, 
      faucibus et dui in, faucibus interdum diam. Ut consequat, neque id faucibus 
      convallis.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard'
}
</script>

<style scoped>
  .profile-card-div {
    min-height: 600px;
    max-height: 600px;
    position: relative;
  }
  .header-img-container {
    width: 100%;
    min-height: 200px;
    max-height: 200px;
  }
  .header-img {
    border: 2px solid #bd35d0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile-pic {
    border: 2px solid #bd35d0;
    position: absolute;
    top: 140px;
    width: 50%;
    object-fit: cover;
  }
  p {
    position: relative;
    top: 120px;
  }
</style>
