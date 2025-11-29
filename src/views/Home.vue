<template>
  <div class="home-page">
    <!-- رأس الصفحة -->
    <header class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <h2 class="navbar-brand">CampusRide.</h2>
      <nav class="ms-auto">
        <ul class="navbar-nav flex-row gap-3">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><router-link class="nav-link" to="/create">Create Ride</router-link></li>
          <router-link class="nav-link" to="/find">Find Ride</router-link>
          <router-link class="btn btn-primary" to="/profile">Profile</router-link>
          <li class="nav-item"><a class="nav-link text-danger" href="#">Log Out</a></li>
        </ul>
      </nav>
    </header>

    <!-- المحتوى الرئيسي -->
    <div class="main-content container mt-5">
      <div class="row align-items-center">
        <!-- النص الترحيبي -->
        <div class="col-md-6">
          <h1>Welcome to CampusRide!</h1>
          <h4 class="text-muted">Student Ride-Sharing Platform for Imam University</h4>
          <p class="mt-3">
            CampusRide helps Imam University students connect, coordinate, and share rides easily and safely.<br />
            From carpooling to class, to sharing costs with verified students, we make every trip simpler and smarter.
          </p>
          <button class="btn btn-primary mt-3">Start Your Campus Ride Today!</button>
        </div>

        <!-- صورة رمزية (تقدرين تضيفين صورة لاحقًا) -->
        <div class="col-md-6 text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/296/296216.png" alt="Ride illustration" class="img-fluid" style="max-height: 300px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-page {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.navbar-brand {
  font-weight: bold;
  color: #0d6efd;
}

.nav-link {
  font-weight: 500;
  color: #343a40;
}

.nav-link:hover {
  color: #0d6efd;
}

.main-content h1 {
  color: #0d6efd;
  font-size: 36px;
}

.main-content h4 {
  font-size: 20px;
}

.main-content p {
  font-size: 16px;
  line-height: 1.6;
}
</style>