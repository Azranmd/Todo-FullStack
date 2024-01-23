type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

function ReturnCorrectRequest( method : Method, data : unknown,): RequestInit  {
    // For GET method
    if(method === 'GET'){
        return {
            method:method,
            headers: {'Content-type':'application/json'}
        };
    }
    
    // For PUT,POST,DELETE method
    return {
        method:method,
        body: JSON.stringify(data),
        headers: {'Content-type':'application/json'},
    };

};


export async function SendApiRequest<t>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<t> {
    const response = await fetch(url,ReturnCorrectRequest(method,data));
    if(!response.ok){
        const Message = `An Error has Occured : ${response.status}`;
        throw new Error (Message);
    }

    return (await response.json()) as Promise<t>;
}
