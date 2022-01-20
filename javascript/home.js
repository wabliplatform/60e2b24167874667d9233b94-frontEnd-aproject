let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('iolui').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};window.onload = () => {apiMyprojectsApi.getAllmyprojects((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("in3ic").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pimage']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].pimage;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'pimage'){
          subDataElements[i].src = data[data.length -i -1].pimage;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ptitle']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ptitle;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'ptitle'){
          subDataElements[i].textContent = data[data.length -i -1].ptitle;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pstart']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].pstart;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'pstart'){
          subDataElements[i].textContent = data[data.length -i -1].pstart;
        }
       } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/view/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};