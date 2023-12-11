

//gotta load the student resources data
function grabStudentOpportunitiesData(onSuccess, onFailure) {
    fetch('./data/post_secondary_dev.json')
    .then(resp => {
      if (resp.status === 200) {
        //console.log(resp.text());
        const data = resp.json();
        return data;
      } else {
        alert('Oh no, I failed to download the data.');
        if (onFailure) { onFailure() }
      }
    })
    .then(onSuccess);
  }

function ondataLoad(data) {
    console.log(data);
}

grabStudentOpportunitiesData(ondataLoad);


const dataListEl = document.querySelector('#data-list'); 
const dataTitleEl = document.querySelector('.election-info-title')

//show most recent data as "last updated" and "earliest data from" most recent
// function showDataInList(feature) {
//     var programName = `<h3>${feature.properties['Program_Name']}</h3>`
//     var cityElectionData = `<ul>
//         <li>'Address: '+${feature.properties['Address']}</li>
//         <li>${feature.properties['num_elections']+' election(s) within the last month'}</li>
//         <li>${feature.properties['tot_wins']+' election(s) won'}</li>
//         <li>${feature.properties['perc_win']+'% elections won'}</li>
//         <li>${feature.properties['tot_challenged']+' challenged ballot(s)'}</li>
//         <li>${feature.properties['tot_voted']+' total voter(s) in all recent elections'}</li>
//         <li>${feature.properties['voter_turnout']+'% voter turnout'}</li>
//     </ul>`;
//     dataListEl.innerHTML = cityElectionData;
//     dataTitleEl.innerHTML = programName;
//   }


