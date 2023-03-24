<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <NavBar />
  <div class="table  bg-black text-light text-center">
    <div class="bg">
      <div class="container align-content-center">
        <div class="card">
          <img src="https://i.postimg.cc/3xSBCR3D/Tech-Analysis4-Apple.png" class="stockinfo">
          <div class="btn-group">
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Ls9FSfd9/apple.jpg" class="stocklogo">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/XNrTZr6m/icons8-favourites-66.png" class="love">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Kj5vVfrq/icons8-stock-64.png" class="cart">
            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/tRYv2JDb/Tech-Analysis4-Google.png" class="stockinfo">
          <div class="btn-group">
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/bY4JPzzG/google.jpg" class="stocklogo">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/XNrTZr6m/icons8-favourites-66.png" class="love">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Kj5vVfrq/icons8-stock-64.png" class="cart">
            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/CLKhvjX1/Tech-Analysis4-Msft.png" class="stockinfo">
          <div class="btn-group">
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/PxydwjZj/MSFT.jpg" class="stocklogo">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/XNrTZr6m/icons8-favourites-66.png" class="love">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Kj5vVfrq/icons8-stock-64.png" class="cart">
            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/vTZ4LC58/Tech-Analysis4-Tesla.png" class="stockinfo">
          <div class="btn-group">
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/brBX8NXm/tesla.jpg" class="stocklogo">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/XNrTZr6m/icons8-favourites-66.png" class="love">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Kj5vVfrq/icons8-stock-64.png" class="cart">
            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/MHHyKnPY/Tech-Analysis4-Amazon.png" class="stockinfo">
          <div class="btn-group">
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/DZ6xs2gn/AMZN.jpg" class="stocklogo">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/XNrTZr6m/icons8-favourites-66.png" class="love">
            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Kj5vVfrq/icons8-stock-64.png" class="cart">
            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/2jdp4V55/Tech-Analysis4-Netflix.png" class="stockinfo">
          <div class="btn-group">
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/76psNBzZ/netflixlogo.jpg" class="stocklogo">

            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/XNrTZr6m/icons8-favourites-66.png" class="love">

            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Kj5vVfrq/icons8-stock-64.png" class="cart">

            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/yN6hrpm5/Tech-Analysis4-Disney.png" class="stockinfo">
          <div class="btn-group">
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/ydyD477y/disneylogo.jpg" class="stocklogo">

            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/XNrTZr6m/icons8-favourites-66.png" class="love">

            </div>
            <div class="btn btn-secondary bg-black">
              <img src="https://i.postimg.cc/Kj5vVfrq/icons8-stock-64.png" class="cart">
            </div>
          </div>
        </div>
      </div>
    </div>


    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/ydSff6wL/applegraph.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/qvvH1nQQ/googlegraph.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src=" https://i.postimg.cc/fLbySNzC/microsoftgraph.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style>
.bg {
  background-color: black;
}

.container {
  background-color: black;
  margin-left: 0%;
  margin-right: 0%;
  height: 300px;
  width: auto;
  display: flex;
}

.card {
  background-color: #000;
  display: flex;
  height: 280px;
  width: 200px;
  border-radius: 20px;
  /* box-shadow: -1rem 0 2rem whitesmoke; */
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.card:not(:first-child) {
  margin-left: -50px;
}

.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover~.card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

.btn-group {
  height: 49px;
}


.stocklogo {
  height: 100%;
}

.love {
  height: 40px;
}

.cart {
  height: 40px;
}

.d-block {
  height: 350px;
}</style>
