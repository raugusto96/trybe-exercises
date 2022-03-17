def print_three(number):
  stars = 1
  while stars < number + 1:
    lines = '*' * stars;
    print(f'{lines}')
    stars += 1

print_three(5)