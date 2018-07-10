<template>
  <div>
    <el-row>
      <el-col>
        <span><i>*</i>添加组件：</span>
        <el-button @click='add_input'>文本</el-button>
        <el-button>图片</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=24>
        <ul>
          <li v-for='item in local_list' :key='item.id' class='local_list' v-if='input_lock'>
            <input type="text" placeholder="请输入本文" v-model='item.title' ref='input_text'>
            <el-button @click='add_text(item.id, item.title)'>保存</el-button>
            <el-button @click='dele_text(item.id)'>删除</el-button>
            {{local_list}}
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      local_list: [],
      content: '',
      count: null,
      input_lock: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      // this.init()
    })
  },
  watch: {
    count: {
      handler: function (val, oldval) {
        console.log(val, oldval)
      }
    }
  },
  methods: {
    init () {
      this.local_list = this.$store.state.list
    },
    add_text (id,title) {
      console.log(id, title);
      this.$store.dispatch('ADD_TEXT', {
        id,
        title
      })
    },
    add_input () {
      this.input_lock = !this.input_lock
      var id = '';
      var str = '7418520963'
      for (var i = 0; i < 8; i++) {
          id += str[~~(Math.random() * str.length)]
      }
      this.local_list.push({
        id,
        title: ''
      })
    },
    dele_text (id) {
      console.log(id)
      this.$store.dispatch('DELE_TEXT', id)
      this.input_lock = !this.input_lock
    }
  }
}
</script>
<style scoped lang='stylus'>
.local_list input{
  width: 60%;
  margin-bottom: 6px;
  height: 30px;
  border: 3px dotted #ccc;
}
</style>
