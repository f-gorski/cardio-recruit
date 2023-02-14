<template>
  <div class="signals-error">
    <h3 class="signals-error__header">Could not load Signals.</h3>
    <p class="signals-error__subheader">Network error</p>
  </div>
</template>

<script>
export default {}
</script>

<style>
.signals-error {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
}
.signals-error__header {
  font-size: 20px;
}
.signals-error__subheader {
  color: rgb(189, 2, 2);
}
</style>
