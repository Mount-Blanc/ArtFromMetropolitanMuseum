<template>
<form @submit.prevent="getArtist">
    <input  type="text" placeholder="Search Artist"/>
    <button  class="button-56">Submit</button>
</form>
</template>

<script>
export default {
methods: {
    getArtist () {
        // Simple GET request using fetch
  fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/45734")
    .then(response => response.json())
    .then(data => console.log(data))
    }
}
}
</script>