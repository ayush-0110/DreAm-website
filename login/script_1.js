console.log("Welcome to DreAm")

//variables:
let songIndex=0;
let audioel=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let mainHead=document.getElementById('mainHead');
let myProgressBar=document.getElementById('myProgressBar');
let play=document.getElementById('play');
let pause=document.getElementById('pause');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let gif1=Array.from(document.getElementsByClassName('gif1'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let songs=[
    {songname:"STAY", filePath:"1.mp3",coverPath:"covers/1.jpg",artist:"The Kid LAROI"},
    {songname:"On and On", filePath:"2.mp3",coverPath:"covers/2.jpg",artist:""},
    {songname:"Despacito", filePath:"3.mp3",coverPath:"covers/3.jpg",artist:"Luis Fonsi"},
    {songname:"Fearless pt. 2", filePath:"4.mp3",coverPath:"covers/4.jpg",artist:""},
    {songname:"Thunder", filePath:"5.mp3",coverPath:"covers/5.jpg",artist:""},
    {songname:"Darkside", filePath:"6.mp3",coverPath:"covers/6.jpg",artist:"Alan Walker"},
];
let loop1=document.getElementById('loop');
let loop2=document.getElementById('loop2');
let loop=document.getElementById('loop1');
const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
// const login=document.getElementById('login');
// const signup=document.getElementById('signup');
// audioel.play();



//volume:
audioel.volume = document.getElementById('myVolumeBar').value / 100;
let myVolumeBar=document.getElementById('myVolumeBar')
document.getElementById('myVolumeBar').addEventListener('change',()=>{
    audioel.volume = document.getElementById('myVolumeBar').value / 100;
})
document.getElementById('volup').addEventListener('click',()=>{
    let volum=parseInt(myVolumeBar.value)+10;
    if(audioel.volume >0.9)
    {
        audioel.volume =1;
    }
    else
    audioel.volume +=10/100;
    document.getElementById('myVolumeBar').value=volum.toString();
})
document.getElementById('voldown').addEventListener('click',()=>{
    let volum=parseInt(myVolumeBar.value)-10;
    if(audioel.volume <0.1)
    {
        audioel.volume =0;
    }
    else
    audioel.volume -=10/100;
    document.getElementById('myVolumeBar').value=volum.toString();
})


// document.getElementById('bt3').disabled=true;

const api='494df762fc1e890dae3e2c80c387c49c';

//Song lyrics:



    window.addEventListener('load',()=>{
        let long;
        let lat;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              // Storing Longitude and Latitude in variables
            //   console.log(position)
              long = position.coords.longitude;
              lat = position.coords.latitude;
              const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            //   console.log(base);
              fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
        //   const { sunrise, sunset } = data.sys;
          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;
          iconImg.src = iconUrl;
          loc.innerText = `${place}`;
desc.innerHTML = `${description}`;
tempC.innerText = `${temp.toFixed(2)} °C`;
tempF.innerText = `${fahrenheit.toFixed(2)} °F`;

          // Converting Epoch(Unix) time to GMT
        //   const sunriseGMT = new Date(sunrise * 1000);
        //   const sunsetGMT = new Date(sunset * 1000);
        })

            })
    }
    })



// const getNewQuote = async () =>
// {
//     //api for quotes
//     // var url="https://type.fit/api/quotes"; not working, some issues are there
//     var url='http://quotes.stormconsultancy.co.uk/random.json';
    
//     // fetch the data from api
//     const response=await fetch(url);
//     const allQuotes = await response.json();
//     // const indx = Math.floor(Math.random()*allQuotes.length); not using as the working API already gives just one quote
//     let quote1=allQuotes.quote;
//     document.getElementById('quote').innerText=quote1;
//     document.getElementById('author').innerText=allQuotes.author;
// }

// getNewQuote();


// signup.addEventListener('click',()=>{
//     // document.getElementById('bt3').disabled=true;
    
//     let form=document.getElementById('signupform');
//     let email=document.getElementById('email');
//     let otpn=document.getElementById('otp');
//     let OTP = '';
//     document.getElementById('sign').style.display='flex';
//     document.getElementById('welcome').style.display='none';
//     // document.getElementById('overlay').style.display="none"
//     document.getElementById('bt3').style.pointerEvents='none';
//     document.getElementById('bt3').classList.remove("btn-primary");
    
//     document.getElementById('otpsend').addEventListener('click',()=>{
//         var digits = '0123456789';
//         for (let i = 0; i < 4; i++ ) {
//             OTP += digits[Math.floor(Math.random() * 10)];
//         }
        
//         //sending OTP    
//         Email.send({
//             SecureToken : "68abc985-4380-41ae-9631-8a00b3326fe7",
//             To : email.value,
//             From : "200104019@hbtu.ac.in",
//             Subject : "Otp for accessing your DreAm Account",
//             Body : `One time password for your DreAm account is: ${OTP}.`
//         }).then(
//             message => {if(message=="OK")
//             {alert("OTP has been sent. Check the spams folder as well") 
//             document.getElementById('name').disabled=true;
//             document.getElementById('email').disabled=true;
//             document.getElementById('passwordn').disabled=true;
//             document.getElementById('otpsend').style.pointerEvents='none';
//             document.getElementById('otpsend').style.background='black';
//         }
//         else
//         alert('Enter a valid email')}
//         );
        
//             // let otp=form.elements['otp']
//             // let otp=form.elements['otp'].value;
//             // if(otp.length==4){
//             //     document.getElementById('btn3').disabled=false;
        
//             // }
            
        


//     })
    
//     otpn.addEventListener('keyup',()=>{
//         var num="";
//         num+=otpn.value;
//         if(num.length>=4)
//         {
//         document.getElementById('bt3').style.pointerEvents="auto"
//         // document.getElementById('bt3').style.background='blue';
//         document.getElementById('bt3').classList.add("btn-primary");
//     }
//     else{
//         document.getElementById('bt3').classList.remove("btn-primary");
//         document.getElementById('bt3').style.pointerEvents="none"}
        
//     })

//     document.getElementById('bt3').addEventListener('click',()=>{
//         document.getElementById('overlay').style.display="none"
        
        
//     })
    

// })
// login.addEventListener('click',()=>{
//     document.getElementById('log').style.display='flex';
//     document.getElementById('welcome').style.display='none';
    


//     document.getElementById('forgotbtn').addEventListener('click',()=>{
//         document.getElementById('bt5').style.pointerEvents="none";
//             document.getElementById('bt5').classList.remove("btn-primary");
//         let email1=document.getElementById('emailf');
//         document.getElementById('forgo').style.display='flex';
//         document.getElementById('log').style.display='none';
//         document.getElementById('otpsend1').addEventListener('click',()=>{
//             var digits = '0123456789';
//         let OTP = '';
//         for (let i = 0; i < 4; i++ ) {
//             OTP += digits[Math.floor(Math.random() * 10)];
//         }
    
//         //sending OTP
//         Email.send({
//             SecureToken : "68abc985-4380-41ae-9631-8a00b3326fe7",
//             To : email1.value,
//             From : "200104019@hbtu.ac.in",
//             Subject : "Otp for resetting your DreAm Account",
//             Body : `One time password for resetting your DreAm account passwrd is: ${OTP}.`
//         }).then(
//             message => {if(message=="OK")
//             {alert("OTP has been sent. Check the spams folder as well") 
//             // document.getElementById('otpsend1').disabled=true;
//             document.getElementById('otpsend1').style.pointerEvents='none';
//             document.getElementById('otpsend1').style.background='black';
//             document.getElementById('emailf').disabled=true;
//         }
//                 else
//                 alert('Enter a valid email')}
            
//             );
//             let otpforgot=document.getElementById('otpforgot');
//             otpforgot.addEventListener('keyup',()=>{
//                 var num1="";
//                 num1+=otpforgot.value;
//                 if(num1.length>=4)
//                 {
//                     // document.getElementById('bt5').disabled=false;
//                 document.getElementById('bt5').style.pointerEvents="auto"
//                 // document.getElementById('bt3').style.background='blue';
//                 document.getElementById('bt5').classList.add("btn-primary");
                
//             }
//             else{
//                 document.getElementById('bt5').style.pointerEvents="none"
//                 document.getElementById('bt5').classList.remove("btn-primary");
//                 }
                
//             })
//             // document.getElementById('otpsend1').disabled=true;
//             // // document.getElementById('name').disabled=true;
//             // document.getElementById('emailf').disabled=true;
//         })

//         document.getElementById('bt5').addEventListener('click',()=>{
//             document.getElementById('overlay').style.display="none"
//             // notsigned=false;  
//         })
        
        
//     })
//     document.getElementById('bt4').addEventListener('click',()=>{
//         document.getElementById('overlay').style.display="none"
//         // notsigned=false;  
//     })
    
    
    
// })

// function openNav() {
    //   }
    
    // document.getElementById('btn3').disabled=true;
    
    

    
   
    
   
    

    function tooltipHide(element){
    let tooltip = bootstrap.Tooltip.getInstance(element); 
tooltip.hide();
}
function tooltipShow(element){
    let tooltip = bootstrap.Tooltip.getInstance(element); 
tooltip.show();
}
//weather
document.getElementById('rightslidearrow').addEventListener('click',()=>{
        // hiding the tooltip 
        // const tooltip = bootstrap.Tooltip.getInstance('#rightslidearrow')
// tooltip.hide()

tooltipHide(document.getElementById('rightslidearrow'))


    if(document.getElementById("weather").style.width== "14vw")
    {
        // document.getElementById("rightslidearrow").style.filter='invert(0)'
        document.getElementById("weather").style.width = "0"
        document.getElementById("rightslidearrow").style.marginRight = "0"}
    // document.getElementById("rightslidearrow").setAttribute("data-bs-toggle","tooltip")
    else
    {
        document.getElementById("weather").style.width = "14vw"
    document.getElementById("rightslidearrow").style.marginRight = "14vw"
    // document.getElementById("rightslidearrow").style.filter='invert(1)'
    
}



})


setInterval(()=>{
    
    let date=new Date();
    const weekday = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    
    if(date.getMinutes()<=9)
    {
        document.getElementById('time').innerText=weekday[date.getDay()]+", "+date.getHours()+":0"+date.getMinutes()+":"+date.getSeconds();
        
    }
    else
    document.getElementById('time').innerText=weekday[date.getDay()]+", "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
},1000)

songItems.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
    
});




//play/pause:
masterPlay.addEventListener('click', ()=>{
    if(audioel.paused||audioel.currentTime<=0){
        audioel.play();
        play.style.display="none";
        pause.style.display="inline";
        gif.style.opacity=1;
        noPlay();
        gif1[songIndex].style.opacity=1;
        songItemPlay[songIndex].classList.remove('fa-circle-play');
        songItemPlay[songIndex].classList.add('fa-circle-pause');
    }
    else{
        audioel.pause();
        pause.style.display="none";
        play.style.display="inline";
        gif.style.opacity=0;
        songItemPlay[songIndex].classList.remove('fa-circle-pause');
        songItemPlay[songIndex].classList.add('fa-circle-play');
        noPlay();
    }
    
})

loop1.addEventListener('click',()=>{
    if(audioel.loop!=true)
    {
        audioel.loop=true; 
        // document.getElementById('looping').style.border="1px solid white";
        loop.style.display="none";
        loop2.style.display="inline";
        // audioel.load();
    }
    else
    {
        audioel.loop=false;
        // audioel.load();
        // console.log("loop disabled")
    // document.getElementById('looping').style.border="";
    loop.style.display="inline";
        loop2.style.display="none";
}
})

audioel.addEventListener('ended',()=>{
    noPlay();
    audioel.pause();
    songItemPlay[songIndex].classList.remove('fa-circle-pause');
    songItemPlay[songIndex].classList.add('fa-circle-play');
    if(songIndex<5)
    {
        songIndex+=1;
        audioel.src=`${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
            mainHead.innerText = songs[songIndex].songname;
        audioel.play();
        gif1[songIndex].style.opacity=1;
        songItemPlay[songIndex].classList.remove('fa-circle-play');
        songItemPlay[songIndex].classList.add('fa-circle-pause');
    }
    else
    {
        gif.style.opacity=0;
    }
})
//events listening:
audioel.addEventListener('timeupdate',()=>{
progress=parseInt((audioel.currentTime/audioel.duration)*100)
myProgressBar.value=progress;
let currentMinutes = Math.floor(audioel.currentTime / 60);
    let currentSeconds = Math.floor(audioel.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audioel.duration / 60);
    let durationSeconds = Math.floor(audioel.duration - durationMinutes * 60);
//  console.log(audioel.currentTime)
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
document.getElementById('curdur').innerText=currentMinutes+":"+currentSeconds;
document.getElementById('totdur').innerText=durationMinutes+":"+durationSeconds;
//updating seekbar
myProgressBar.addEventListener('change',()=>{
    audioel.currentTime=myProgressBar.value*audioel.duration/100;
})
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
const noPlay = ()=>{
    Array.from(document.getElementsByClassName('gif1')).forEach((element)=>{
        element.style.opacity=0;
    })
}

Array.from(document.getElementsByClassName('speed')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let x=e.target.id;
audioel.playbackRate=x;
    })
    })

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        
        noPlay();
        makeAllPlays();
        if(audioel.paused){
            masterSongName.innerText = songs[songIndex].songname;
            mainHead.innerText = songs[songIndex].songname;
            // audioel.currentTime=0;
            audioel.src=`${songIndex+1}.mp3`;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioel.play();
            play.style.display="none";
            pause.style.display="inline";
            gif.style.opacity=1;
            gif1[i].style.opacity=1;
            
            // console.log(parseInt(audio1.duration/60)+":"+parseInt(audio1.duration%60))
        }
        else{
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioel.pause();
            pause.style.display="none";
            play.style.display="inline";
            gif.style.opacity=0;
            gif1[i].style.opacity=0;
        }
        // audioel.play();
        // gif.style.opacity=1;
        // play.style.display="none";
        // pause.style.display="inline";
    })
})
document.getElementById('next').addEventListener('click',()=>{
    makeAllPlays();
    // songItemPlay[songIndex].classList.remove('fa-circle-play');
    // songItemPlay[songIndex].classList.add('fa-circle-pause');
    if(songIndex>=5)
    songIndex=0;
    else
    songIndex+=1;
    masterSongName.innerText = songs[songIndex].songname;
    mainHead.innerText = songs[songIndex].songname;
    audioel.src=`${songIndex+1}.mp3`;
        audioel.currentTime=0;
        audioel.play();
        gif.style.opacity=1;
        play.style.display="none";
        pause.style.display="inline";
        noPlay();
        gif1[songIndex].style.opacity=1;
        songItemPlay[songIndex].classList.remove('fa-circle-play');
        songItemPlay[songIndex].classList.add('fa-circle-pause');
        
})
document.getElementById('prev').addEventListener('click',()=>{
    makeAllPlays();
    if(songIndex<=0)
    songIndex=5;
    else
    songIndex-=1;
    masterSongName.innerText = songs[songIndex].songname;
    mainHead.innerText = songs[songIndex].songname;
    audioel.src=`${songIndex+1}.mp3`;
        audioel.currentTime=0;
        audioel.play();
        gif.style.opacity=1;
        play.style.display="none";
        pause.style.display="inline";
        noPlay();
        gif1[songIndex].style.opacity=1;
        songItemPlay[songIndex].classList.remove('fa-circle-play');
        songItemPlay[songIndex].classList.add('fa-circle-pause');
    })

    document.getElementById('about').addEventListener('click',()=>{
        document.getElementById('overlay').style.display='flex'
        setTimeout(()=>{
            document.getElementById('overlay').style.display='none';
    
        },5000);
    })



// //song lyrics
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '71b7ce121emsh84bb124fcdb20a9p1275efjsnd23c3ccd67cb',
// 		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
// 	}
// };

// fetch('https://genius-song-lyrics1.p.rapidapi.com/search?q=Alan%20Walker&per_page=10&page=1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/2396871/lyrics', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const apiURL = "https://api.lyrics.ovh";
// let artist=songs[songIndex].artist;
// artist.replace(" ","%")
// let songTitle=songs[songIndex].songname;
// play.addEventListener('change', async (artist, songTitle)=> {
        
        
//         const response = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
//         const data = await response.json();
        
//         const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
        
//         document.getElementById('result').innerText =`<p>${lyrics}</p>`;
        
//     }
// )