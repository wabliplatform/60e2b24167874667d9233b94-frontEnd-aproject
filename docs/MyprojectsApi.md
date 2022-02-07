# TempApi.MyprojectsApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createmyprojects**](MyprojectsApi.md#createmyprojects) | **POST** /myprojects | Creates the data
[**deletemyprojects**](MyprojectsApi.md#deletemyprojects) | **DELETE** /myprojects/{myprojectsId} | Delete the element
[**getAllmyprojects**](MyprojectsApi.md#getAllmyprojects) | **GET** /myprojects/getAll | Get all the data
[**getmyprojects**](MyprojectsApi.md#getmyprojects) | **GET** /myprojects/{myprojectsId} | Get the element
[**updatemyprojects**](MyprojectsApi.md#updatemyprojects) | **PUT** /myprojects/{myprojectsId} | Updates the element



## createmyprojects

> Myprojects createmyprojects(myprojects)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MyprojectsApi();
let myprojects = new TempApi.Myprojects(); // Myprojects | data to be created
apiInstance.createmyprojects(myprojects, (error, data, response) => {
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
 **myprojects** | [**Myprojects**](Myprojects.md)| data to be created | 

### Return type

[**Myprojects**](Myprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletemyprojects

> deletemyprojects(myprojectsId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MyprojectsApi();
let myprojectsId = "myprojectsId_example"; // String | the Id parameter
apiInstance.deletemyprojects(myprojectsId, (error, data, response) => {
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
 **myprojectsId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllmyprojects

> [Myprojects] getAllmyprojects()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MyprojectsApi();
apiInstance.getAllmyprojects((error, data, response) => {
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

[**[Myprojects]**](Myprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getmyprojects

> Myprojects getmyprojects(myprojectsId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MyprojectsApi();
let myprojectsId = "myprojectsId_example"; // String | the Id parameter
apiInstance.getmyprojects(myprojectsId, (error, data, response) => {
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
 **myprojectsId** | **String**| the Id parameter | 

### Return type

[**Myprojects**](Myprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatemyprojects

> Myprojects updatemyprojects(myprojectsId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MyprojectsApi();
let myprojectsId = "myprojectsId_example"; // String | the Id parameter
let opts = {
  'myprojects': new TempApi.Myprojects() // Myprojects | data to be updated
};
apiInstance.updatemyprojects(myprojectsId, opts, (error, data, response) => {
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
 **myprojectsId** | **String**| the Id parameter | 
 **myprojects** | [**Myprojects**](Myprojects.md)| data to be updated | [optional] 

### Return type

[**Myprojects**](Myprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

