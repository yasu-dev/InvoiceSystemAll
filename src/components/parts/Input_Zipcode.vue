<template>
<div id="app-zipcode">
  <span class="input-suffix-title">
    ID
    <el-input class="input-suffix-zipcode"
      placeholder="92111"
      v-model="$store.state.zipcode1">
    </el-input>
  </span>
  <span class="input-suffix-title">
    PW
    <el-input class="input-suffix-zipcode"
      placeholder="98101"
      v-model="$store.state.zipcode2">
    </el-input>
  </span>
</div>
</template>

<script>
export default {
  name: 'app-zipcode',
  mounted () {
    this.$store.dispatch('getZipcodedata')
  }
}
</script>

<style>
.input-suffix-title {
  display: inline-block;
  line-height: 200%;
  width: 120px;
}
.input-suffix-zipcode {
  display: inline-block;
  line-height: 200%;
  width: 80px;
}
</style>
