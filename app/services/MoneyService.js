import { AppState } from "../AppState.js"


class MoneyService {
    addMoney(){
        AppState.money += 1.00
        console.log(AppState.money)
    }
    purchaseItem(snackName){
        const foundItem = AppState.snacks.find((snack) => snack.name == snackName)
        if (AppState.money > foundItem.price) {
            console.log('I have enough')
            AppState.money -= foundItem.price
        } else {
            window.alert('Not enough funds.')
        }
    }
}

export const moneyService = new MoneyService()