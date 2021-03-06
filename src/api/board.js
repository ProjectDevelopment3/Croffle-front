// 커뮤니티 게시판 조작과 관련된 CRUD API 함수 파일

import { instanceWithAuth, instance } from "./index";

// 커뮤니티 게시글 전체 조회(확인))
function fetchPosts() {
  return instance.get("boards");
}

// 커뮤니티 특정 게시글 조회(확인)
function fetchPost(postId) {
  return instance.get(`board/${postId}`);
}

// 커뮤니티 게시글 작성(확인)
function createPost(postData) {
  return instanceWithAuth.post("board", postData);
}

// 커뮤니티 게시글 삭제(확인)
function deletePost(postId) {
  return instanceWithAuth.delete(`board/${postId}`);
}

// 커뮤니티 게시글 수정(확인)
function editPost(postId, postData) {
  return instanceWithAuth.put(`board/${postId}`, postData);
}

export { createPost, fetchPosts, fetchPost, deletePost, editPost };
