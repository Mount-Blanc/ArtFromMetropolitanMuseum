

<template>
   <Header/>
   <Search/>
   <Works/>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Works from './components/Works.vue';

export default defineComponent({
  components: {
    Header,
    Search,
    Works,
  },
});
</script>

<style>
body{
  background-color: black;
  background-image: url("./components/Fallofroman.webp");

}

.button-56 {
  align-items: center;
  background-color: #c3a679;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
}

.button-56:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}
</style>