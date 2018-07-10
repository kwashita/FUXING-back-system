<template>
  <div class="istration">
    <div class="istrationTabs">
      <ul>
        <li class="istrationTabsIs">全部福利</li>
        <li>我要推广本社福利</li>
      </ul>
    </div>
    <div class="istrationAll">
      <div class="istrations istrationAlltab">
        <div class="option">
          <el-form ref="form">
            <el-input placeholder="请输入所属名称/福利企业" class="optioninput"></el-input>
            <el-form-item label="福利分类" class="classification">
              <el-select v-model="data1" placeholder="全部" >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="推广状态" class="extension">
              <el-select placeholder="全部" v-model="data2">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" class="welfareTime">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">­­­­­­­­—</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date2"></el-date-picker>
              </el-col>
            </el-form-item>
            <button class="sousou">搜索</button>
            <button class="reset">重置</button>
          </el-form>
        </div>
        <div class="add">
          <button><span>+</span>添加福利</button>
        </div>
        <div class="istrationTab">
          <div class="istrationTabList">
            <ul ref="istrationTabList">
              <li class="istrationTabListLi tabOver" style="margin-left :0px;">全部</li>
              <li class="istrationTabListLi" >进行中</li>
              <li class="istrationTabListLi" >待上架</li>
              <li class="istrationTabListLi" >已过期</li>
              <li class="istrationTabListLi" >已售罄</li>
            </ul>
          </div>
          <div class="istrationTabContent"   ref="istrationTabContent">
            <div class="istrationTabContentDiv">
              <el-table
                :data="tableData3"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </div>
            <div class="istrationTabContentDiv" style="display:none;">
              <div>2222</div>
              <p>2222</p>
            </div>
            <div class="istrationTabContentDiv" style="display:none;">
              <div>333</div>
              <p>333</p>
            </div>
            <div class="istrationTabContentDiv" style="display:none;">444</div>
            <div class="istrationTabContentDiv" style="display:none;">555</div>
          </div>
        </div>
      </div>
      <div class="istrationExtension istrationAlltab" style="display:none;">
        <div class="option">
          <el-form ref="form">
            <el-input placeholder="请输入所属名称/福利企业" class="optioninput"></el-input>
            <el-form-item label="福利分类" class="classification">
              <el-select placeholder="全部" v-model="data1">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="计费标准" class="extension">
              <el-select placeholder="全部" v-model="data2">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" class="welfareTime">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">­­­­­­­­—</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date2"></el-date-picker>
              </el-col>
            </el-form-item>
            <button class="sousou">搜索</button>
            <button class="reset">重置</button>
          </el-form>
        </div>
        <div style="width:100%;height:50px;"></div>
        <div class="istrationTab">
          <div class="istrationTabList">
            <ul ref="istrationTabList">
              <li class="promotionListLi tabOver" style="margin-left :0px;">审核中</li>
              <li class="promotionListLi" >审核成功</li>
              <li class="promotionListLi" >审核失败</li>
            </ul>
          </div>
          <div class="istrationTabContent"   ref="istrationTabContent">
            <div class="promotionListDiv promotionClass">
              1111111
            </div>
            <div class="promotionListDiv" style="display:none;">
              <div>2222</div>
              <p>2222</p>
            </div>
            <div class="promotionListDiv" style="display:none;">
              <div>333</div>
              <p>333</p>
            </div>
            <div class="promotionListDiv" style="display:none;">444</div>
            <div class="promotionListDiv" style="display:none;">555</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      form: {
        date1: '',
        date2: ''
      },
      data1: '',
      data2: ''
    }
  },
  mounted () {
    this.getTab('.istrationTabListLi', '.istrationTabContentDiv', 'tabOver')
    this.getTab('.istrationTabs li', '.istrationAlltab', 'istrationTabsIs')
    this.getTab('.promotionListLi', '.promotionListDiv', 'promotionTabClass')
  },
  methods: {
    getTab (a, b, c) {
      let oli = document.querySelectorAll(a)
      let odiv = document.querySelectorAll(b)
      for (let i = 0; i < oli.length; i++) {
        oli[i].index = i
        oli[i].onclick = function () {
          for (let i = 0; i < oli.length; i++) {
            oli[i].className = ''
            odiv[i].style.display = 'none'
          }
          oli[i].className = c
          odiv[this.index].style.display = 'block'
        }
      }
    }
    // getTab () {
    //   let oli = document.querySelectorAll('.istrationTabListLi')
    //   let odiv = document.querySelectorAll('.istrationTabContentDiv')
    //   for (let i = 0; i < oli.length; i++) {
    //     oli[i].index = i
    //     oli[i].onclick = function () {
    //       for (let i = 0; i < oli.length; i++) {
    //         oli[i].className = ''
    //         odiv[i].style.display = 'none'
    //       }
    //       oli[i].className = 'tabOver'
    //       odiv[this.index].style.display = 'block'
    //     }
    //   }
    // }
    // getAllTab () {
    //   let oli = document.querySelectorAll('.istrationTabs li')
    //   let odiv = document.querySelectorAll('.istrationAlltab')
    //   for (let i = 0; i < oli.length; i++) {
    //     oli[i].index = i
    //     oli[i].onclick = function () {
    //       for (let i = 0; i < oli.length; i++) {
    //         oli[i].className = ''
    //         odiv[i].style.display = 'none'
    //       }
    //       oli[i].className = 'istrationTabsIs'
    //       odiv[this.index].style.display = 'block'
    //     }
    //   }
    // }
  }
}
</script>
<style scoped lang="stylus">
  .istrationTabs{
    height: 51px;
    width: 100%;
    border-bottom: 1px solid #eceaea;
    ul{
      display: flex;
      .istrationTabsIs{
        border-bottom: 3px solid #f86f4d;
        color :#f86f4d;
      }
      li{
          cursor:pointer;
          width: 140px;
          height: 49px;
          text-align: center;
          font-size: 16px;
          line-height: 49px;
          margin-left: 20px;
      }
    }
  }
  .option{
    width: 1110px;
    height: 106px;
    background-color: #f3f3f3;
    padding: 14px 0 0 20px;
    margin :20px 0 0 20px;
    form{
      display: flex;
      flex-wrap: wrap;
      .optioninput{
        width: 356px;
        margin-bottom: 14px;
      }
    }
  }
  .classification,.extension{
    width: 195px;
    margin-bottom: 14px;
    margin-left: 16px;
  }
  .classification .el-select,.extension .el-select{
    width: 120px;
    height: 36px;
  }
  .welfareTime{
    width: 360px;
    display: flex;
    margin-bottom: 0;
  }
  .welfareTime .el-input{
    width: 134px;
    height: 36px;
  }
  .welfareTime .el-form-item__content{
    width: 290px;
  }
  .sousou,.reset{
    width: 60px;
    height: 30px;
    text-align:center;
    line-height:30px;
    border-radius :4px;
    margin-top: 5px;
    border :none;
    color #fff;
    margin-left 14px;
  }
  .sousou{
    background-color :#f86f4d;
  }
  .reset{
    background-color #999999;
  }
  .istration{
    margin-left :230px;
    margin-top :120px;
    width :1191px;
    padding-top :20px;
    background-color :#fff;
    padding-left 19px;
    .istrations{
      width :1170px;
      background-color #fff;
      .istrationstitle{
        height :51px;
        width :100%;
        border-bottom :1px solid #eceaea;
        p{
          width :140px;
          height :49px;
          border-bottom :2px solid #f86f4d;
          text-align :center;
          font-size 16px;
          line-height 49px;
          color :#f86f4d;
          margin-left 20px;
        }
      }
    }
    .add{
      display :flex;
      justify-content :flex-end;
      margin-top :20px;
      button{
        width :140px;
        height :40px;
        text-align :center;
        line-height 40px;
        background-color :#f86f4d;
        border :none;
        font-size :16px;
        color :#fff;
        border-radius:8px;
        span{
          font-size 22px;
          margin-right :10px;
          line-height :10px;
          display :inline-block;
        }
      }
    }
    .istrationTab{
      margin-left :20px;
      .istrationTabList{
        height :39px;
        border-bottom :1px solid #dddddd;
        ul{
          display :flex;
          .tabOver{
            color :#f86f4d;
            background-color #fff;
            border :1px solid #f86f4d;
            border-bottom :none;
            height :40px;
          }
          .promotionClass{
            background-color: #fff;
            height: 50px;
          }
          li{
            width :100px;
            height :38px;
            border-radius :4px 4px 0 0;
            border:1px solid #ddd;
            border-bottom:none;
            margin-left :10px;
            background-color :#f1f1f1;
            text-align :center;
            line-height 38px;
            cursor:pointer;
          }
        }
      }
    }
  }
</style>
