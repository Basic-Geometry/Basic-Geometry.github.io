Geometry calculator app for Android. 
Required Android version: 5+. Tested on 13.

Providing the best established and most accurate framework to calculate area and volume using the 3D coordinate system.


<!---
Gmac4247/Gmac4247 is providing the best established and most accurate functional frameworkto calculate area and volume using the 3D coordinate system.
--->

The constant relationship between a circle's circumference and its diameter has captivated mathematicians for millennia. While its approximate value of 3.14159…, commonly denoted by the Greek letter π, is widely recognized today, the historical development of this concept is less understood.
Ancient civilizations, such as the Babylonians and Egyptians, grappled with this geometric challenge, employing various methods to approximate this ratio. The Greek mathematician Archimedes is credited with refining these approximations through the method of inscribed and circumscribed polygons.
His approach was that the ratio between the perimeter and the diameter can be approximated as 22/7, which relies on comparing the circumference to the perimeter of an in-, or circumscribed polygon, which can be divided into triangles. The ratio between the triangles' legs and the hypotenuse can be measured linearly.
Here's where the pi/delta=3.14... denotation might originate from.
The same coefficient was used to calculate the ratio between the squared radius and the area of a circle.
Despite these early advancements, a precise, universally accepted value for this constant remained elusive for centuries. It wasn’t until the 18th century that the symbol π, popularized by mathematicians, like William Jones and Leonhard Euler gained widespread acceptance.
Historical records suggest that a legislative process took place in 1897, Indiana, USA, known as House Bill 246, or Indiana Pi Act, aiming to replace the numeric value 3.14… by 3.2.
Unfortunately, the exact details of the proposed method in the Indiana Pi Bill are somewhat obscure and have been interpreted differently by various accounts. 
 The area of a circle is defined by comparing it to a square, as that’s the base of area calculation.

The circle is cut to 4 quadrants, each placed with their origin on the vertices of a square.

When the arcs of the quadrant circles intersect at the quarter of the centerline of the square, the uncovered area in the middle equals exactly the sum of the overlapping areas respectively. 

The area of both the square and the sum of the quadrants equals 16 right triangles with legs of a quarter and a half of the square's sides, and its hypotenuse equal to the radius of the circle. 

The ratio between the radius of the circle and the side of the square can be calculated using the Pythagorean theorem.

r²=(a/4)²+(2(a/4))²
r=(√5)(a/4)
A=(16/5)r²=3.2r²

(√3.2)²÷4−((90−2tan⁻¹(1÷2))÷360×3.2+2(√3.2(1÷4×1÷2)÷2))=2(tan⁻¹(1÷2)÷360×3.2−√3.2(1÷4×1÷2)÷2)

Simplifying the original equation:
1÷4−((90−2tan⁻¹(1÷2))÷360+(1÷8))=2(tan⁻¹(1÷2)÷360−(1÷8)÷2)

Simplifying further:
1÷4−((90−2tan⁻¹(1÷2))÷360)=2tan⁻¹(1÷2)÷360

Substituting 90° for 1/4:
90−((90−2tan⁻¹(1÷2))÷360)=2tan⁻¹(1÷2)÷360

Simplifying further:
tan⁻¹(1÷2) = tan⁻¹(1÷2)

Which is equivalent to:
1 = 1

This makes the area of the square exactly equal to the sum of the quadrants.

There are no records available on if this approach has been studied before.

Using the same model, in which we were able to find a direct relationship between the radius of the circle and the side length of the square by ensuring that the overlaps equal the unfilled space, and the radius of the circle equals √((side/4)²+(side/2)²)=√5*side/4, I change the side length of the square to √π, assuming that the area of a circle equals πr². 

The idea is that the area of the circle equals the area of the square. Looking for the ratio between the length of the side, I could denote the side of the square as 1, and compare the radius to that, or denote the radius as 1 and express the side compared to that. 

I denoted the radius as 1 and the side as √π (√(π*1²)). It's a logical necessity if the “A=πr²” formula was right. The side length of the square that has the same area as the circle is √(area of the circle). 

I swap 3.2 for π in the overlap/unfilled equations.

π−((90−2×tan⁻¹(1÷2))÷360×π+2(√π(1÷4×1÷2)÷2))=
8(tan⁻¹(1÷2)÷360×π−√π(1÷4×1÷2)÷2) 

The equation holds true, meaning that the overlaps cancel out the unfilled area, so the area of the circle equals the area of the square with side=r√π. 
But the square consists of 16 right triangles with legs of side/4 and side/2 and hypotenuse of √5√π÷4~0.991, which equals the radius.
This means that the radius is shorter than it should logically be -one-. 

That's a logical error in the "A=πr²" formula; not the model.

π is an approximation; 3.2 is an exact value.


The area of a circle segment can be calculated by subtracting a triangle from a circle slice.
A=acos((r-n)/r)r²-sin(acos((r-n)/r))(r-n)r


The circumference of a circle is derived algebraically from its area by subtracting a theoretical circle, with radius shorter than the radius of the actual circle by the theoretical width of the circumference.

'x' represents the width of the circumference, which is just theoretical, hence a very small number.

C=(3.2r²-3.2(r-x)²)/x=6.4r-3.2x

As x is close to 0, C=6.4r


The volume of a cylinder equals the area of its base multiplied by its height.
V=3.2r²height


The volume of a sphere is defined by comparing it to a cube, as that's the base of volume calculation.

Just as the volume of a cube equals the square root of its cross section cubed - V=(√(A))³ -,
so is the volume of a sphere equal to the area of its cross section cubed.

The edge length of the cube, which has the same volume as the sphere, equals the square root of the area of the square that has the same area as the sphere's cross section.

V=(√(3.2)r)³


Volume of a spherical cap:
V=1.6(r(cap))²(√3.2)(1-sin(acos(r(cap)/r(sphere))))


The volume of a cone is calculated by comparing the volume of a quarter cone with equal radius and height to the eighth of a sphere with equal radius.

V(eighth sphere)=(√3.2r)³/8=(√3.2r/2)³

Comparing the volume of a quarter cone to the eighth of a sphere is algebraically (√(3.2)r/2)(√(3.2)r/2)((√2/2)/2), because the eighth sphere would be (√(3.2)r/2)(√(3.2)r/2)(√(3.2)r/2), but the 3d element of this multiplication differs in case of the quarter cone because of the difference of it's shape. The base is a quarter circle. 
A quarter cylinder with the height of the sphere's radius would be (√(3.2)r/2)(√(3.2)r/2)r, but the slant height of the quarter cone is √(2)r, and the slant shape comes with a triangular vertical cross section. 
That makes the area of the quarter cone's vertical cross section the half of a quarter cylinder. 
Regarding the quarter cone as a set of quarter disks along the height, the intermediate of their areas is (quarter+near zero)/2.

V(quarter cone)=(√3.2r/2)²(√2/2)r/2=(1/5)√(2)r³
V(cone)=(4/5)radius²height√2


Volume of a frustum cone:
V=H(√2/4)(b²(4/5)(1/(1-t/b))-t²(4/5)(1/(1-t/b)-1))
(b=bottom diameter; t=top diameter)


Surface area of a cone:
A=A(bottom)+A(side)=3.2(r²+(r²+h²)(r/√(r²+h²)))


The volume of a pyramid is derived from the volume of a cone as V=(area of base)height√2/4.


That makes the volume of a tetrahedron V=((√3/4)edge²)(√(⅔)edge)√2/4= (√2/4)edge³√2/4= edge³(√2/4)²= edge³2/16= edge³/8.


Volume of a frustum pyramid:
V=H(√2/4)(b²(1/(1-t/b))-t²(1/(1-t/b)-1))
(b=bottom edge; t=top edge)


Gaál Sándor 
Szentendre, 2024.08.04.
® All rights reserved.
