<template>
<div>  
  <div :id="data.id">
      <h1>{{data.text}}</h1>
        <span v-for="{type, styles, text} in data.inner_elements">
          
          <label v-if="type=='text'"  :style="getSubStyle(styles)"> {{text}}   </label>
          <span v-if="type=='span'" :style="getSubStyle(styles)"> {{text}}    </span>
          <br v-if="type=='br'"> 

        </span> 
  </div>  
</div>

</template>
  
<script>
  import _ from 'lodash'
   
  export default {
  	name: "Elements",
    props: ["data"],
    methods: {
      getSubStyle:function(data){
        var stl="";

        for (var key in data) {
            stl+=key + ": " + data[key]+";";

        }
        stl+="";
        return stl;
      }

    }
  };
</script>

