<template>
  <div class="flames-body container-fluid">
    <div class="row d-flex justify-content-between">
      <ProfileCard />
      <div class="col-lg-7 m-0 p-0">
        <FLAMESForms />
        <HelperAccordion />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import FLAMESForms from '@/components/FLAMESForms.vue'
import HelperAccordion from '@/components/HelperAccordion.vue'

export default {
  name: 'FLAMESView',
  data () {
    return {}
  },
  components: {
    ProfileCard,
    FLAMESForms,
    HelperAccordion
  }
}
</script>

<style scoped>
  /* .row {
    display: flex;
    justify-content: space-between;
  } */
</style>
