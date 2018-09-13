<template>
  <div class="hello">
    <div id="topB">topB element</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    window.addEventListener('scroll', this.topBResize);
  },
  methods: {
    topBResize() {
      var header = document.getElementById('topB');
      if (!header) return;
      var pos1 = header.offsetTop;
      var pageYOffset = window.pageYOffset;
      if (pageYOffset > pos1) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
