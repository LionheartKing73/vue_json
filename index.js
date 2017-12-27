import Vue from 'vue';
import jsonData from './json/json_text.json';
import Elements from './src/Elements.vue';

new Vue({
    el: '#container',
    components: {
      Elements
    },
    data() {
        return {
          sampleJSON: jsonData,
        };
    },
    methods: {
      onChangeData: function(data) {
        this.sampleJSON = data
      },
      getMainStyle:function(data){
        var stl="";
        for (var key in data.styles) {
            stl+=key + ": " + data.styles[key]+";";
        }
        stl+="";
        return stl;
      }
    },
    watch: {
      sampleJSON: function() {
        console.log('updated sampleJSON')
      }
    }
});
