# Coding pratice: Escrevendo as classes de um jogo

## Objetivo:
Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes porpriedades:
1. Nome
2. Idade
3. Classe (guerreiro, Mago, monge, ninja)

Além disso, deve ter um método chamado "atacar" ou "atack" (inglês) que deve atender os seguintes requisitos:

- Exibir a mensagem: "o {tipo} atacou usando {ataque}"
- Onde o {tipo} deve ser concatenando o tipo que está na propriedade da classe;
- E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

Mago: no ataque exibir "usou magia"
Guerreiro: no ataque exibir "usou espada"
Monje: no ataque exibir "usou artes marciais"
Ninja: no ataque exibir "usou shuriken"


## Saída:
Ao final deve exibir uma mensagem:
- "o {tipo} atacou usando {ataque}" | Exemplo: "O mago atacou usando magia"
