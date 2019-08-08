<template>
  <tabbar>
      <tabbar-item path="/home" activeColor="#6ab502">
        <img slot="item-icon" src="../assets/img/tabbar/index.png">
        <img slot="item-icon-active" src="../assets/img/tabbar/index_active.png">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/product" activeColor="#6ab502">
        <img slot="item-icon" src="../assets/img/tabbar/product.png">
        <img slot="item-icon-active" src="../assets/img/tabbar/product_active.png" >
        <div slot="item-text">商品</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="#6ab502">
        <img slot="item-icon" src="../assets/img/tabbar/car.png">
        <img slot="item-icon-active" src="../assets/img/tabbar/car_active.png">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/me" activeColor="#6ab502">
        <img slot="item-icon" src="../assets/img/tabbar/me.png">
        <img slot="item-icon-active" src="../assets/img/tabbar/me_active.png">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>
<script>
import tabbar from './Tabbar'
import tabbarItem from './TabbarItem'
export default {
  components: {
    tabbar,
    tabbarItem
  }
}
</script>
<style>

</style>


