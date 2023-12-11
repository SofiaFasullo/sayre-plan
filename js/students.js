

//gotta load the student resources data
function grabStudentOpportunitiesData(onSuccess, onFailure) {
    fetch('photos/post-secondary-dev/placeholder.jpg')
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

function ondataLoad(data) {
    console.log(data);
}

grabStudentOpportunitiesData(ondataLoad);