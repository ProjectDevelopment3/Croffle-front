<template>
  <div id="report-component">
    <div class="complete__wrapper">
      <img :src="ic__complete" />
      <h3>제보가 완료되었습니다.</h3>
      <p>
        검토 후 승인이 완료되면<br />
        정보를 수정할게요!
      </p>
      <button type="button" class="btn--primary" @click="toMain">홈으로</button>
    </div>
  </div>
</template>

<script>
import ic__complete from "@/assets/ic/complete.svg";
export default {
  data() {
    return {
      ic__complete,
    };
  },
  methods: {
    toMain() {
      this.$router.push("/cafes");
    },
  },
};
</script>

<style></style>
