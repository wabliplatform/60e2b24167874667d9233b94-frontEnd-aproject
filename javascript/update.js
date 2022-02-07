let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('iq3ap').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};window.onload = () => {let myprojectsId = window.location.pathname.replace('/update/','');apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
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
      document.querySelector('[annotationname = ptitle]').value = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').value = response.body.query.pstart ;document.querySelector('[annotationname = pend]').value = response.body.query.pend ;document.querySelector('[annotationname = pduration]').value = response.body.query.pduration ;document.querySelector('[annotationname = pabstract]').value = response.body.query.pabstract ;document.querySelector('[annotationname = pdescription]').value = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').value = response.body.query.pga ;document.querySelector('[annotationname = pwebsite]').value = response.body.query.pwebsite ;}});};
 const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        return base64;
      };const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
      
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
      
            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            let imageBase64 = await uploadImage(e);
        document.getElementById('formFile').setAttribute('data-image-base64' ,imageBase64);
        document.getElementById('formFile').setAttribute('name',e.target.files[0].name)
        });
document.getElementById('i7vvj').onclick = (event) => {
    event.preventDefault();
    let myprojectsId = window.location.pathname.replace('/update/','');let myprojects = new TempApi.Myprojects();myprojects['pimage'] = {
        data: document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pimage']").src,
        name: document.querySelector("[annotationname = 'pimage']").getAttribute("name")
      };myprojects['ptitle'] = document.querySelector("[annotationname = 'ptitle']").value;myprojects['pstart'] = document.querySelector("[annotationname = 'pstart']").value;myprojects['pend'] = document.querySelector("[annotationname = 'pend']").value;myprojects['pduration'] = document.querySelector("[annotationname = 'pduration']").value;myprojects['pabstract'] = document.querySelector("[annotationname = 'pabstract']").value;myprojects['pdescription'] = document.querySelector("[annotationname = 'pdescription']").value;myprojects['pga'] = document.querySelector("[annotationname = 'pga']").value;myprojects['pwebsite'] = document.querySelector("[annotationname = 'pwebsite']").value; let opts = {myprojects};apiMyprojectsApi.updatemyprojects( myprojectsId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
      if(response.body.query.pimage !== undefined){

        if(document.querySelector('[annotationname = pimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pimage]').setAttribute('data-image-base64',response.body.query.pimage.data);
        }
        else{
          document.querySelector('[annotationname = pimage]').src = response.body.query.pimage.data;                
        }
        document.querySelector('[annotationname = pimage]').name = response.body.query.pimage.name;      
      }
      document.querySelector('[annotationname = ptitle]').value = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').value = response.body.query.pstart ;document.querySelector('[annotationname = pend]').value = response.body.query.pend ;document.querySelector('[annotationname = pduration]').value = response.body.query.pduration ;document.querySelector('[annotationname = pabstract]').value = response.body.query.pabstract ;document.querySelector('[annotationname = pdescription]').value = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').value = response.body.query.pga ;document.querySelector('[annotationname = pwebsite]').value = response.body.query.pwebsite ;{ location.href= '/home/'+response.body.query._id+'';}}});};