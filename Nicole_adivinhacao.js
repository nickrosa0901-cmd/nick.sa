
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

const numeroSecreto =
Math.floor(Math.random() * 101) + 100;

function perguntar() {
    rl.question('Tente adivinhar o numero (100 a 200): ', (resposta) => {
        const palpite = Number(resposta);

        if (palpite === numeroSecreto) {
            console.log('Acertou!');
            rl.close();
        } else if (palpite < numeroSecreto) {
            console.log('Muito baixo...');
            perguntar();
        } else {
            console.log('Muito alto...');
            perguntar();
        }
    });
}

console.log('=== Jogo de adivinhação ===');
perguntar();