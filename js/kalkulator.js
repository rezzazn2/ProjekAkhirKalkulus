 // Tunggu hingga halaman sepenuhnya dimuat sebelum menjalankan kode
 window.onload = function() {
    const form = document.getElementById('quadraticForm');
    const calculator = Desmos.GraphingCalculator(document.getElementById('calculator'));
    const potongX =document.getElementById('potong-x');
    const potongY =document.getElementById('potong-y');
    const d =document.getElementById('d');
    const ekstrim =document.getElementById('ekstrim');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        // Mengatur grafik fungsi kuadrat
        const equation = `${a}x^2 + ${b}x + ${c}`;
        calculator.setExpression({ id: 'quadratic', latex: equation });

        // Menghitung Diskriminan
        const discriminant = b * b - 4 * a * c;

        // Titik Ekstrim (puncak parabola)
        const vertexX = -b / (2 * a);
        const vertexY = a * vertexX * vertexX + b * vertexX + c;
        const strim = `${vertexX}/${vertexY}`;

        // Titik Potong Sumbu Y
        const yIntercept = c;

        // Titik Potong Sumbu X (akar-akar persamaan kuadrat)
        let xIntercepts = '';
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            xIntercepts = `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            xIntercepts = `x = ${x.toFixed(2)}`;
        } else {
            xIntercepts = 'Tidak ada (akar imajiner)';
        }

        potongX.innerHTML = xIntercepts;
        potongY.innerHTML = yIntercept;
        d.innerHTML = discriminant;
        ekstrim.innerHTML = strim;

    });
};