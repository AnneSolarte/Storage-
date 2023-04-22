export async function traer_cards() {
    try{
        const characters = await fetch("https://api.disneyapi.dev/character").then(res =>
        res.json())
        console.log(characters)
        return characters
    }
    catch (error){
        console.log(error)
    }

}
