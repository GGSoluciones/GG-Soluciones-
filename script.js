// Datos de productos
const productos = {
    organizacion: [
      { nombre: "Organizadores de cables", precio: "$10.00", imagen: "img/organizador-cables.jpg" },
      { nombre: "Soportes para teléfonos y tablets", precio: "$15.00", imagen: "img/soporte-tablet.jpg" },
      { nombre: "Ganchos y perchas", precio: "$8.00", imagen: "img/ganchos.jpg" },
      { nombre: "Cajas y contenedores", precio: "$12.00", imagen: "img/cajas.jpg" },
      { nombre: "Organizadores de escritorio", precio: "$20.00", imagen: "img/organizador-escritorio.jpg" },
      { nombre: "Porta-recetas", precio: "$5.00", imagen: "img/porta-recetas.jpg" },
      { nombre: "Tapas personalizadas", precio: "$7.00", imagen: "img/tapas.jpg" },
      { nombre: "Soportes para estantes", precio: "$18.00", imagen: "img/soporte-estantes.jpg" },
      { nombre: "Cubre esquinas", precio: "$6.00", imagen: "img/cubre-esquinas.jpg" },
      { nombre: "Soportes para puertas", precio: "$25.00", imagen: "img/soporte-puertas.jpg" },
      { nombre: "Percheros y colgadores", precio: "$10.00", imagen: "img/percheros.jpg" },
      { nombre: "Organizadores de juguetes", precio: "$15.00", imagen: "img/organizador-juguetes.jpg" },
      { nombre: "Soportes para libros", precio: "$12.00", imagen: "img/soporte-libros.jpg" },
      { nombre: "Soportes para routers y dispositivos", precio: "$10.00", imagen: "img/soporte-routers.jpg" },
      { nombre: "Soportes para monitores", precio: "$20.00", imagen: "img/soporte-monitores.jpg" },
      { nombre: "Carcasas y fundas para teléfono", precio: "$8.00", imagen: "img/carcasas.jpg" },
      { nombre: "Soportes para cámaras", precio: "$15.00", imagen: "img/soporte-camaras.jpg" },
      { nombre: "Cubre-llaves", precio: "$5.00", imagen: "img/cubre-llaves.jpg" },
    ],
    cocina: [
      { nombre: "Agarraderas para ollas y sartenes", precio: "$10.00", imagen: "img/agarraderas.jpg" },
      { nombre: "Soportes para cuchillos", precio: "$12.00", imagen: "img/soporte-cuchillos.jpg" },
      { nombre: "Espátulas y cucharas", precio: "$8.00", imagen: "img/espatulas.jpg" },
    ],
    herramientas: [
      { nombre: "Llaves y destornilladores", precio: "$15.00", imagen: "img/llaves.jpg" },
      { nombre: "Soportes para herramientas", precio: "$20.00", imagen: "img/soporte-herramientas.jpg" },
      { nombre: "Niveles de burbuja", precio: "$10.00", imagen: "img/niveles.jpg" },
      { nombre: "Pinzas y alicates", precio: "$12.00", imagen: "img/pinzas.jpg" },
      { nombre: "Soportes para taladros", precio: "$18.00", imagen: "img/soporte-taladros.jpg" },
      { nombre: "Parches y refuerzos", precio: "$5.00", imagen: "img/parches.jpg" },
      { nombre: "Juntas y arandelas", precio: "$7.00", imagen: "img/juntas.jpg" },
    ],
    decoracion: [
      { nombre: "Marcos de fotos", precio: "$10.00", imagen: "img/marcos.jpg" },
      { nombre: "Macetas", precio: "$15.00", imagen: "img/macetas.jpg" },
      { nombre: "Lámparas y pantallas", precio: "$20.00", imagen: "img/lamparas.jpg" },
      { nombre: "Estatuillas y figuras decorativas", precio: "$25.00", imagen: "img/estatuillas.jpg" },
    ],
    jardineria: [
      { nombre: "Soportes para plantas", precio: "$12.00", imagen: "img/soporte-plantas.jpg" },
      { nombre: "Etiquetas para plantas", precio: "$5.00", imagen: "img/etiquetas.jpg" },
      { nombre: "Regaderas pequeñas", precio: "$10.00", imagen: "img/regaderas.jpg" },
      { nombre: "Herramientas de jardinería", precio: "$15.00", imagen: "img/herramientas-jardin.jpg" },
      { nombre: "Soportes para mangueras", precio: "$8.00", imagen: "img/soporte-mangueras.jpg" },
    ],
    mascotas: [
      { nombre: "Juguetes", precio: "$10.00", imagen: "img/juguetes.jpg" },
      { nombre: "Comederos y bebederos", precio: "$12.00", imagen: "img/comederos.jpg" },
      { nombre: "Camas pequeñas para mascotas", precio: "$20.00", imagen: "img/camas-mascotas.jpg" },
    ],
    seguridad: [
      { nombre: "Candados y cerraduras", precio: "$15.00", imagen: "img/candados.jpg" },
      { nombre: "Soportes para cámaras de seguridad", precio: "$25.00", imagen: "img/soporte-camaras-seguridad.jpg" },
      { nombre: "Soportes para extintores", precio: "$20.00", imagen: "img/soporte-extintores.jpg" },
      { nombre: "Protecciones para esquinas", precio: "$10.00", imagen: "img/protecciones-esquinas.jpg" },
    ],
    tecnologia: [
      { nombre: "Ventiladores y disipadores de calor", precio: "$15.00", imagen: "img/ventiladores.jpg" },
      { nombre: "Soportes para cámaras", precio: "$12.00", imagen: "img/soporte-camaras.jpg" },
    ],
  };
  
  // Función para cargar productos
  function cargarProductos(categoria) {
    const contenedorProductos = document.querySelector(".productos");
    contenedorProductos.innerHTML = ""; // Limpiar contenedor
  
    productos[categoria].forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.className = "producto";
      divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button class="btn">Comprar</button>
      `;
      contenedorProductos.appendChild(divProducto);
    });
  }
  
  // Cargar productos iniciales
  cargarProductos("organizacion");
  
  // Eventos para botones de categoría
  document.querySelectorAll(".btn-categoria").forEach(boton => {
    boton.addEventListener("click", () => {
      document.querySelectorAll(".btn-categoria").forEach(b => b.classList.remove("active"));
      boton.classList.add("active");
      const categoria = boton.getAttribute("data-categoria");
      cargarProductos(categoria);
    });
  });
  
  // Evento para el formulario de contacto
  document.getElementById("form-contacto").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
  });