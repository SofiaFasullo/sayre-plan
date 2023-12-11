const cbs = document.querySelectorAll('.cb');
const filters = document.querySelectorAll('.filter');

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
  spaceForData.innerHTML += programProfile;

}

function displayAllData(programs) {
  for (const program of programs.features) {
    showDataInList(program);
  }

}

function onDataLoad(data) {
  displayAllData(data);
}


function displayAllDataOrdered(programs) {
  for (const program of programs.features) {
    if (program.properties.Program_CB_Tags == "skills") {
      showDataInList(program);
    }
  }

}




//checkboxes stuff below

function checkedBoxes(checkboxes) {
  var cbs_checked = [];
  for (const cb of checkboxes){
    if (cb.checked) {
      cbs_checked.push(cb);
    }
  }
  return cbs_checked
}

function listenToCbs(checkboxes, programs){
  var programsToShow = [];
  for (const cbs of checkboxes) {
    cbs.addEventListener('change', () => {
      const theChecked = checkedBoxes(checkboxes);
      console.log(theChecked);
      return theChecked;
    })
  }
}

// function listenToCbs(checkboxes, programs){
//   var programsToShow = [];
//   var cbs_checked = [];
//   for (const cbs of checkboxes) {
//     cbs.addEventListener('change', () => {
//       if (cb.checked) {
//         cbs_checked.push(cb);
//       }
//     })
//   }
//   if (cbs_checked[1]!=null) {
//     for (i in cbs_checked) {
//       for(const program in programs.features){
//         if (program.features.Program_CB_Tags==i.id){
//           programsToShow.push(program)
//         }
//       }
//     }
//   } else {
//     for(const program in programs.features){
//       if (program.features.Program_CB_Tags==i.id){
//         programsToShow.push(program)
//       }
//     }

//   }
//   console.log(programsToShow);
  
// }


  


grabStudentOpportunitiesData(onDataLoad);
//listenToCbs.cbs;

