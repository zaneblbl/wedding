<template>
  <div class="Dialog">
    <div class="Dialog__title">{{title}}</div>
    <!-- <div class="Dialog__bottom">知道了</div> -->
  </div>
</template>

<script>

export default {
  props:['title'],
  data(){
    return {}
  }
}
</script>

<style lang="scss">
.Dialog{
  background: #fff;
  min-width:3rem;
  min-height:2rem;
  .Dialog__title{
    font-size:.26rem;
    padding:.3rem;
    
  }

}
</style>