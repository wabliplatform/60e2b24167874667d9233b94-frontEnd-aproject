let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('ivru9').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('ibt0j').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};window.onload = () => {let myprojectsId = window.location.pathname.replace('/view/','');apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
      if(response.body.query.pimage !== undefined){
        if(document.querySelector('[annotationname = pimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pimage]').setAttribute('data-image-base64',response.body.query.pimage.data);
          let fileName = response.body.query.pimage.name;
          let file = new File([response.body.query.pimage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer(); 
          container.items.add(file); 

          document.querySelector("[annotationname = pimage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = pimage]').src = response.body.query.pimage.data ;
        }
        document.querySelector('[annotationname = pimage]').name = response.body.query.pimage.name ;
      }
      document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').textContent = response.body.query.pstart ;document.querySelector('[annotationname = pend]').textContent = response.body.query.pend ;document.querySelector('[annotationname = pduration]').textContent = response.body.query.pduration ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;document.querySelector('[annotationname = pdescription]').textContent = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').textContent = response.body.query.pga ;document.querySelector('[annotationname = pwebsite]').textContent = response.body.query.pwebsite ;}});};document.getElementById('i7sx46').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.getElementById('ikatkj').onclick = (event) => {
    event.preventDefault();
    let myprojectsId = window.location.pathname.replace('/view/','');apiMyprojectsApi.deletemyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/home';}}});};document.getElementById('ii83uv').onclick = (event) => {
    event.preventDefault();
    let myprojectsId = window.location.pathname.replace('/view/','');let myprojects = new TempApi.Myprojects();myprojects['pimage'] = {
        data: document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pimage']").src,
        name: document.querySelector("[annotationname = 'pimage']").getAttribute("name")
      };myprojects['ptitle'] = document.querySelector("[annotationname = 'ptitle']").textContent;myprojects['pstart'] = document.querySelector("[annotationname = 'pstart']").textContent;myprojects['pend'] = document.querySelector("[annotationname = 'pend']").textContent;myprojects['pduration'] = document.querySelector("[annotationname = 'pduration']").textContent;myprojects['pabstract'] = document.querySelector("[annotationname = 'pabstract']").textContent;myprojects['pdescription'] = document.querySelector("[annotationname = 'pdescription']").textContent;myprojects['pga'] = document.querySelector("[annotationname = 'pga']").textContent;myprojects['pwebsite'] = document.querySelector("[annotationname = 'pwebsite']").textContent; let opts = {myprojects};apiMyprojectsApi.updatemyprojects( myprojectsId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
      if(response.body.query.pimage !== undefined){

        if(document.querySelector('[annotationname = pimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pimage]').setAttribute('data-image-base64',response.body.query.pimage.data);
        }
        else{
          document.querySelector('[annotationname = pimage]').src = response.body.query.pimage.data;                
        }
        document.querySelector('[annotationname = pimage]').name = response.body.query.pimage.name;      
      }
      document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').textContent = response.body.query.pstart ;document.querySelector('[annotationname = pend]').textContent = response.body.query.pend ;document.querySelector('[annotationname = pduration]').textContent = response.body.query.pduration ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;document.querySelector('[annotationname = pdescription]').textContent = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').textContent = response.body.query.pga ;document.querySelector('[annotationname = pwebsite]').textContent = response.body.query.pwebsite ;{ location.href= '/view/'+response.body.query._id+'';}}});};