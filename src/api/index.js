import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// 리뷰 작성하기
function registerReview(reviewData) {
  return instance.post("review", reviewData);
}

// 메뉴 제보하기
function reportMenu(reportMenuData) {
  return instance.post("report/menu", reportMenuData);
}

// 정보 수정 요청 제보
function reportInfo(reportInfoData) {
  return instance.post("report/info", reportInfoData);
}

export { registerReview, reportMenu, reportInfo };
