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
    
    let numberOfPages = Math.ceil(data.length/subDataElements.length);
    let pagination = document.querySelector('[pagination-list="true"]');
    let chunk = 1;

      let paginationAttributes = [
        "pagination-first",
        "pagination-last",
        "pagination-previous",
        "pagination-next",
      ];

      for (let i = 0; i < pagination.children.length; ) {
        let foundAttr = false;

        paginationAttributes.forEach((attr) => {
          if (pagination.children[i].attributes.getNamedItem(attr) !== null) {
            foundAttr = true;
          }
        });
        if (foundAttr === false) {
          pagination.removeChild(pagination.children[i]);
        } else {
          i++;
        }
      }

      for (let i = 0; i < numberOfPages; i++) {
        let child = document.createElement("li");
        child.classList.add("page-item");
        if (i === numberOfPages - 1) {
          child.classList.add("active");
        }
        let insideChild = document.createElement("a");
        insideChild.classList.add("page-link");
        let textnode = document.createTextNode(numberOfPages - i);
        insideChild.appendChild(textnode);
        insideChild.setAttribute("href", "#!");
        child.appendChild(insideChild);
        child.onclick = function () {
          if (chunk !== numberOfPages - i) {
            chunk = numberOfPages - i;
            onClickPaginationButton(chunk, pagination);
          }
        };

        let numberOfFrontButtons =  findTypeOfPagination(pagination); 
        pagination.insertBefore(child, pagination.children[numberOfFrontButtons]);

      }

      for (let i = 0; i < pagination.children.length; i++) {
        let child = pagination.children[i];
        if ( child.getAttribute("pagination-first") === "true" && numberOfPages > 0 ) {
          child.onclick = function () {
            if(chunk !== 1){
              chunk = 1;
              onClickPaginationButton(1, pagination);
            }
          };
        }

        if ( child.getAttribute( "pagination-last" ) === "true" && numberOfPages > 0 ) {
          child.onclick = function () {
            if(chunk !== numberOfPages){
              chunk = numberOfPages;
              onClickPaginationButton( numberOfPages, pagination);
            }
          };
        }

        if ( child.getAttribute("pagination-previous") === "true" && numberOfPages > 0 ) {
          child.onclick = function () {
            if(chunk !== returnChunkIndex(chunk,numberOfPages,'-')){
              chunk = returnChunkIndex(chunk,numberOfPages,'-');
              onClickPaginationButton(chunk, pagination);
            }
          };
        }

        if ( child.getAttribute("pagination-next") === "true" && numberOfPages > 0) {
          child.onclick = function () {
            if(chunk !== returnChunkIndex(chunk,numberOfPages,'+')){
              chunk = returnChunkIndex(chunk,numberOfPages,'+');
              onClickPaginationButton(chunk, pagination);
            }
          };
        }
      };

  
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};const onClickPaginationButton = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
      if (
        pagination.children[i].classList.value.includes("active") === true
      ) {
        pagination.children[i].classList.remove("active");
      }
    }

    let numberOfFrontButtons =  findTypeOfPagination(pagination); 
    pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");

  apiMyprojectsApi.getAllmyprojects((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("in3ic").querySelectorAll( "[dataitem='true']" );
[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else {
            subDataElements[index].style.display = "";
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'pimage']");
    if(insideSubDataElement !== null){
      insideSubDataElement.src = data[revertIndex].pimage;
    }
   } catch (e) { console.log(e) };try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'ptitle']");
    if(insideSubDataElement !== null){
      insideSubDataElement.textContent = data[revertIndex].ptitle;
    }
   } catch (e) { console.log(e) };try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'pstart']");
    if(insideSubDataElement !== null){
      insideSubDataElement.textContent = data[revertIndex].pstart;
    }
   } catch (e) { console.log(e) };
        }
    })
    }});}

    const findTypeOfPagination = (pagination) => {

      let firstChild = pagination.children[0];
      let secondChild = pagination.children[1];
    
      if (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) &&
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 2;
      } else if  (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) ||
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 1;
      }
      else{
        return 0;
      }
    
    }
  

    const returnChunkIndex = (chunk, numberOfPages, cause) => {

      if(cause === '+'){
        if(chunk < numberOfPages){
          return chunk + 1;
        }
        else{
          return chunk;
        }
      }
      else if(cause === '-'){
        if(chunk > 2){
          return chunk - 1;
        }
        else{
          return 1;
        }
      }
    }
  