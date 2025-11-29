<template>
  <div class="container mt-5">
    <!-- العنوان -->
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

    <!-- صفحة الملف الشخصي -->
    <div class="bg-light p-4 rounded shadow-sm">
      <h4 class="mb-3">Profile Page – CampusRide</h4>

      <!-- معلومات المستخدم -->
      <h5>Sarah Alomran</h5>
      <p class="text-muted">Student Rider – Imam University</p>
      <p>
        I’m a student at Imam Mohammad Ibn Saud University who uses CampusRide to commute safely and easily between classes.<br>
        I value verified rides, convenience, and connecting with other students for efficient campus travel.
      </p>

      <!-- إحصائيات الرحلات -->
      <h6 class="mt-4">Ride Statistics:</h6>
      <ul>
        <li>Rides Completed</li>
        <li>Active Rides</li>
        <li>Average Rating</li>
      </ul>

      <!-- معلومات التواصل -->
      <h6 class="mt-4">Contact Information:</h6>
      <ul>
        <li>✉ 445000664@sm.imamu.edu.sa</li>
        <li>📞 +966 501501787</li>
        <li>📍 Riyadh, Saudi Arabia</li>
      </ul>

      <!-- تفاصيل الحساب -->
      <h6 class="mt-4">Account Details:</h6>
      <ul>
        <li>Verified Student (University ID)</li>
        <li>Member Type: Rider</li>
        <li>Joined CampusRide: October 2025</li>
        <li>Default Location: College of Computer Science – Gate 8</li>
      </ul>

      <!-- الإنجازات -->
      <h6 class="mt-4">Achievements:</h6>
      <ul>
        <li>Completed verified rides on CampusRide.</li>
        <li>Always joined rides on time.</li>
        <li>Earned positive feedback from peers.</li>
        <li>Improved ride accuracy with verified locations.</li>
      </ul>

      <!-- الأزرار -->
      <div class="d-flex justify-content-end gap-3 mt-4">
        <button class="btn btn-outline-primary">Edit Profile</button>
        <button class="btn btn-outline-secondary">View My Rides</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
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