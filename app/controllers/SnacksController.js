import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

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
       /* Replacing with SetHTML()
        const snacksCatalog = document.getElementById('snacksCatalog')
        snacksCatalog.innerHTML = innerHTMLString */
        setHTML('snacksCatalog', innerHTMLString)
    }

}
