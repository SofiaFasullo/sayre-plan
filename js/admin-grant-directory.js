const cbs = document.querySelectorAll('.cb');
// const filters = document.querySelectorAll('.filter');

//gotta load the student resources data
function grabStudentOpportunitiesData(onSuccess, onFailure) {
    fetch('./data/grants.json')
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
}


function showDataInOrderedList(feature,container) { 
  var programProfile = `
            <div class="div">
                <div class="content">
                    <div class="program-name">
                        <h1 class="text data-title">${feature.properties['Grant']}</h1>
                    </div>
                    
                    <div class="below-program-name">
                        <div class="col col-left">
                        <img class="data-image" src="./photos/post-secondary-dev/placeholder.jpg" alt="Image a leaf">
                        <a class="text data-link" href="${feature.properties['Link']}">External Site</a>
                    </div>

                    <div class="col col-right">
                        <div class="sub-content about">
                        <h2 class="text data-about">About</h2>
                        <h3 class="text data-about-content">${feature.properties['About']}</h3>
                    </div>

                    <div class="sub-content provides">
                        <h2 class="text data-program-provides">Program Provides</h2>
                        <h3 class="text data-provides-content">${feature.properties['Deadline']}</h3>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
`
  container.innerHTML += programProfile;

}

function displayAllDataOrdered(programs) {
  var buildingContainer = document.querySelector('#space-for-building');
  var healthContainer = document.querySelector('#space-for-health-safety');
  var edContainer = document.querySelector('#space-for-ed');
  var otherContainer = document.querySelector('#space-for-other');
  for (const program of programs.features) {
    if (program.properties.tags_abr.includes("building")) {
      showDataInOrderedList(program,buildingContainer);
    } else if (program.properties.tags_abr.includes("health-safety")) {
      showDataInOrderedList(program,healthContainer);
    } else if (program.properties.tags_abr.includes("ed")) {
      showDataInOrderedList(program,edContainer);
    } else {
      showDataInOrderedList(program,otherContainer);
    }
  }

}

grabStudentOpportunitiesData(onDataLoad);


//no checkboxes, yay
