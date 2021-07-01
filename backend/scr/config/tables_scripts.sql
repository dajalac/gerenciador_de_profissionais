
CREATE TABLE profissoes (  
	id serial PRIMARY KEY,
	descricao varchar(50) NOT NULL,
	situacao boolean NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP NOT NULL 
);

CREATE TABLE profissionais (
	id serial PRIMARY KEY,
	nome varchar(50) NOT NULL,
	telefone varchar(50),
	email text,
	tipoDeProfissao BIGINT NOT NULL,
	situacao BOOLEAN NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP NOT NULL,
	CONSTRAINT fk_profissao
		FOREIGN KEY(tipoDeProfissao)REFERENCES profissoes(id)
)
