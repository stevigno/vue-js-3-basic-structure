<script setup>
import BaseInputVue from '../components/BaseInput.vue';
import { reactive } from 'vue';

const form = reactive({
  email:'',
  password:'',
})
</script>

<template>
    <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src="@/assets/static/logo.svg" height="36" alt=""></a>
        </div>
        <form class="card card-md" action="." method="get">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Connexion</h2>
            
            <div class="mb-3">
              <BaseInputVue
              v-model="form.email"
              label="Email"
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
              <button type="submit" class="btn btn-primary w-100">Connexion</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          Pas encore de compte? <router-link to="/register">Inscription</router-link>
        </div>
      </div>
    </div>
</template>