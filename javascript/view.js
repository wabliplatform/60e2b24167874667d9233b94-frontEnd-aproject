let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('ivru9').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('ibt0j').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};window.onload = () => {let myprojectsId = window.location.pathname.replace('/view/','');apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;}});};window.onload = () => {let myprojectsId = window.location.pathname.replace('/view/','');apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;}});};