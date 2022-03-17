def lowest(numbers):
  lowest = numbers[0]
  for number in numbers:
    if number < lowest:
      lowest = number
  return lowest

print(lowest([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))