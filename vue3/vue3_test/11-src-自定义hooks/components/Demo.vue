 <template>
  <h1>{{ sum }}</h1>
  <button type="button" @click="sum++">++</button>
  <h1>当前点击的坐标为{{point.x}},{{ point.y }}</h1>
</template>

  <script>
import { ref } from "vue";
import usePoint from '@/hooks/usePoint'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  setup() {
    const sum = ref(0);
    const msg = ref("hello");
    let point=usePoint();

    return {
      sum,
      msg,
      point,
    };
  },
};
</script>
  
  <style>
</style>
  