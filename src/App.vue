<script >
import { reactive,ref,computed,watch,onMounted } from 'vue';
import son from './components/son.vue';
export default {
  components:{son},
  setup() {
    console.log('setup')
    const obj = reactive({
      data:123
    })
    const int = ref(123)
    console.log(int.value)
    const intdb = computed(()=>int.value*2)
    watch(()=>int.value,(n,o)=>n+o,{deep:true})

    return {
      obj,
      int,
      intdb,
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <div>
    {{ obj.data }} {{ int }} {{ intdb }}
  </div>
  <son :int="int" @sondo="d=>int=d"></son>
</template>

<style scoped></style>
