<template>
  <div class="container mx-auto py-5">
    <Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>
    <NewComment />
  </div>
</template>

<script>
import * as api from "../api/api";
import { mapMutations, mapState } from "vuex";
import Comment from "./Comment";
import NewComment from "./NewComment";
window.Pusher = require("pusher-js");
export default {
  components: { Comment, NewComment },
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

    let pusher = new window.Pusher("918300", {
      cluster: "mt1",
      encrypted: false
    });

    let channel = pusher.subscribe("comment-channel");

    channel.bind("new-comment", () => {
      // console.log(data)
    });
  }
};
</script>

<style>
</style>