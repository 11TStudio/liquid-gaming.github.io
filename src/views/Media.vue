<template>
  <div class="home background-image">
    <v-container >
      <v-card class="seeding-card">
        <v-row align="left" justify="left">
            
              <v-col cols="6">
                <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
              </v-col>        
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//Json files
import mediaLinks from "@/assets/json/mediaLinks.json"

export default {
  name: "seeding",
  data(){
      return{
        mediaLinks: mediaLinks,
        videoId: mediaLinks.find(o=>{return o.name === "liqTrailerVideo";}).link,
      }
  },
  methods:{
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
};
</script>

<style lang="css">
  .seeding-card{
    border-radius: 20px !important;
    margin-top: 75px !important;
    padding:35px !important; 
    background-color:rgb(34, 34, 34) !important;
  }
</style>