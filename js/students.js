

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




function showDataInList(feature) {
  const spaceForData = document.querySelector('#space-for-data'); 
  var programProfile = `
            <div class="div">
                <div class="content">
                    <div class="program-name">
                        <h1 class="text data-title">${feature.properties['Program_Name']}</h1>
                        <h3 class="text data-subtitle">Need subtitle column in data</h3>
                    </div>
                    
                    <div class="below-program-name">
                        <div class="col col-left">
                        <img class="data-image" src="./photos/post-secondary-dev/placeholder.jpg" alt="Image a leaf">
                        <a class="text data-link" href="${feature.properties['Program_Link']}">External Site</a>
                        <div class="sub-content specifics">
                            <h2 class="text data-program-specifics">Program Specifics</h2>
                            <h3 class="text data-specifics-content">${feature.properties['Other Considerations']}</h3>
                        </div>
                    </div>

                    <div class="col col-right">
                        <div class="sub-content about">
                        <h2 class="text data-about">About</h2>
                        <h3 class="text data-about-content">${feature.properties['About']}</h3>
                    </div>

                    <div class="sub-content provides">
                        <h2 class="text data-program-provides">Program Provides</h2>
                        <h3 class="text data-provides-content">${feature.properties['Program Provides']}</h3>
                    </div>

                    <div class="sub-content eligibility">
                        <h2 class="text data-program-eligibility">Program Eligibility</h2>
                        <h3 class="text data-eligibility-content">${feature.properties['Program_Eligibility']}</h3>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
`
  spaceForData.innerHTML = programProfile;

}

function testRun(programs) {
  //console.log(programs.features);
  for (const program of programs.features) {
    const name = program.properties.Program_Name
    if(name == "CHOP Career Path ") {
      showDataInList(program);
    }
  }

}

function onDataLoad(data) {
  testRun(data);
}

grabStudentOpportunitiesData(onDataLoad);

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


