<script setup>
import BaseInputVue from '@/components/BaseInput.vue';
import axios from 'axios';
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email:'',
  password:'',
})

const submit = async () => {
  console.log(form);
  await axios.get('/sanctum/csrf-cookie');

  await axios.post('/register', form)
  .then(res =>{
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
}
</script>

<template>
    <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src="@/assets/static/logo.svg" height="36" alt=""></a>
        </div>
        <form @submit.prevent="submit" class="card card-md" action="/register" method="get">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Create new account</h2>
            <div class="mb-3">
              <BaseInputVue
              v-model="form.name"
              label="Name"
              type="text"
              />
            </div>
            <div class="mb-3">
              <BaseInputVue
              v-model="form.email"
              label="Email Adresse"
              type="email"
              />
             
            </div>
            <div class="mb-3">
              <BaseInputVue
              v-model="form.password"
              label="Password"
              type="password"
              />
            </div>
            
            <div class="form-footer">
              <button type="submit" class="btn btn-primary w-100">Create new account</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          Déja un compte ? <router-link to="/login">Inscription</router-link>
        </div>
      </div>
    </div>
</template>