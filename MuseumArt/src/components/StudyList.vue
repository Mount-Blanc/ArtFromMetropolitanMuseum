<template>
    <div>
      <base-card v-for="item in Art" :key="item.objectID">
        {{ item.title }}
        {{ item.culture }}
        {{ item.itemName }}
        <span v-if="item.primaryImage">
          <a :href="item.primaryImage" target="_blank">Image Link</a>
        </span>
        {{ item.artistDisplayName }}
        {{ item.artistDisplayBio }}
        {{ item.classification }}
      </base-card>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedId: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        Art: []
      };
    },
    mounted() {
      this.getSelectedArt();
    },
    methods: {
      getSelectedArt() {
        for (let i = 0; i < this.selectedId.length; i++) {
          const id = this.selectedId[i];
          fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then(response => response.json())
            .then(data => {
              this.Art.push(data);
              console.log(data);
            });
        }
      }
    }
  };
  </script>
  