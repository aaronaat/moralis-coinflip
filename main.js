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
    let amount = document.getElementById("amount").value;
    alert(`${side} ${amount}`);
    window.web3 = await Moralis.Web3.enable();
    let contractInstance = new web3.eth.Contract(window.abi, "0x715754fc34724FEfd233611599EAE91e00a51245")
    contractInstance.methods.flip(side == "heads" ? 0 : 1).send({value: amount, from: ethereum.selectedAddress})
    .on('receipt',function(receipt){
        console.log(receipt);
        receipt.events.bet.returnValues.win ? (alert('you win')) : (alert('you lose'));
    })
}


document.getElementById("login_button").onclick = login;
document.getElementById("heads_button").onclick = function(){flip("heads")};
document.getElementById("tails_button").onclick = function(){flip("tails")};
