<template>
  <div>
    <div class="phone">
      <ul>
        <li v-for='item in phone_list' :key='item.id'>
          <p>{{item.title}}</p>
          <!-- {{item}} -->
        </li>
      </ul>
      <!-- {{$store.state.list}} -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // phone_list: []
    }
  },
  // mounted () {
  //   this.$nextTick(function () {
  //     this.init()
  //   })
  // },
  computed: {
    phone_list () {
      return this.$store.state.list
    }
  }
}
</script>
<style scoped lang='stylus'>
.phone{
  width: 324px;
  height: 662px;
  background: url('../assets/welfare_details/phone_bg_03.png') no-repeat;
  margin-left: 35px;

  ul{
    padding-top: 80px;
    margin-left: 30px;
  }
}
</style>
