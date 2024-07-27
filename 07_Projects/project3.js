//const clock = document.querySelector  can be done

const clock = document.getElementById('clock')
console.log(clock);

let date = new Date()
console.log(date.toLocaleTimeString()); // will run one time for one refresh

// for continue

setInterval(function() {
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
},1000)