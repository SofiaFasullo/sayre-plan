

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