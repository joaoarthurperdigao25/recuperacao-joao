const b1 = document.getElementById("b1");
if (b1) {
  b1.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("n1a").value);
    let n2 = parseFloat(document.getElementById("n1b").value);
    let o1 = document.getElementById("o1");
    if (isNaN(n1) || isNaN(n2)) {
      o1.textContent = "Por favor, preencha ambos os números.";
      return;
    }
    let res = n1 > n2 ? [n2, n1] : [n1, n2];
    o1.textContent = "Ordem crescente: " + res.join(", ");
  });
}

const b2 = document.getElementById("b2");
if (b2) {
  b2.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("n2a").value);
    let n2 = parseFloat(document.getElementById("n2b").value);
    let n3 = parseFloat(document.getElementById("n2c").value);
    let o2 = document.getElementById("o2");
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      o2.textContent = "Por favor, preencha todos os três números.";
      return;
    }
    let arr = [n1, n2, n3];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
    o2.textContent = "Ordem crescente: " + arr.join(", ");
  });
}

const b3 = document.getElementById("b3");
if (b3) {
  b3.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("n3a").value);
    let n2 = parseFloat(document.getElementById("n3b").value);
    let n3 = parseFloat(document.getElementById("n3c").value);
    let o3 = document.getElementById("o3");
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      o3.textContent = "Por favor, preencha todos os três números.";
      return;
    }
    let arr = [n1, n2, n3];
    let inv = [arr[2], arr[1], arr[0]];
    o3.textContent = "Array: [" + arr.join(", ") + "]\nInvertido: [" + inv.join(", ") + "]";
  });
}

const b4a = document.getElementById("b4a");
if (b4a) {
  b4a.addEventListener("click", () => {
    let q = parseInt(document.getElementById("q4").value);
    let c4 = document.getElementById("c4");
    c4.innerHTML = "";
    if (isNaN(q) || q < 1 || q > 50) return;
    for (let i = 0; i < q; i++) {
      let input = document.createElement("input");
      input.type = "number";
      input.step = "any";
      input.placeholder = "Elemento " + (i + 1);
      input.className = "item4";
      c4.appendChild(input);
    }
    let b4b = document.getElementById("b4b");
    if (b4b) b4b.removeAttribute("hidden");
  });
}

const b4b = document.getElementById("b4b");
if (b4b) {
  b4b.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".item4");
    let arr = [];
    inputs.forEach(el => {
      let val = parseFloat(el.value);
      if (!isNaN(val)) arr.push(val);
    });
    let inv = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      inv.push(arr[i]);
    }
    let o4 = document.getElementById("o4");
    o4.textContent = "Array: [" + arr.join(", ") + "]\nInverso: [" + inv.join(", ") + "]";
  });
}

const b5 = document.getElementById("b5");
if (b5) {
  b5.addEventListener("click", () => {
    let txt = document.getElementById("l5").value;
    let o5 = document.getElementById("o5");
    let arr = txt.split(/[\s,]+/).filter(Boolean).map(Number);
    if (arr.length === 0 || arr.some(isNaN)) {
      o5.textContent = "Insira números válidos separados por vírgula ou espaço.";
      return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    o5.textContent = "Ordenado: " + arr.join(", ");
  });
}

const b6 = document.getElementById("b6");
if (b6) {
  b6.addEventListener("click", () => {
    let txt = document.getElementById("l6").value;
    let v = parseFloat(document.getElementById("v6").value);
    let o6 = document.getElementById("o6");
    let arr = txt.split(/[\s,]+/).filter(Boolean).map(Number);
    if (arr.length === 0 || isNaN(v)) {
      o6.textContent = "Preencha o vetor e o número corretamente.";
      return;
    }
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === v) {
        indices.push(i);
      }
    }
    if (indices.length > 0) {
      o6.textContent = "O número aparece nas posições: " + indices.join(", ");
    } else {
      o6.textContent = "O número não foi encontrado no vetor.";
    }
  });
}

const b7 = document.getElementById("b7");
if (b7) {
  b7.addEventListener("click", () => {
    let n = parseInt(document.getElementById("n7").value);
    let o7 = document.getElementById("o7");
    if (isNaN(n) || n < 1 || n > 70) {
      o7.textContent = "Informe um valor entre 1 e 70.";
      return;
    }
    let fib = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) fib.push(0);
      else if (i === 1) fib.push(1);
      else fib.push(fib[i - 1] + fib[i - 2]);
    }
    o7.textContent = "Fibonacci: " + fib.join(", ");
  });
}

const b8 = document.getElementById("b8");
if (b8) {
  b8.addEventListener("click", () => {
    let n = parseInt(document.getElementById("n8").value);
    let o8 = document.getElementById("o8");
    if (isNaN(n) || n < 1 || n > 50) {
      o8.textContent = "Informe um valor entre 1 e 50.";
      return;
    }
    let fat = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) fat.push(1);
      else fat.push(fat[i - 1] * (i + 1));
    }
    o8.textContent = "Fatoriais: " + fat.join(", ");
  });
}

let tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let jogadorAtual = 1;

function desenharTabuleiro() {
  let t9 = document.getElementById("t9");
  if (!t9) return;
  t9.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      let td = document.createElement("td");
      td.textContent = tabuleiro[i][j];
      tr.appendChild(td);
    }
    t9.appendChild(tr);
  }
}
desenharTabuleiro();

const b9 = document.getElementById("b9");
if (b9) {
  b9.addEventListener("click", () => {
    let l = parseInt(document.getElementById("lin9").value) - 1;
    let c = parseInt(document.getElementById("col9").value) - 1;
    let s9 = document.getElementById("s9");
    if (isNaN(l) || isNaN(c) || l < 0 || l > 2 || c < 0 || c > 2) {
      s9.textContent = "Informe linha e coluna entre 1 e 3.";
      return;
    }
    if (tabuleiro[l][c] !== "") {
      s9.textContent = "Posição já ocupada!";
      return;
    }
    tabuleiro[l][c] = jogadorAtual === 1 ? "X" : "O";
    desenharTabuleiro();
    s9.textContent = "Jogador " + jogadorAtual + " jogou. Vez do próximo.";
    jogadorAtual = jogadorAtual === 1 ? 2 : 1;
  });
}

const r9 = document.getElementById("r9");
if (r9) {
  r9.addEventListener("click", () => {
    tabuleiro = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    jogadorAtual = 1;
    desenharTabuleiro();
    let s9 = document.getElementById("s9");
    if (s9) s9.textContent = "Tabuleiro reiniciado.";
  });
}

const b10 = document.getElementById("b10");
if (b10) {
  b10.addEventListener("click", () => {
    let txt = document.getElementById("l10").value;
    let o10 = document.getElementById("o10");
    let arr = txt.split(/[\s,]+/).filter(Boolean).map(Number);
    if (arr.length === 0 || arr.some(isNaN)) {
      o10.textContent = "Insira números válidos.";
      return;
    }
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    o10.textContent = "Soma: " + soma;
  });
}

const b11 = document.getElementById("b11");
if (b11) {
  b11.addEventListener("click", () => {
    let txt = document.getElementById("l11").value;
    let o11 = document.getElementById("o11");
    let arr = txt.split(/[\s,]+/).filter(Boolean).map(Number);
    if (arr.length === 0 || arr.some(isNaN)) {
      o11.textContent = "Insira números válidos.";
      return;
    }
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    let media = soma / arr.length;
    o11.textContent = "Média: " + media;
  });
}

function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const b12 = document.getElementById("b12");
if (b12) {
  b12.addEventListener("click", () => {
    let txt = document.getElementById("l12").value;
    let o12 = document.getElementById("o12");
    let arr = txt.split(/[\s,]+/).filter(Boolean).map(Number);
    if (arr.length === 0 || arr.some(isNaN)) {
      o12.textContent = "Insira números válidos.";
      return;
    }
    let primos = [];
    for (let i = 0; i < arr.length; i++) {
      if (ehPrimo(arr[i])) primos.push(arr[i]);
    }
    o12.textContent = "Primos: " + primos.join(", ");
  });
}

let frutas = ["mamão", "uva", "melancia", "banana"];
frutas.sort().reverse();
let o13 = document.getElementById("o13");
if (o13) {
  o13.textContent = "Frutas decrescentes: " + frutas.join(", ");
}

let estados = ["GO", "MG", "SP", "RJ", "AM", "PA"];
estados.sort();
let s14 = document.getElementById("s14");
if (s14) {
  s14.innerHTML = "";
  estados.forEach(est => {
    let opt = document.createElement("option");
    opt.value = est;
    opt.textContent = est;
    s14.appendChild(opt);
  });
}

let diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
let c15 = document.getElementById("c15");
if (c15) {
  c15.innerHTML = "";
  diasSemana.forEach((dia, idx) => {
    let div = document.createElement("div");
    let label = document.createElement("label");
    label.textContent = dia;
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Compromisso";
    input.id = "comp15_" + idx;
    div.appendChild(label);
    div.appendChild(input);
    c15.appendChild(div);
  });
}

const b15 = document.getElementById("b15");
if (b15) {
  b15.addEventListener("click", () => {
    let o15 = document.getElementById("o15");
    let html = "<ul class='lista'>";
    diasSemana.forEach((dia, idx) => {
      let val = document.getElementById("comp15_" + idx).value;
      html += "<li><strong>" + dia + "</strong>: " + (val ? val : "Nenhum compromisso") + "</li>";
    });
    html += "</ul>";
    o15.innerHTML = html;
  });
}

const b16 = document.getElementById("b16");
if (b16) {
  b16.addEventListener("click", () => {
    let c16 = document.getElementById("c16");
    if (c16) {
      let div = document.createElement("div");
      div.className = "quadrado";
      c16.appendChild(div);
    }
  });
}

const b17 = document.getElementById("b17");
if (b17) {
  b17.addEventListener("click", () => {
    let c17 = document.getElementById("c17");
    if (c17) {
      let div = document.createElement("div");
      div.className = "quadrado";
      div.style.background = "red";
      div.addEventListener("mouseover", () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        div.style.background = "rgb(" + r + "," + g + "," + b + ")";
      });
      c17.appendChild(div);
    }
  });
}

let nomes18 = ["Diego", "Gabriel", "Lucas"];
let u18 = document.getElementById("u18");
if (u18) {
  u18.innerHTML = "";
  nomes18.forEach(nome => {
    let li = document.createElement("li");
    li.textContent = nome;
    u18.appendChild(li);
  });
}

function adicionar() {
  let input = document.getElementById("nome19");
  let u19 = document.getElementById("u19");
  if (input && u19 && input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    u19.appendChild(li);
    input.value = "";
  }
}

let botoesCor = document.querySelectorAll(".cor20");
botoesCor.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = btn.getAttribute("data-cor");
  });
});

let linksCor = document.querySelectorAll(".link21");
linksCor.forEach(link => {
  link.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = link.getAttribute("data-cor");
  });
  link.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "";
  });
});

let s22 = document.getElementById("s22");
if (s22) {
  s22.addEventListener("change", () => {
    document.body.style.backgroundColor = s22.value;
  });
}

const b23 = document.getElementById("b23");
if (b23) {
  b23.addEventListener("click", () => {
    let p23 = document.getElementById("p23");
    if (p23) {
      p23.hidden = !p23.hidden;
    }
  });
}

const f24 = document.getElementById("f24");
if (f24) {
  f24.addEventListener("submit", (e) => {
    e.preventDefault();
    let login = document.getElementById("login24").value;
    let senha = document.getElementById("senha24").value;
    let conf = document.getElementById("conf24").value;
    let m24 = document.getElementById("m24");
    if (!login || !senha || !conf) {
      m24.className = "saida msg-erro";
      m24.textContent = "Todos os campos são obrigatórios.";
      return;
    }
    if (senha.length < 6 || senha.length > 10) {
      m24.className = "saida msg-erro";
      m24.textContent = "A senha deve ter entre 6 e 10 caracteres.";
      return;
    }
    if (senha !== conf) {
      m24.className = "saida msg-erro";
      m24.textContent = "As senhas não coincidem.";
      return;
    }
    m24.className = "saida msg-ok";
    m24.textContent = "Cadastro realizado com sucesso!";
  });
}

const f25 = document.getElementById("f25");
if (f25) {
  f25.addEventListener("submit", (e) => {
    e.preventDefault();
    let val = document.getElementById("p25").value.trim().toLowerCase();
    let m25 = document.getElementById("m25");
    if (!val) {
      m25.textContent = "Digite uma palavra.";
      return;
    }
    let inv = val.split("").reverse().join("");
    if (val === inv) {
      m25.className = "saida msg-ok";
      m25.textContent = "É um palíndromo!";
    } else {
      m25.className = "saida msg-erro";
      m25.textContent = "Não é um palíndromo.";
    }
  });
}

const b26 = document.getElementById("b26");
if (b26) {
  b26.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".nome26");
    let arr = [];
    inputs.forEach(el => arr.push(el.value));
    arr.reverse();
    inputs.forEach((el, idx) => el.value = arr[idx]);
  });
}

const pf27 = document.getElementById("pf27");
const pj27 = document.getElementById("pj27");
const cpf27 = document.getElementById("cpf27");
const cnpj27 = document.getElementById("cnpj27");
const nasc27 = document.getElementById("nasc27");

if (pf27 && pj27) {
  pf27.addEventListener("change", () => {
    if (pf27.checked) {
      cpf27.disabled = false;
      nasc27.disabled = false;
      cnpj27.disabled = true;
      cnpj27.value = "";
    }
  });
  pj27.addEventListener("change", () => {
    if (pj27.checked) {
      cnpj27.disabled = false;
      cpf27.disabled = true;
      nasc27.disabled = true;
      cpf27.value = "";
      nasc27.value = "";
    }
  });
}

const f27 = document.getElementById("f27");
if (f27) {
  f27.addEventListener("submit", (e) => {
    e.preventDefault();
    let m27 = document.getElementById("m27");
    m27.className = "saida msg-ok";
    m27.textContent = "Cliente cadastrado com sucesso!";
  });
}

const b28 = document.getElementById("b28");
if (b28) {
  b28.addEventListener("click", () => {
    let p1 = document.getElementById("p28a").value;
    let p2 = document.getElementById("p28b").value;
    let r28 = document.getElementById("r28");
    let res = "";
    let max = Math.max(p1.length, p2.length);
    for (let i = 0; i < max; i++) {
      if (i < p1.length) res += p1[i];
      if (i < p2.length) res += p2[i];
    }
    r28.value = res;
  });
}

const b29 = document.getElementById("b29");
if (b29) {
  b29.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("n29a").value);
    let n2 = parseFloat(document.getElementById("n29b").value);
    let n3 = parseFloat(document.getElementById("n29c").value);
    let o29 = document.getElementById("o29");
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      o29.textContent = "Preencha todos os três números.";
      return;
    }
    let soma = n1 + n2 + n3;
    let media = soma / 3;
    let produto = n1 * n2 * n3;
    let maior = Math.max(n1, n2, n3);
    let menor = Math.min(n1, n2, n3);
    o29.innerHTML = `<table class="tabela">
      <thead><tr><th>Operação / Métrica</th><th>Resultado</th></tr></thead>
      <tbody>
        <tr><th>Números</th><td>${n1}, ${n2}, ${n3}</td></tr>
        <tr><th>Soma</th><td>${soma}</td></tr>
        <tr><th>Média</th><td>${media}</td></tr>
        <tr><th>Produto</th><td>${produto}</td></tr>
        <tr><th>Maior</th><td>${maior}</td></tr>
        <tr><th>Menor</th><td>${menor}</td></tr>
      </tbody>
    </table>`;
  });
}

const f30 = document.getElementById("f30");
if (f30) {
  f30.addEventListener("submit", (e) => {
    e.preventDefault();
    let q = document.getElementById("q30").value.trim();
    let m30 = document.getElementById("m30");
    let t30 = document.getElementById("t30");
    let textoOriginal = "A programação para a web reúne HTML, CSS e JavaScript. O HTML define a estrutura da página, o CSS cuida da aparência e o JavaScript adiciona comportamento. Quem aprende programação aprende também a resolver problemas, e cada problema resolvido torna a próxima programação mais simples. Com prática, o JavaScript deixa de parecer difícil e passa a ser uma ferramenta natural para criar páginas interativas.";
    if (!q) {
      m30.textContent = "Digite uma palavra para pesquisar.";
      return;
    }
    let regex = new RegExp("(" + q + ")", "gi");
    let matches = textoOriginal.match(regex);
    let qtd = matches ? matches.length : 0;
    m30.textContent = "A palavra foi encontrada " + qtd + " vez(es).";
    t30.innerHTML = textoOriginal.replace(regex, '<span class="destaque">$1</span>');
  });
}

const b31 = document.getElementById("b31");
if (b31) {
  b31.addEventListener("click", () => {
    let m = parseInt(document.getElementById("m31").value);
    let n = parseInt(document.getElementById("n31").value);
    let g31 = document.getElementById("g31");
    let v31 = document.getElementById("v31");
    g31.innerHTML = "";
    v31.innerHTML = "";
    if (isNaN(m) || isNaN(n) || m < 1 || n < 1) return;
    g31.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    let total = m * n;
    for (let i = 1; i <= total; i++) {
      let img = document.createElement("img");
      img.src = "https://picsum.photos/seed/" + i + "/300/200";
      img.className = "miniatura";
      img.addEventListener("click", () => {
        v31.innerHTML = `<img src="https://picsum.photos/seed/${i}/600/400" alt="Imagem ampliada">`;
      });
      g31.appendChild(img);
    }
  });
}