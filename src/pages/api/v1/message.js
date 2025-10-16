export async function POST({request}) {
    const body = await request.json()
    const {name,text} = body
    
    if (!name || !text) {
        return new Response(
            JSON.stringify({
                error: 'Faltan campos obligatorios'
            }),
            {
                headers: {'Content-Type':'application/jason'},
                status: 400
            }
        )
    }

    return new Response(
        JSON.stringify({
            message: 'Informacion guardada correctamente'
        }),
        {
            headers: {'Content-Type':'application/json'}
        }

    )
}