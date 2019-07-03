<template>
    <!-- <div> -->
        <!-- <baidu-map class="map"></baidu-map> -->
        <!-- <baidu-map class="map" ak="RiyTMxuMEPkKAoMHW47HD3XmG0pEhXNr" center="杭州市拱墅区" :zoom="15">
            <bm-marker :position="{lng: 120.19,lat: 30.277}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
        </baidu-map> -->
        <baidu-map class="map" ak="RiyTMxuMEPkKAoMHW47HD3XmG0pEhXNr" center="杭州市拱墅区" :zoom="10">
          <bm-marker :position="{lng: 120.119114, lat: 30.322371}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label content="杭州汽车北站" :labelStyle="{color: 'red', fontSize : '16px'}" :offset="{width: -35, height: 20}"/>
          </bm-marker>
          <bm-marker :position="{lng: 120.119114, lat: 30.40171}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label content="我的家" :labelStyle="{color: 'red', fontSize : '16px'}" :offset="{width: -35, height: 20}"/>
          </bm-marker>
        </baidu-map>
    <!-- </div> -->
</template>
<script>
import { BaiduMap,BmMarker,BmLabel,BmScale, BmGeolocation } from 'vue-baidu-map';
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    BaiduMap,
    BmScale,
    BmMarker,
    BmLabel,
    BmGeolocation
  },
  mounted(){
    
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
  width: 100%;
  height: 500px;
}
</style>
