<template>
<div class="cal-form">
  <p><InputZipcode></InputZipcode></p>
  <p><InputLength></InputLength></p>
  <p><InputWeight></InputWeight></p>
  <buttonConfirmation></buttonConfirmation>
</div>
</template>

<script>
import InputZipcode from '../../../parts/Input_Zipcode.vue'
import InputLength from '../../../parts/Input_Length.vue'
import InputWeight from '../../../parts/Input_Weight.vue'
import buttonConfirmation from '../../../parts/button_confirmation.vue'

export default {
  components: {
    InputZipcode,
    InputLength,
    InputWeight,
    buttonConfirmation
  }
}
</script>

<style>
.cal-form {
  line-height: 250%;
}
</style>
