<template>
  <div class="home background-image">
    <v-container >
      <v-card class="media-card">
        <v-layout row wrap class="justify-center">
            <youtube :video-id="videoId" ref="youtube" @playing="playing" :resize="true" :width="1280" :height="720"></youtube>
        </v-layout>
        <!-- <v-container class="my-2">
          <v-card>
            <v-card style="background-color:#141414;padding:15px !important;text-align:center;" class="shadow">
              <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" >
                Featured Youtube Channels
              </div>
            </v-card>
            <v-card style="background-color:#1c1c1c;padding:15px !important;">
              <v-layout row wrap class="justify-center">
                <v-flex xs12 sm12 md6 lg5 xl3  v-for="(channel, index) in youtubeChannels" :key="index">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;">
                      
                    </v-card>
                </v-hover>
                </v-flex>
              </v-layout>
            </v-card>
          </v-card>
        </v-container> -->
        <v-container class="my-2">
          <v-card>
            <v-card style="background-color:#141414;padding:15px !important;text-align:center;">
              <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" >
                Featured Twitch Channels
              </div>
            </v-card>
            <v-card style="background-color:#1c1c1c;padding:15px !important;">
              <v-layout row wrap class="justify-center">
                <v-flex xs12 sm12 md6 lg5 xl3  v-for="(channel, index) in twitchChannels" :key="index">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;">
                      <VueTwitchPlayer :channel="channel" />
                    </v-card>
                </v-hover>
                </v-flex>
              </v-layout>
            </v-card>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import VueTwitchPlayer from 'vue-twitch-player';

//Json files
import mediaLinks from "@/assets/json/mediaLinks.json"
import twitchChannels from "@/assets/json/twitchChannels.json"
import youtubeChannels from "@/assets/json/youtubeChannels.json"

export default {
  name: "media",
  components: {
    VueTwitchPlayer
  },
  data(){
      return{
        mediaLinks: mediaLinks,
        videoId: mediaLinks.find(o=>{return o.name === "liqTrailerVideo";}).link,
        twitchChannels: twitchChannels,
        youtubeChannels: youtubeChannels,
        model: null
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
  .media-card{
    border-radius: 20px !important;
    margin-top: 75px !important;
    padding:35px !important; 
    background-color:rgb(34, 34, 34) !important;
  }
</style>