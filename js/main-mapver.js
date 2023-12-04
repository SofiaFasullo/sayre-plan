// if a map is ever included

import { initMap } from "./map.js";


function grabSayrePt(onSuccess, onFailure) {
    fetch('data/sayre_pt.geojson')
    .then(resp => {
      if (resp.status === 200) {
        const data = resp.json();
        return data;
      } else {
        alert('Oh no, I failed to download the data.');
        if (onFailure) { onFailure() }
      }
    })
    .then(onSuccess);
  }

  function grabCatchmentPoly(onSuccess, onFailure) {
    fetch('data/catchement.geojson')
    .then(resp => {
      if (resp.status === 200) {
        const data = resp.json();
        //somewhere convert multipolygon to polygon
        return data;
      } else {
        alert('Oh no, I failed to download the data.');
        if (onFailure) { onFailure() }
      }
    })
    .then(onSuccess);
  }


const map = initMap();
function onCatchDataLoad(data) {
    map.CatchmentLayer.addData(data);
    }
function onSayreDataLoad(data) {
    map.SayreLayer.addData(data);
    }





function mapData() {
    grabSayrePt(onSayreDataLoad);
    grabCatchmentPoly(onCatchDataLoad);

  }



mapData();

//global scale
window.map = map;