angular.module('Share_Health', ['ngRoute'])
  .factory('RootFactory', ($http, $timeout) => {
    let apiRoot = null;
    let httpGet = $http.get('http://localhost:8000');
    let foodApiRoot = null;
    let httpGet = $http.get('https://api.nutritionix.com/v1_1/search/fields="item_name","brand_name","nf_calories","nf_total_fat","nf_protein","nf_serving_weight_grams", "images_front_full_url"&appId=41da17b3&appKey=6d6be88bad74c633e3d0b3a183f9d9eb');

    return {
      getApiRoot: () => {
          return httpGet.then(res => res.data)
      }
      getFoodApiRoot: () => {
          return httpGet.then(food => food.data)
      }
    }
  }
)
.filter('capitalize', () => {
  return (thingToChange) => {
    return thingToChange.charAt(0).toUpperCase() + thingToChange.slice(1)
  }
});

{
  "appId":"41da17b3",
  "appKey":"6d6be88bad74c633e3d0b3a183f9d9eb",
  "query":"",
  "fields":["item_name","brand_name","nf_calories","nf_total_fat","nf_protein","nf_serving_weight_grams", "images_front_full_url"],
  "sort":{
    "field":"_score",
    "order":"desc"
  },
  "filters":{
    "item_type":2
  }
}