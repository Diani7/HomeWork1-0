//Función que calcula el área de un triángulo
function calculateTriangleArea (base, height) {
    var area = (base * height) / 2 
    return area
}
var area1 = calculateTriangleArea (2, 4)
console.log(area1)

//Función que calcula el perímetro de un triángulo
function calculateTrianglePerimeter (sideA , sideB, sideC) {
    var perimeter = (sideA + sideB + sideC)
    return perimeter
}
var perimeter1 = calculateTrianglePerimeter (2, 2 , 2)
console.log(perimeter1)

//Función que calcula el perimetro de un poligono 
function calculatePolygonPerimeter (sideN, l) {
    var polygonPerimeter = sideN * l
    return polygonPerimeter
}
var polygonPerimeter = calculatePolygonPerimeter (8,4)
console.log(polygonPerimeter)

//Función que calcula el area de un poligono 
function calculatePolygonArea (p , a) {
    var polygonArea = (p * a) / 2
    return polygonArea
}
var polygonArea = calculatePolygonArea (8, 2)
console.log(polygonArea)
