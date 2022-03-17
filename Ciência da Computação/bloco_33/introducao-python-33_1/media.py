def media(array):
  total = 0
  for item in array:
    total += item
  return total / len(array);

print(media([1, 2, 3, 4, 5]))