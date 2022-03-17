def biggest_name(names):
  biggest = names[0]
  for name in names:
    if len(name) > len(biggest):
      biggest = name
  return biggest

print(biggest_name(['Rodrigo', 'Carol', 'Leticia']))