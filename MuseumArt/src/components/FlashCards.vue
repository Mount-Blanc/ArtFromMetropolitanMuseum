<template>
<base-card  v-for="items in Art"   >
{{ items.title }}
{{ items.culture }}
{{ items.itemName }}
<span v-if="items.primaryImage">
        <a :href="items.primaryImage" target="_blank">Image Link</a>
      </span>
{{ items.artistDisplayName }}
{{ items.artistDisplayBio }}
{{ items.classification }}
</base-card>
</template>

<script>
export default {
    props: ['selectedId'],
    data () {
        return {
        Art:[],
        }
    },
    mounted() {
    this.getSelectedArt();
  },
    methods: {
        getSelectedArt() {
            // Simple GET request using fetch
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.selectedId}`)
                .then(response => response.json())
                .then(data => {
                this.Art.push(data);
                console.log(data);
            });
        }
    }
}
</script>