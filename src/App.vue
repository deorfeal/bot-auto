<script>

export default {
  data() {
    return {

    }
  }
}

</script>

<template>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

button {
  background: unset;
}

// // // // // // // // // // // // // // // // // // //

@function max($numbers...) {
  @return m#{a}x(#{$numbers});
}

@function min($numbers...) {
  @return m#{i}n(#{$numbers});
}

$maxWidth: 1920;
$maxWidthContainer: 1170;

@mixin adaptiv-value($property, $startSize, $minSize, $type) {
  $addSize: $startSize - $minSize;

  @if $type==1 {
    //Только если меньше контейнера
    #{$property}: $startSize + px;

    @media (max-width: #{$maxWidthContainer + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidthContainer - 320}));
    }
  }

  @else if $type==2 {
    //Только если больше контейнера
    #{$property}: $startSize + px;

    @media (min-width: #{$maxWidthContainer + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));
    }
  }

  @else {
    //Всегда
    #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));
  }
}

// // // // // // // // // // // // // // // // // // //

html,
body {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.main {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}


// // // // // // // // // // // // // // // // // // //

</style>