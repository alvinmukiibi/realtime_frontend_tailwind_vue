<template>
  <div
    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-4"
    role="alert"
  >
    <div class="flex">
      <div class="py-1 pr-4">
        <img :src="avatar" class="rounded-full" alt />
      </div>
      <div>
        <p class="font-bold">{{ comment.author }}</p>
        <p class="text-sm">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["comment"],
  data() {
    return {
      name: "Content"
    };
  },
  methods: {
    ...mapMutations({})
  },
  computed: {
    ...mapState({}),
    avatar() {
      return `https://api.adorable.io/avatars/48/${this.comment.author}@adorable.io.png`;
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
</style>