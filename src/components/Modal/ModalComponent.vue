<template>
  <div class="modal">
    <div class="overlay"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    couponData: [],
  },
};
</script>

<style></style>
