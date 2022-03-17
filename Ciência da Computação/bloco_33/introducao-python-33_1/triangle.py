def type_triangle(side1, side2, side3):
  is_triangle = (
    side1 + side2 > side3 and
    side2 + side3 > side1 and
    side1 + side3 > side2
  )
  if not is_triangle:
    return 'não é triangulo'
  elif side1 == side2 == side3:
    return 'equilátero'
  elif side1 == side2 or side2 == side3 or side1 == side3:
    return 'isósceles'
  else:
    return 'escaleno'

print(type_triangle(4, 4, 4))
print(type_triangle(4, 3, 4))
print(type_triangle(5, 3, 4))
print(type_triangle(0, 3, 4))