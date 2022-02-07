let apiTasksApi = new TempApi.TasksApi();import TempApi from '../src/index';window.onload = () => {apiTasksApi.getAlltasks((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("if40m").querySelectorAll( "[dataitem='true']" );
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
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'sdate']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].sdate;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'sdate'){
        subDataElements[i].textContent = data[data.length -i -1].sdate;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'edate']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].edate;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'edate'){
        subDataElements[i].textContent = data[data.length -i -1].edate;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'vpms']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].vpms;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'vpms'){
        subDataElements[i].textContent = data[data.length -i -1].vpms;
        
      }
     } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/viewtask/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};