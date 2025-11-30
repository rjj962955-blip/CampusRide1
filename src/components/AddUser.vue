<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

// متغيرات مرتبطة بالحقول
const name = ref("");
const email = ref("");
const phone = ref("");

// رسائل حالة
const success = ref("");
const error = ref("");

// دالة إضافة مستخدم
async function addUser() {
  success.value = "";
  error.value = "";
  try {
    await addDoc(collection(db, "users"), {
      name: name.value,
      email: email.value,
      phone: phone.value
    });
    success.value = "User added successfully!";
    // تفريغ الحقول بعد الحفظ
    name.value = "";
    email.value = "";
    phone.value = "";
  } catch (e) {
    error.value = "Failed to add user.";
    console.error(e);
  }
}
</script>

<template>
  <div style="max-width: 500px; margin: 0 auto;">
    <h2>Add User</h2>
    <div>
      <input v-model="name" placeholder="Name" class="form-control mb-2" />
      <input v-model="email" placeholder="Email" class="form-control mb-2" />
      <input v-model="phone" placeholder="Phone" class="form-control mb-2" />
      <button @click="addUser" class="btn btn-primary w-100">Save</button>
    </div>
    <p v-if="success" class="text-success mt-2">{{ success }}</p>
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
  </div>
</template>

<style>
.form-control {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
}
.btn {
  padding: 10px;
}
</style>