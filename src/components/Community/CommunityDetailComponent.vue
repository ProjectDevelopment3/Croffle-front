<template>
  <div class="community-post">
    <div class="post__wrapper">
      <div>
        <span class="post__category">
          &#91;{{ postData[0].category }}&#93;&nbsp;</span
        >
        <span class="post__title"> {{ postData[0].title }} </span>
      </div>
      <span class="post__create_date">
        {{ postData[0].modifiedDate }}
      </span>
      <span class="post__nick_name"> {{ postData[0].nickname }}&nbsp; </span>
      <p class="post__content">{{ postData[0].content }}&nbsp;</p>
    </div>
    <div class="btn__wrapper">
      <button type="button" class="btn--border" @click="showDelModal">
        삭제하기
      </button>
      <button type="button" class="btn--primary" @click="modifyForm">
        수정하기
      </button>
    </div>
    <modal-component v-if="isDelModalActive">
      <del-modal-content @close-modal="isDelModalActive = false" />
    </modal-component>
  </div>
</template>

<script>
import ic__arrow_left from "@/assets/ic/arrow_left.svg";
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import DelModalContent from "@/components/Modal/DelModalContent.vue";
// import { fetchPost } from "@/api/board";
import axios from "axios";

export default {
  components: { ModalComponent, DelModalContent },
  data() {
    return {
      board: ic__arrow_left,
      isDelModalActive: false,
      postData: [],
    };
  },
  // 게시글 내용 조회
  created() {
    this.fetchPost();
  },
  // computed: {
  //   formatDate(date) {
  //     return (date = date.split("T")[0]);
  //   },
  // },
  methods: {
    showDelModal() {
      this.isDelModalActive = true;
    },
    modifyForm() {
      // 게시글 수정 페이지
      this.$router.push(`/community/edit/${this.$route.params.id}`);
    },
    async fetchPost() {
      try {
        const { data } = await axios.get(
          ` http://34.64.32.174:8080/board/${this.$route.params.id}`
        );
        // await fetchPost(this.$route.params.id);
        console.log("게시글 상세 조회", data);
        this.postData = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
