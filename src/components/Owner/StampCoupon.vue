<template>
  <div class="owner-stamp">
    <header class="owner__header">
      <h1>스탬프 찍어주기</h1>
      <span>회원 정보가 일치하면 스탬프를 적립해주세요.</span>
    </header>
    <div class="owner__card">
      <span class="owner__card-title">고객정보</span><br />
      <span class="owner__card-text"
        ><strong>{{ stampInfo[0].name }}</strong> 님</span
      >
    </div>
    <div class="owner__card">
      <span class="owner__card-title">보유 스탬프</span><br />
      <span class="owner__card-text"
        ><strong class="count">{{ stampInfo[0].stampCnt }}</strong> / 10개</span
      >
    </div>
    <button type="button" @click="createStamp" class="btn--primary">
      스탬프 적립하기
    </button>
  </div>
</template>

<script>
// import { createStamp } from "@/api/owner";
import axios from "axios";

export default {
  props: {
    stampInfo: {},
    cafeId: Number,
  },
  methods: {
    async createStamp() {
      try {
        console.log("스탬프 적립 완료");
        // const stampData = await createStamp({
        //   cafeId: this.cafeId,
        //   userId: this.stampInfo[0].userId,
        // });
        const { stampData } = await axios.post(
          " http://34.64.32.174:8080/owner/stamp",
          {
            cafeId: this.cafeId,
            userId: this.stampInfo[0].userId,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
        console.log(stampData);
      } catch (error) {
        console.log(error.message);
      } finally {
        let message = "적립이";
        this.$emit("setMessage", message);
        this.$router.push("/owner/complete");
      }
    },
  },
};
</script>

<style></style>
