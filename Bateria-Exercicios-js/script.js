
        //  1 Crie duas variáveis com o valor 10 e 100. Mostre o valor da soma, subtração, divisão e multiplicação em um ALERT.
        let var1 = 10;
        let var2 = 100;

        alert('soma: ' + (var1 + var2));
        alert('subtração: ' + (var1 - var2));
        alert('multiplicação: ' + (var1 * var2));
        alert('divisão: ' + (var1 / var2));
        //  2 Crie um loop que mostre na tela o valor de 10 a 100.
        var div1 = document.getElementById("1");

        for(let i = 10; i <= 100; i++) {
            var p = document.createElement("p");
            var text = document.createTextNode(i);
            p.appendChild(text);
            
            div1.appendChild(p);
        }

        //  3 Crie uma variável que recebe o valor fixo 5. Mostre a tabuada desse número.
        var fixo = 5;

        var div2 = document.getElementById("2");

        for(let i = 0; i <= 10; i++) {
            var p = document.createElement("p");
            var text = document.createTextNode(fixo + ' * ' + i + ' = ' + (i * fixo));
            p.appendChild(text);
            
            div2.appendChild(p);
        }

        //  4 Adapte o exercício anterior para o valor não ser mais fixo. O valor deve ser recebido de um campo da tela.
        function calcular(event) {
            var div3 = document.getElementById("3");
            var num = document.getElementById('tabuada').value;
            var h1 = document.createElement("h1");
            var text = document.createTextNode("Tabuada do " + num + ": ");

            h1.appendChild(text);
            div3.appendChild(text);

            for(let i = 0; i <= 10; i++) {
                var p = document.createElement("p");
                var text = document.createTextNode(num + ' * ' + i + ' = ' + (i * num));
                p.appendChild(text);
            
                div3.appendChild(p);
            }
        }

        //  5 Fazer um calculadora que receberá dois valores e a operação (+,-,*,/). Ao clicar no botão calcular o resultado é demonstrado.
        function calcular2(event) {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var operacao = document.getElementById("operacao").value;
            var resultado = document.getElementById("resultado");

            console.log(resultado.value);
            switch(operacao) {
                case "+":
                    resultado.value = Number(num1) + Number(num2);
                    break;
                case "-":
                    resultado.value = Number(num1) - Number(num2);
                    break;
                case "*":
                    resultado.value = Number(num1) * Number(num2);
                    break;
                case "/":
                    resultado.value = Number(num1) / Number(num2);
                    break;
                default:
                    resultado.value = "Operação inválida";
                    break;
            }
        }

        //  6 Percorra o array [1,2,3,4,5,6,7,8,9,10] e exiba apenas os valores pares.
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var div5 = document.getElementById("5");

        array.forEach(item => {
            if(item % 2 === 0) {
                var p = document.createElement("p");
                var text = document.createTextNode(item);
                p.appendChild(text);
                div5.appendChild(p);
            }
        });

        /* 7
        O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:
        custo final = custo de fábrica + (custo de fábrica * percentual do distribuidor) + (custo de fábrica * percentual de impostos)

        O usuário terá uma tela para entrar com os valores:

        custo de fábrica => nome do input custoFabrica
        % distribuidor => nome do input percDistribuidor
        % impostos => nome do input percImpostos
        Valor final => nome do input valorfinal
        Deverá executar o cálculo e demonstrar o resultado no “valorfinal” quando clicar no botão “btncalcular”.
        */
       function calcular3() {
        var custoFabrica = Number(document.getElementById("custoFabrica").value);
        var percDistribuidor = Number(document.getElementById("percDistribuidor").value) * 0.01;
        var percImpostos = Number(document.getElementById("percImpostos").value) * 0.01;

        var valorFinal = document.getElementById("valorFinal");

        valorFinal.value = custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos);
        console.log(valorFinal.value);
       }
