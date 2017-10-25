<template functional>
  
  <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>

</template>

<script>
export default {
  name: 'Loader',
  functional: true,

}
</script>

<style scoped>

.spinner {
  width: 40px;
  height: 40px;

  position: relative;
  margin: 100px auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #3a3;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}


@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}


</style>
