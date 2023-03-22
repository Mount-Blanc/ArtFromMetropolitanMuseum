<template>
    <button @click="setFrench">French</button>
    <button @click="setChina">China</button>

    <li  v-for="item in Art">{{ item }}></li>
</template>

<script>   
export default {
    data() {
    return {
      Art: [],
      Category:'',
    }
},
methods: {
  setFrench() {
    this.Category="french"
    console.log(this.Category)
    this.getCultureID()
  },
  setChina() {
    this.Category="China"
    console.log(this.Category)
    this.getCultureID()
  },
    getCultureID() {
      // Simple GET request using fetch
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${this.Category}`)
        .then(response => response.json())
        .then(data => {
          const objectID = data.objectIDs;
          let counter = 0;
          objectID.forEach((id, index) => {
            if (counter < 2) {
          this.getCultureArt(id);
          counter++; // increment counter after processing an ID
          console.log(counter)
        } else {
          return; // exit loop if counter reaches 20
        }
          });
        });
    },
    getCultureArt(id) {
      // Simple GET request using fetch
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        .then(response => response.json())
        .then(data => {
          this.Art.push(data);
          console.log(data)
        });
    }
  },
  beforeMount() {
    this.getCultureID();
  },
}
</script>