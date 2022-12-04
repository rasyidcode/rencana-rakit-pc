<template>
  <div class="text-red-500 rounded-xl">
    Hello, World! 
    <span v-for="(item, i) in testData" :key="i">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'TestComponent', 
  data() {
    return {
      testData: [
        "test1",
        "test2"
      ]
    }
  },
}
</script>
