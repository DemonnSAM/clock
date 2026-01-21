function clockStarter(){
    const now = new Date();
    let hour = now.getHours().toString().padStart(2,0);
    let mederian = hour>=12 ?  "PM" : "AM";
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    document.getElementById("clock").textContent = `${hour}:${minutes}:${seconds}${mederian}`
}

clockStarter();
setInterval(clockStarter,1000);