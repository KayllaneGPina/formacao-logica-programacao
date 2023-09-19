def partidas_rankeadas(qtd_vitorias, qtd_derrotas):
    saldoVitoria = qtd_vitorias - qtd_derrotas
    return saldoVitoria

def calculo_nivel(qtd_vitorias):
    if qtd_vitorias <= 10:   
        nivel = "Ferro"
    elif qtd_vitorias >= 11 and qtd_vitorias <= 20:
        nivel = "Bronze"
    elif qtd_vitorias >= 21 and qtd_vitorias <= 50:
        nivel = "Prata"
    elif qtd_vitorias >= 51 and qtd_vitorias <= 80:
        nivel = "Ouro"
    elif qtd_vitorias >= 81 and qtd_vitorias <= 90:
        nivel = "Diamante"
    elif qtd_vitorias >= 91 and qtd_vitorias <= 100:
        nivel = "Lendário"
    elif qtd_vitorias >= 101:
        nivel = "Imortal"
    
    return nivel
    

vitorias = int(input("Quantidade de vitórias: "))
derrotas = int(input("Quantidade de derrotas: "))
saldoVitorias = partidas_rankeadas(vitorias, derrotas)
nivel = calculo_nivel(vitorias)
print(f'O Herói tem saldo de {saldoVitorias} está no nível de {nivel}')