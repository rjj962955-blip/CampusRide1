<template>
  <div class="login-container">
    <!-- الجزء الأزرق الترحيبي -->
    <div class="login-left">
      <h2>Welcome back!</h2>
      <p>your campus ride starts here.</p>
    </div>

    <!-- الجزء الخاص بالفورم -->
    <div class="login-right">
      <form class="login-form" @submit.prevent="goToHome">
        <h3>Log in</h3>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" placeholder="Enter your email" />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" class="form-control" placeholder="Enter your password" />
        </div>

        <div class="form-check mb-3">
          <input type="checkbox" id="remember" class="form-check-input" />
          <label for="remember" class="form-check-label">Remember Me</label>
        </div>

        <div class="mb-3 text-end">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" class="btn btn-primary">Log In</button>

        <div class="links mt-3">
          <span>or <a href="#">sign up</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.login-left {
  flex: 1;
  background-color: #0d6efd;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
}

.login-left h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.login-left p {
  font-size: 18px;
}

.login-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.login-form {
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.login-form h3 {
  margin-bottom: 20px;
  font-weight: 600;
  color: #343a40;
}

.form-check {
  margin-bottom: 15px;
}

.login-form .btn {
  width: 100%;
}

.login-form .links {
  margin-top: 10px;
  text-align: center;
}
</style>