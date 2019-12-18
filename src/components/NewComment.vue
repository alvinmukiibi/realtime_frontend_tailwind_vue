<template>
  <div class="w-full mt-8">
    <form action class="bg-white shadow-md rounded px-8 p-6">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Your name</label>
        <input
          v-model="comment.author"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Name.."
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Comments</label>
        <textarea
          v-model="comment.content"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your comments..."
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          @click="makeComment"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as api from "../api/api";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      submit: false,
      comment: {
        content: "",
        author: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      addComment: "addComment"
    }),
    makeComment() {
      this.submit = true;
      api.makeComment(this.comment).then(response => {
        this.addComment(response);
      });
    }
  },
  computed: {
    ...mapState({
      comments: state => state.comments
    })
  },
  mounted() {}
};
</script>

<style>
</style>