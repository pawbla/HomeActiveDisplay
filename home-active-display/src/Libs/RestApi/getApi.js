const apiUrl = `/api/v1/`;

export const getApi = async (endpoint, queryParams) => {
    const url = `${apiUrl}${endpoint}${queryParams}`;
    return await fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
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