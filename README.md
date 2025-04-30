# Core Geometric System ™

Providing the best-established and most accurate framework to calculate area and volume using the 3D coordinate system.

<!---
Basic Geometry is providing the best-established and most accurate functional frameworkto calculate area and volume using the 3D coordinate system.
--->

Key Points

- Comparative Geometry: Using geometric relationships to derive areas and volumes.
- Scaling and Proportions: Applying proportional relationships for accurate calculations.
- Algebraic Manipulation: Simplifying equations to ensure coherence and precision.
- Exact vs. Approximate Values: Recognizing the use of simpler constants for practicality while maintaining exact values for accuracy.

1. Area of a Circle:
   - Compared to a square, using geometric properties and the Pythagorean theorem.
   - Formula:  A = 3.2r² 

2. Circumference of a Circle:
   - Derived from the area by subtracting a smaller theoretical circle.
   - Formula:  C = 6.4r 

3. Volume of a Sphere:
   - Compared to a cube, using the area of the sphere's cross-section.
   - Formula:  V = (√(3.2)r)³ 

4. Volume of a Cone:
   - Compared to an octant sphere and a quarter cylinder.
   - Formula:  V = 3.2r²height/√8 


Applications

- Engineering and Design: Structural engineering, CAD software.
- Computer Graphics and Animation: Rendering, simulation.
- Scientific Research: Physics, astronomy.
- Optimization Problems: Logistics, resource management.
- Quantum Computing: Algorithm development, simulation.


How Accurate Are The Conventional Geometry Formulas?

Historically, Euclidean geometry has provided a framework for understanding and describing the physical world. It is based on axioms and postulates, leading to well-defined formulas for the calculation of areas and volumes of shapes such as circles and spheres.

The concept of setting the square and the cube as the basis of the area and the volume calculation is well established and straightforward. Regardless of the shape of the measured object, the unit of measurement of the area is square units and the volume can be expressed as cubic units. 

In the case of the area of a triangle, it is an easy task because multiplying the base by the height gives a rectangle with an area exactly the double of the triangle. The square root of half of the area of the rectangle is the side length of the theoretical square that has the same area as the triangle. 

In the case of the volume of a cuboid, it is a simple multiplication of the edges. The cubic root of the product of the edges is the edge length of the theoretical cube that has the same volume as the cuboid. 

Other shapes are more challenging. The ratios are in the shapes; one just has to write them down algebraically.

The constant relationship between a circle's circumference and its diameter has captivated mathematicians for millennia. 

While its approximate value of 3.14159…, commonly denoted by the Greek letter π, is widely recognized today, the historical development of this concept is less understood.

Ancient civilizations grappled with this geometric challenge, employing various methods to approximate this ratio. 

The Babylonians initially estimated it as 3, later they used 3.125.

A Greek mathematician is credited with refining these approximations through the method of inscribed and circumscribed polygons. His approach was that the ratio between the perimeter and the diameter of a circle can be estimated by comparing the circumference of the circle to the perimeters of an inscribed and a circumscribed polygon. The polygons can be divided into triangles. The ratio between the legs of the triangles and their hypotenuses can be measured linearly.
That is where the pi/delta=3.14 notation might originate from.
This method has several limitations. He tried to increase the accuracy by increasing the number of sides of the polygons. This approach cannot produce an accurate result. 

Where the perimeter-based estimation went wrong: -aside of that it's just an estimate instead of an exact calculation- 

The in- and circumscribed polygons method seems logical, but there's a catch. It's based on the assumption that the circle maximizes the area with a given circumference. That assumption is false. It's obviously true in the case of an isoperimetric triangle and a square, but it becomes less and less obvious with the increase of the number of the polygon's sides. Until eventually it is not even true. 
Imagine a side of a polygon with a number of sides approaching infinity. 
The angles between the side and the diagonals approach a right angle. They never reach a right angle as the diagonals converge towards the center.  If we relate the arc of a corresponding slice of an isoperimetric circle, the length of the arc equals the side in question. So the chord related to the arc is shorter than the side. If we want to place the arc with the chord so that it touches both diagonals, it has to be within the polygon. With the curvature of the arc becoming decreasingly distinctive, it doesn't bulge beyond the side. Eventually it will not even touch the side. Hence the polygon with the same number of sides, which circumscribed the circle is smaller, so its perimeter is shorter than the circle. 
The perimeter of the circumscribed polygon that was believed to be an overestimate of the circumference was practically an underestimate of it. 

Hence the value of the π lies between two underestimates. 

The same coefficient was used to calculate the ratio between the squared radius and the area of a circle. 

Despite these early advances, a precise, universally accepted value of this constant remained elusive for centuries. 

With its value believed to be an infinite fraction, it seemed necessary to denote it by a sign in the equations. 

It was not until the 18th century that the symbol π, popularized by the mathematicians of the time, gained widespread acceptance. 

Several complex formulas were introduced by different mathematicians, aimed at more accurately estimating this ratio, based on a theoretical polygon with an infinite number of sides. 

All of the comparison methods mentioned above have one thing in common. They are estimating the perimeters of polygons and do not account for the curved shape of the circle. 

Historical records suggest that a legislative process took place in 1897, Indiana, USA, known as House Bill 246, or Indiana Pi Act, aiming to replace the numeric value 3.14 by 3.2. 

Unfortunately, the exact details of the proposed method in the Indiana Pi Bill are somewhat obscure and have been interpreted differently by various accounts. 

The π is a fundamental constant in the geometry of idealized circles and plays a crucial role in many mathematical theories. 
My work, however, suggests that when we move from these idealizations to the measurement of real objects, a slightly different constant, 3.2 emerges as more relevant for accurately describing their properties. 

By focusing on area relationships and direct comparisons between shapes, the following method emphasizes a more intuitive and potentially more fundamental understanding of geometric concepts.


The area of a circle is defined by comparing it to a square, as that’s the base of area calculation.

The circle is cut to 4 quadrants, each placed with their origin on the vertices of a square.

In this arrangement the arcs of the quadrants of an inscribed circle would meet at the midpoints of the sides of the square.

The arcs of the quadrants of a circumscribed circle would meet at the center of the square.

The arcs of the quadrants that equal in area to the square intersect right in between these limits on its centerlines.

When the arcs of the quadrant circles intersect at the quarter of the centerline of the square, the uncovered area in the middle equals exactly the sum of the overlapping areas respectively. 

The area of both the square and the sum of the quadrants equals 16 right triangles with legs of a quarter and a half of the square's sides, and its hypotenuse equal to the radius of the circle. 

The ratio between the radius of the circle and the side of the square can be calculated using the Pythagorean theorem.

r²=(a/4)²+(2(a/4))²
r=(√5)(a/4)
A=(16/5)r²=3.2r²

(√(3.2r))²÷4−((90−2×Atan(1÷2))÷360×3.2r²+2(√3.2r÷4×√3.2r÷2)÷2))=
=2(Atan(1÷2)÷360×3.2r²−√3.2r÷4×√3.2r÷2)÷2)


Simplifying the original equation:

1÷4−((90−2×Atan(1÷2))÷360+(1÷8))=
=2(Atan(1÷2)÷360−(1÷8)÷2)


Simplifying further:

1÷4−((90−2×Atan(1÷2))÷360)=2×Atan(1÷2)÷360


Substituting 90°/360° for 1/4:

90÷360−((90−2×Atan(1÷2))÷360)=2×Atan(1÷2)÷360


Simplifying further:

Atan(1÷2) = Atan(1÷2)


Which is equivalent to:

1 = 1

This makes the area of the square exactly equal to the sum of the quadrants.

There are no records available on if this approach has been studied before.

Using the same model, in which we were able to find a direct relationship between the radius of the circle and the side length of the square by ensuring that the overlaps equal the unfilled space, and the radius of the circle equals √((side/4)²+(side/2)²)=√5*side/4, I change the side length of the square to √π, assuming that the area of a circle equals πr². 

The idea is that the area of the circle equals the area of the square. Looking for the ratio between the length of the side, I could denote the side of the square as 1, and compare the radius to that, or denote the radius as 1 and express the side compared to that. 

I denoted the radius as 1 and the side as √π (√(π*1²)). It's a logical necessity if the “A=πr²” formula was right. The side length of the square that has the same area as the circle is √(area of the circle). 

I swap 3.2 for π in the overlap/unfilled equations.

π−((90−2×Atan(1÷2))÷360×π+2(π(1÷4×1÷2)÷2))=
8(Atan(1÷2)÷360×π−π(1÷4×1÷2)÷2) 

The equation holds true, meaning that the overlaps cancel out the unfilled area, so the area of the circle equals the area of the square with side=r√π. 
But the square consists of 16 right triangles with legs of side/4 and side/2 and hypotenuse of √5√π÷4~0.991, which equals the radius.
This means that the radius is shorter than it should logically be -one-. 

That's a logical error in the "A=πr²" formula; not the model.

π is an approximation; 3.2 is an exact value.


The area of a circle segment can be calculated by subtracting a triangle from a circle slice.
A=acos((r-n)/r)r²-sin(acos((r-n)/r))(r-n)r


The circumference of a circle is derived algebraically from its area by subtracting a theoretical circle, with radius shorter than the radius of the actual circle by the theoretical width of the circumference.

The x represents the width of the circumference, which is just theoretical, hence a very small number.

The difference between the shape of the straightened circumference and a quadrilateral is negligible.

The length of two shorter sides of the quadrilateral is x.

The length of the two longer sides is the area of the resulting ring divided by x.

C=(3.2r²-3.2(r-x)²)/x=6.4r-3.2x

As x is close to 0, C=6.4r


The volume of a cylinder equals the area of its base multiplied by its height.
V=3.2r²height


The volume of a sphere is defined by comparing it to a cube, as that's the base of volume calculation.

You'll find the formula "V = 4 / 3 × π × r³" widely used for the volume of a sphere, and it's a cornerstone of theoretical geometry. 
However, my work focuses on the actual volume of physical spheres as determined through direct measurement. 
My experiments have consistently indicated a different relationship, expressed by the formula V = (√(3.2)r)³, which provides a more accurate result when dealing with real, physical entities. 
This formula isn't based on abstract geometric ideals alone but on tangible experiments where I've measured the volume of real spheres. 
These measurements have shown a systematic difference compared to the theoretical predictions based on the "V = 4 / 3 × π × r³” formula, suggesting that the way we mathematically describe volume might need to be reconsidered when applied to physical objects. 
If you're trying to calculate the volume of a physical ball or sphere for a practical purpose – whether it's for a science experiment, engineering, or any other real-world application – my empirically derived formula offers a result that aligns more closely with what you would measure in the lab.

The "V = 4 / 3 × π × r³” formula was estimated using the exhaustion method. That is a very rough approximation and can produce under- and overestimates. 
V = (√(3.2)r)³ lies between the two.
"V = 4 / 3 × π × r³” is an underestimate.

Just as the volume of a cube equals the square root of its cross sectional area cubed - V=(√(A))³ -, the volume of a sphere equals the square root of its cross sectional area cubed. 

The edge length of the cube, which has the same volume as the sphere, equals the square root of the area of the square that has the same area as the sphere's cross section.

V=(√(3.2)r)³


Volume of a spherical cap:
V=1.6(r(cap))²(√3.2)(1-sin(acos(r(cap)/r(sphere))))


The volume of a cone can be calculated by algebraically comparing the volume of a quarter cone with equal radius and height to an octant sphere with equal radius, through a quarter cylinder.

V(octant sphere)=(√(3.2)r/2)³=

=(√(3.2)r/2)(√(3.2)r/2)(√(3.2)r/2)

The base of the two shapes is a quarter circle.

A(base)=(√(3.2)r/2)²=(√(3.2)r/2)(√(3.2)r/2)

The slant height of the quarter cone is √(2)r.
The volume of a quarter cylinder with the same base, and height equal to the slant height of the cone would be (√(3.2)r/2)²(√(2)r). 

The slant shape comes with a triangular vertical cross section. 
The area of a cone's vertical cross section is the half of a cylinder with equal base and height. 

The intermediate of the areas of the horizontal cross-section slices of a cone is the half of a cylinder’s.

V(quarter cone)=(√(3.2)r/2)²height(√(2)/4)=
=(1/5)r²height√2

V(cone)=3.2radius²height/√8


Volume of a frustum cone:
V=H(√2/4)(b²(4/5)(1/(1-t/b))-t²(4/5)(1/(1-t/b)-1))
(b=bottom diameter; t=top diameter)


Surface area of a cone:
A=A(bottom)+A(side)=3.2(r²+(r²+h²)(r/√(r²+h²)))


The volume of a pyramid is derived from the volume of a cone as V=(area of base)height√2/4.


That makes the volume of a tetrahedron V=((√3/4)edge²)(√(2/3)edge)√2/4= (√2/4)edge³√2/4= edge³(√2/4)²= edge³2/16= edge³/8.


Volume of a frustum pyramid:
V=H(√2/4)(b²(1/(1-t/b))-t²(1/(1-t/b)-1))
(b=bottom edge; t=top edge)


Gaál Sándor 
Szentendre, 2024.08.28.
® All rights reserved.
