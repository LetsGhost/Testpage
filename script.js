document.getElementById("getfact").addEventListener("click", randomfact)

function randomfact(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://uselessfacts.jsph.pl/random.json?language=de")
    request.send();
    request.onload = () => {
        if(request.status === 200) {
            let fact = JSON.parse(request.response)
            document.getElementById("randomfact").textContent = fact.text;
        }
    }
}

//Save Facts

document.getElementById("savefact").addEventListener("click", saveFacts)
document.getElementById("showfactslist").addEventListener("click", readFactList)

const factList = []

function saveFacts(){
    let data = document.getElementById("randomfact").textContent

    factList.push(data)
    document.cookie = factList
}

function readFactList(){
    let cookies = document.cookie;
    console.log(cookies)
}