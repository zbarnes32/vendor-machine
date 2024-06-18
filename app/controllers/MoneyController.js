import { moneyService } from "../services/MoneyService.js";

export class MoneyController {
    constructor() {
        // ✅ console.log('From the MoneyController')
    

    }

    addMoney() {
       // ✅ console.log("Money? For me?")
       moneyService.addMoney()
    }
}