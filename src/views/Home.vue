<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="city">city</label>
        <input type="text" class="form-control" v-model="form.city" />
      </div>
    </form>
    <button @click="load">tets</button>
  </div>
</template>

<script>
import weaterService from "../components/service/weaterService.js";
export default {
  data() {
    return {
      form: {
        city: "",
      },
    };
  },
  name: "Home",
  components: {},
  methods: {
    async load() {
      await console.log(weaterService.api);
    },
  },
};
</script>
