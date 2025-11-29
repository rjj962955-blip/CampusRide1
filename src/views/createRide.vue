<template>
  <div class="container mt-5">
    <!-- العنوان والشعار -->
    <div class="text-center mb-4">
      <h2 class="text-primary">CampusRide.</h2>
      <p class="lead">Student Ride-Sharing platform</p>
    </div>

    <!-- شريط التنقل -->
    <nav class="nav justify-content-center mb-4">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/create">Create Ride</router-link>
      <router-link class="nav-link" to="/find">Find Ride</router-link>
      <router-link class="nav-link" to="/profile">Profile</router-link>
      <router-link class="nav-link text-danger" to="/login">Log Out</router-link>
    </nav>

    <!-- الشعار الداخلي -->
    <div class="text-center mb-4">
      <h4>Plan your next campus ride easily</h4>
      <p>Fill in your ride details below to share your trip with other Imam University students</p>
    </div>

    <!-- نموذج الرحلة -->
    <form @submit.prevent="postRide" class="bg-light p-4 rounded shadow-sm">
      <div class="mb-3">
        <label for="dropoff" class="form-label">Drop-off Location</label>
        <input type="text" id="dropoff" v-model="ride.dropoff" class="form-control" placeholder="King Fahd National Library" required />
      </div>

      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="datetime-local" id="date" v-model="ride.date" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="seats" class="form-label">Available Seats</label>
        <input type="number" id="seats" v-model="ride.seats" class="form-control" min="1" required />
      </div>

      <!-- الأزرار -->
      <div class="d-flex justify-content-end gap-3">
        <button type="submit" class="btn btn-success">Post Ride</button>
        <button type="button" class="btn btn-secondary" @click="cancelRide">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateRide',
  data() {
    return {
      ride: {
        dropoff: '',
        date: '',
        seats: 1
      }
    }
  },
  methods: {
    postRide() {
      console.log('Ride posted:', this.ride)
      alert('Ride posted successfully!')
      this.$router.push('/find')
    },
    cancelRide() {
      this.ride = { dropoff: '', date: '', seats: 1 }
    }
  }
}
</script>

<style scoped>
.nav-link {
  font-weight: bold;
  color: #007bff;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>