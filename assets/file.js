
let embriTeam = [
    {
      nome: "Mario Rossi",
      ruolo: "Sviluppatore",
      foto: "https://example.com/foto1.jpg"
    },
    {
      nome: "Luca Verdi",
      ruolo: "Progettista",
      foto: "https://example.com/foto2.jpg"
    },
    {
      nome: "Anna Bianchi",
      ruolo: "Tester",
      foto: "https://example.com/foto3.jpg"
    }
  ];
  
 
  let team = membriTeam;


console.log("Milestone 1 - Stampa su console:");
team.forEach(function(membro) {
  console.log("Nome: " + membro.nome);
  console.log("Ruolo: " + membro.ruolo);
  console.log("Foto: " + membro.foto);
  console.log("--------------------------");
});

console.log("Milestone 2 - Stampa sul DOM:");
let outputDiv = document.getElementById("output");

team.forEach(function(membro) {
  let membroInfo = "Nome: " + membro.nome + ", Ruolo: " + membro.ruolo + ", Foto: " + membro.foto;
  let membroElement = document.createElement("p");
  membroElement.textContent = membroInfo;
  outputDiv.appendChild(membroElement);
});