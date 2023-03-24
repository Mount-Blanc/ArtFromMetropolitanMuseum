


<template>
<button @click="setFrench">French</button> 
<button @click="setChina">China</button>   
<button @click="setMexico">Mexico</button>
<button @click="setEurope">Europe</button>   
<button @click="setIndia">India</button>   
<button @click="setAfrica">Africa</button>   
<button @click="setRussia">Russia</button>   
<base-card v-for="items in Art"   >
{{ items.title }}
{{ items.culture }}
{{ items.itemName }}
<a :href="items.primaryImage" target="_blank">Image Link</a>
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
      count:0,
      twelve:12
    }
},
methods: {
  setFrench() {
    this.Category="France"
    console.log(this.Category)
    this.Art=[]
    this.twelve=12
    this.count=0

    this.getCultureID()
  },
  setChina() {
    this.Category="China"
    console.log(this.Category)
    this.Art=[]
    this.twelve=12
    this.count=0

    this.getCultureID()
  },
  setRussia() {
    this.Category="Russia"
    console.log(this.Category)
    this.Art=[]
    this.twelve=12
    this.count=0

    this.getCultureID()
  },

  setMexico() {
    this.Category="Mexico"
    console.log(this.Category)
    this.Art=[]
    this.twelve=12
    this.count=0

    this.getCultureID()
  },
  setEurope() {
    this.Category="Europe"
    console.log(this.Category)
    this.Art=[]
    this.twelve=12
    this.count=0

    this.getCultureID()
  },
  setIndia() {
    this.Category="India"
    console.log(this.Category)
    this.Art=[]
    this.twelve=12
    this.count=0


    this.getCultureID()
  },
  setAfrica() {
    this.Category="Africa"
    console.log(this.Category)
    this.Art=[]
    this.twelve=12
    this.count=0


    this.getCultureID()
  },
    getCultureID() {
      // Simple GET request using fetch
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=${this.Category}&q=flowers`)
        .then(response => response.json())
        .then(data => {

          const objectID = data.objectIDs;
          const startIndex = this.count;
      const endIndex = this.count + this.twelve;
      const idSubset = objectID.slice(startIndex, endIndex);

idSubset.forEach(id => {
  this.getCultureArt(id);
});

this.count += this.twelve;

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