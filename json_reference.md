# Formato JSON Casacor

## Template

```javascript
{
    "pia1":int,
    "pia2":int,
    "pia3":int,
    "pia4":int,

    "vaso1":int,
    "vaso2":int,
    "vaso3":int,

    "livre1":bool,
    "livre2":bool,
    "livre3":bool,

    "energia":int,
    "pessoas":int,

    "temperatura":int,
    "umidade":int,
    "iaq":int,
    "iaq_class":int
}
```

- __pia[1..4]__: Consumo de água, em litros, de cada pia. Inteiro não-negativo de 1 a 4 algarismos (0 a 9 999).
- __vaso[1..3]__:  Consumo de água, em litros, de cada vaso. Inteiro não-negativo de 1 a 4 algarismos (0 a 9 999).
- __livre[1..3]__:  Indicador de presença de cada cabine. Booleano, verdadeiro caso cabine livre.
- __energia__: Consumo de energia elétrica, em kWh, de todo o banheiro. Interio não-negativo de 1 a 3 algarismos (0 a 999).
- __pessoas__: Quantidade de pessoas que entraram e saíram do banheiro.
- __temperatura__: Temperatura do ambiente, em graus Celsius. Inteiro não negativo de 2 algarismos (15 a 30).
- __umidade__: Umidade relativa do ar, em porcentagem. Inteiro não negativo de 2 algarismos (10 a 99).
- __iqa__: Índice de qualidade do ar, adimensional. Inteiro não-negativo de 1 a 3 algarismos (1 a 200).
- __iqa_class__: Classificação da qualidade do ar. Inteiro de 1 a 5:
    - 1 - Boa
    - 2 - Moderada
    - 3 - Ruim
    - 4 - Muito ruim
    - 5 - Péssima

__Nota:__ Os tamanhos dos inteiros uint8 = unsigned int 8 bits

## Exemplo

```javascript
{
    "pia1": 18,
    "pia2": 26,
    "pia3": 96,
    "pia4": 123,

    "vaso1": 12,
    "vaso2": 96,
    "vaso3": 30,

    "livre1": false,
    "livre2": true,
    "livre3": false,

    "energia": 68,
    "pessoas": 85,

    "temperatura": 18,
    "umidade": 12,
    "iaq": 50,
    "iaq_class": 1
}
```