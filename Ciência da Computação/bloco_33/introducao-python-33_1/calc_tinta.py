import math

def calc_tinta(m2):
  coverage = m2 / 3
  can = 18
  price = 80.00
  qtd = math.ceil(coverage / can)
  total = qtd * price
  return qtd, total

print(calc_tinta(100))
