export async function GET() {
    
    const msg = {
        hora: new Date().toLocaleTimeString(),
        text: 'La hora actual es: '
    }
    




    return new Response(
        JSON.stringify(msg),
        {
            headers:{'Content-Type':'application/json'},
            status: 200
        }
    )
}