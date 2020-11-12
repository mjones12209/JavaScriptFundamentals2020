//callback method
//uses XMLHttpRequest under the hood with $ or JQuery
const getData = (callback) => {
    let data;
      $.get("https://reqres.in/api/users", (response)=>{
         callback(response);
      });
    return data;
  }
  
getData((response)=> console.log(response));


//using promises
const getDataPromise = () => {
    return new Promise((resolve,reject)=>{
        $.get("https://reqrwefes.in/api/users",(response)=>{
            resolve(response);
        }).catch((error)=>{
            reject('Hello I am an error');
        });
    });
};

const response = getDataPromise();
response.then((response)=>console.log(response)).catch((error)=>console.log(error));

//fakeAjax Request with promises

const myFaceAJAXRequest =() => {
    return new Promise((resolve, reject)=>{
        window.setTimeout(()=>{
            resolve(      );
        },4000);
    });
};

myFaceAJAXRequest()
    .then(data => console.log(data))
    .catch((error)=> console.log(error));

//fetch method
fetch('https://reqres.in/api/users',{
    method: 'GET'
})
    .then(response => response.json())
    .then(response =>{
        const { first_name, last_name, avatar} = user;
        const htmlStr = `<img src="${avatar}"<p>${first_name} ${last_name}</p>`;
        document.querySelector(".container").incertAdjacentHTML('beforeend',htmlStr);
    }).catch(data =>{
    const htmlStr = "html"//somehtml;
    document.querySelector(".container").incertAdjacentHTML('beforeend',htmlStr);
})


//axios
import $ from 'jquery'
import axios from 'axios'

const getWeather = async () => {
    try {
        let response = await axios.get('apiurl');
        const  {latitude, longitude} = response.data;
        let weather = await axios.get('apiurl');
        return weather;
    } catch (error) {
        return error;
}

const weatherPromise = getWeather();
weatherPromise.then("Success").catch("Error");

    
    
}



//this is async and await
const myFunc = (async ()=>{
    try{
        //return stuff
    }
    catch {
        //return stuff
    }

})();