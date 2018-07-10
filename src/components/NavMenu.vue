<style lang='stylus'>
.logo{
  height: 79px;
  background: #F33E46;
  line-height 79px;
  color: #ffffff;
  font-size: 18px;

  img:nth-child(1){
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    display: inline-block;
    vertical-align: middle;
    margin-left: 14px;
    margin-right: 0;
}
}
.el-aside img{
  margin-right: 18px;
  margin-left: 14px;
}
.el-menu-item-group ul li{
  background: #283246 !important;
  &:hover{
    background: #32435F !important;
  }
}
.el-menu-item{
  text-indent: 4.5em;
}
.el-submenu__title{
  border-bottom: 2px solid #20314D;
}
.el-menu-item-group__title{
  padding-top: 0px;
  height: 0px;
  display none;
}
.el-menu-item.is-active{
  border-right: 6px solid #F23E46;
}
</style>
<template>
<el-row class="tac">
  <el-col :span="24">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
      unique-opened
      background-color="#263752"
      text-color="#ffffff"
      active-text-color="white"
    >
    <div class='logo'>
      <img src="" alt="">
      福星社管理平台</div>
      <el-submenu index="1">
        <template slot="title">
          <img src="../assets/icons/aside/data_wei.png" alt="" ref='img_1'>数据概览</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <img src="../assets/icons/aside/enterprise_wei.png" alt="" ref='img_2'>福利企业</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <img src="../../static/icons/aside/manage_xuan.png" alt="" ref='img_3'>福利管理</template>
      <el-menu-item-group>
        <el-menu-item index="/welfaremanagement">福利管理1</el-menu-item>
        <el-menu-item index="/welfareDetails">选项2</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img src="../assets/icons/aside/commission_wei.png" alt="" ref='img_4'>赚取佣金</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <img src="../assets/icons/aside/order_wei.png" alt="" ref='img_5'>订单管理</template>
        <el-menu-item-group>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <img src="../assets/icons/aside/coupon_wei.png" alt="" ref='img_6'>优惠券</template>
        <el-menu-item-group>
          <el-menu-item index="6-1">选项1</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <img src="../assets/icons/aside/finance_wei.png" alt="" ref='img_7'>财务管理</template>
        <el-menu-item-group>
          <el-menu-item index="7-1">选项1</el-menu-item>
          <el-menu-item index="7-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <img src="../assets/icons/aside/core_wei.png" alt="" ref='img_8'>福星中心</template>
        <el-menu-item-group>
          <el-menu-item index="8-1">选项1</el-menu-item>
          <el-menu-item index="8-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <img src="../assets/icons/aside/system_wei.png" alt="" ref='img_9'>系统设置</template>
        <el-menu-item-group>
          <el-menu-item index="9-1">选项1</el-menu-item>
          <el-menu-item index="9-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>

</template>
<script>
import DATA_IMG from '../assets/icons/aside/data_wei.png'
import DATA_CHANGE_IMG from '../assets/icons/aside/data_xuan.png'
import ENTERPRISE_IMG from '../assets/icons/aside/enterprise_wei.png'
import ENTERPRISE_CHANGE_IMG from '../assets/icons/aside/enterprise_xuan.png'
import MANAGE_IMG from '../assets/icons/aside/manage_wei.png'
import MANAGE_CHANGE_IMG from '../assets/icons/aside/manage_xuan.png'
import COMMISSION_IMG from '../assets/icons/aside/commission_wei.png'
import COMMISSION_CHANGE_IMG from '../assets/icons/aside/commission_xuan.png'
import ORDER_IMG from '../assets/icons/aside/order_wei.png'
import ORDER_CHANGE_IMG from '../assets/icons/aside/order_xuan.png'
import COUPON_IMG from '../assets/icons/aside/coupon_wei.png'
import COUPON_CHANGE_IMG from '../assets/icons/aside/coupon_xuan.png'
import FINANCE_IMG from '../assets/icons/aside/finance_wei.png'
import FINANCE_CHANGE_IMG from '../assets/icons/aside/finance_xuan.png'
import CORE_IMG from '../assets/icons/aside/core_wei.png'
import CORE_CHANGE_IMG from '../assets/icons/aside/core_xuan.png'
import SYSTEM_IMG from '../assets/icons/aside/system_wei.png'
import SYSTEM_CHANGE_IMG from '../assets/icons/aside/system_xuan.png'
export default {
  data () {
    return {
      a: null
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      this.a = parseInt(key)
      switch (this.a) {
        case 1:
          this.$refs.img_1.src = DATA_CHANGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_8.src = CORE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 2:
          this.$refs.img_2.src = ENTERPRISE_CHANGE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_8.src = CORE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 3:
          this.$refs.img_3.src = MANAGE_CHANGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_8.src = CORE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 4:
          this.$refs.img_4.src = COMMISSION_CHANGE_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_8.src = CORE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 5:
          this.$refs.img_5.src = ORDER_CHANGE_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_8.src = CORE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 6:
          this.$refs.img_6.src = COUPON_CHANGE_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_8.src = CORE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 7:
          this.$refs.img_7.src = FINANCE_CHANGE_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_8.src = CORE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 8:
          this.$refs.img_8.src = CORE_CHANGE_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_9.src = SYSTEM_IMG
          break
        case 9:
          this.$refs.img_9.src = SYSTEM_CHANGE_IMG
          this.$refs.img_3.src = MANAGE_IMG
          this.$refs.img_2.src = ENTERPRISE_IMG
          this.$refs.img_1.src = DATA_IMG
          this.$refs.img_4.src = COMMISSION_IMG
          this.$refs.img_5.src = ORDER_IMG
          this.$refs.img_6.src = COUPON_IMG
          this.$refs.img_7.src = FINANCE_IMG
          this.$refs.img_8.src = CORE_IMG
          break
      }
    },
    handleClose (key, keyPath) {
      this.a = parseInt(key)
      switch (this.a) {
        case 1:
          this.$refs.img_1.src = DATA_IMG
          break
        case 2:
          this.$refs.img_2.src = ENTERPRISE_IMG
          break
        case 3:
          this.$refs.img_3.src = MANAGE_IMG
          break
        case 4:
          this.$refs.img_4.src = COMMISSION_IMG
          break
        case 5:
          this.$refs.img_5.src = ORDER_IMG
          break
        case 6:
          this.$refs.img_6.src = COUPON_IMG
          break
        case 7:
          this.$refs.img_7.src = FINANCE_IMG
          break
        case 8:
          this.$refs.img_8.src = CORE_IMG
          break
        case 9:
          this.$refs.img_9.src = SYSTEM_IMG
          break
      }
    }
  }
}
</script>
