<template>
  <div class="community">
    <header class="page-title">커뮤니티</header>
    <form>
      <div class="input__box">
        <label>게시글 카테고리</label>
        <select v-model="category">
          <option value="RECIPE">레시피 글</option>
          <option value="FREE">자유 글</option>
        </select>
      </div>
      <div class="input__box">
        <label>게시글 제목</label>
        <input
          placeholder="게시글 제목을 입력해주세요."
          v-model="title"
          maxlength="30"
        />
        <span class="count">{{ titleLength }}/30</span>
      </div>
      <div class="input__box">
        <label>게시글 내용</label>
        <textarea
          placeholder="게시글 내용을 입력해주세요."
          v-model="content"
          maxlength="1500"
        />
        <span class="count">{{ contentLength }}/1500</span>
      </div>
    </form>
    <button
      @click="createPost"
      type="button"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      게시글 작성 완료
    </button>
  </div>
</template>

<script>
// import { createPost } from "@/api/board";
import { getAuthFromCookie } from "@/utils/cookies";
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
      category: "RECIPE",
    };
  },
  computed: {
    isValid() {
      if (this.title && this.content) {
        return true;
      } else {
        return false;
      }
    },
    titleLength() {
      return this.title.length;
    },
    contentLength() {
      return this.content.length;
    },
  },
  methods: {
    async createPost() {
      try {
        console.log("폼 제출");
        // const postData = await createPost({
        //   title: this.title,
        //   content: this.content,
        //   boardCategory: this.category,
        // });
        // console.log(postData);
        await axios.post(
          " http://34.64.32.174:8080/board",
          {
            title: this.title,
            content: this.content,
            boardCategory: this.category,
          },
          {
            headers: {
              Authorization: `Bearer ${getAuthFromCookie()}`,
            },
          }
        );
        this.$router.push("/community");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>
