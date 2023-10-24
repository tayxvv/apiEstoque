CREATE TABLE usuario (
	id_usuario serial4 NOT NULL,
	username text NOT NULL,
	email text not null,
	password_hash text NOT NULL,
	created_at timestamp default now(),
	CONSTRAINT pk_usuario PRIMARY KEY (id_usuario)
);

INSERT INTO tipo_conta
(nome)
VALUES('poupança');

CREATE TABLE tipo_conta (
	id_tipo_conta serial4 NOT NULL,
	nome text NOT NULL,
	CONSTRAINT pk_id_tipo_conta PRIMARY KEY (id_tipo_conta)
);

CREATE TABLE tipo_transacao(
	id_tipo_transacao serial4 NOT NULL,
	nome text NOT NULL,
	CONSTRAINT pk_id_tipo_transacao PRIMARY KEY (id_tipo_transacao)
);

INSERT INTO tipo_transacao
(nome)
VALUES('pix');

INSERT INTO tipo_transacao
(nome)
VALUES('cartão de crédito');

INSERT INTO tipo_transacao
(nome)
VALUES('cartão de débito');

CREATE TABLE tipo_categoria(
	id_tipo_categoria serial4 NOT NULL,
	nome text NOT NULL,
	CONSTRAINT pk_id_tipo_categoria PRIMARY KEY (id_tipo_categoria)
);

INSERT INTO tipo_categoria
(nome)
VALUES('lazer');
INSERT INTO tipo_categoria
(nome)
VALUES('alimentação');

CREATE TABLE conta_bancaria(
	id_conta serial4 NOT NULL,
	numero_conta text NOT NULL,
	saldo decimal,
	nome_conta text,
	id_tipo_conta int4 not null,
	id_usuario int4 not null,
	created_at date default now(),
	CONSTRAINT pk_id_conta PRIMARY KEY (id_conta)
);

ALTER TABLE conta_bancaria ADD CONSTRAINT fk_conta_bancaria_id_tipo_conta FOREIGN KEY (id_tipo_conta) REFERENCES tipo_conta(id_tipo_conta);

ALTER TABLE conta_bancaria ADD CONSTRAINT fk_conta_bancaria_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);

CREATE TABLE transacao_financeira(
	id_transacao serial4 NOT NULL,
	descricao text NOT NULL,
	valor decimal,
	created_at timestamp default now(),
	id_tipo_transacao int4 not null,
	id_tipo_categoria int4 not null,
	id_conta int4 not null,
	id_usuario int4 not null,
	CONSTRAINT pk_id_transacao PRIMARY KEY (id_transacao)
);

ALTER TABLE transacao_financeira ADD CONSTRAINT fk_transacao_financeira_id_tipo_transacao FOREIGN KEY (id_tipo_transacao) REFERENCES tipo_transacao(id_tipo_transacao);

ALTER TABLE transacao_financeira ADD CONSTRAINT fk_transacao_financeira_id_tipo_categoria FOREIGN KEY (id_tipo_categoria) REFERENCES tipo_categoria(id_tipo_categoria);

ALTER TABLE transacao_financeira ADD CONSTRAINT fk_transacao_financeira_id_conta FOREIGN KEY (id_conta) REFERENCES conta_bancaria(id_conta);

ALTER TABLE transacao_financeira ADD CONSTRAINT fk_transacao_financeira_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);
