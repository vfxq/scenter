export default function requestData<T>(url:string): Promise<T>{
  return 
    fetch('api')
      .then((res:Response) => {
        console.log('test');
        if(res.status !== 200){
          console.error('Looks like there was a problem. Status Code: ' + res.status);  
          return;
        }
        res.json().then(json=> {
          console.log('request');
          if(json){
            this.menu = json
            return json;
          }
        });
      })
      .catch((err:Error) => {
        console.error("Getting data from .. failed");
      })  
}