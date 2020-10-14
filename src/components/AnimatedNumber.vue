<template>
  <number
    :from="0"
    :to="number"
    :duration="3"
    :delay=".2"
    easing="Power1.easeOut"
  />
</template>

<script>
export default {
 props: { 
     number: { default: 0 },
     name: {default: "" }
    }
}
</script>

<style>
</style>
