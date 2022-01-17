let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('ivru9').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('ibt0j').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};window.onload = () => {let myprojectsId = window.location.pathname.replace('/view/','');apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = pimage]').src = response.body.query.pimage ;document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').textContent = response.body.query.pstart ;document.querySelector('[annotationname = pend]').textContent = response.body.query.pend ;document.querySelector('[annotationname = pduration]').textContent = response.body.query.pduration ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;document.querySelector('[annotationname = pdescription]').textContent = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').textContent = response.body.query.pga ;}});};document.getElementById('ikatkj').onclick = (event) => {
    event.preventDefault();
    let myprojectsId = window.location.pathname.replace('/view/','');apiMyprojectsApi.deletemyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/home';}}});};window.onload = () => {apiMyprojectsApi.getAllmyprojects((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iiifs").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        subDataElements[i].addEventListener('click',() => {{ location.href= '/view/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};