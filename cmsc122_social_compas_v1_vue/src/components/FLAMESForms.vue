<template>
  <div class="purple-card container-fluid m-0 rounded">
    <p class="container-fluid mt-2 mb-2 text-start p-0">
      <span class="flames-span p-2">FLAMES</span>
      Fill the following with the names of the people you want to match with
    </p>
    <form>
      <div class="d-flex justify-content-between mb-3">
        <input 
          type="text" 
          class="form-control flex-grow-1" 
          id="name1"
          placeholder="Hanamaru Hareru"
        >
        <input 
          type="text" 
          class="form-control flex-grow-1" 
          id="name2"
          placeholder="Hanamaru Hareru"
        >
      </div>
      <div class="d-flex justify-content-between mb-3">
        <input 
          type="text" 
          class="form-control flex-grow-1" 
          id="name3"
          placeholder="Hanamaru Hareru"
        >
        <input 
          type="text" 
          class="form-control flex-grow-1" 
          id="name4"
          placeholder="Hanamaru Hareru"
        >
      </div>
      <div class="d-flex justify-content-between mb-3">
        <input 
          type="text" 
          class="form-control flex-grow-1" 
          id="name5"
          placeholder="Hanamaru Hareru"
        >
        <input 
          type="text" 
          class="form-control flex-grow-1" 
          id="name6"
          placeholder="Hanamaru Hareru"
        >
      </div>
    </form>
    <div class="bottom-form-controls row justify-content-between m-0 mb-2 p-0">
      <input 
        type="number" 
        class="form-control p-0" 
        id="quantity" 
        name="quantity" 
        value="6"
        min="1" 
        max="20"
        aria-describedby="quantityHelpInline"
      >
      <div class="col-auto">
        <label for="quantity" class="col-form-label text-left">Number of People to Match with</label>
      </div>
      <button type="button" class="btn btn-secondary btn-sm col-lg-2">Match</button>
      <button type="button" class="btn btn-secondary btn-sm col-lg-2">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FLAMESForms'
}
</script>

<style scoped>
.flames-span {
  border: 2px solid #788997;
  background-color: #c2cfd8;
  position: relative;
  bottom: 20px;
}

form .form-control {
  min-width: 49%;
  max-width: 49%;
}

.bottom-form-controls button {
  min-width: 20%;
  max-width: 20%;
}

#quantity::-webkit-outer-spin-button,
#quantity::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#quantity {
  min-width: 34px;
  max-width: 34px;
  min-height: 34px;
  max-height: 34px;
  text-align: center;
}
</style>
