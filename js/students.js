const cbs = document.querySelectorAll('.cb');
// const filters = document.querySelectorAll('.filter');

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
  //displayAllData(data);
  displayAllDataOrdered(data);
  listenToCbs(cbs,data);
}


function showDataInOrderedList(feature,container) { 
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
  container.innerHTML += programProfile;

}

function displayAllDataOrdered(programs) {
  var artsContainer = document.querySelector('#space-for-arts');
  var businessContainer = document.querySelector('#space-for-business');
  var cosmetologyContainer = document.querySelector('#space-for-cosmetology');
  var collegePrepContainer = document.querySelector('#space-for-college-prep');
  var energyContainer = document.querySelector('#space-for-energy');
  var facilitiesContainer = document.querySelector('#space-for-facilities');
  var healthcareContainer = document.querySelector('#space-for-healthcare');
  var itContainer = document.querySelector('#space-for-it');
  var otherContainer = document.querySelector('#space-for-other');
  for (const program of programs.features) {
    if (program.properties.Program_Subject_Tags.includes("arts-culinary-music")) {
      showDataInOrderedList(program,artsContainer);
    } else if (program.properties.Program_Subject_Tags.includes("business-finance")) {
      showDataInOrderedList(program,businessContainer);
    } else if (program.properties.Program_Subject_Tags.includes("cosmetology")) {
      showDataInOrderedList(program,cosmetologyContainer);
    } else if (program.properties.Program_Subject_Tags.includes("college-prep")) {
      showDataInOrderedList(program,collegePrepContainer);
    } else if (program.properties.Program_Subject_Tags.includes("energy")) {
      showDataInOrderedList(program,energyContainer);
    } else if (program.properties.Program_Subject_Tags.includes("facilities")) {
      showDataInOrderedList(program,facilitiesContainer);
    } else if (program.properties.Program_Subject_Tags.includes("healthcare")) {
      showDataInOrderedList(program,healthcareContainer);
    } else if (program.properties.Program_Subject_Tags.includes("it-tech")) {
      showDataInOrderedList(program,itContainer);
    } else {
      showDataInOrderedList(program,otherContainer);
    }
  }

}




//checkboxes stuff below

function checkedBoxes(checkboxes) {
  var cbs_cats = [];
  for (const cb of checkboxes){
    if (cb.checked) {
      var cat = cb.value;
      console.log(cat);
      cbs_cats.push(cat);
      console.log(cbs_cats);
    }
  }
  return cbs_cats;
}



function afterKnowingCheckboxes(checkboxes) {
  console.log(checkboxes)
  return checkboxes;
}

function displayFilteredDataOrdered(programs) {
  var artsContainer = document.querySelector('#space-for-arts');
  var businessContainer = document.querySelector('#space-for-business')
  var cosmetologyContainer = document.querySelector('#space-for-cosmetology')
  var collegePrepContainer = document.querySelector('#space-for-college-prep')
  var energyContainer = document.querySelector('#space-for-energy')
  var facilitiesContainer = document.querySelector('#space-for-facilities')
  var healthcareContainer = document.querySelector('#space-for-healthcare')
  var itContainer = document.querySelector('#space-for-it')
  var otherContainer = document.querySelector('#space-for-other')
  artsContainer.innerHTML = "";
  cosmetologyContainer.innerHTML = "";
  collegePrepContainer.innerHTML = "";
  energyContainer.innerHTML = "";
  facilitiesContainer.innerHTML = "";
  healthcareContainer.innerHTML = "";
  itContainer.innerHTML = "";
  otherContainer.innerHTML = "";
  // for (const program of programs) {
  //   if (program.properties.Program_Subject_Tags.includes("arts-culinary-music")) {
  //     showDataInOrderedList(program,artsContainer);
  //   } else if (program.properties.Program_Subject_Tags.includes("business-finance")) {
  //     showDataInOrderedList(program,businessContainer);
  //   } else if (program.properties.Program_Subject_Tags.includes("cosmetology")) {
  //     showDataInOrderedList(program,cosmetologyContainer);
  //   } else if (program.properties.Program_Subject_Tags.includes("college-prep")) {
  //     showDataInOrderedList(program,collegePrepContainer);
  //   } else if (program.properties.Program_Subject_Tags.includes("energy")) {
  //     showDataInOrderedList(program,energyContainer);
  //   } else if (program.properties.Program_Subject_Tags.includes("facilities")) {
  //     showDataInOrderedList(program,facilitiesContainer);
  //   } else if (program.properties.Program_Subject_Tags.includes("healthcare")) {
  //     showDataInOrderedList(program,healthcareContainer);
  //   } else if (program.properties.Program_Subject_Tags.includes("it-tech")) {
  //     showDataInOrderedList(program,itContainer);
  //   } else {
  //     showDataInOrderedList(program,otherContainer);
  //   }
  // }
}

function listenToCbs(checkboxes, programs){
  var programsToShow = [];
  for (const cbs of checkboxes) {
    cbs.addEventListener('change', () => {
      const cats_realtime= checkedBoxes(checkboxes);
      console.log(cats_realtime);
      for (const cat of cats_realtime){
        for (const program of programs.features){
          if (program.properties['Program_CB_Tags'].includes(cat)) {
            programsToShow.push(program);
            // console.log(programsToShow);

          }
        }
      }
      // programsToDisplay = {"type": "FeatureCollection",
      // "name": "post_secondary_dev",
      // "features": [programsToShow]}
      console.log(programsToShow);
      // console.log(programsToDisplay);
      displayFilteredDataOrdered(programsToShow);
      console.log("this happened!")
    })
  }
}

//listenToCbs(cbs,programs);



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

