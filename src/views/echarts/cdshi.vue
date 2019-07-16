<template>
    <div>
        <div class='top '>
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class='sesstion wt100 flexct'>
            <el-row :gutter="10" style='width:90%;'>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="grid-content bg-purple">
                        <div></div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
    </div>
    
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted(){
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
color: #475669;
font-size: 18px;
opacity: 0.75;
line-height: 300px;
margin: 0;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
