<template>
  <div>
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
  </div>

</template>
<script>
  export default {
    name:'hello',
    data () {
        return{
            visible: false
        }
    },
      methods: {
          show: function () {
              this.visible = true;
          }
      }
  }
</script>
