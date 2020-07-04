<template>
  <div class="Wedding">
    <span class="Wedding__title">你想来参加胡老板的婚礼么？</span>
    <div class="Wedding__item"><span @click="yes">我想!</span><span @click="no">不，我不想</span></div>

    <van-popup v-model="show">
      <Dialog :title="msg"></Dialog>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant';
import Dialog from '@components/Dialog/Dialog'
export default {
  data(){
    return {
      show:false,
      msg:''
    }
  },
  components:{
    [Popup.name]:Popup,
    Dialog
  },
  methods:{
    yes(){
      this.msg='人到不到无所谓，money请备好'
      this.show=!this.show
    },
    no(){
      this.msg='不！你想！'
      this.show=!this.show
    }
  }
}
</script>

<style lang="scss">
.Wedding{

  .Wedding__title{
    font-size: .5rem;
    margin-top:.3rem;

  }
  .Wedding__item{
    display: flex;
    justify-content: space-between;
    padding:0 .3rem;
    margin-top:.5rem;
    >span{
      font-size: .4rem;
    }
  }
}
</style>