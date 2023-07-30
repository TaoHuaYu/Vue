<template>
  <div class="demo">
    <category title="游戏">
      <template scope="games">
        <ul>
          <li v-for="(game,index) in games.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </category>
    <category title="游戏">
      <template scope="obj">
        <ol>
          <li v-for="(game,index) in obj.games" :key="index">{{ game }}</li>
        </ol>
        {{ obj.hello }}
      </template>
    </category>
    <category title="游戏" >
     <template scope="obj">
      <h4 v-for="(game,index) in obj.games" :key="index">{{ game }}</h4>
     </template>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  components: { Category },
  name: "App",
};
</script>

<style>
.demo {
  display: flex;
  justify-content: space-around;
}
h4{
 text-align:center;
 color: red;
}
</style>