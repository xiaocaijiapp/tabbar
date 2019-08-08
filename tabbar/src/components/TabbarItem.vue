<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="setActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#6ab502'
    }
  },
  data(){
    return {
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    setActiveColor(){
      return this.isActive? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>
<style scoped>
.tabbar-item{
  flex:1;
  height:49px;
  text-align: center;
  font-size:14px;
}
.tabbar-item img{
  width:28px;
  height:28px;
  margin-top:1px;
  vertical-align: middle;
}
</style>
