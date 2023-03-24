


<template>
<button @click="setFrench">French</button> 
<button @click="setChina">China</button>   
<button @click="setMexico">Mexico</button>
<button @click="setEurope">Europe</button>   
<button @click="setIndia">India</button>   
<button @click="setAfrica">Africa</button>   
<button @click="setRussia">Russia</button>   
<base-card v-for="items in Art"  >
{{ items.title }}
{{ items.culture }}
{{ items.itemName }}
{{ items.primaryImage }}
{{ items.artistDisplayName }}
{{ items.artistDisplayBio }}
{{ items.classification }}
</base-card>

<button @click="getCultureID">Load More</button>
</template>

<script>  
export default {
  
    data() {
    return {
      Art: [],
      Category:'',
      offset: 0,
    }
},
methods: {
  setFrench() {
    this.Category="France"
    console.log(this.Category)
    this.getCultureID()
  },
  setChina() {
    this.Category="China"
    console.log(this.Category)
    this.getCultureID()
  },
  setRussia() {
    this.Category="Russia"
    console.log(this.Category)
    this.getCultureID()
  },

  setMexico() {
    this.Category="Mexico"
    console.log(this.Category)
    this.getCultureID()
  },
  setEurope() {
    this.Category="Europe"
    console.log(this.Category)
    this.getCultureID()
  },
  setIndia() {
    this.Category="India"
    console.log(this.Category)
    this.getCultureID()
  },
  setAfrica() {
    this.Category="Africa"
    console.log(this.Category)
    this.getCultureID()
  },
    getCultureID(offset = 0) {
      // Simple GET request using fetch
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=${this.Category}&q=flowers&offset=${this.offset}`)
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
          this.offset += 2;
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
}
</script>