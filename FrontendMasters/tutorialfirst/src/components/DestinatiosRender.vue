<template>
  <div class="destinations">
    <h1>{{header}}</h1>
    <div class="places-container" >
      <div class="places" v-for="location in locations" :key="location.name">
        <PlaceCard :name="location.name" :desc="location.desc" :img = "location.img"/>
      </div>


    </div>
  </div>
</template>
<script>

import PlaceCard from "@/components/ui/PlaceCard";
export default {
  name:"DestinationsRender",
  components: {PlaceCard},
  props:{
    header:{
      type:String,
      require:true,
      default:()=>"Destinations Render"

    }
  },
  data (){
    return{
      // header:"Destinations"
      locations: [
        {
          name: 'moscow',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg',
          desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
        },
        {
          name: 'paris',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        },
        {
          name: 'rome',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
          desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`
        },
        {
          name: 'paris',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg',
          desc: `By the end of the 12th century, Paris had become the political, economic, religious, and cultural capital of France. Maurice de Sully undertook the construction of the Notre Dame Cathedral at its eastern extremity.`
        },
      ]
    }

  }
}

</script>
<style>
.destinations{
  border: 2px solid red;
  padding: 20px;
  margin-top: 10px;
}
.places-container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  background-color: #a8a8a8;
}
.places{
  display: flex;
  justify-content: center;
  align-items:center ;
  flex-direction: column;
  padding: 10px;
}
</style>