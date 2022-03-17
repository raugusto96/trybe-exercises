def print_square(number):
  if number < 1:
    print('Insira um número maior que 1')
  lines = '*' * number
  print(number * f'{lines}\n')

print_square(0)