<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">todolist.</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/login"
                >Giriş Yap</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/register"
                >Üye Ol</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link active" to="/contact"
                >İletişim</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
