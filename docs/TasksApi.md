# TempApi.TasksApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createtasks**](TasksApi.md#createtasks) | **POST** /tasks | Creates the data
[**deletetasks**](TasksApi.md#deletetasks) | **DELETE** /tasks/{tasksId} | Delete the element
[**getAlltasks**](TasksApi.md#getAlltasks) | **GET** /tasks/getAll | Get all the data
[**gettasks**](TasksApi.md#gettasks) | **GET** /tasks/{tasksId} | Get the element
[**updatetasks**](TasksApi.md#updatetasks) | **PUT** /tasks/{tasksId} | Updates the element



## createtasks

> Tasks createtasks(tasks)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TasksApi();
let tasks = new TempApi.Tasks(); // Tasks | data to be created
apiInstance.createtasks(tasks, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasks** | [**Tasks**](Tasks.md)| data to be created | 

### Return type

[**Tasks**](Tasks.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletetasks

> deletetasks(tasksId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TasksApi();
let tasksId = "tasksId_example"; // String | the Id parameter
apiInstance.deletetasks(tasksId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasksId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlltasks

> [Tasks] getAlltasks()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TasksApi();
apiInstance.getAlltasks((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Tasks]**](Tasks.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettasks

> Tasks gettasks(tasksId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TasksApi();
let tasksId = "tasksId_example"; // String | the Id parameter
apiInstance.gettasks(tasksId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasksId** | **String**| the Id parameter | 

### Return type

[**Tasks**](Tasks.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetasks

> Tasks updatetasks(tasksId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TasksApi();
let tasksId = "tasksId_example"; // String | the Id parameter
let opts = {
  'tasks': new TempApi.Tasks() // Tasks | data to be updated
};
apiInstance.updatetasks(tasksId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasksId** | **String**| the Id parameter | 
 **tasks** | [**Tasks**](Tasks.md)| data to be updated | [optional] 

### Return type

[**Tasks**](Tasks.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

