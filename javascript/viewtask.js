let apiTasksApi = new TempApi.TasksApi();import TempApi from '../src/index';window.onload = () => {let tasksId = window.location.pathname.replace('/viewtask/','');apiTasksApi.gettasks( tasksId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = tname]').textContent = response.body.query.tname ;document.querySelector('[annotationname = sdate]').textContent = response.body.query.sdate ;document.querySelector('[annotationname = edate]').textContent = response.body.query.edate ;document.querySelector('[annotationname = vpms]').textContent = response.body.query.vpms ;document.querySelector('[annotationname = tdescription]').textContent = response.body.query.tdescription ;}});apiTasksApi.getAlltasks((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iihan").querySelectorAll( "[dataitem='true']" );
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
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiTasksApi.getAlltasks((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("i3yos").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        subDataElements[i].addEventListener('click',() => {{ location.href= '/viewtask/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};