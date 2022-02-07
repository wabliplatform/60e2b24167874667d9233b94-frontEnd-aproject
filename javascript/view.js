let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('ivru9').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('ibt0j').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};document.getElementById('ii8qs6').onclick = (event) => {
    event.preventDefault();
    let myprojectsId = window.location.pathname.replace('/view/','');let myprojects = new TempApi.Myprojects();myprojects['ptitle'] = document.querySelector("[annotationname = 'ptitle']").textContent;myprojects['pabstract'] = document.querySelector("[annotationname = 'pabstract']").textContent; let opts = {myprojects};apiMyprojectsApi.updatemyprojects( myprojectsId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;{ location.href= '/update/'+response.body.query._id+'';}}});};