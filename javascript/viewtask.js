let apiTasksApi = new TempApi.TasksApi();import TempApi from '../src/index';document.getElementById('i9n3').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('ijk5l').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('ihn45').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};window.onload = () => {let tasksId = window.location.pathname.replace('/viewtask/','');apiTasksApi.gettasks( tasksId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = tname]').textContent = response.body.query.tname ;document.querySelector('[annotationname = sdate]').textContent = response.body.query.sdate ;document.querySelector('[annotationname = edate]').textContent = response.body.query.edate ;document.querySelector('[annotationname = vpms]').textContent = response.body.query.vpms ;}});};document.getElementById('i15zm').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('ih6md').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('i4d4f').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('ij0z3v').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('i6a5zm').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('isev1k').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};