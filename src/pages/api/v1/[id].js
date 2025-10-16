export async function GET({ params }) {
  // Simulamos "base de datos"
  let users = [
    { id: "1", name: "Ana" },
    { id: "2", name: "Luis" },
    { id: "3", name: "Sofía" },
  ];

  const { id } = params; // <--- capturamos el ID de la URL

  // Buscar usuario
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return new Response(
      JSON.stringify({ message: `Usuario con id ${id} no encontrado` }),
      { status: 404 }
    );
  }

  // Eliminar usuario
  users.splice(userIndex, 1);

  return new Response(
    JSON.stringify({ message: `Usuario con id ${id} eliminado`, users }),
    { status: 200 }
  );
}
