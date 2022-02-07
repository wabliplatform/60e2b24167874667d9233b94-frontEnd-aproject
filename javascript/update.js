let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('iq3ap').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};window.onload = () => {let myprojectsId = window.location.pathname.replace('/update/','');apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ptitle]').value = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').value = response.body.query.pstart ;document.querySelector('[annotationname = pend]').value = response.body.query.pend ;document.querySelector('[annotationname = pdescription]').value = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').value = response.body.query.pga ;}});};
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
document.getElementById('i638p').onclick = (event) => {
    event.preventDefault();
    let myprojectsId = window.location.pathname.replace('/update/','');let myprojects = new TempApi.Myprojects();myprojects['ptitle'] = document.querySelector("[annotationname = 'ptitle']").value;myprojects['pstart'] = document.querySelector("[annotationname = 'pstart']").value;myprojects['pend'] = document.querySelector("[annotationname = 'pend']").value;myprojects['pdescription'] = document.querySelector("[annotationname = 'pdescription']").value;myprojects['pga'] = document.querySelector("[annotationname = 'pga']").value; let opts = {myprojects};apiMyprojectsApi.updatemyprojects( myprojectsId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ptitle]').value = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').value = response.body.query.pstart ;document.querySelector('[annotationname = pend]').value = response.body.query.pend ;document.querySelector('[annotationname = pdescription]').value = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').value = response.body.query.pga ;{ location.href= '/view/'+response.body.query._id+'';}}});};