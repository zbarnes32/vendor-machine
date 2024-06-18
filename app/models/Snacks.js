export class Snack {
    constructor(snackName, snackPrice, snackImage){
        this.name = snackName
        this.price = snackPrice
        this.image = snackImage
    }

    get catalogHTMLTemplate() {
        return `
        <div class="col-12 col-md-3">
        <div class="card" style="width: 18rem;" role="button">
          <img src="${this.image}" class="card-img-top img-style" alt="Image of ${this.name}"">
          <div class="card-body">
            <p class="card-text fw-bold text-center">${this.name}</p>
            <p class="card-text">Price: $${this.price}</p>
          </div>
        </div>
      </div>
      `
    }
}