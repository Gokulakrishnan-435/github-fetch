let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
// let x1=document.getElementsByClassName('y2')
searchInput.addEventListener('keyup',e =>{
 if(e.key==='Enter'){
 let searchText = e.target.value;
 searchGitUser(searchText);
 }
});


// speech
// let btn=document.getElementById('btn');

// btn.addEventListener('click', e =>{
//     window.SpeechRecognition=window.webkitSpeechRecognition;
//     let Speech=new SpeechRecognition();
//     Speech.addEventListener('result',e=>{
//         let text=e.results[0][0].transcript;
//         let finelText=(searchInput.value=text)
//         word=finelText.replace(/\s+/g,"")
//         searchGitUser(finelText);
//         window.localStorage.setItem('Speech',text)
//     });
//     Speech.start();
// });

async function searchGitUser(searchValue){
 let URL = 'https://api.github.com/users';
 let DATA = await window.fetch(`${URL}/${searchValue}`);
 let JSON = await DATA.json();
 let {login ,avatar_url,html_url,company,location,bio} = JSON;

templete.innerHTML =`
<main>
 <div>
 <img src =${avatar_url} alt = ${login}/>
 <h2>${company}</br>${location}</br>${bio}</h2>

 </div>
</main>
`;
}

