//npm i typescript --save-dev
//npx tsc --init
//tsconfig.json

function getName(): string {
  let name: string = "Anderson";
  //name = 0;
  console.log(name);
  return name;
}
const res: string = getName();

function getSobrenome(): void {
  const a: number = 0;
  const b = 1;
  const result = a - b;
  console.log(result);
  // return result
}
function login() {
  const btn: HTMLButtonElement | null = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("click");
      //login
      // const input = document.querySelector("input")
      // input?.value
    });
  }
}
interface Pokemon {
  name: string;
  tipo: string;
}
async function getPokemons(): Promise<Pokemon> {
  const res: Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const resJson: Pokemon = await res.json();
  //
  console.log(resJson);
  return resJson;
}

interface Dados {
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone?: number;
}

function returnDadosCompletos({ nome, cpf, sobrenome, telefone }: Dados) {
  const dadosCompletos = {
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpf,
    telefone: telefone,
  };
  return dadosCompletos;
}

returnDadosCompletos({
  cpf: "400",
  nome: "anderson",
  sobrenome: "Keller",
});
type StatusMesa = "ocupado" | "livre";

function returnStatusMesa(mesa: string, status: StatusMesa) {
  //fecth
  if (status === "livre") {
    return "green";
  }
  return "red";
}
interface DadosPessoa {
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone?: number;
}
interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
}

interface DadosCompletos {
  pessoa: DadosPessoa;
  endereco: Endereco;
}

function returnUserComEndereco(
  pessoa: DadosPessoa,
  endereco: Endereco
): DadosCompletos {
  return {
    pessoa: pessoa,
    endereco: endereco,
  };
}
const pedro: DadosPessoa = {
  cpf: "900",
  nome: "Pedro",
  sobrenome: "José",
  telefone: 900,
};
const enderecoPedro: Endereco = {
  bairro: "Centro",
  numero: "201a",
  rua: "Tiradentes",
};
returnUserComEndereco(pedro, enderecoPedro);

interface Comanda {
  id: number;
  descricao: string;
}

interface AtualizaComanda {
  comanda: Comanda;
  atualiza: (comanda: Comanda) => void;
}

function updateName({ atualiza, comanda }: AtualizaComanda) {
  const btn = document.querySelector("button");
  if (btn) {
    btn?.addEventListener("click", () => {
      atualiza(comanda);
    });
  }
}
