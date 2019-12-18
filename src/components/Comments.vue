<template>
  <div class="container mx-auto py-5">
    <Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>
  </div>
</template>

<script>
import * as api from "../api/api";
import { mapMutations, mapState } from "vuex";
import Comment from "./Comment";
export default {
  components: { Comment },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      setComments: "setComments"
    }),
    getComments() {
      api.getComments().then(response => {
        this.setComments(response);
      });
    }
  },
  computed: {
    ...mapState({
      comments: state => state.comments
    })
  },
  mounted() {
    this.getComments();
  }
};
</script>

<style>
</style>