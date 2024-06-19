import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";

export class MoneyController {
    constructor() {
        // ✅ console.log('From the MoneyController')
        this.drawMoney()
    

    }

    addMoney() {
       // ✅ console.log("Money? For me?")
       moneyService.addMoney()
       this.drawMoney()
    }

    //Add purchaseItem()
    purchaseItem(snackName) {
        moneyService.purchaseItem(snackName)
        this.drawMoney()
    }

    drawMoney() {
        setText("currentFunds", AppState.money.toFixed(2))
    }
}