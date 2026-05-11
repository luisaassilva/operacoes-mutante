const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });

  //=== Testes novos feitos===
   test('51. raizQuadrada lança erro para número negativo', () => {expect(() => raizQuadrada(-1)).toThrow();});
  // fatorial: matar mutante que remove o guard de número negativo (linha 18)
  test('52. fatorial lança erro para número negativo', () => {expect(() => fatorial(-1)).toThrow();});

  // mediaArray: matar mutante que remove o retorno 0 para array vazio (linha 25)
  test('53. mediaArray retorna 0 para array vazio', () => {expect(mediaArray([])).toBe(0);});

  // maximoArray: matar mutante que remove o guard de array vazio (linha 34)
  test('54. maximoArray lança erro para array vazio', () => {expect(() => maximoArray([])).toThrow();});

  // minimoArray: matar mutante que remove o guard de array vazio (linha 38)
  test('55. minimoArray lança erro para array vazio', () => {expect(() => minimoArray([])).toThrow();});

  // isPar: matar mutante que força retorno true sempre (linha 43)
  test('56. isPar retorna false para número ímpar', () => {expect(isPar(3)).toBe(false);});

  // isImpar: matar mutante que força retorno true sempre e troca % por * (linha 44)
  test('57. isImpar retorna false para número par', () => {expect(isImpar(4)).toBe(false);});

  // isPrimo: matar mutantes que removem a verificação de n<=1 e o loop (linhas 73-75)
  test('58. isPrimo retorna false para n=1 e n=0', () => {expect(isPrimo(1)).toBe(false);expect(isPrimo(0)).toBe(false);});
  test('59. isPrimo retorna false para número composto', () => {expect(isPrimo(4)).toBe(false);expect(isPrimo(9)).toBe(false);});

  // clamp: matar mutantes que removem os guards de min e max (linhas 88-89)
  test('60. clamp retorna min quando valor é menor que o mínimo', () => {expect(clamp(-5, 0, 10)).toBe(0);});
  test('61. clamp retorna max quando valor é maior que o máximo', () => {expect(clamp(15, 0, 10)).toBe(10);});

  // isDivisivel: matar mutante que força retorno true sempre (linha 92)
  test('62. isDivisivel retorna false quando não é divisível', () => {expect(isDivisivel(10, 3)).toBe(false);});

  // celsiusParaFahrenheit: matar mutantes aritméticos (linha 93)
  test('63. celsiusParaFahrenheit converte 100°C para 212°F', () => {expect(celsiusParaFahrenheit(100)).toBe(212);});

  // fahrenheitParaCelsius: matar mutantes aritméticos (linha 94)
  test('64. fahrenheitParaCelsius converte 212°F para 100°C', () => {expect(fahrenheitParaCelsius(212)).toBe(100);});

  // inverso: matar mutante que remove o guard de zero (linha 96)
  test('65. inverso lança erro para zero', () => {expect(() => inverso(0)).toThrow();});

  // isMaiorQue: matar mutante que força true e troca > por >= (linha 104)
  test('66. isMaiorQue retorna false quando não é maior', () => {expect(isMaiorQue(5, 10)).toBe(false);});
  test('67. isMaiorQue retorna false para valores iguais', () => {expect(isMaiorQue(5, 5)).toBe(false);});

  // isMenorQue: matar mutante que força true (linha 105)
  test('68. isMenorQue retorna false quando não é menor', () => {expect(isMenorQue(10, 5)).toBe(false);});
  test('69. isMenorQue retorna false para valores iguais', () => {expect(isMenorQue(5, 5)).toBe(false);});

  // isEqual: matar mutante que força true (linha 106)
  test('70. isEqual retorna false para números diferentes', () => {expect(isEqual(7, 8)).toBe(false);});

  // medianaArray: matar mutantes de array vazio, sort e cálculo par/ímpar (linhas 108-111)
  test('71. medianaArray lança erro para array vazio', () => {expect(() => medianaArray([])).toThrow();});
  test('72. medianaArray ordena o array antes de calcular (detecta remoção do sort)', () => {expect(medianaArray([5, 1, 3])).toBe(3);});
  test('73. medianaArray calcula corretamente para array de tamanho par', () => {expect(medianaArray([1, 2, 3, 4])).toBe(2.5);});
});

describe('Testes de Mensagem de Erro e Limites (Matar StringLiteral e EqualityOperator)', () => {
  // Mata mutantes StringLiteral que trocam a mensagem por ""
  // Para matar: o teste verifica que a mensagem contém o texto esperado
  test('74. divisao lança erro com mensagem correta', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero');
  });

  test('75. raizQuadrada lança erro com mensagem correta para negativo', () => {
    expect(() => raizQuadrada(-1)).toThrow('raiz quadrada');
  });

  test('76. fatorial lança erro com mensagem correta para negativo', () => {
    expect(() => fatorial(-1)).toThrow('negativos');
  });

  test('77. maximoArray lança erro com mensagem correta para array vazio', () => {
    expect(() => maximoArray([])).toThrow('Array vazio');
  });

  test('78. minimoArray lança erro com mensagem correta para array vazio', () => {
    expect(() => minimoArray([])).toThrow('Array vazio');
  });

  test('79. inverso lança erro com mensagem correta para zero', () => {
    expect(() => inverso(0)).toThrow('inverter');
  });

  test('80. medianaArray lança erro com mensagem correta para array vazio', () => {
    expect(() => medianaArray([])).toThrow('mediana');
  });

  // Mata mutantes EqualityOperator que trocam < por <= nas linhas 13 e 18
  // Com <= 0, raizQuadrada(0) e fatorial(0) jogariam erro indevidamente
  test('81. raizQuadrada retorna 0 para entrada 0 (sem lançar erro)', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  test('82. fatorial retorna 1 para entrada 0 (sem lançar erro)', () => {
    expect(fatorial(0)).toBe(1);
  });
});
