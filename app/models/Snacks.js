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
          <img src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="Test Image One">
          <div class="card-body">
            <p class="card-text fw-bold text-center">Test One</p>
            <p class="card-text">Price: $9.99</p>
          </div>
        </div>
      </div>
      `
    }
}