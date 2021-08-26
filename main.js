Moralis.initialize("NU6Zgw3Z1a3hqh5bRrSxD2LGbokEYyKIRdzHjLnP"); // Application id from moralis.io
Moralis.serverURL = "https://yg5myylqwgy0.moralisweb3.com:2053/server"; //Server url from moralis.io

async function login() {
    try {
        user = await Moralis.Web3.authenticate();
        console.log(user);
        alert("Logged in")
        document.getElementById("login_button").style.display = "none";
        document.getElementById("game").style.display = "block";
    } catch (error) {
        console.log(error);
    }
}

async function flip(side){
    alert(side);
}


document.getElementById("login_button").onclick = login;
document.getElementById("heads_button").onclick = function(){flip("heads")};
document.getElementById("tails_button").onclick = function(){flip("tails")};
