


<template>
    <main >
 <h2>Pick a Category</h2>
<button class="button-56" @click="setFrench">French</button> 
<button  class="button-56" @click="setChina">China</button>   
<button  class="button-56" @click="setMexico">Mexico</button>
<button  class="button-56" @click="setEurope">Europe</button>   
<button  class="button-56" @click="setIndia">India</button>   
<button  class="button-56" @click="setAfrica">Africa</button>   
<button  class="button-56" @click="setRussia">Russia</button>   
</main>

<aside class="Options">
<button class="button-56" @click="setStudyList()">StudyList  </button>
<button class="button-56" @click="this.currentComponent = ''">ArtList  </button>
</aside>

<component :is="currentComponent" :selectedId="selectedId"></component>

<base-card v-if="this.currentComponent != 'StudyList'" v-for="items in Art"   >
{{ items.title }}
{{ items.culture }}
{{ items.itemName }}
<span v-if="items.primaryImage">
        <a :href="items.primaryImage" target="_blank">Image Link</a>
      </span>
{{ items.artistDisplayName }}
{{ items.artistDisplayBio }}
{{ items.classification }}
<button class="button-56" @click="showId(items.objectID)">Add to StudyList</button>
</base-card> 

<button class="button-56" @click="getCultureID">Load More</button>
</template>

<script>  
import StudyList from './StudyList.vue'
export default {
    data() {
        return {
            Art: [],
            Category: "",
            count: 0,
            twelve: 12,
            currentComponent:'',
            selectedId:[],
        };
    },
    methods: {
      setStudyList() {
        this.currentComponent = 'StudyList'
      },
        showId(id) {
            this.selectedId.push(id);        
            console.log('this is id',this.selectedId)
        },
        setFrench() {
            this.Category = "France";
            console.log(this.Category);
            this.Art = [];
            this.twelve = 12;
            this.count = 0;
            this.getCultureID();
        },
        setChina() {
            this.Category = "China";
            console.log(this.Category);
            this.Art = [];
            this.twelve = 12;
            this.count = 0;
            this.getCultureID();
        },
        setRussia() {
            this.Category = "Russia";
            console.log(this.Category);
            this.Art = [];
            this.twelve = 12;
            this.count = 0;
            this.getCultureID();
        },
        setMexico() {
            this.Category = "Mexico";
            console.log(this.Category);
            this.Art = [];
            this.twelve = 12;
            this.count = 0;
            this.getCultureID();
        },
        setEurope() {
            this.Category = "Europe";
            console.log(this.Category);
            this.Art = [];
            this.twelve = 12;
            this.count = 0;
            this.getCultureID();
        },
        setIndia() {
            this.Category = "India";
            console.log(this.Category);
            this.Art = [];
            this.twelve = 12;
            this.count = 0;
            this.getCultureID();
        },
        setAfrica() {
            this.Category = "Africa";
            console.log(this.Category);
            this.Art = [];
            this.twelve = 12;
            this.count = 0;
            this.getCultureID();
        },
        getCultureID() {
            // Simple GET request using fetch
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${this.Category}`)
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
                console.log(data);
            });
        }
    },
    components: { StudyList }
}
</script>

<style scoped>

.Options {
    display: flex;
    justify-content: center;
    align-items: center;
    height:2rem;
    padding: 2rem;
}
</style>