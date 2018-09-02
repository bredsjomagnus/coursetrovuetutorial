<template>
    <div>
        <h1>About page</h1>
        <p>Hello {{ there_name }}</p>
    </div>
</template>

<script>
export default {
  name: 'About',
  there_name: 'anon',
  data() {
    return {
      there_name: this.$route.params.name
    }
  }
}
</script>