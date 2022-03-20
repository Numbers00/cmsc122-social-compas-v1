<template>
<div class="accordion container-fluid p-0" id="helperAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Previous Matches
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#helperAccordion">
      <div class="accordion-body">
        There are no previous matches, start by matching with other people in FLAMES or Horoscope!
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Others Comments
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#helperAccordion">
      <div class="accordion-body">
        There are no comments from others yet.
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelperAccordion'
}
</script>

<style scoped>
.accordion {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.accordion-item {
  border: 2px solid #bd35d0;
  background-color: #de9be9;
}

.accordion-button {
  border-bottom: 2px solid #bd35d0;
  background-color: #de9be9;
  color: black;
}
</style>
