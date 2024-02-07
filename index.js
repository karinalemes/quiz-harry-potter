const perguntas = [
    {
      pergunta: "Qual é o nome completo de Harry Potter?",
      respostas: [
        "Harry Albus Potter",
        "Harry James Potter",
        "Harry Sirius Potter",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a casa em Hogwarts que o Chapéu Seletor considerou enviar Harry Potter, antes de decidir pela Grifinória?",
      respostas: [
        "Sonserina",
        "Lufa-Lufa",
        "Corvinal",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do elfo doméstico que Harry liberta de sua família na casa dos Black?",
      respostas: [
        "Dobby",
        "Kreacher",
        "Winky",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o diretor da Escola de Magia e Bruxaria de Hogwarts no primeiro livro?",
      respostas: [
        "Alvo Dumbledore",
        "Severo Snape",
        "Minerva McGonagall",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma do Patrono de Harry Potter?",
      respostas: [
        "Veado",
        "Coruja",
        "Cervo",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a especialidade de Hermione Granger entre os bruxos?",
      respostas: [
        "Poções",
        "Transfiguração",
        "Feitiços",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a última Horcrux que Harry destrói?",
      respostas: [
        "A taça de Hufflepuff",
        "Nagini, a cobra de Voldemort",
        "O diário de Tom Riddle",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome verdadeiro de Lord Voldemort?",
      respostas: [
        "Tom Malfoy",
        "Tom Black",
        "Tom Riddle",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o animal de estimação de Neville Longbottom?",
      respostas: [
        "Sapo",
        "Rato",
        "Salamandra",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o professor de Defesa Contra as Artes das Trevas no segundo ano de Harry em Hogwarts?",
      respostas: [
        "Gilderoy Lockhart",
        "Severo Snape",
        "Remus Lupin",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let respostas of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(respostas)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add (item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }
  
  