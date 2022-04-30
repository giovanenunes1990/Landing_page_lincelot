
$(".alt-window").click(function () {
    $(".alt-window svg g").css('animation', 'animate-main 4.5s linear forwards');
});

var data = [
    {
        title: "Guerreiro Arcano",
        description: 'Reduz o dano de magia em 12%'
    },
    {
        title: "Mago Focado",
        description: 'Magias de destruição causam 15% mais danos'
    },
    {
        title: "Ancião da Noite",
        description: 'Aumenta a chance de encontrar items raros em 30%'
    },
    {
        title: "Alquimia da Sabedoria",
        description: 'Poções tem efeito triplicado'
    },
    {
        title: "Berserk",
        description: 'Reduz danos físicos em 40%, e aumenta seus ataques físicos em 50%'
    },
    {
        title: "Paz Interior",
        description: 'Regenera-se 20% mais rápido'
    },
]

function hash() {
    let abc = ['A', 'X', 'Z', 'Y', 'D', 'M', 'K', 'L', 'S', 'F'];
    let rand1 = Math.floor(Math.random() * 9);
    let rand2 = Math.floor(Math.random() * 9);
    let rand3 = Math.floor(Math.random() * 9);
    let letter1 = abc[rand1];
    let letter2 = abc[rand2];
    let letter3 = abc[rand3];
    let par1 = Math.floor(Math.random() * 9999 + 1000);
    let par2 = Math.floor(Math.random() * 9999 + 1000);
    let par3 = Math.floor(Math.random() * 9999 + 1000);
    let par4 = Math.floor(Math.random() * 9999 + 1000);
    let cod = `${par1}-${par2}-${par3}-${par4}`;
    cod = cod.replace(rand1, letter1).replace(rand2, letter2).replace(rand3, letter3);
    return cod;

}

$(".lucky").one("click", function () {

    let lucky = Math.floor(Math.random() * 5);
    $("#title").text(data[lucky].title);
    $("#description").text(data[lucky].description);
    $("#cod").text(hash());

    setTimeout(() => {
        $(".message").css('visibility', 'visible');
        $(".message img").css('animation-name', 'card-loop');
        $(".message .txt").css('animation-name', 'fade');
    }, 3000);
    return false;
});

$(".message .close").click(function () {
    $(".message").css('visibility', 'hidden');
});


function randomNumber() {
    let rand = Math.floor(Math.random() * 5);
    return rand;

}

window.onload = function () {

    let a = parseInt($("#download").text());
    setInterval(function () {
        let newValue = a = a + randomNumber();
        $("#download").text(newValue);
    }, 5000);

    let b = parseInt($("#online").text());
    setInterval(function () {
        let newValue = b = b + randomNumber();
        $("#online").text(newValue);
    }, 4000);

}

