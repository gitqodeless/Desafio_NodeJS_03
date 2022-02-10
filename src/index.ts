/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	const readline = require('readline-sync');

	let qntAlunos = parseInt(readline.question('Quantos alunos deseja informar? '))

	let maiorNota = 0;
	let nomeMaiorNota = '';

	for(let i = 0; i < qntAlunos; i++){
		let nome = readline.question('Informe o nome do aluno: ')
		let nota = parseInt(readline.question('Informe a nota do aluno: '))

		if(nota > maiorNota) {
			maiorNota = nota
			nomeMaiorNota = nome
		}
	}
	console.log(`A maior nota foi ${maiorNota}, do ubuntu ${nomeMaiorNota}`)
});
