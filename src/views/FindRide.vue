<template>
  <div class="find-ride container mt-5">
    <!-- العنوان -->
    <div class="text-center mb-4">
      <h2 class="text-primary">Quick Ride Search</h2>
    </div>

    <!-- النموذج -->
    <form @submit.prevent="searchRide" class="bg-light p-4 rounded shadow-sm">
      <!-- Pickup -->
      <div class="mb-3">
        <label for="pickup" class="form-label">Pickup Location</label>
        <input type="text" id="pickup" v-model="ride.pickup" class="form-control" placeholder="Building 324, Gate 8 – Imam University" required />
      </div>

      <!-- Drop-off -->
      <div class="mb-3">
        <label for="dropoff" class="form-label">Drop-off Location</label>
        <input type="text" id="dropoff" v-model="ride.dropoff" class="form-control" placeholder="King Fahd National Library" required />
      </div>

      <!-- Date & Time -->
      <div class="mb-3">
        <label for="datetime" class="form-label">Date & Time</label>
        <input type="datetime-local" id="datetime" v-model="ride.datetime" class="form-control" required />
      </div>

      <!-- Seats -->
      <div class="mb-3">
        <label for="seats" class="form-label">Seats Needed</label>
        <input type="number" id="seats" v-model="ride.seats" class="form-control" min="1" required />
      </div>

      <!-- Gender -->
      <div class="mb-3">
        <label for="gender" class="form-label">Gender Preference</label>
        <select id="gender" v-model="ride.gender" class="form-select">
          <option value="">Any</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>

      <!-- Ride Type -->
      <div class="mb-3">
        <label for="type" class="form-label">Ride Type</label>
        <select id="type" v-model="ride.type" class="form-select">
          <option value="One-way">One-way</option>
          <option value="Round-trip">Round-trip</option>
        </select>
      </div>

      <!-- زر البحث -->
      <button type="submit" class="btn btn-primary w-100">Search Ride</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FindRide',
  data() {
    return {
      ride: {
        pickup: '',
        dropoff: '',
        datetime: '',
        seats: 1,
        gender: '',
        type: 'One-way'
      }
    }
  },
  methods: {
    searchRide() {
      console.log('Searching for ride:', this.ride)
      alert('Search submitted! (backend connection coming soon)')
    }
  }
}
</script>

<style scoped>
.find-ride {
  max-width: 600px;
}
</style>