<template>
  <div class="async">
    {{data}}
  </div>
</template>

<script>
export default {
  name: 'Async',
  data() {
    return {
      data: 'Hi'
    }
  }
}
</script>

<style scoped>
.async {
  color: red;
}
</style>
