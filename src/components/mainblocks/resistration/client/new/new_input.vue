<template>
<div>
  <p><newDescription></newDescription></p>
  <p><newForm></newForm></p>
</div>
</template>

<script>
import newDescription from '../../../../subblocks/resistration/client/new_Description.vue'
import newForm from '../../../../subblocks/resistration/client/new_Form.vue'

export default {
  components: {
    newDescription,
    newForm
  }
}
</script>
