import { AppState } from "../AppState.js"

export class SnacksController {
    constructor() {
        console.log('From the SnacksController')
        this.drawSnacks()
}
    drawSnacks(){
        const snacks = AppState.snacks
        // ✅ console.log('Drawing the snacks', snacks)
        let innerHTMLString = ''
        snacks.forEach((snack) => innerHTMLString += snack.catalogHTMLTemplate)
        const snacksCatalog = document.getElementById('snacksCatalog')
        snacksCatalog.innerHTML = innerHTMLString
    }

}
