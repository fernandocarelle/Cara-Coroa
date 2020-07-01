function element(id) {
    return document.getElementById(id);
}

element("botaoJogar").onclick = () => {
    const jogadorCara = element("jogadorCara").value;
    const jogadorCoroa = element("jogadorCara").value;

    if(jogadorCara == '' || jogadorCoroa == '') {
        return alert("Digite os nomes")
    }

    const valor = Math.random();
  
    let imagem = "";
    let nomeVencedor = "";
  
    if (valor > 0.5) {
      imagem = "coroa";
      nomeVencedor = jogadorCoroa;
    } else {
      imagem = "cara";
      nomeVencedor = jogadorCara;
    }
  
    let caminhoImagem = `img/${imagem}.png`;
    element("imagemMoeda").src = caminhoImagem;
    alert(nomeVencedor);
  };


const myElement = (id) => console.log(id);

myElement('teste');

/*let alunoA = "lucas";
let alunoB = "João";

let nomeAlunos = ["Lucas", "João", "Pedro", "Gustavo"];

for (var i = 0; i <= 3; i++); {
    console.log(i);
};*/