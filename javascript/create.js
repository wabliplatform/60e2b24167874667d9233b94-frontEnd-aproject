let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';let myprojects = new TempApi.Myprojects();document.getElementById('iq3ap').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};
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
document.getElementById('icvac').onclick = (event) => {
    event.preventDefault();
    myprojects['pimage'] = {
        data: document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pimage']").src,
        name: document.querySelector("[annotationname = 'pimage']").getAttribute("name")
      };
      myprojects['ptitle'] = document.querySelector("[annotationname = 'ptitle']").value;myprojects['pstart'] = document.querySelector("[annotationname = 'pstart']").value;myprojects['pend'] = document.querySelector("[annotationname = 'pend']").value;myprojects['pduration'] = document.querySelector("[annotationname = 'pduration']").value;myprojects['pabstract'] = document.querySelector("[annotationname = 'pabstract']").value;myprojects['pdescription'] = document.querySelector("[annotationname = 'pdescription']").value;myprojects['pga'] = document.querySelector("[annotationname = 'pga']").value;myprojects['pwebsite'] = document.querySelector("[annotationname = 'pwebsite']").value;apiMyprojectsApi.createmyprojects( myprojects, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/home/'+response.body.query._id+'';}}});};window.onload = () => {};