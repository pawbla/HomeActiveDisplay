const apiUrl = `/api/v1/`;
const localhost = "http://localhost:"

export const getApi = async (port, endpoint, queryParams) => {
    const url = `${localhost}${port}${apiUrl}${endpoint}${queryParams}`;
    return await fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": localhost + port,
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, Origin, Content-Type, X-Auth-Token"
        }
      })
      .then(response => {
        if (!response.ok) {
          throw (errorObj(response.status, response.statusText));
        }
        return response.json()          
    })
}

const errorObj = (status, text) => {
  return {
    message: `Received response code: ${status} ${text}`,
    respCode: status,
    respMsg: text
  };
}