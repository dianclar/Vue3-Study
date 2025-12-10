<script setup>
  import { onBeforeMount,onBeforeUpdate,onBeforeUnmount,ref,onMounted } from 'vue'
  import sonson from './sonson.vue'
console.log(this)
onBeforeMount(()=>{
  console.log('onBeforeMount')
})
onBeforeUpdate(()=>{
  console.log('onBeforeUpdate')
})
onBeforeUnmount(()=>{
  console.log('onBeforeUnmount')
})

const props = defineProps(['int'])
const emit = defineEmits(['sondo'])
setTimeout(()=>{
  emit('sondo',111)
},1000)

const divref = ref(null)
onMounted(()=>{
  console.log(divref.value.sonson)
})
</script>


<template>
  <div>
    {{ int }}
  </div>
  <sonson  ref="divref"></sonson>
</template>