<template>
  <h1>坐标x{{ point.x }},y{{ point.y }}</h1>
</template>

<script>
import usePoint from '@/hooks/usePoint';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Test',
    setup(){
        let point=usePoint()

        return{
            point
        }
    }

}
</script>

<style>

</style>