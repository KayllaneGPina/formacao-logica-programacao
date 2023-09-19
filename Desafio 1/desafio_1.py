nome_heroi = input("Digite o nome do seu herói: ")
qtd_experincia = int(input("Digite a quantide de experiência do seu herói: "))


if qtd_experincia <= 1000:
    nivel = "Ferro"
elif qtd_experincia >= 1001 and qtd_experincia <= 2000:
    nivel = "Bronze"
elif qtd_experincia >= 2001 and qtd_experincia <= 5000:
    nivel = "Prata"
elif qtd_experincia >= 6001 and qtd_experincia <= 7000:
    nivel = "Ouro"
elif qtd_experincia >= 7001 and qtd_experincia <= 8000:
    nivel = "Platina"
elif qtd_experincia >= 8001 and qtd_experincia <= 9000:
    nivel = "Ascendente"
elif qtd_experincia >= 9001 and qtd_experincia <= 10000:
    nivel = "Imortal"
elif qtd_experincia > 10001:
    nivel = "Radiante"
    
print(f'O Herói de nome {nome_heroi} está no nível de {nivel}')