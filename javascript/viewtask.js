let apiTasksApi = new TempApi.TasksApi();import TempApi from '../src/index';document.getElementById('i9n3').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('ijk5l').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};document.getElementById('ihn45').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#!';}};window.onload = () => {apiTasksApi.getAlltasks((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iihan").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'tname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].tname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'tname'){
        subDataElements[i].textContent = data[data.length -i -1].tname;
        
      }
     } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/viewtask/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};window.onload = () => {apiTasksApi.getAlltasks((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("i3yos").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        subDataElements[i].addEventListener('click',() => {{ location.href= '/viewtask/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};