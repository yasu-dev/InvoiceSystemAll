<template>
<div>
  <div id="app-pricecal" class="button-cal">
    <el-row>
      <el-button class="button-cal-button" type="primary" v-on:click="PriceCal">ログイン</el-button>
    </el-row>
  </div>
  <div id="app-reset" class="button-res">
    <el-row>
      <el-button class="button-res-button" type="danger" v-on:click="ResetData">リセット</el-button>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    PriceCal: function (event) {
      var xmldata = []
      var sendtype = ['Priority Mail Express', 'Priority']

      xmldata = '{"username": "'
      xmldata += this.$store.state.zipcode1
      xmldata += '","password": "'
      xmldata += this.$store.state.zipcode2
      xmldata += '"}'

      this.$store.dispatch('getPricedata', {Xmldata: xmldata})

      window.localStorage.setItem('zip1', this.$store.state.zipcode1)
      window.localStorage.setItem('zip2', this.$store.state.zipcode2)
      window.localStorage.setItem('len1', this.$store.state.length1)
      window.localStorage.setItem('len2', this.$store.state.length2)
      window.localStorage.setItem('len3', this.$store.state.length3)
      window.localStorage.setItem('wei', this.$store.state.weight)
      this.$store.dispatch('getZipcodedata')
      this.$store.dispatch('getLengthdata')
      this.$store.dispatch('getWeightdata')

/*      this.$router.push('/pageresult')
*/
    },

    ResetData: function (event) {
      window.localStorage.setItem('zip1', '92111')
      window.localStorage.setItem('zip2', '')
      window.localStorage.setItem('len1', '')
      window.localStorage.setItem('len2', '')
      window.localStorage.setItem('len3', '')
      window.localStorage.setItem('wei', '')
      this.$store.dispatch('getZipcodedata')
      this.$store.dispatch('getLengthdata')
      this.$store.dispatch('getWeightdata')
    }
  }
}
</script>

<style>
.button-cal {
  display: inline-block;
}
.button-cal-button {
  width: 200px;
}
.button-res {
  display: inline-block;
  width: 100px;
}
.button-res-button {
  width: 100px;
}
</style>
